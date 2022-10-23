import React from 'react'
import styled from 'styled-components'
import Questions from './components/_questions'
import { ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, ExternalLink } from './_help-centre-style'
import affiliate_programme_data from './data/_affiliate-programme'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const WhoCanApply = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('We encourage you to become our affiliate if you are:')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A webmaster</0><br/>Do you have a trading-related website? Join our network of affiliates and turn your traffic into revenue by promoting our products and services."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A signal provider</0><br/>Do you provide trading data for others to follow? Grow your community of traders and earn commission when they sign up and trade on our platforms."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A trading mentor</0><br/>Do you mentor other traders? Help them become better traders and earn commission when they sign up and trade on our platforms."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A software developer</0><br/>Build your own trading platform using our API and earn commission when your clients sign up and trade."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A social media admin</0><br/>Promote our products and services on your social media pages, and earn commission when you convert your audience into traders."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>A blogger/vlogger</0><br/>Promote our products and services and earn commission when you convert your audience into traders."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const ForgotPassword = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can reset your affiliate password <0>here</0>."
                components={[
                    <ExternalLink
                        to={'https://login.deriv.com/password-reset.php?lang=0'}
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

const ReferralLink = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps to get your referral link:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>Log in</0> to your affiliate dashboard."
                        components={[
                            <ExternalLink
                                to={'https://login.deriv.com/signin.php?lang=0'}
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
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Click the <0>Marketing<0/> tab."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Go to the first item in the media gallery and click <0>Get media</0> code."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>

            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Copy the link in the <0>Landing page URL</0> field. This is the referral link that you can share with your clients."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const PaymentMethod = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps to change your payment method:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>Log in</0> to your dashboard."
                        components={[
                            <ExternalLink
                                to={'https://login.deriv.com/signin.php'}
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
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Click the <0>Finances</0> tab and select <0>Payment instructions</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Select your preferred payment method, enter the necessary details, and click <0>Update</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const CommissionPayout = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We'll credit your commission for the previous month into your trading account after the 15th of every month. As an affiliate, you’ll earn commission when your referred clients trade on options and multipliers. To earn from your clients' MT5 trades, you'll need to sign up as an introducing broker. (see <0>How do I sign up as an introducing broker (IB)?</0>)"
                components={[
                    <ExternalLink
                        to={'/help-centre/ib-programme/#ib-sign-up'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={0} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const SeeEarnings = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps to see your earnings:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="<0>Log in</0> to your dashboard."
                        components={[
                            <ExternalLink
                                to={'https://login.deriv.com/signin.php'}
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
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Go to <0>Reports</0>, and select <0>Detailed activity report</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="Set the duration and filters and click <0>Display report</0> or <0>Download report</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const ReportsAccess = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "You'll have access to reports that show your hits, impressions, click-through rates, clients' trading activity, and more.",
            )}
        </Text>
    </ArticleWrapper>
)

const AffiliateProgramme = () => <Questions data={affiliate_programme_data} />

export default WithIntl()(AffiliateProgramme)
