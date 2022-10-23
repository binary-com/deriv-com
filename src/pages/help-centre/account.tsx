import React from 'react'
import styled from 'styled-components'
import account_data from './data/_account'
import Questions from './components/_questions'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { Article, ArticleProps } from './_article'
import { localize, Localize, WithIntl } from 'components/localization'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
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
                    <StyledLink to={'/tnc/general-terms.pdf'} key={0} />,
                    <StyledLink to={'/contact_us/?is_livechat'} key={1} />,
                ]}
            />
        </StyledText>
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
                components={[<StyledLink to={'/contact_us/?is_livechat'} key={0} />]}
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

const OpenACorporateOrBusinessAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Yes. <0>Contact us via live chat</0>, and we'll help you through it. We'll need the following information:"
                components={[<StyledLink to={'/contact_us/?is_livechat'} key={0} />]}
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

const Account = () => <Questions data={account_data} />

export default WithIntl()(Account)
