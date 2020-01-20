import React from 'react'
import styled from 'styled-components'
import { Header, Text } from '../../components/elements/typography'
import { Article } from './_article'
import { localize, WithIntl } from 'components/localization'
import { articles } from './_help-articles'

const getAllArticles = articles =>
    articles
        .map(category => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

const ArticleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
`
const Step = styled(ArticleWrapper)`
    flex-direction: row;
    height: 20%;
    margin-bottom: 4.1rem;
`
const Content = styled.div`
    height: 21.3rem;
    width: 64.5rem;
    display: flex;
    flex-direction: column;
    margin-left: 3.3rem;
    margin-top: ${props => props.marginTop};
`
const StyledHeader = styled(Header)`
    width: auto;
    margin-bottom: ${props => props.marginBottom || '0'};
`

const WhoCanOpenAnAccount = () => (
    <ArticleWrapper>
        <Text secondary>{localize('You have read the Legal Terms and Conditions in full.')}</Text>
        <Text secondary>
            {localize(
                'You have read our privacy statement and give us your consent to process your personal information.',
            )}
        </Text>
    </ArticleWrapper>
)
const OpeningAccount = () => (
    <ArticleWrapper>
        <StyledHeader marginBottom="1.6rem" as="h4">
            {localize('There are three ways to open an account. You can:')}
        </StyledHeader>
        <Step>
            <StyledHeader as="h1">{localize('1')}</StyledHeader>
            <Content marginTop="1rem">
                <Text secondary>
                    {localize(
                        'Enter your email address on the homepage and click “Create free account”',
                    )}
                </Text>
            </Content>
        </Step>
        <Step>
            <StyledHeader as="h1">{localize('2')}</StyledHeader>
            <Content marginTop="3rem">
                <Text secondary>{localize('Create an account with your Google login')}</Text>
            </Content>
        </Step>
        <Step>
            <StyledHeader as="h1">{localize('3')}</StyledHeader>
            <Content marginTop="3rem">
                <Text secondary>{localize('Create an account with your Facebook login')}</Text>
            </Content>
        </Step>
    </ArticleWrapper>
)

const AccountArticle = () => {
    const all_articles = getAllArticles(articles)

    return (
        <Article>
            <WhoCanOpenAnAccount
                text={
                    all_articles.find(article => article.label === 'who-can-open-an-account').title
                }
                label="who-can-open-an-account"
            ></WhoCanOpenAnAccount>
            <OpeningAccount
                text={localize('Opening an account')}
                label="opening-an-account"
            ></OpeningAccount>
        </Article>
    )
}

export default WithIntl()(AccountArticle)
