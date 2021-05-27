import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { matchSorter } from 'match-sorter'
import styled, { css } from 'styled-components'
import { Helmet } from 'react-helmet'
import Loadable from '@loadable/component'
import { articles } from './_help-articles'
import { SearchSuccess, SearchError } from './_search-results'
// TODO: active this line after having mail service
import { convertToHash, euArticles, getAllArticles, splitArticles } from './_utility'
import { faq_schema } from './_faq-schema'
import { SEO, Show, Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, LocalizedLink, WithIntl, Localize } from 'components/localization'
import { getLocationHash, sanitize } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'
// Icons
import SearchIcon from 'images/svg/search.svg'
import CrossIcon from 'images/svg/cross.svg'
//Lazy-load
const DidntFindYourAnswerBanner = Loadable(() => import('./_didnt-find-answer'))
const Community = Loadable(() => import('./_community'))

const Backdrop = styled.div`
    padding: 8rem 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-8);

    @media ${device.tabletL} {
        padding: 8rem 0 4rem;
    }
`
const StyledContainer = styled.div`
    @media ${device.tabletL} {
        padding: 2rem 0 2rem 0;
    }
`
const SearchSection = styled.section`
    ${Backdrop} {
        max-height: ${(props) => (props.show ? '100rem' : '0')};
        transition: ${(props) => (props.has_transition ? 'max-height 0.6s ease-in-out' : 'none')};
        overflow: hidden;
    }
`

const SearchCrossIcon = styled.img`
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    top: 1.4rem;
    right: 2rem;

    :hover {
        cursor: pointer;
    }
`

const SearchForm = styled.form`
    position: relative;
    padding-left: 6.4rem;
    border: 1px solid var(--color-grey-17);
    border-radius: 4px;
    width: 99.6rem;
    height: 6.4rem;
    max-width: 99.6rem;

    @media ${device.Laptop} {
        width: 100%;

        svg {
            width: 2.5rem;
            height: 3.55rem;
        }
    }
`
const SearchIconBig = styled.img`
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    left: 2.4rem;
    top: 2rem;
`
const Search = styled.input`
    width: 95%;
    font-size: var(--text-size-m);
    font-weight: 500;
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    height: 6rem;

    ::placeholder {
        color: var(--color-grey-17);
    }
`

const ResultWrapper = styled.div`
    > :first-child {
        margin-top: 4rem;
        margin-bottom: 3.6rem;
    }
`

const ListWrapper = styled.div`
    margin-right: 2.4rem;
    max-width: 38.4rem;
    width: 38.4rem;
    line-height: 1.5;

    @media ${device.laptopL} {
        max-width: auto;
        width: auto;
    }
    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`

const ArticleSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 8rem;

    @media ${device.tabletL} {
        flex-wrap: wrap;
        padding: 0 0 8rem;
    }
`
const ListNoBullets = styled.ul`
    margin-bottom: 1.6rem;
    list-style: none;

    li {
        max-width: 38.4rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

const StyledHeader = styled(Header)`
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    ${({ row, col }) => {
        let margin_top = '4rem'

        switch (row) {
            case 0:
                margin_top = '8rem'
                break
            case 1:
                margin_top = col ? '7.2rem' : margin_top
                break
        }

        return css`
            margin-top: ${margin_top};
        `
    }};

    @media ${device.mobileL} {
        margin-top: 40px;
    }
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-black-3);
    font-size: 16px;

    :hover {
        color: red;
        text-decoration: underline;
    }
`

const StyledView = styled.div`
    text-decoration: none;
    color: var(--color-red);
    font-size: 16px;
    font-weight: normal;

    :hover {
        cursor: pointer;
    }
`

const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: ${(props) => props.wrap};

    @media ${device.tabletS} {
        flex-direction: column;
    }
`

const ArticleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ResponsiveHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: 4rem;
    }
`

const Platforms = styled(Text)`
    font-size: var(--text-size-s);
    color: var(--color-grey-5);
    margin: 4rem 0 -3.2rem;

    @media ${device.tablet} {
        color: var(--color-black-3);
        font-size: 24px;
        font-weight: bold;
        margin: 32px auto -32px;
    }
`
const HeaderPlatforms = styled.div`
    margin: 6.2rem 0 -3.2rem;

    @media ${device.tablet} {
        margin: 32px auto -32px;
    }
`

// Since useContext can only be used in functional components
// Wrap HelpCenter class component in a function plug in the context
// TODO - Refactor Help Center to function component and move this inside
const HelpCenter = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    return <HelpCentreClass is_eu_country={is_eu_country} />
}

class HelpCentreClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            all_articles: [],
            all_categories: {},
            search: '',
            search_has_transition: false,
            toggle_search: true,
        }
    }

    handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: `${sanitize(value)}` })
    }

    handleSubmit = (e) => e.preventDefault()

    toggleSearch = () =>
        this.setState((prevState) => ({
            toggle_search: !prevState.toggle_search,
            search_has_transition: true,
        }))

    clearSearch = () => this.setState({ search: '' })

    toggleArticle = (category) => {
        if (this.state.all_categories[category]) {
            const all_categories = { ...this.state.all_categories }
            all_categories[category].is_expanded = !all_categories[category].is_expanded
            this.setState({ all_categories })
        }
    }

    componentDidMount = () => {
        const current_label = getLocationHash()
        const deepClone = (arr) => {
            const out = []
            for (let i = 0, len = arr.length; i < len; i++) {
                const item = arr[i]
                const obj = {}
                for (var k in item) {
                    obj[k] = item[k]
                }
                out.push(obj)
            }
            return out
        }

        if (current_label) {
            this.setState({
                toggle_search: false,
                search_has_transition: false,
            })
        }
        const all_articles = getAllArticles(articles)

        const duplicate_articles = deepClone(all_articles)
        const translated_articles = duplicate_articles.map((article) => {
            article.title = article.title.props.translate_text
            article.sub_category = article.sub_category.props.translate_text
            return article
        })

        const all_categories = {}
        Object.keys(all_articles).forEach((article) => {
            all_categories[all_articles[article].category] = { is_expanded: false }
        })

        this.setState({
            all_categories,
            all_articles: translated_articles,
        })
    }

    render() {
        const {
            all_articles,
            all_categories,
            search,
            toggle_search,
            search_has_transition,
        } = this.state

        const filtered_articles = matchSorter(all_articles, search.trim(), {
            keys: ['title', 'sub_category'],
        })

        const splitted_articles = this.props.is_eu_country ? euArticles(splitArticles(articles, 3)): splitArticles(articles, 3)

        const has_results = !!filtered_articles.length

        return (
            <Layout>
                <SEO
                    title={localize('Help centre | Frequently asked questions | Deriv')}
                    description={localize(
                        'Need help? Have questions about Deriv services and online trading platforms? Read our FAQ or ask us a question.',
                    )}
                />
                <Helmet>
                    <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
                </Helmet>
                <SearchSection show={toggle_search} has_transition={search_has_transition}>
                    <Backdrop>
                        <Container align="left" justify="flex-start" direction="column">
                            <StyledContainer align="normal" direction="column">
                                <ResponsiveHeader as="h1" type="display-title" mb="4rem">
                                    {localize('How can we help?')}
                                </ResponsiveHeader>
                                <SearchForm onSubmit={this.handleSubmit}>
                                    <SearchIconBig src={SearchIcon} alt="search-icon" />
                                    <Search
                                        autoFocus
                                        name="search"
                                        value={search}
                                        onChange={this.handleInputChange}
                                        placeholder={localize('Try “Trade”')}
                                        data-lpignore="true"
                                        autoComplete="off"
                                    />
                                    {search.length > 0 && (
                                        <SearchCrossIcon
                                            src={CrossIcon}
                                            alt="cross icon"
                                            onClick={this.clearSearch}
                                        />
                                    )}
                                </SearchForm>
                                <ResultWrapper>
                                    {has_results && search.length > 0 && (
                                        <SearchSuccess
                                            suggested_topics={filtered_articles}
                                            max_length={3}
                                        />
                                    )}
                                    {!has_results && search.length && (
                                        <SearchError search={search} />
                                    )}
                                </ResultWrapper>
                            </StyledContainer>
                        </Container>
                    </Backdrop>
                </SearchSection>
                <Container align="left" justify="flex-start" direction="column">
                    <ArticleSection>
                        {splitted_articles.map((article, id) => {
                            const first_category = article[0]?.articles[0]?.category
                            return (
                                <RowDiv
                                    wrap={first_category === 'DBot' ? 'wrap' : 'nowrap'}
                                    key={id}
                                >
                                    {article.map((item, idx) => {
                                        if (
                                            this.props.is_eu_country &&
                                            item.category.props.translate_text === 'Deriv X'
                                        ) {
                                            return <React.Fragment key={idx}></React.Fragment>
                                        }

                                        return (
                                            <ArticleDiv key={idx}>
                                                {id === 1 && idx == 0 && (
                                                    <Platforms>Platforms</Platforms>
                                                )}
                                                {id === 1 && idx !== 0 && (
                                                    <HeaderPlatforms />
                                                )}
                                                
                                                <ListWrapper>
                                                    <StyledHeader
                                                        is_first_row={!!id}
                                                        type="section-title"
                                                    >
                                                        {item.category}
                                                    </StyledHeader>
                                                    {item.articles.map((ar, idxb) => {
                                                        const category_is_expanded =
                                                            ar.category in all_categories &&
                                                            all_categories[ar.category].is_expanded
                                                        const should_show_item =
                                                            idxb < 3 || category_is_expanded
                                                        const can_expand = item.articles.length > 3
                                                        const should_show_expand =
                                                            !category_is_expanded &&
                                                            can_expand &&
                                                            idxb === 3
                                                        const should_show_collapse =
                                                            category_is_expanded &&
                                                            can_expand &&
                                                            idxb === item.articles.length - 1
                                                        return (
                                                            <ListNoBullets key={idxb}>
                                                                {should_show_item && (
                                                                    <li>
                                                                        <StyledLink
                                                                            to={convertToHash(
                                                                                item.category.props
                                                                                    .translate_text,
                                                                                ar.label,
                                                                            )}
                                                                        >
                                                                            {ar.title}
                                                                        </StyledLink>
                                                                    </li>
                                                                )}
                                                                {(should_show_expand ||
                                                                    should_show_collapse) && (
                                                                    <li>
                                                                        <StyledView
                                                                            onClick={() =>
                                                                                this.toggleArticle(
                                                                                    ar.category,
                                                                                )
                                                                            }
                                                                        >
                                                                            {should_show_expand ? (
                                                                                <Localize
                                                                                    translate_text="<0>View all questions</0>"
                                                                                    components={[
                                                                                        <p
                                                                                            key={0}
                                                                                        />,
                                                                                    ]}
                                                                                />
                                                                            ) : (
                                                                                <Localize
                                                                                    translate_text="<0>View fewer questions</0>"
                                                                                    components={[
                                                                                        <p
                                                                                            key={0}
                                                                                        />,
                                                                                    ]}
                                                                                />
                                                                            )}
                                                                        </StyledView>
                                                                    </li>
                                                                )}
                                                            </ListNoBullets>
                                                        )
                                                    })}
                                                </ListWrapper>
                                            </ArticleDiv>
                                        )
                                    })}
                                </RowDiv>
                            )
                        })}
                    </ArticleSection>
                </Container>
                <Show.Desktop max_width={'tabletS'}>
                    <Community />
                </Show.Desktop>
                <DidntFindYourAnswerBanner />
            </Layout>
        )
    }
}

HelpCentreClass.propTypes = {
    is_eu_country: PropTypes.bool,
}

export default WithIntl()(HelpCenter)
