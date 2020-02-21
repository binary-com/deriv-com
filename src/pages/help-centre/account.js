import React from 'react'
import styled from 'styled-components'
import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { Text, Header } from 'components/elements/typography'
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
const ExternalLink = styled.a`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }
`
const StyledText = styled(Text)`
    margin-top: 1.7rem;
`
const StyledListItem = styled.li`
    text-indent: -1.4em;
    padding-left: 1.4em;
`
const urlResetPassword =
    getLanguage() === 'en' || getLanguage() == null
        ? '/reset-password/'
        : `/${getLanguage()}/reset-password/`

const WhoCanOpenAnAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize("Why can't I create an account?")}
        </Header>
        <Text>
            {localize(
                'In line with our Group practice, we set the following criteria for client sign ups:',
            )}
        </Text>
        <div>
            <StyledListItem>
                {localize('Clients have to be at least 18 years of age')}
            </StyledListItem>
            <StyledListItem>
                {localize(
                    'Clients cannot be a resident in Canada, France, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, UAE, USA, or a restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies',
                )}
            </StyledListItem>
        </div>
    </ArticleWrapper>
)
const ChangingPersonalDetails = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('Changing your personal details')}
        </Header>
        <Text>
            <Localize
                translate_text="If you have not made a deposit or created a Deriv MT5 (DMT5) account, you can change your name, date of birth, or citizenship by going to <0>Settings ></0> <1>Personal details</1>."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        href="https://deriv.app/account/personal-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'If you have made a deposit or created a DMT5 account, you can submit a ticket requesting the desired changes. Please attach your proofs of identity and address.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const ChangeAccountCurrency = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize("How can I change my account's currency?")}
        </Header>
        <Text>
            {localize(
                'Once you have made a deposit or created a DMT5 account, you can only change your currency by contacting Customer Support.',
            )}
        </Text>
    </ArticleWrapper>
)
const RecoveringPassword = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize(
                'I forgot my Google/Facebook account password. How can I log in to my Deriv account?',
            )}
        </Header>
        <Text>
            <Localize
                translate_text="If you’ve forgotten your Google/Facebook account password, you can <0>reset your Deriv account password</0> to log in to Deriv."
                components={[
                    <ExternalLink
                        href={urlResetPassword}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)
const CloseAccount = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How can I close my account?')}
        </Header>
        <Text>
            {localize(
                'Before closing your account, please close all your open positions and withdraw all the funds in your account. After that, you may contact us with your request.',
            )}
        </Text>
    </ArticleWrapper>
)
const UnsubscribeEmail = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How do I unsubscribe from marketing emails?')}
        </Header>
        <Text>
            <Localize
                translate_text="You can do this easily by going to <0>Settings > Profile ></0> <1>Personal details</1>. Uncheck the email preference box, and click the ‘Submit’ button to unsubscribe."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        href="https://deriv.app/account/personal-details"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)
const DormantFee = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is a dormant fee?')}
        </Header>
        <Text>
            {localize(
                'A dormant fee is an amount charged to any account that has not placed a transaction over a continuous period of 12 months.',
            )}
        </Text>
        <StyledText>
            {localize(
                'This does not apply if the client is under self-exclusion, either by their own choice or as a decision by the Company.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const AccountArticle = () => {
    return (
        <Article header="Account">
            <WhoCanOpenAnAccount
                text={localize("Why can't I create an account?")}
                label="who-can-open-an-account"
            />
            <ChangingPersonalDetails
                text={localize('Changing your personal details')}
                label="changing-your-personal-details"
            />
            <ChangeAccountCurrency
                text={localize("How can I change my account's currency?")}
                label="change-account-currency"
            />
            <RecoveringPassword
                text={localize(
                    'I forgot my Google/Facebook account password. How can I log in to my Deriv account?',
                )}
                label="recovering-your-password"
            />
            <CloseAccount text="How can I close my account?" label="close-your-account" />
            <UnsubscribeEmail
                text="How do I unsubscribe from marketing emails?"
                label="unsubscribe-marketing-emails"
            />
            <DormantFee text="What is a dormant fee?" label="what-is-dormant-fee" />
        </Article>
    )
}

export default WithIntl()(AccountArticle)
