import React, { useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Loadable from '@loadable/component'
import { articles } from './_help-articles'
import { SearchSuccess, SearchError } from './_search-results'
import { eu_discards, getAllArticles } from './_utility'
import { faq_schema } from './_faq-schema'
import ArticleSectionComponent from './_article-section-component'
import { SEO, Desktop, Container } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { getLocationHash, sanitize } from 'common/utility'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import device from 'themes/device'
// Icons
import SearchIcon from 'images/svg/help/search.svg'
import CrossIcon from 'images/svg/help/cross.svg'
import { DerivStore } from 'store'

//Lazy-load
const DidntFindYourAnswerBanner = Loadable(() => import('./_didnt-find-answer'))
const Community = Loadable(() => import('./_community'))

type StyledProps = {
    wrap?: string
    show?: boolean
    has_transition?: boolean
    align?: string
    direction?: string
}

const Backdrop = styled.div`
    padding: 8rem 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-8);

    @media ${device.tabletL} {
        padding: 8rem 0 4rem;
    }
`
const StyledContainer = styled.div<StyledProps>`
    @media ${device.tabletL} {
        padding: 2rem 0 2rem 0;
    }
`
const SearchSection = styled.section<StyledProps>`
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

    @media ${device.laptop} {
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

const ResponsiveHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: 4rem;
    }
`

const HelpCentre = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    const [data, setData] = useState({
        search: '',
        toggle_search: true,
        search_has_transition: false,
        all_categories: {},
        all_articles: [],
    })

    const toggleArticle = (category) => {
        if (data.all_categories[category]) {
            const categories = { ...data.all_categories }
            categories[category].is_expanded = !categories[category].is_expanded
            setData({ ...data, all_categories: categories })
        }
    }

    useEffect(() => {
        const current_label = getLocationHash()
        const deepClone = (arr) => {
            const out = []
            for (let i = 0, len = arr.length; i < len; i++) {
                const item = arr[i]
                const obj = {}
                for (const k in item) {
                    obj[k] = item[k]
                }
                out.push(obj)
            }
            return out
        }

        if (current_label) {
            setData({ ...data, toggle_search: false, search_has_transition: false })
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

        setData({ ...data, all_categories, all_articles: translated_articles })
    }, [])

    const handleSubmit = (e) => e.preventDefault()
    const clearSearch = () => setData({ ...data, search: '' })
    const handleInputChange = (e) => {
        e.preventDefault()
        setData({ ...data, search: sanitize(e.target.value) })
    }

    const articles_by_domain = is_eu_country
        ? data.all_articles.filter((el) => !eu_discards.includes(el.category))
        : data.all_articles

    const searched_articles = matchSorter(articles_by_domain, data.search.trim(), {
        keys: ['title', 'sub_category'],
    })

    const filtered_articles = is_eu_country
        ? searched_articles.filter((article) => !article.hide_for_eu)
        : searched_articles.filter((article) => !article.hide_for_non_eu)

    const has_results = !!filtered_articles.length

    const general_articles = React.useMemo(
        () => articles.filter((article) => article.section === 'General'),
        [],
    )

    const platforms_articles = React.useMemo(
        () => articles.filter((article) => article.section === 'Platforms'),
        [],
    )

    const { is_deriv_go } = usePlatformQueryParam()

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
            <SearchSection show={data.toggle_search} has_transition={data.search_has_transition}>
                <Backdrop>
                    <Container align="left" justify="flex-start" direction="column">
                        <StyledContainer align="normal" direction="column">
                            <ResponsiveHeader as="h1" type="display-title" mb="4rem">
                                {localize('How can we help?')}
                            </ResponsiveHeader>
                            <SearchForm onSubmit={handleSubmit}>
                                <SearchIconBig src={SearchIcon} alt="search-icon" />
                                <Search
                                    autoFocus
                                    value={data.search}
                                    onChange={handleInputChange}
                                    placeholder={localize('Try “Trade”')}
                                    data-lpignore="true"
                                    autoComplete="off"
                                />
                                {data.search.length > 0 && (
                                    <SearchCrossIcon
                                        src={CrossIcon}
                                        alt="cross icon"
                                        onClick={clearSearch}
                                    />
                                )}
                            </SearchForm>
                            <ResultWrapper>
                                {!!has_results && !!data.search.length && (
                                    <SearchSuccess
                                        suggested_topics={filtered_articles}
                                        max_length={3}
                                    />
                                )}
                                {!has_results && !!data.search.length && (
                                    <SearchError search={data.search} />
                                )}
                            </ResultWrapper>
                        </StyledContainer>
                    </Container>
                </Backdrop>
            </SearchSection>
            <Container align="left" justify="flex-start" direction="column">
                <ArticleSectionComponent
                    section_name="General"
                    articles={general_articles}
                    data={data}
                    toggleArticle={toggleArticle}
                />
                <ArticleSectionComponent
                    section_name="Platforms"
                    articles={platforms_articles}
                    data={data}
                    toggleArticle={toggleArticle}
                />
            </Container>
            <Desktop breakpoint={'tabletS'}>
                <Community />
            </Desktop>
            {!is_deriv_go && <DidntFindYourAnswerBanner />}
        </Layout>
    )
}

export default WithIntl()(HelpCentre)
