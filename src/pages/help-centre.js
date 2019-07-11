import React from 'react'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Container from '../components/containers/container'
import SearchSVG from 'images/svg/search.svg'
import { Header, Text } from '../components/elements/topography.js'

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
const suggested_topics = [
    'Who can open an account?',
    'Opening an account',
    'Opening an MT5 account',
]

const HelpCentre = () => {
    const has_results = true
    return (
        <Layout>
            <SEO title={localize('Help centre')} />
            <Backdrop>
                <Container alignItems="normal" flexDirection="column">
                    <SearchForm>
                        <SearchIcon />
                        <Search placeholder={localize('How can we help?')} />
                    </SearchForm>
                    <ResultWrapper>
                        {has_results && <SearchSuccess />}
                        {!has_results && <SearchError />}
                    </ResultWrapper>
                </Container>
            </Backdrop>
            <Container alignItems="normal" flexDirection="column">
                <TableOfContents>
                    <TextLink.Group>
                        <TextLink.List
                            header="Account"
                            links={[
                                'Who can open an account?',
                                'Opening an account',
                                'Changing your personal details',
                                'Forgetting your password',
                                'Resetting your MT5 password',
                                'Authenticating your account',
                            ]}
                        />
                    </TextLink.Group>
                    <TextLink.Group>
                        <TextLink.List
                            header="Deposit and withdrawals"
                            links={[
                                'Who can open an account?',
                                'Opening an account',
                                'Changing your personal details',
                            ]}
                        />
                        <TextLink.List
                            header="Trading"
                            links={[
                                'Who can open an account?',
                                'Opening an account',
                            ]}
                        />
                    </TextLink.Group>
                </TableOfContents>
            </Container>
        </Layout>
    )
}

const SearchSuccess = () => (
    <>
        <Header as="h3" color="white">
            {'Topic Suggestions'}
        </Header>
        <ListNoBullets>
            {suggested_topics.map((topic, idx) => (
                <ListLink key={idx} color="white">
                    {topic}
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
const SearchError = () => (
    <>
        <ErrorHeader as="h5">
            Sorry, we couldn’t find any results matching “asdfghj”.
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

TextLink.List = function List({ header, links }) {
    return (
        <>
            <HeaderWrapper>
                <Header as="h3">{header}</Header>
            </HeaderWrapper>
            <ListNoBullets>
                {links.map((link, idx) => (
                    <li key={idx}>
                        <ListLink>{link} </ListLink>
                    </li>
                ))}
            </ListNoBullets>
        </>
    )
}

export default WithIntl()(HelpCentre)
