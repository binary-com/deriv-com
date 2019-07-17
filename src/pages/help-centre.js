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

const ArticleListText = styled(Text).attrs({
    as: 'li',
})``

const WhoCanOpenAnAccount = () => (
    <>
        <Text>You may only open an account with us on these conditions:</Text>
        <BulletList>
            <ArticleListText>
                You have read the Legal Terms and Conditions in full.
            </ArticleListText>
            <ArticleListText>
                You understand that you will be buying and selling financial
                contracts subject to these terms and conditions.
            </ArticleListText>
            <ArticleListText>
                You have read our privacy statement and give us your consent to
                process your personal information.
            </ArticleListText>
            <ArticleListText>
                You are over 18 years of age, unless you are an Estonian
                resident whereby you would have to be over 21.
            </ArticleListText>
            <ArticleListText>
                You are not resident in a restricted country such as Canada,
                Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta,
                Paraguay, United Arab Emirates, USA or any other restricted
                country which has been identified by the Financial Action Task
                Force (FATF) as having strategic deficiencies.
            </ArticleListText>
            <ArticleListText>
                You have enough experience and knowledge in financial trading to
                be able to evaluate the merits and risks of acquiring financial
                contracts via this site. You have not relied on any information
                contained in this site to make that evaluation.
            </ArticleListText>
        </BulletList>
    </>
)

const OpeningAnAccount = () => (
    <>
        <Text>There are three ways to open an account. You can</Text>
        <OrderedList>
            <ArticleListText>
                Enter your email address on the homepage and click “Create free
                account”
            </ArticleListText>
            <ArticleListText>
                Create an account with your Google login
            </ArticleListText>
            <ArticleListText>
                Create an account with your Facebook login
            </ArticleListText>
        </OrderedList>
        <Text>
            You will have a practice account to start with. You can upgrade to a
            real money account after opening a practice account.
        </Text>
    </>
)

const ChangingPersonalDetails = () => (
    <Text>
        If you'd like to change your name, date of birth, country of residence,
        or email address, please submit a ticket and attach your proof of
        identity and proof of address.
    </Text>
)

const RecoveringYourPassword = () => (
    <>
        <Text>
            If you can’t remember your password, you can reset it by following
            these steps:
        </Text>
        <OrderedList>
            <ArticleListText>Go to the login page.</ArticleListText>
            <ArticleListText>
                Click on the "Reset your password link" near the bottom of the
                page.
            </ArticleListText>
            <ArticleListText>
                Enter your email address. You’ll receive a verification link in
                your inbox.
            </ArticleListText>
            <ArticleListText>
                Click on the verification link to set your new password.
            </ArticleListText>
        </OrderedList>
        <Text>
            If you have a real money account, you must also check the box
            labelled "I have a Real Money Account" and verify your date of
            birth.
        </Text>
    </>
)

const AuthenticatingYourAccount = () => (
    <Text>Authenticate your account on the verification page.</Text>
)

const MakingADeposit = () => (
    <>
        <Text>
            Click on the Cashier tab and choose your preferred deposit method.
        </Text>
        <Text>
            Our list of supported payment methods includes bank wire,
            credit/debit cards, e-wallets, and cryptocurrencies.
        </Text>
        <Text>
            You may also manage your funds through a payment agent if the
            service is available in your country.
        </Text>
        <Text>
            You can deposit or withdraw a minimum of USD/EUR/GBP/AUD 5 using
            e-wallets. Other payment methods will have different minimum
            amounts. These amounts are stated on the payment methods page.
        </Text>
    </>
)

const ExpiredVerificationLink = () => (
    <>
        <Text>
            We will occasionally prompt you to verify your account by sending
            you a verification link. This is to make sure it’s you and that your
            account hasn’t been compromised.
        </Text>
        <Text>
            If your verification link has expired, try withdrawing or logging in
            again.
        </Text>
    </>
)

const WithdrawalProcessingTime = () => (
    <Text>
        We process all your deposits and withdrawals within 24 hours. However,
        your bank or money transfer service may require additional time to
        process your request.
    </Text>
)

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
            {
                title: 'Changing your personal details',
                keywords: ['change', 'name', 'residence', 'email'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'changing-your-personal-details',
                content: <ChangingPersonalDetails />,
            },
            {
                title: 'Recovering your password',
                keywords: ['change', 'name', 'login'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'recovering-your-password',
                content: <RecoveringYourPassword />,
            },
            {
                title: 'Authenticating your account',
                keywords: ['change', 'verify'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'recovering-your-password',
                content: <AuthenticatingYourAccount />,
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
                title: 'Expired verification link',
                keywords: ['verify'],
                category: 'Deposits and withdrawals',
                sub_category: 'Deposits',
                label: 'expired-verification-link',
                content: <ExpiredVerificationLink />,
            },
            {
                title: 'Withdrawal processing time',
                keywords: ['Withdrawal', 'take', 'money'],
                category: 'Deposits and withdrawals',
                sub_category: 'Withdrawals',
                label: 'withdrawal-processing-time',
                content: <WithdrawalProcessingTime />,
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
    articles
        .map(category => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

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
class HelpCentre extends Component {
    constructor(props) {
        super(props)
        const all_articles = getAllArticles(articles)

        this.state = {
            search: '',
            selected_article: null,
            all_articles,
            show_search: true,
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
        this.setState({
            selected_article: article,
            show_search: false,
            search: '',
        })
    }

    showSearch = () => {
        this.setState(prevState => ({
            show_search: !prevState.show_search,
        }))
    }

    componentDidMount = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (current_label) {
            const selected_article = this.state.all_articles.find(
                article => article.label === current_label,
            )
            this.setState({ selected_article, show_search: false })
        }
    }

    componentDidUpdate = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (!current_label && this.state.selected_article) {
            this.setState({ selected_article: null, show_search: true })
        }
    }

    render() {
        const {
            all_articles,
            search,
            selected_article,
            show_search,
        } = this.state
        const filtered_articles = matchSorter(all_articles, search, {
            keys: ['title', 'sub_category', 'keywords'],
        })
        const has_results = !!filtered_articles.length

        return (
            <Layout>
                <SEO title={localize('Help centre')} />
                {show_search && (
                    <Backdrop>
                        <Container alignItems="normal" flexDirection="column">
                            <SearchForm
                                onSubmit={this.handleSubmit}
                                autoComplete="off"
                            >
                                <SearchIcon />
                                <Search
                                    autoFocus
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
                            showSearch={this.showSearch}
                        />
                    )}
                </Container>
            </Layout>
        )
    }
}

const ArticleWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        &:hover {
            cursor: pointer;
        }
    }
`

const ArticleContent = styled.div`
    width: 60%;

    > *:not(:last-child) {
        margin-top: 0;
        padding-bottom: 0.8rem;
    }
    ${Header} {
        margin-bottom: 1.6rem;
    }
    ${Text} {
        color: var(--color-black-3);
        line-height: 1.5;
    }
`

const Article = ({ article, all_articles, onClick, showSearch }) => {
    const related_articles = getRelatedArticles(all_articles, article)
    const has_related_articles = !!related_articles.length

    return (
        <>
            <ArticleWrapper>
                <LocalizedLink to="/help-centre/">
                    Back to Help topics
                </LocalizedLink>
                <SearchSVG onClick={showSearch} />
            </ArticleWrapper>
            <TableOfContents>
                <ArticleContent>
                    <Header as="h3">{`${article.category} - ${article.title}`}</Header>
                    {article.content}
                </ArticleContent>
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
const OrderedList = styled(BulletList).attrs({
    as: 'ol',
})`
    list-style-type: decimal;
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
            <ArticleListText color="white">
                Check your spelling and try again
            </ArticleListText>
            <ArticleListText color="white">Try another keyword</ArticleListText>
            <ArticleListText color="white">
                Keep your search term short as our search capabilities works
                best with short search terms
            </ArticleListText>
        </BulletList>
    </>
)

const ArticleList = ({ articles, onClick }) => (
    <>
        {articles.map((category, idx) => (
            <ListWrapper key={idx}>
                <Header as="h3">{category.category}</Header>
                <LinkList
                    link_style={{ size: '2rem' }}
                    list={category.articles}
                    onClick={onClick}
                />
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
