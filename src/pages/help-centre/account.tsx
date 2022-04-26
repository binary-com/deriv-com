import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device.js'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`
const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const WhoCanOpenAnAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'In line with our Group practice, we set the following criteria for client sign ups:',
            )}
        </Text>
        <StyledList listStyle="circle" paddingLeft="2rem">
            <StyledListItem marginTop="1.6rem">
                {localize('Clients have to be at least 18 years of age.')}
            </StyledListItem>
            <StyledListItem marginTop="1.6rem">
                {localize(
                    'Clients cannot be a resident in Belarus, Canada, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, Rwanda, UAE, USA, or a restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.',
                )}
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const ChangingPersonalDetails = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="If your account is not authenticated, you can change your name, date of birth, or citizenship by going to <0>Settings ></0> <1>Personal details</1>."
                components={[
                    <strong key={0} />,
                    <StyledLink
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

const ChangeAccountCurrency = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Once you have made a deposit or created a DMT5 account, you can only change your currency by contacting Customer Support.',
            )}
        </Text>
    </ArticleWrapper>
)

const RecoveringPassword = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="If you’ve forgotten your Google/Facebook/Apple account password, you can <0>reset your Deriv account password</0> to log in to Deriv."
                components={[
                    <StyledLink
                        to="/reset-password/"
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

const CloseAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="To close your account, go to <0>Deactivate account.</0> "
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/deactivate-account`}
                        external="true"
                        target="_blank"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'Before closing your Deriv account, close all your open positions and withdraw all the funds in your trading accounts, including DMT5.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const UnsubscribeEmail = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can do this easily by going to <0>Settings > Profile ></0> <1>Personal details</1>. Uncheck the email preference box, and click the ‘Submit’ button to unsubscribe."
                components={[
                    <strong key={0} />,
                    <StyledLink
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

const DormantFee = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
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

const ChangeMyPersonalDetails = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can do so on the <0>Personal details</0> page. If you’re unable to update your details, please <1>contact us via live chat</1>. We may need you to send us some documents for verification."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
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

const ChangeTheCurrencyOfMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'While the currencies of your virtual and cryptocurrency accounts are fixed, you can change the currency of your fiat account by following the steps below.',
            )}
        </Text>
        <StyledText>
            {localize(
                'If you haven’t made a deposit or added a real MT5 account, follow these steps:',
            )}
        </StyledText>
        <StyledList listStyle="numbers" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="Click on your account balance and click <0>Add or manage account.</0>"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Select <0>Fiat currencies,</0> choose the currency you want, and click <0>Change currency.</0>"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="Need help? Please <0>contact us via live chat.</0>"
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            {localize(
                'If you have made a deposit or have added a real MT5 account, follow these steps:',
            )}
        </StyledText>
        <StyledList listStyle="numbers" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>{localize('If you have open positions, close them first.')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>
                            <Localize
                                translate_text="For your Deriv real account, go to <0>Reports</0> to close or sell your open positions."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>
                            {localize(
                                'For your Deriv MT5 and Deriv X real accounts, log in to close any open positions.',
                            )}
                        </Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="1.6rem">
                <Text>{localize('Then, withdraw your funds.')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>
                            <Localize
                                translate_text="For your Deriv real account, go to <0>Cashier</0> to withdraw your funds."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>
                            {localize(
                                'For your Deriv MT5 and Deriv X real accounts, go to your dashboard to withdraw your funds.',
                            )}
                        </Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="<0>Contact us via live chat</0> and we’ll help you change the currency of your account."
                        components={[
                            <StyledLink
                                to={'/contact_us/?is_livechat'}
                                target="_blank"
                                external="true"
                                weight="bold"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const AccountArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

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
                    is_mounted={is_mounted}
                />
                <ChangingPersonalDetails
                    text={localize('How can I change my personal details?')}
                    label="changing-your-personal-details"
                    is_mounted={is_mounted}
                />
                <ChangeAccountCurrency
                    text={localize("How can I change my account's currency?")}
                    label="change-account-currency"
                    is_mounted={is_mounted}
                />
                <RecoveringPassword
                    text={localize(
                        'I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?',
                    )}
                    label="recovering-your-password"
                    is_mounted={is_mounted}
                />
                <CloseAccount
                    text={localize('How can I close my account?')}
                    label="close-your-account"
                    is_mounted={is_mounted}
                />
                <UnsubscribeEmail
                    text={localize('How do I unsubscribe from marketing emails?')}
                    label="unsubscribe-marketing-emails"
                    is_mounted={is_mounted}
                />
                <DormantFee
                    text={localize('What is a dormant fee?')}
                    label="what-is-dormant-fee"
                    is_mounted={is_mounted}
                />
                <ChangeMyPersonalDetails
                    text={localize('How can I change my personal details?')}
                    label="change-my-personal-details"
                    is_mounted={is_mounted}
                />
                <ChangeTheCurrencyOfMyAccount
                    text={localize('How can I change the currency of my account?')}
                    label="change-the-currency-of-my-account"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(AccountArticle)
