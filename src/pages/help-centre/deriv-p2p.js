import React from 'react'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader, StyledText } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const WhatisDerivP2P = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is Deriv P2P?')}</StyledHeader>
        <Text>
            {localize(
                'Deriv P2P is Deriv’s peer-to-peer deposit and withdrawal service that allows you to get money in and out of your Deriv account easily through transactions with fellow traders. ',
            )}
        </Text>
        <StyledText>
            {localize(
                'To get money into your Deriv account, you can ‘buy’ Deriv funds in your local currency (or any supported currency) from a fellow trader and the amount you have ‘bought’ will be deposited into your account.',
            )}
        </StyledText>
        <StyledText>
            {localize(
                'Similarly, you can make withdrawals from your Deriv account by ‘selling’ Deriv funds to fellow traders in return for payment in your local currency (or any supported currency).',
            )}
        </StyledText>
    </ArticleWrapper>
)

const HowSecureDerivP2P = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {<Localize translate_text="How secure is Deriv P2P?" components={[<br key={0} />]} />}
        </StyledHeader>
        <Text>
            {localize(
                'We verify each user’s identity before they can start using Deriv P2P’s services — users will need to submit a POI (proof of identity) document for identity verification before buying or selling on Deriv P2P.',
            )}
        </Text>
        <StyledText>
            {localize(
                'Additionally, all transactions are protected by escrow. Escrow locks Deriv funds until both parties have confirmed completion of the transaction.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const BuyOrSellLimit = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="Can I increase my daily buy or sell limit?"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'Yes. You can request to increase your daily limit via live chat on our website and we’ll get back to you via email. ',
            )}
        </Text>
    </ArticleWrapper>
)

const PaymentMethods = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="What payment methods can I use with Deriv P2P"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'You can transfer money to fellow traders via bank transfers, cards, e-wallets, or any agreed upon payment method with the person you are dealing with.',
            )}
        </Text>
        <StyledText>
            {localize(
                'Please note that Deriv has no control over payments made between Deriv P2P traders. So please ensure you follow the payment instructions as agreed between you and the trader you are dealing with, and provide your preferred method of payment and instructions when you post your ads.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const DisputeWithTheTrader = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="What should I do if I have a dispute with the trader I’m dealing with?"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'You can chat with the trader you’re dealing with via the in-app chat to resolve the dispute. If both parties are unable to reach an agreement, you can reach out to us via the in-app dispute facility. We’ll get in touch with the relevant parties and work to resolve the dispute as quickly as possible.',
            )}
        </Text>
    </ArticleWrapper>
)

const InTouchWithTheCounterparty = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="How do I get in touch with the counterparty of my transaction?"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'You can chat with the trader you are dealing with via the in-app chat function.',
            )}
        </Text>
    </ArticleWrapper>
)

const DifferentAccountBalance = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="Why is my Deriv P2P balance different from my Deriv account balance?"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'Your Deriv P2P balance consists of a portion of your Deriv account balance. While all of your deposits via e-wallets and cryptocurrency are available for use with Deriv P2P, only a part of your deposits via cards are available.',
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
                <PaymentMethods
                    text={localize('What payment methods can I use with Deriv P2P?')}
                    label="payment-methods"
                    is_mounted={is_mounted}
                />
                <BuyOrSellLimit
                    text={localize('Can I increase my daily buy or sell limit?')}
                    label="buy-or-sell-limit"
                    is_mounted={is_mounted}
                />
                <DisputeWithTheTrader
                    text={localize(
                        'What should I do if I have a dispute with the trader I’m dealing with?',
                    )}
                    label="dispute-with-the-trader"
                    is_mounted={is_mounted}
                />
                <InTouchWithTheCounterparty
                    text={localize(
                        'How do I get in touch with the counterparty of my transaction?',
                    )}
                    label="in-touch-with-the-counterparty"
                    is_mounted={is_mounted}
                />
                <DifferentAccountBalance
                    text={localize(
                        'Why is my Deriv P2P balance different from my Deriv account balance?',
                    )}
                    label="different-account-balance"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DerivP2PArticle)
