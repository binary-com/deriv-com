import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'

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
            {localize("Here are some possible reasons you aren't able to create an account:")}
        </Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('You’re below 18 years old.')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('You may already have a Deriv account.')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize("Our services aren't available in your country of residence.")}
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="You may refer to <0>our terms</0> for more information. If you need help getting into your account, <1>contact us via live chat.</1>"
                components={[
                    <StyledLink
                        to={'/tnc/general-terms.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const ChangingPersonalDetails = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can do so on the <0>Personal details</0> page. If you’re unable to update your details, please <1>contact us via live chat</1>. We may need you to send us some documents for verification."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const ChangeAccountCurrency = ({ text }: ArticleProps) => (
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
        <StyledList listStyle="decimal" paddingLeft="5rem">
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
                        external
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
        <StyledList listStyle="decimal" paddingLeft="5rem">
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
                                external
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

const RecoveringPassword = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'If you created your Deriv account using Apple/Google/Facebook, try resetting your Apple/Google/Facebook password. After that, you should be able to log in to Deriv as usual.',
            )}
        </Text>
        <StyledText>
            {localize(
                "If you'd like to log in using your email address instead, follow these steps:",
            )}
        </StyledText>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Hit <0>Forgot password?</0> on the <1>login page.</1>"
                        components={[
                            <StyledLink
                                to={'/reset-password'}
                                target="_blank"
                                external
                                weight="bold"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                            <StyledLink
                                to={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
                                target="_blank"
                                external
                                weight="bold"
                                rel="noopener noreferrer"
                                key={1}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'Enter the same email address you use for your Apple/Google/Facebook account.',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        "We'll email you a verification link. Click that link and set a new password for your Deriv account.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        "Now, you'll be able to log in to your Deriv account using your email address and password.",
                    )}
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const CloseAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Click <0>here</0> to close your account."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/deactivate-account`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const UnsubscribeEmail = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text='You can unsubscribe by going to the <0>Personal details</0> page. Uncheck the checkbox that says "Get updates about Deriv products, services and events." at the bottom of the page, and click <1>Submit.</1>'
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DormantFee = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="It's a fee that we charge for accounts that have been inactive for the last 12 months. Refer to <0>our terms</0> for more info."
                components={[
                    <StyledLink
                        to={'/tnc/general-terms.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const ChangeMyEmailAddress = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Yes. <0>Contact us via live chat</0> and we'll help you with it."
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const OpenACorporateOrBusinessAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Yes. <0>Contact us via live chat</0>, and we'll help you through it. We'll need the following information:"
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>

        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Text>{localize('Name of entity')}</Text>
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Certificate of incorporation')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Memorandum and articles of association')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('List of directors')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('List of shareholders')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'Authorisation to manage the account (if your business has more than one director)',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'Passport and utility bill/bank statement of the person managing the account and of each director and shareholder (if your business has more than 1)',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize('Utility bill/bank statement containing the address of the business')}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Source of wealth documentation')}</Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {localize('We may request more information during the signup process.')}
        </StyledText>
    </ArticleWrapper>
)

const PayTaxesOnMyTradesProfits = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="It depends on the laws in your country of residence. Please get professional advice on whether you're required to pay taxes on <0>your profits</0>."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/reports/profit`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const CreateAnAPIToken = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can create an API token <0>here</0>. Give your token a name, select the scope, and click <1>Create</1>."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/api-token`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const OpenMoreThanOneDerivAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="As per <0>our terms</0>, we only allow one account per client, which you can open in the currency of your choice (either fiat or crypto). If you want to trade with other currencies, you can add multiple cryptocurrency accounts to your profile."
                components={[
                    <StyledLink
                        to={'/tnc/general-terms.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const SelfExclusionLimitsOnMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can do so on the <0>Self-exclusion</0> page."
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/self-exclusion`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const RemoveSelfExclusionLimits = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="If you're residing in the EU or UK, <0>contact us via live chat</0>, and we'll help you with it."
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="If you reside in any other country, you can adjust or remove your limits on the <1>Self-exclusion</1> page. If you’re unable to change your limits, <0>let us know via live chat</0>."
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={`${deriv_app_url}/account/self-exclusion`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const ReactivateMyDerivAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You may reactivate your account by <1>logging in</1> with your email address and password. If you're unable to do so, please <0>contact us via live chat</0>, and we'll help you further."
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const NeedToVerifyMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('We’ll prompt you to verify your account when it’s needed.')}</Text>
    </ArticleWrapper>
)

const HowDoIVerifyMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('When we prompt you to verify your account, follow these steps:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="<0>Log in</0> to your Deriv account."
                        components={[
                            <StyledLink
                                to={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
                                target="_blank"
                                external
                                weight="bold"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Go to <0>Settings</0> > <1>Proof of identity</1> or <1>Proof of address</1>."
                        components={[
                            <StyledLink
                                to={`${deriv_app_url}/account/personal-details`}
                                target="_blank"
                                external
                                weight="bold"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                            <strong key={1} />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize('Follow the instructions on the screen to verify your account.')}
                </Text>
            </StyledListItem>
        </StyledList>

        <StyledText>
            <Localize
                translate_text="<0>Note:</0> The <0>Proof of identity</0> and <0>Proof of address</0> pages will not be available if your account doesn’t need verification at this time."
                components={[<strong key={0} />]}
            />
        </StyledText>
    </ArticleWrapper>
)

const DocumentsDoINeedToVerifyMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('You’ll need the following documents to verify your account:')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="<0>Proof of identity</0>"
                        components={[<strong key={1} />]}
                    />
                </Text>
                <Text>
                    {localize(
                        "You’ll need a valid government-issued identity document such as a national ID card, passport, or driver's licence. Your document must clearly show your name, photo, and date of birth.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="<0>Proof of address</0>"
                        components={[<strong key={1} />]}
                    />
                </Text>
                <Text>
                    {localize(
                        'You’ll need a bank statement, credit card statement, tax statement, or utility bill. Your document must be issued within the last 6 months. It must contain your name, address, the name of the company that issued the document, and the issue date.',
                    )}
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const WhyDoINeedToVerifyMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Our regulators require us to verify your account in accordance with anti-money laundering (AML) and Know Your Customer (KYC) laws. If we have prompted you to upload your documents to verify your account, it means that you'll only be able to continue using our services after your account is verified.",
            )}
        </Text>
    </ArticleWrapper>
)

const CanITradeWithoutVerifyingMyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('If you’re in the EU or UK:')}</Text>
        <Text>{localize('No, you must verify your account before trading.')}</Text>

        <StyledText>{localize('If you’re in any other country:')}</StyledText>
        <Text>
            {localize(
                'Yes, as long as you haven’t opened a Deriv MT5 Financial STP account, you can still trade without verifying your account.',
            )}
        </Text>
    </ArticleWrapper>
)

const HowLongDoesVerificationTake = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'We try to review your verification documents within the same day. In some cases, due to high traffic, it may take up to 3 business days. You’ll get a confirmation email from us once the review is complete. You can also check the status of your documents at',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>Settings > Proof of identity</0>"
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/proof-of-identity`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>Setting > Proof of address</0>"
                components={[
                    <StyledLink
                        to={`${deriv_app_url}/account/proof-of-address`}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const WhyWereMyDocumentsDeclined = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We may have declined your documents because they were unclear, invalid, expired, had cropped edges, or showed details that did not match your Deriv profile. If you need help, please <0>contact us via live chat</0>."
                components={[
                    <StyledLink
                        to={'/contact_us/?is_livechat_open=true'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
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
                <ChangingPersonalDetails
                    text={localize('How can I change my personal details?')}
                    label="changing-your-personal-details"
                    is_mounted={is_mounted}
                />
                <ChangeAccountCurrency
                    text={localize('How can I change the currency of my account?')}
                    label="change-account-currency"
                    is_mounted={is_mounted}
                />
                <ChangeMyEmailAddress
                    text={localize('Can I change my email address?')}
                    label="change-my-email-address"
                    is_mounted={is_mounted}
                />
                <WhoCanOpenAnAccount
                    text={localize("Why can't I create an account?")}
                    label="who-can-open-an-account"
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
                <OpenACorporateOrBusinessAccount
                    text={localize('Can I open a corporate or business account?')}
                    label="open-a-corporate-or-business-account"
                    is_mounted={is_mounted}
                />
                <PayTaxesOnMyTradesProfits
                    text={localize('Do I need to pay taxes on my trades/profits?')}
                    label="pay-taxes-on-my-trades-profits"
                    is_mounted={is_mounted}
                />
                <OpenMoreThanOneDerivAccount
                    text={localize('Can I open more than one Deriv account?')}
                    label="open-more-than-one-deriv-account"
                    is_mounted={is_mounted}
                />
                <CreateAnAPIToken
                    text={localize('How do I create an API token?')}
                    label="create-an-API-token"
                    is_mounted={is_mounted}
                />
                <SelfExclusionLimitsOnMyAccount
                    text={localize('How can I set self-exclusion limits on my account?')}
                    label="self-exclusion-limits-on-my-account"
                    is_mounted={is_mounted}
                />
                <RemoveSelfExclusionLimits
                    text={localize('How can I adjust or remove my self-exclusion limits?')}
                    label="remove-self-exclusion-limits"
                    is_mounted={is_mounted}
                />
                <ReactivateMyDerivAccount
                    text={localize('How can I reactivate my Deriv account?')}
                    label="reactivate-my-Deriv-account"
                    is_mounted={is_mounted}
                />
                <NeedToVerifyMyAccount
                    text={localize('When do I need to verify my account?')}
                    label="need-to-verify-my-account"
                    is_mounted={is_mounted}
                />
                <HowDoIVerifyMyAccount
                    text={localize('How do I verify my account?')}
                    label="How-do-I-verify-my-account"
                    is_mounted={is_mounted}
                />
                <DocumentsDoINeedToVerifyMyAccount
                    text={localize('What documents do I need to verify my account?')}
                    label="documents-do-I-need-to-verify-my-account"
                    is_mounted={is_mounted}
                />
                <WhyDoINeedToVerifyMyAccount
                    text={localize('Why do I need to verify my account?')}
                    label="Why-do-I-need-to-verify-my-account"
                    is_mounted={is_mounted}
                />
                <CanITradeWithoutVerifyingMyAccount
                    text={localize('Can I trade without verifying my account?')}
                    label="Can-I-trade-without-verifying-my-account"
                    is_mounted={is_mounted}
                />
                <HowLongDoesVerificationTake
                    text={localize('How long does verification take?')}
                    label="How-long-does-verification-take"
                    is_mounted={is_mounted}
                />
                <WhyWereMyDocumentsDeclined
                    text={localize('Why were my documents declined?')}
                    label="Why-were-my-documents-declined"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(AccountArticle)
