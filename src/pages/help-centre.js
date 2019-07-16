import React, { Component } from 'react'
import { navigate } from '@reach/router'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl, LocalizedLink } from '../components/localization'
import Container from '../components/containers/container'
import SearchSVG from 'images/svg/search.svg'
import { Header, Text, LinkText } from '../components/elements/topography.js'
import matchSorter from 'match-sorter'

const HelpArticle = ({ header, paragraphs, children }) => (
    <>
        <Header as="h3">{header}</Header>
        {paragraphs.map((text, idx) => (
            <Text key={idx}>{text}</Text>
        ))}
        {children}
    </>
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
const ListWrapper = styled.div`
    ${Header} {
        margin-bottom: 1.6rem;
    }
`

const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

const articles = [
    {
        category: 'Account',
        articles: [
            {
                title: 'Who can open an account?',
                keywords: ['account', 'how', 'who'],
                category: 'Account',
                sub_category: 'Opening an account',
                label: 'who-can-open-an-account',
                content: <WhoCanOpenAnAccount />,
            },
            {
                title: 'Opening an account',
                keywords: ['account', 'how', 'who'],
                category: 'Account',
                sub_category: 'Opening an account',
                label: 'opening-an-account',
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
                category: 'Deposits and withdrawals',
                sub_category: 'Deposits',
                label: 'making-a-deposit',
                content: <MakingADeposit />,
            },
            {
                title: 'Withdrawal processing time',
                keywords: ['Withdrawal', 'take', 'money'],
                category: 'Deposits and withdrawals',
                sub_category: 'Withdrawals',
                label: 'withdrawal-processing-time',
                content: <MakingAWithDrawal />,
            },
        ],
    },
]

const getRelatedArticles = (article_list, selected_article) =>
    article_list.filter(
        article =>
            article.sub_category === selected_article.sub_category &&
            article.title !== selected_article.title,
    )

const getAllArticles = articles =>
    articles.map(category => category.articles).flat()

class HelpCentre extends Component {
    constructor(props) {
        super(props)
        const all_articles = getAllArticles(articles)

        this.state = {
            search: '',
            selected_article: null,
            all_articles,
        }
    }

    handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value.trim() })
    }

    handleSubmit = e => e.preventDefault()

    handleSelectArticle = article => {
        navigate(`#${article.label}`)
        this.setState({ selected_article: article })
    }

    componentDidMount = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (current_label) {
            const selected_article = this.state.all_articles.find(
                article => article.label === current_label,
            )
            this.setState({ selected_article })
        }
    }

    componentDidUpdate = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (!current_label && this.state.selected_article) {
            this.setState({ selected_article: null })
        }
    }

    render() {
        const { search, selected_article, all_articles } = this.state
        const filtered_articles = matchSorter(all_articles, search, {
            keys: ['title', 'sub_category', 'keywords'],
        })
        const has_results = !!filtered_articles.length

        return (
            <Layout>
                <SEO title={localize('Help centre')} />
                {!selected_article && (
                    <Backdrop>
                        <Container alignItems="normal" flexDirection="column">
                            <SearchForm
                                onSubmit={this.handleSubmit}
                                autoComplete="off"
                            >
                                <SearchIcon />
                                <Search
                                    name="search"
                                    onChange={this.handleInputChange}
                                    placeholder={localize('How can we help?')}
                                    data-lpignore="true"
                                />
                            </SearchForm>
                            <ResultWrapper>
                                {has_results && search.length && (
                                    <SearchSuccess
                                        suggested_topics={filtered_articles}
                                        onClick={this.handleSelectArticle}
                                        max_length={3}
                                    />
                                )}
                                {!has_results && (
                                    <SearchError search={search} />
                                )}
                            </ResultWrapper>
                        </Container>
                    </Backdrop>
                )}
                <Container alignItems="normal" flexDirection="column">
                    {!selected_article && (
                        <TableOfContents>
                            <ArticleList
                                articles={articles}
                                onClick={this.handleSelectArticle}
                            />
                        </TableOfContents>
                    )}
                    {selected_article && (
                        <Article
                            article={selected_article}
                            all_articles={all_articles}
                            onClick={this.handleSelectArticle}
                        />
                    )}
                </Container>
            </Layout>
        )
    }
}

const Article = ({ article, all_articles, onClick }) => {
    const related_articles = getRelatedArticles(all_articles, article)
    const has_related_articles = !!related_articles.length

    return (
        <>
            <TableOfContents>
                <div>
                    <LocalizedLink to="/help-centre/">
                        Back to Help topics
                    </LocalizedLink>
                    <Header as="h3">{`${article.category} - ${article.title}`}</Header>
                    {article.content}
                </div>
                {has_related_articles && (
                    <ListWrapper>
                        <Header as="h3">Related topics</Header>
                        <LinkList list={related_articles} onClick={onClick} />
                    </ListWrapper>
                )}
            </TableOfContents>
        </>
    )
}

const SearchSuccess = ({ suggested_topics, onClick, max_length }) => (
    <>
        <Header as="h3" color="white">
            Topic Suggestions
        </Header>
        <LinkList
            list={suggested_topics.slice(0, max_length)}
            onClick={onClick}
            link_style={{ color: 'white', size: '2rem' }}
        />
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

const ArticleList = ({ articles, onClick }) => (
    <>
        {articles.map((category, idx) => (
            <ListWrapper key={idx}>
                <Header as="h3">{category.category}</Header>
                <LinkList list={category.articles} onClick={onClick} />
            </ListWrapper>
        ))}
    </>
)

const LinkList = ({ list, onClick, link_style }) => (
    <ListNoBullets>
        {list.map((item, idx) => (
            <li key={idx}>
                <LinkText {...link_style} onClick={() => onClick(item)}>
                    {item.title}
                </LinkText>
            </li>
        ))}
    </ListNoBullets>
)

export default WithIntl()(HelpCentre)
