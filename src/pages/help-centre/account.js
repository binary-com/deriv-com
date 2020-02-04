import React from 'react'
import styled, { css } from 'styled-components'
import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { Text, Header } from 'components/elements/typography'
import { localize, Localize, WithIntl, LocalizedLink } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 79.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    padding-left: 2.4rem;
`
export const StyledLink = css`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);
    display: contents;

    :hover {
        text-decoration: underline;
    }
`
const ExternalLink = styled.a`
    ${StyledLink}
`
const InternalLink = styled(LocalizedLink)`
    ${StyledLink}
`
const Box = styled.div`
    margin: 2.4rem 0;
    padding: 2rem;
    background-color: var(--color-grey-18);
`
const url =
    getLanguage() === 'en' || getLanguage() == null
        ? '/terms-and-conditions/'
        : `/${getLanguage()}/terms-and-conditions/`

const WhoCanOpenAnAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Who can open an account?')}
        </Header>
        <Localize
            translate_text="You have read the <1>Legal Terms and Conditions</1> in full.
            <0 /><0 />You understand that you will be buying and selling financial contracts subject to these terms and conditions.
            <0 /><0 />You have read our privacy statement and give us your consent to process your personal information.
            <0 /><0 />You are over 18 years of age, unless you are an Estonian resident whereby you would have to be over 21.
            <0 /><0 />You are not resident in a restricted country such as Canada, Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, United Arab Emirates, USA or any other restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.
            <0 /><0 />You have enough experience and knowledge in financial trading to be able to evaluate the merits and risks of acquiring financial contracts via this site. You have not relied on any information contained in this site to make that evaluation."
            components={[
                <br key={0} />,
                <ExternalLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={1}
                ></ExternalLink>,
            ]}
        />
    </ArticleWrapper>
)
const OpeningAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Opening an account')}
        </Header>
        <Text>{localize('There are three ways to open an account. You can:')}</Text>
        <Box>
            <Localize
                translate_text='1. Enter your email address on the homepage and click <0>"Create free account"</0>
                <1 /><1 />2. Create an account with your <0>Google</0> login
                <1 /><1 />3. Create an account with your <0>Facebook</0> login'
                components={[<strong key={0} />, <br key={1} />]}
            />
        </Box>
        <Text>
            {localize(
                'You will have a practise account to start with. You can upgrade to a real money account after opening a practise account.',
            )}
        </Text>
    </ArticleWrapper>
)
const ChangingPersonalDetails = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Changing your personal details')}
        </Header>
        <Text>
            {localize(
                "If you'd like to change your name, date of birth, country of residence, or email address, please submit a ticket and attach your proof of identity and proof of address.",
            )}
        </Text>
    </ArticleWrapper>
)
// const RecoveringYourPassword = () => <div></div>
const AuthenticatingYourAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Authenticating your account')}
        </Header>
        <Localize
            translate_text="Authenticate your account on the <0>verification page</0>."
            components={[<InternalLink to="" target="_blank" key={0}></InternalLink>]}
        />
    </ArticleWrapper>
)
const HowDoIChangeOrResetMyDerivPassword = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('How do I change or reset my Deriv password?')}
        </Header>
        <Text>
            {localize(
                'To change your Deriv password if you’re already logged in and know your password:',
            )}
        </Text>
        <Box>
            <Localize
                translate_text="1. Go to <0>Settings > Security and safety > Deriv password.</0>
                <1 /><1 />2. Enter your current password and new password.
                <1 /><1 />3. Click <0>Change password</0> to confirm."
                components={[<strong key={0} />, <br key={1} />]}
            />
        </Box>

        <Text>{localize('If you’re logged in and can’t remember your password:')}</Text>
        <Box>
            <Localize
                translate_text="1. Go to <0>Settings > Security and safety > Deriv password.</0>
                <1 /><1 />2. Click on <0>Forgot your password?</0>
                <1 /><1 />3. Check your email for a message with the link to reset your password. Check your spam or junk folder if you don’t see it.
                <1 /><1 />4. Click on <0>Reset my password</0> to go to the <0>Choose a new password</0> page. If the button does not work, copy and paste the link from the email into your browser.
                <1 /><1 />5. Enter your new password.
                <1 /><1 />6. Click <0>Save new password</0> to confirm."
                components={[<strong key={0} />, <br key={1} />]}
            />
        </Box>
        <Text>{localize('If you’re not logged in and can’t remember your password:')}</Text>
        <Box>
            <Localize
                translate_text="1. Go to <0>Deriv.com > Log in.</0>
                <1 /><1 />2. Click on <0>Forgot password?</0>
                <1 /><1 />3. Check your email for a message with the link to reset your password. Check your spam or junk folder if you don’t see it.
                <1 /><1 />4. Click on <0>Reset my password</0> to go to the <0>Choose a new password</0> page. If the button does not work, copy and paste the link from the email into your browser.
                <1 /><1 />5. Enter your new password.
                <1 /><1 />6. Click <0>Save new password</0> to confirm."
                components={[<strong key={0} />, <br key={1} />]}
            />
        </Box>
    </ArticleWrapper>
)

const AccountArticle = () => {
    return (
        <Article header="Account">
            <WhoCanOpenAnAccount
                text={localize('Who can open an account?')}
                label="who-can-open-an-account"
            ></WhoCanOpenAnAccount>
            <OpeningAccount
                text={localize('Opening an account')}
                label="opening-an-account"
            ></OpeningAccount>
            <ChangingPersonalDetails
                text={localize('Changing your personal details')}
                label="changing-your-personal-details"
            ></ChangingPersonalDetails>
            {/* <RecoveringYourPassword
                text={localize('')}
                label="recovering-your-password"
            ></RecoveringYourPassword> */}
            <AuthenticatingYourAccount
                text={localize('Authenticating your account')}
                label="authenticating-your-password"
            ></AuthenticatingYourAccount>
            <HowDoIChangeOrResetMyDerivPassword
                text={localize('How do I change or reset my Deriv password?')}
                label="change-or-reset-deriv-password"
            ></HowDoIChangeOrResetMyDerivPassword>
        </Article>
    )
}

export default WithIntl()(AccountArticle)
