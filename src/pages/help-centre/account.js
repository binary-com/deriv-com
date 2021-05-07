import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledList = styled.ul`
    list-style: unset;
    padding-left: 2rem;
`
const StyledListItem = styled.li`
    color: var(--color-black-3);
    margin-top: 1.6rem;
`

const WhoCanOpenAnAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize("Why can't I create an account?")}</StyledHeader>
        <Text>
            {localize(
                'In line with our Group practice, we set the following criteria for client sign ups:',
            )}
        </Text>
        <StyledList>
            <StyledListItem>
                {localize('Clients have to be at least 18 years of age.')}
            </StyledListItem>
            <StyledListItem>
                {localize(
                    'Clients cannot be a resident in Canada, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, UAE, USA, or a restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.',
                )}
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)
const ChangingPersonalDetails = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How can I change my personal details?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="If your account is not authenticated, you can change your name, date of birth, or citizenship by going to <0>Settings ></0> <1>Personal details</1>."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        to={`${deriv_app_url}/account/personal-details`}
                        external="true"
                        weight="bold"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'If the account has been fully authenticated, you can submit a ticket requesting the desired changes. Please attach your proof of identity and address.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const ChangeAccountCurrency = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize("How can I change my account's currency?")}</StyledHeader>
        <Text>
            {localize(
                'Once you have made a deposit or created a DMT5 account, you can only change your currency by contacting Customer Support.',
            )}
        </Text>
    </ArticleWrapper>
)
const RecoveringPassword = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize(
                'I forgot my Google/Facebook account password. How can I log in to my Deriv account?',
            )}
        </StyledHeader>
        <Text>
            <Localize
                translate_text="If you’ve forgotten your Google/Facebook account password, you can <0>reset your Deriv account password</0> to log in to Deriv."
                components={[
                    <ExternalLink
                        to="/reset-password"
                        external="true"
                        weight="bold"
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
        <StyledHeader as="h4">{localize('How can I close my account?')}</StyledHeader>
        <Text>
            {localize(
                'Before closing your account, please close all your open positions and withdraw all the funds in your account. After that, you may contact us with your request.',
            )}
        </Text>
    </ArticleWrapper>
)
const UnsubscribeEmail = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How do I unsubscribe from marketing emails?')}
        </StyledHeader>
        <Text>
            <Localize
                translate_text="You can do this easily by going to <0>Settings > Profile ></0> <1>Personal details</1>. Uncheck the email preference box, and click the ‘Submit’ button to unsubscribe."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        to={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        external="true"
                        weight="bold"
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
        <StyledHeader as="h4">{localize('What is a dormant fee?')}</StyledHeader>
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
        <div>
            <Article
                header={localize('Account')}
                title={localize('Help centre | Frequently asked questions | Account | Deriv')}
                description={localize('Frequently asked questions - Account')}
            >
                <WhoCanOpenAnAccount
                    text={localize("Why can't I create an account?")}
                    label="who-can-open-an-account"
                />
                <ChangingPersonalDetails
                    text={localize('How can I change my personal details?')}
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
                <CloseAccount
                    text={localize('How can I close my account?')}
                    label="close-your-account"
                />
                <UnsubscribeEmail
                    text={localize('How do I unsubscribe from marketing emails?')}
                    label="unsubscribe-marketing-emails"
                />
                <DormantFee text={localize('What is a dormant fee?')} label="what-is-dormant-fee" />
            </Article>
        </div>
    )
}

export default WithIntl()(AccountArticle)
