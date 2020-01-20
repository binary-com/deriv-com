import React from 'react'
import styled from 'styled-components'
import { Header, Text } from '../../components/elements/typography'
import { Article } from './_article'
import { localize, Localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
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
        <Localize
            translate_text="You have read the <1>Legal Terms and Conditions</1> in full.
<0 /><0 />You understand that you will be buying and selling financial contracts subject to these terms and conditions.
<0 /><0 />You have read our privacy statement and give us your consent to process your personal information.
<0 /><0 />You are over 18 years of age, unless you are an Estonian resident whereby you would have to be over 21.
<0 /><0 />You are not resident in a restricted country such as Canada, Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, United Arab Emirates, USA or any other restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.
<0 /><0 />You have enough experience and knowledge in financial trading to be able to evaluate the merits and risks of acquiring financial contracts via this site. You have not relied on any information contained in this site to make that evaluation."
            components={[
                <br key={0} />,
                <LocalizedLink external_link key={1} target="_blank" to="/terms-and-conditions/" />,
            ]}
        />
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
    return (
        <Article>
            <WhoCanOpenAnAccount
                text={localize('Who can open an account?')}
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
