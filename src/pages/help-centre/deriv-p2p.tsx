import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, StyledText, ExternalLink } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, WithIntl, Localize } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const WhatisDerivP2P = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="<0>Deriv P2P</0> is our peer-to-peer deposit and withdrawal service that’s part of our trading platform. Using Deriv P2P, you can get money in and out of your account in minutes via exchanges with fellow traders. We launched this service mainly for our clients in countries where currency exchange services are not widely accessible."
                components={[
                    <ExternalLink
                        to={'/p2p/'}
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

const HowSecureDerivP2P = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'We verify everyone’s identity before they can start using Deriv P2P. No anonymous transactions are allowed.',
            )}
        </Text>
        <StyledText>
            {localize(
                'Additionally, all transactions are protected by escrow: the order amount is locked in escrow until both parties confirm that the transaction has been completed from their end.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const NeedDerivAccounttouseDerivP2P = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Yes, you’ll need a Deriv real account before you can start using Deriv P2P. Deriv P2P is a way to move funds in and out of your Deriv account.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="If you don’t have a Deriv account yet, <0>sign up</0> for free."
                components={[
                    <ExternalLink
                        to={'/signup/'}
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
            {localize('If you already have a demo account, here’s how to add a real account:')}
        </StyledText>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="<0>Log in</0> to your Deriv account."
                        components={[
                            <ExternalLink
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
                <Text>{localize('Click your account balance.')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Click <0>Real</0>. Under <0>Deriv accounts</0>, click <0>Add</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Follow the instructions to create your real account.')}</Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const DerivP2PBalanceDifferentFromMyDerivAccountBalance = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Your Deriv P2P balance may not include all deposits made to your Deriv account. Deposits via credit cards, Skrill, Neteller, and ZingPay will not be available in Deriv P2P.',
            )}
        </Text>
    </ArticleWrapper>
)

const TermsOfUseForDerivP2P = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Go to Section 4, ‘Deriv P2P’ of <0>our terms</0>."
                components={[
                    <ExternalLink
                        to={'/tnc/funds-and-transfers.pdf'}
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

const DerivP2PAccountBlocked = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize('Your Deriv P2P account may be blocked for one of the following reasons:')}
        </Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Your Deriv account is suspended. Please <0>contact us</0> via live chat for more info."
                        components={[
                            <ExternalLink
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
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="A dispute was raised against you. Please <0>contact us</0> via live chat for more info."
                        components={[
                            <ExternalLink
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
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'You have cancelled 3 orders in the last 24 hours. Your account will be unblocked automatically after 24 hours.',
                    )}
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const BuyOrSellLimit = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Yes, just contact us <0>via live chat</0> to request a limit increase."
                components={[
                    <ExternalLink
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

const PaymentMethods = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'You can use any payment method you want as long as it is agreed with the trader you’re dealing with.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="<0>Note:</0> Deriv has no control over payments made between Deriv P2P traders. Please ensure you follow the payment instructions as agreed between you and the trader you are dealing with, and provide your preferred method of payment and instructions when you post your ads."
                components={[<strong key={0} />]}
            />
        </StyledText>
    </ArticleWrapper>
)

const CreateAnAd = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Go to <0>Deriv P2P</0> > <1>My ads</1>."
                        components={[
                            <ExternalLink
                                to={'https://app.deriv.com/cashier/p2p'}
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
                    <Localize
                        translate_text="Click <0>Create new ad</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Fill up the form and click <0>Post ad</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="Once your ad is created successfully, it will appear in the <0>Buy/Sell</0> tab."
                components={[<strong key={0} />]}
            />
        </StyledText>
        <StyledText>
            <Localize
                translate_text="<0>Note:</0> You'll only be able to create ads once your account has been verified."
                components={[<strong key={0} />]}
            />
        </StyledText>
    </ArticleWrapper>
)

const SeeMyAds = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Your ads are available in the <1>My ads</1> tab at <0>Cashier > Deriv P2P</0>."
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/cashier/p2p'}
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

const MakeAnOrder = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Follow these steps:')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Go to <0>Deriv P2P</0> > <1>Buy/Sell</1>."
                        components={[
                            <ExternalLink
                                to={'https://app.deriv.com/cashier/p2p'}
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
                    <Localize
                        translate_text="Select Buy or Sell ads."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Choose the ad you want by clicking <0>Buy</0> or <0>sell</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Fill up the form and click <0>Confirm</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>{localize('Note:')}</StyledText>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        "You'll only be able to make an order once your account has been verified.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        "If you're buying, you'll need to make payment and share your payment confirmation with the seller. Once the seller has confirmed that they've received your payment, the exchange amount will be credited into your Deriv account.",
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        "If you're selling, you'll need to wait for the buyer's payment before completing the order.",
                    )}
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const SeeMyoOrders = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Your orders are available in the <1>Orders</1> tab at <0>Cashier > Deriv P2P</0>."
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/cashier/p2p'}
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

const CompletionRate = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'The completion rate is the percentage of orders that the advertiser could complete within 2 hours.',
            )}
        </Text>
    </ArticleWrapper>
)

const CannotSeeAds = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="The <0>Buy/Sell</0> tab shows you ads by other advertisers. You can see your ads in the <0>My ads</0> tab."
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const DisputeWithTheTrader = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="If you encounter any issues with a transaction on Deriv P2P, first try to resolve it with the trader you’re dealing with. If they’re not willing to help resolve the situation, please <0>let us know</0> via live chat and we’ll help you resolve it."
                components={[
                    <ExternalLink
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
        <StyledText>
            {localize('To dispute a Deriv P2P transaction, follow these steps:')}
        </StyledText>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="Once the order has expired, click <0>Complain</0> on the order details screen."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Complete the form and click <0>Submit</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {localize(
                'We’ll seek more info on the transaction by reaching out to you and the trader you are dealing with, and we’ll try to resolve the issue within 24 hours. We’ll keep you informed of the status.',
            )}
        </StyledText>
        <StyledText>
            <Localize
                translate_text="To learn more about disputes on Deriv P2P, see our <0>terms of use</0> (refer to Section 4.4 ‘Deriv P2P’)."
                components={[
                    <ExternalLink
                        to={'/tnc/funds-and-transfers.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const AvailableBalanceForDerivP2P = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can see your available balance in the <0>My profile</0> tab."
                components={[<strong key={0} />]}
            />
        </Text>
        <StyledText>
            <Localize translate_text="<0>Note:</0>" components={[<strong key={0} />]} />
        </StyledText>
        <Text>
            <Localize
                translate_text="Your available balance for Deriv P2P may not reflect your entire Deriv balance. This is because deposits made via some payment methods won’t be available for Deriv P2P. See <0>Why is my Deriv P2P balance different from my Deriv account balance?</0> for more info."
                components={[
                    <ExternalLink
                        to={
                            '/help-centre/deriv-p2p/#Deriv-P2P-balance-different-from-my-Deriv-account-balance'
                        }
                        target="_blank"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DerivP2PTransactionsAreSuccessful = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('For successful Deriv P2P transactions, follow these guidelines:')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="If you have active orders, keep the app open (either on your phone or computer) until your orders are completed. Try to complete your orders within 2 hours."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Ensure that you’ve entered the correct amount and exchange rate in your ads."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Avoid creating ads with identical amounts and exchange rates."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Ensure that your account balance is sufficient to support your ads and orders."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize translate_text="If you’re buying:" components={[<strong key={0} />]} />
        </StyledText>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Ensure that you make payment to the correct seller within 2 hours."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="After making your payment, share the receipt with the seller via the chat feature in Deriv P2P."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize translate_text="If you’re selling:" components={[<strong key={0} />]} />
        </StyledText>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Check your bank or e-wallet balance to confirm that the buyer has made payment before completing the order."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Once you’ve received the payment from the buyer, try to complete the order as soon as you can."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="For more guidelines on using Deriv P2P, see our <0>terms of use</0> (refer to Section 4 ‘Deriv P2P’)."
                components={[
                    <ExternalLink
                        to={'/tnc/funds-and-transfers.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const InTouchWithTheCounterparty = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'You can chat with the trader you are dealing with via the chat feature in Deriv P2P.',
            )}
        </Text>
    </ArticleWrapper>
)

const DerivP2PArticle = () => {
    const [is_mounted] = usePageLoaded(false)

    return (
        <div>
            <Article
                header="Deriv P2P"
                title={localize('Help Center | Frequently asked questions | Deriv P2P | Deriv')}
                description={localize('Frequently asked questions - Deriv P2P')}
            >
                <WhatisDerivP2P
                    text={localize('What is Deriv P2P?')}
                    label="what-is-deriv-p2p"
                    is_mounted={is_mounted}
                />
                <HowSecureDerivP2P
                    text={localize('How secure is Deriv P2P?')}
                    label="how-secure-deriv-p2p"
                    is_mounted={is_mounted}
                />
                <NeedDerivAccounttouseDerivP2P
                    text={localize('Do I need a Deriv account to use Deriv P2P?')}
                    label="need-Deriv-account-to-use-Deriv-P2P"
                    is_mounted={is_mounted}
                />
                <DerivP2PBalanceDifferentFromMyDerivAccountBalance
                    text={localize(
                        'Why is my Deriv P2P balance different from my Deriv account balance?',
                    )}
                    label="Deriv-P2P-balance-different-from-my-Deriv-account-balance"
                    is_mounted={is_mounted}
                />
                <TermsOfUseForDerivP2P
                    text={localize('Where can I see the terms of use for Deriv P2P?')}
                    label="the-terms-of-use-for-Deriv-P2P"
                    is_mounted={is_mounted}
                />
                <DerivP2PAccountBlocked
                    text={localize('Why is my Deriv P2P account blocked?')}
                    label="Deriv-P2P-account-blocked"
                    is_mounted={is_mounted}
                />
                <PaymentMethods
                    text={localize(
                        'What payment methods can I use to exchange with other traders?',
                    )}
                    label="payment-methods"
                    is_mounted={is_mounted}
                />
                <CreateAnAd
                    text={localize('How do I create an ad?')}
                    label="create-an-ad"
                    is_mounted={is_mounted}
                />
                <SeeMyAds
                    text={localize('Where can I see my ads?')}
                    label="see-my-ads"
                    is_mounted={is_mounted}
                />
                <MakeAnOrder
                    text={localize('How do I make an order?')}
                    label="make-an-order"
                    is_mounted={is_mounted}
                />
                <SeeMyoOrders
                    text={localize('Where can I see my orders?')}
                    label="see-my-orders"
                    is_mounted={is_mounted}
                />
                <CompletionRate
                    text={localize('What does ‘completion rate’ mean?')}
                    label="completion-rate"
                    is_mounted={is_mounted}
                />
                <CannotSeeAds
                    text={localize("Why can't I see my ad in the Buy/Sell tab?")}
                    label="cannot-see-ads"
                    is_mounted={is_mounted}
                />
                <DisputeWithTheTrader
                    text={localize(
                        'What should I do if I have a dispute with the trader I’m dealing with?',
                    )}
                    label="dispute-with-the-trader"
                    is_mounted={is_mounted}
                />
                <AvailableBalanceForDerivP2P
                    text={localize('How do I check my available balance for Deriv P2P?')}
                    label="available-balance-for-Deriv-P2P"
                    is_mounted={is_mounted}
                />
                <DerivP2PTransactionsAreSuccessful
                    text={localize('How do I ensure my Deriv P2P transactions are successful?')}
                    label="Deriv-P2P-transactions-are-successful"
                    is_mounted={is_mounted}
                />
                <InTouchWithTheCounterparty
                    text={localize('How do I get in touch with the trader I’m dealing with?')}
                    label="in-touch-with-the-counterparty"
                    is_mounted={is_mounted}
                />
                <BuyOrSellLimit
                    text={localize('Can I increase my daily buy or sell limit on Deriv P2P?')}
                    label="buy-or-sell-limit"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DerivP2PArticle)
