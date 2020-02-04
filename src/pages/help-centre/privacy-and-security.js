import React from 'react'
import styled, { css } from 'styled-components'
import { Header } from '../../components/elements/typography'
import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { localize, Localize, WithIntl } from 'components/localization'

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
const Box = styled.div`
    margin: 2.4rem 0;
    padding: 2rem;
    background-color: var(--color-grey-18);
`

const ExternalLink = styled.a`
    ${StyledLink}
`
const url =
    getLanguage() === 'en' || getLanguage() == null ? '/keep-safe/' : `/${getLanguage()}/keep-safe/`

const SafeguardChangePassword = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Safeguarding your account when you change your password')}
        </Header>
        <Localize
            translate_text="To keep your account safe from an unauthorised party, we always require you to confirm your identity before we allow you to change or reset your password.
                <0 /><0 />This is how we do it:"
            components={[<br key={0} />]}
        />
        <Box>
            <Localize
                translate_text="If you’re logged in, you’ll need to enter your current password. This means that if someone else has access to your account while you’re away from your screen, they will not be able to change your password without your permission.
                <0 /><0 />If you’ve forgotten your current password, we’ll send you an email with the link to reset your password. Ideally, you should be the only person with access to your email and this will help us to confirm your identity. The link will expire after one hour. Please request a new link if you’re using the link after this period."
                components={[<br key={0} />]}
            />
        </Box>
        <Localize
            translate_text="To learn more about security best practices, please go to the <0>Keep safe</0> page."
            components={[
                <ExternalLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={0}
                ></ExternalLink>,
            ]}
        />
    </ArticleWrapper>
)

const SafeguardWithdrawFunds = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0">
            {localize('Safeguarding your account when you withdraw funds')}
        </Header>
        <div>
            <Localize
                translate_text="To keep your funds safe from an unauthorised party, we always require you to confirm your identity before you can submit a withdrawal request.
            <1 /><1 />We do this by sending you an email with a link to withdraw your funds. You can also copy and paste the verification code from the email to the <0>Withdraw</0> page. Ideally, you should be the only person with access to your email and this will help us to confirm your identity. The link will expire after one hour. Please request a new link if you’re using the link after this period."
                components={[<strong key={0} />, <br key={1} />]}
            />
        </div>
    </ArticleWrapper>
)

const PrivacyAndSecurityArticle = () => {
    return (
        <Article header="Privacy and security">
            <SafeguardChangePassword
                text={localize('Safeguarding your account when you change your password')}
                label="Safeguarding-account-when-Change-password"
            ></SafeguardChangePassword>
            <SafeguardWithdrawFunds
                text={localize('Safeguarding your account when you withdraw funds')}
                label="Safeguarding-account-when-withdraw-funds"
            ></SafeguardWithdrawFunds>
        </Article>
    )
}

export default WithIntl()(PrivacyAndSecurityArticle)
