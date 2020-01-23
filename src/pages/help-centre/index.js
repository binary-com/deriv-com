import React, { Component } from 'react'
import matchSorter from 'match-sorter'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { articles } from './_help-articles'
import { SearchSuccess, SearchError } from './_search-results'
// TODO: active this line after having mail service
import { DidntFindYourAnswerBanner } from './_didnt-find-answer'
import { SEO, Container } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { getLocationHash, sanitize } from 'common/utility'
import device from 'themes/device'
// Icons
import SearchIcon from 'images/svg/search.svg'
import CrossIcon from 'images/svg/cross.svg'

const getAllArticles = articles =>
    articles
        .map(category => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

const Backdrop = styled.div`
    padding: 8rem 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-8);
`
const StyledContainer = styled.div`
    @media ${device.tabletL} {
        padding: 10rem 0 2rem 0;
    }
`
const SearchSection = styled.section`
    ${Backdrop} {
        max-height: ${props => (props.show ? '100rem' : '0')};
        transition: ${props => (props.has_transition ? 'max-height 0.6s ease-in-out' : 'none')};
        overflow: hidden;
    }
`

const SearchCrossIcon = styled(CrossIcon)`
    width: 2.3rem;
    height: 2.3rem;

    :hover {
        cursor: pointer;
    }

    @media ${device.tabletL} {
        position: absolute;
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
const SearchIconBig = styled(SearchIcon)`
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    left: 2.4rem;
    top: 1.3rem;
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
        margin-bottom: 1.6rem;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 4rem;
`

const ListWrapper = styled.div`
    margin-right: 2.4rem;
    max-width: 38.4rem;
    width: 38.4rem;

    ${Header} {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`

const ArticleSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8rem 0;

    @media ${device.tabletL} {
        flex-wrap: wrap;
    }
`
const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    li {
        max-width: 38.4rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: var(--text-size-s);
`
class HelpCentre extends Component {
    constructor(props) {
        super(props)
        this.state = {
            all_articles: [],
            search: '',
            search_has_transition: false,
            toggle_search: true,
        }
    }

    handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: `${sanitize(value)}` })
    }

    handleSubmit = e => e.preventDefault()

    handleSelectArticle = article => {
        navigate(`#${article.label}`)
        this.setState({
            toggle_search: false,
            search_has_transition: false,
            search: '',
        })
    }

    toggleSearch = () =>
        this.setState(prevState => ({
            toggle_search: !prevState.toggle_search,
            search_has_transition: true,
        }))

    clearSearch = () => this.setState({ search: '' })

    componentDidMount = () => {
        const current_label = getLocationHash()
        const deepClone = arr => {
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
        const translated_articles = duplicate_articles.map(article => {
            article.title = localize(article.title.props.translate_text)
            article.sub_category = localize(article.sub_category.props.translate_text)
            return article
        })

        this.setState({
            all_articles: translated_articles,
        })
    }

    render() {
        const { all_articles, search, toggle_search, search_has_transition } = this.state

        const filtered_articles = matchSorter(all_articles, search.trim(), {
            keys: ['title', 'sub_category'],
        })
        const has_results = !!filtered_articles.length
        return (
            <Layout>
                <SEO
                    title={localize('Help')}
                    description={localize(
                        'Need help with our products and services? Read our FAQ or ask us a question.',
                    )}
                />

                <SearchSection show={toggle_search} has_transition={search_has_transition}>
                    <Backdrop>
                        <Container align="left" justify="flex-start" direction="column">
                            <StyledContainer align="normal" direction="column">
                                <StyledHeader as="h1">{localize('How can we help?')}</StyledHeader>
                                <SearchForm onSubmit={this.handleSubmit}>
                                    <SearchIconBig />
                                    <Search
                                        autoFocus
                                        name="search"
                                        value={search}
                                        onChange={this.handleInputChange}
                                        placeholder={localize('Try “Trade”')}
                                        data-lpignore="true"
                                        autoComplete="off"
                                    />
                                    {search.length && (
                                        <SearchCrossIcon onClick={this.clearSearch} />
                                    )}
                                </SearchForm>
                                <ResultWrapper>
                                    {has_results && search.length && (
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
                        {articles.map((category, idx) => (
                            <ListWrapper key={idx}>
                                <Header font_size="3.6rem">{localize(category.category)}</Header>
                                <ListNoBullets>
                                    {category.articles.map((article, idxa) => (
                                        <li key={idxa}>
                                            <StyledLink
                                                to={
                                                    '/help-centre/' +
                                                    category.category.props.translate_text
                                                        .replace(/\s/g, '-')
                                                        .toLowerCase() +
                                                    '#' +
                                                    article.label
                                                }
                                            >
                                                {article.title}
                                            </StyledLink>
                                        </li>
                                    ))}
                                </ListNoBullets>
                            </ListWrapper>
                        ))}
                    </ArticleSection>
                </Container>

                <DidntFindYourAnswerBanner />
            </Layout>
        )
    }
}

export default WithIntl()(HelpCentre)
