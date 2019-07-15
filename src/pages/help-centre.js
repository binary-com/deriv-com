import React, { Component } from 'react'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Container from '../components/containers/container'
import SearchSVG from 'images/svg/search.svg'
import { Header, Text } from '../components/elements/topography.js'
import matchSorter from 'match-sorter'

const SearchIcon = styled(SearchSVG)`
    position: absolute;
    left: 0;
    top: 3px;
`

const SearchForm = styled.form`
    position: relative;
    padding-left: 64px;
`

const Search = styled.input`
    font-size: 4.4rem;
    font-weight: bold;
    color: var(--color-white);
    background-color: var(--color-black);
    border: none;
    outline: none;

    ::placeholder {
        color: var(--color-grey-3);
    }
`

const Backdrop = styled.section`
    background-color: var(--color-black);
    padding: 12rem 0;
`

const TableOfContents = styled.div`
    display: flex;
    padding: 8rem 0;
    width: 100%;

    > :first-child {
        margin-right: auto;
    }
`
const ResultWrapper = styled.div`
    margin-top: 4rem;

    > :first-child {
        margin-bottom: 1.6rem;
    }
`

const HelpArticle = ({ header, paragraphs, children }) => (
    <>
        <Header as="h3">{header}</Header>
        {paragraphs.map((text, idx) => (
            <Text key={idx}>{text}</Text>
        ))}
        {children}
    </>
)

const CanITrade = () => (
    <HelpArticle
        paragraphs={[
            'Yes if you are a non-EU citizen and sign up as a expert trader.',
        ]}
    />
)

const OpeningAnAccount = () => (
    <HelpArticle paragraphs={['This is how you open an account']} />
)

const WhoCanOpenAnAccount = () => (
    <HelpArticle
        paragraphs={[
            'You may only open an account with us on these conditions:',
        ]}
    />
)

const MakingADeposit = () => (
    <HelpArticle paragraphs={['Select deposit method and deposit']} />
)

const MakingAWithDrawal = () => (
    <HelpArticle paragraphs={['Select deposit method and withdraw']} />
)

const articles = [
    {
        category: 'Account',
        articles: [
            {
                title: 'Who can open an account?',
                keywords: ['account', 'how', 'who'],
                sub_category: 'Opening an account',
                content: <WhoCanOpenAnAccount />,
            },
            {
                title: 'Opening an account',
                keywords: ['account', 'how', 'who'],
                sub_category: 'Opening an account',
                content: <OpeningAnAccount />,
            },
        ],
    },
    {
        category: 'Deposits and withdrawals',
        articles: [
            {
                title: 'Making a deposit',
                keywords: ['deposit', 'make'],
                sub_category: 'Deposits',
                content: <MakingADeposit />,
            },
            {
                title: 'Withdrawal processing time',
                keywords: ['Withdrawal', 'take', 'money'],
                sub_category: 'Withdrawals',
                content: <MakingAWithDrawal />,
            },
        ],
    },
]

class HelpCentre extends Component {
    state = {
        search: '',
        selected_article: null,
    }

    handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value.trim() })
    }

    handleSelectArticle = article => {
        this.setState({ selected_article: article })
    }

    render() {
        const all_articles = articles
            .map(category =>
                category.articles.map(article => ({
                    ...article,
                    category: category.category,
                })),
            )
            .flat()

        const { search, selected_article } = this.state
        const filtered_articles = matchSorter(all_articles, search, {
            keys: ['title', 'sub_category', 'keywords'],
        })
        const has_results = !!filtered_articles.length
        console.log('search: ', this.state.search)
        console.log('all_articles: ', all_articles)
        console.log('filtered: ', filtered_articles)

        return (
            <Layout>
                <SEO title={localize('Help centre')} />
                <Backdrop>
                    <Container alignItems="normal" flexDirection="column">
                        <SearchForm>
                            <SearchIcon />
                            <Search
                                name="search"
                                onChange={this.handleInputChange}
                                placeholder={localize('How can we help?')}
                            />
                        </SearchForm>
                        <ResultWrapper>
                            {has_results && (
                                <SearchSuccess
                                    suggested_topics={filtered_articles}
                                    onClick={this.handleSelectArticle}
                                />
                            )}
                            {!has_results && <SearchError search={search} />}
                        </ResultWrapper>
                    </Container>
                </Backdrop>
                <Container alignItems="normal" flexDirection="column">
                    {!selected_article && (
                        <TableOfContents>
                            <ArticleList
                                articles={articles}
                                onClick={this.handleSelectArticle}
                            />
                        </TableOfContents>
                    )}
                    {selected_article && <Article article={selected_article} />}
                </Container>
            </Layout>
        )
    }
}

const Article = ({ article }) => article.content

const SearchSuccess = ({ suggested_topics, onClick }) => (
    <>
        <Header as="h3" color="white">
            Topic Suggestions
        </Header>
        <ListNoBullets>
            {suggested_topics.slice(0, 3).map((topic, idx) => (
                <ListLink
                    key={idx}
                    color="white"
                    onClick={() => onClick(topic)}
                >
                    {topic.title}
                </ListLink>
            ))}
        </ListNoBullets>
    </>
)

const BulletList = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: var(--text-size-s);
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
`
const ErrorHeader = styled(Header)`
    color: var(--color-white);
    font-size: 2rem;
    padding-bottom: 0.8rem;
`

const SearchError = ({ search }) => (
    <>
        <ErrorHeader as="h5">
            {`Sorry, we couldn’t find any results matching “${search}”.`}
        </ErrorHeader>
        <Text color="green">Search tips:</Text>
        <BulletList>
            <li>
                <Text color="white">Check your spelling and try again</Text>
            </li>
            <li>
                <Text color="white">Try another keyword</Text>
            </li>
            <li>
                <Text color="white">
                    Keep your search term short as our search capabilities works
                    best with short search terms
                </Text>
            </li>
        </BulletList>
    </>
)

const TextLink = ({ children }) => <>{children}</>

TextLink.Group = function Group({ children }) {
    return <div>{children}</div>
}

// TODO: add to topography
const ListLink = styled.p`
    /* prettier-ignore */
    color: var(--color-${props => props.color || 'black'});
    font-size: 2rem;
    line-height: 1.5;

    &:hover {
        color: var(--color-red);
        text-decoration: underline;
        cursor: pointer;
    }
`

const HeaderWrapper = styled.div`
    margin-bottom: 1.6rem;
`
const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

TextLink.List = function List({ header, links, onClick }) {
    return (
        <>
            <HeaderWrapper>
                <Header as="h3">{header}</Header>
            </HeaderWrapper>
            <ListNoBullets>
                {links.map((link, idx) => (
                    <li key={idx}>
                        <ListLink onClick={() => onClick(link)}>
                            {link.title}
                        </ListLink>
                    </li>
                ))}
            </ListNoBullets>
        </>
    )
}

const ArticleList = ({ articles, onClick }) => {
    return (
        <>
            {articles.map((category, idx) => {
                return (
                    <TextLink.Group key={idx}>
                        <TextLink.List
                            header={category.category}
                            links={category.articles}
                            onClick={onClick}
                        />
                    </TextLink.Group>
                )
            })}
        </>
    )
}

export default WithIntl()(HelpCentre)
