import React, { useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Loadable from '@loadable/component'
import { articles } from './_help-articles'
import { SearchSuccess, SearchError } from './_search-results'
import { euArticles, getAllArticles, splitArticles } from './_utility'
import { faq_schema } from './_faq-schema'
import { SEO, Show, Container } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { getLocationHash, sanitize } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'
// Icons
import SearchIcon from 'images/svg/help/search.svg'
import CrossIcon from 'images/svg/help/cross.svg'

//Lazy-load
const DidntFindYourAnswerBanner = Loadable(() => import('./_didnt-find-answer'))
const Community = Loadable(() => import('./_community'))
const ArticleComponent = Loadable(() => import('./_article-component'))

// export type StyledProps = {
//     should_show_item?: boolean
//     wrap?: string
//     show?: boolean
//     has_transition?: boolean
//     align?: string
//     direction?: string
// }

// type HelpCenterProps = {
//     props?: PropsType
//     is_eu_country?: unknown
//     align?: string
//     all_articles?: string[]
//     all_categories?: Record<number, { is_expanded: boolean }>
//     search?: string
//     search_has_transition?: boolean
//     toggle_search?: boolean
// }

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

const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: ${(props) => props.wrap};

    @media ${device.tabletS} {
        flex-direction: column;
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

// Since useContext can only be used in functional components
// Wrap HelpCenter class component in a function plug in the context
const HelpCenter = () => {
    const is_eu_country = React.useContext(DerivStore)
    return <HelpCentre is_eu_country={is_eu_country} />
}

const HelpCentre = (is_eu_country) => {
    const [hook, setHook] = useState({
        name: '',
        searching: '',
        toggle_search: false,
        search_has_transition: false,
        all_categories: {},
        all_articles: [],
    })

    const handleInputChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        const handle = { [name]: `${sanitize(value)}` }
        setHook({ name: handle })
    }

    const handleSubmit = (e) => e.preventDefault()
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
            setHook({
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

        setHook({
            all_categories,
            all_articles: translated_articles,
        })
    })

    const filtered_articles = matchSorter(hook.all_articles, hook.trim(), {
        keys: ['title', 'sub_category'],
    })

    const splitted_articles = is_eu_country
        ? euArticles(splitArticles(articles, 3))
        : splitArticles(articles, 3)

    const has_results = !!filtered_articles.length

    const clearSearch = () => setHook({ searching: '' })
    const search_component = hook.searching.length > 0 && (
        <SearchCrossIcon src={CrossIcon} alt="cross icon" onClick={clearSearch} />
    )

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
            <SearchSection show={hook.toggle_search} has_transition={hook.search_has_transition}>
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
                                    name="search"
                                    value={hook.searching}
                                    onChange={handleInputChange}
                                    placeholder={localize('Try “Trade”')}
                                    data-lpignore="true"
                                    autoComplete="off"
                                />
                                {search_component}
                            </SearchForm>
                            <ResultWrapper>
                                {!!has_results && !!hook.searching.length && (
                                    <SearchSuccess
                                        suggested_topics={filtered_articles}
                                        max_length={3}
                                    />
                                )}
                                {!has_results && !!hook.searching.length && (
                                    <SearchError search={hook.searching} />
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
                            <RowDiv wrap={first_category === 'DBot' ? 'wrap' : 'nowrap'} key={id}>
                                {article.map((item, idx) => {
                                    if (
                                        is_eu_country &&
                                        item.category.props.translate_text === 'Deriv X'
                                    ) {
                                        return <React.Fragment key={idx}></React.Fragment>
                                    }

                                    return (
                                        <ArticleComponent
                                            key={idx}
                                            idx={idx}
                                            id={id}
                                            item={item}
                                            all_categories={hook.all_categories}
                                            is_eu_country={is_eu_country}
                                        />
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

export default WithIntl()(HelpCenter)
