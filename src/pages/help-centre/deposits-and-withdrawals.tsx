import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const PaymentMethods = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can use debit and credit cards, e-wallets, cryptocurrency wallets, and payment agents for deposits and withdrawals (see our <0>payment methods page</0> for a complete list). Once you log in to your Deriv account, you’ll be able to see payment methods available in your country on the <1>Cashier page</1>."
                components={[
                    <ExternalLink
                        to="/payment-methods/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to="https://app.deriv.com/cashier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const WithdrawalProcessingTime = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We process your deposits and withdrawals internally within 1 to 3 business days (depending on your <0>payment method</0>). It may take longer for your funds to reach you due to the different processing times by banks and payment service providers. See our <0>Payment methods</0> page for a complete list of the processing times for each payment method."
                components={[
                    <ExternalLink
                        to="/payment-methods/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const MinimumDepositWithdrawal = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="The minimum deposit and withdrawal amount varies depending on the payment method. The lowest deposit and withdrawal amount is 5 USD/EUR/GBP/AUD via e-wallets. See our <0>Payment methods</0> page for a complete list of payment methods and their minimum deposit and withdrawal amounts."
                components={[
                    <ExternalLink
                        to="/payment-methods/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const ExpiredVerificationLink = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can get a new link on the Cashier page. Go to <0>Withdrawal</0> and click Verify my request. We'll email you a new link; please remember to use it within 1 hour."
                components={[
                    <ExternalLink
                        to="https://app.deriv.com/cashier/withdrawal"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const LiftWithdrawalLimits = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We'll remove the <0>withdrawal limit</0> once your account has been verified."
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/account/account-limits`}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const CreditCardDepositDeclined = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('Here are some reasons why your credit card deposit was declined:')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>
                    {localize(
                        'Your card issuer may have blocked your transaction. Please contact your card issuer to check.',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'Your 3D SecureCode may not be activated. Please contact your bank to check.',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize(
                        'Your country of residence does not match the country that your card was issued in.',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Your credit card balance may be insufficient.')}</Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="If you need help, please contact us via <0>live chat</0>."
                components={[
                    <ExternalLink
                        to={'https://www.binary.com/en/home.html?is_livechat_open=true'}
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

const WithdrawDepositBonus = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Yes, but only once your turnover exceeds an amount that's 25 times the deposit bonus value. The bonus is to help you get familiar with our trading platforms, so we'd love for you to use it to trade and earn a potential profit (which you may withdraw at any time).",
            )}
        </Text>
    </ArticleWrapper>
)

const WithdrawMaestroMastercard = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Making withdrawals using Maestro and Mastercard is not possible in your country. You can check the <0>list of  our payment methods</0> to find a withdrawal method available to you."
                components={[
                    <ExternalLink
                        to={'/payment-methods/'}
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

const ConversionRatesDepositsAndWithdrawals = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'The currency conversion for your deposits and withdrawals are done by your payment service provider. For example, if you use Skrill, your transaction amount will be converted by Skrill. Please check with your service provider regarding the conversion rates used for your deposits and withdrawals.',
            )}
        </Text>
    </ArticleWrapper>
)

const HowCanICancelMyWithdrawal = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can cancel your withdrawal on the <0>Cashier page</0> by following the steps mentioned in the next paragraph. Please note that you cannot cancel withdrawals if:"
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/cashier/`}
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
                <Text>{localize('you reside in the UK, or')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    {localize('your withdrawal request has already been authorised and processed')}
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Text>{localize('To cancel your withdrawal, follow these steps:')}</Text>
        </StyledText>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Go to <0>Cashier > Withdrawal</0>."
                        components={[
                            <ExternalLink
                                to={`${deriv_app_url}/cashier/withdrawal`}
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
                    {localize("We'll send you an email with a verification link. Click that link.")}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="You’ll be brought back to the Cashier page. Click <0>Review pending</0> and select the transaction that you'd like to cancel."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="Click <0>Yes</0> to confirm the cancellation. Your funds will be returned to your Deriv account, and your account balance will be updated accordingly."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const DepositWithFriendsAndFamilyCard = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'No. To keep your funds safe, you are strictly prohibited from using payment methods that are not yours. If you do use someone else’s payment method, we’ll suspend your Deriv account for security purposes.',
            )}
        </Text>
    </ArticleWrapper>
)

const PaymentMethodsOnTheWithdrawalPage = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Your payment method will only appear on the Withdrawal page after you've made your first deposit. If you've made a deposit and still don't see your payment method on the Withdrawal screen, it's probably because the payment method you used for the deposit cannot be used for withdrawals. In this case, you may need to use a different payment method that supports withdrawals, too. <0>Contact us via live chat</0> if you need help."
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

const DepositsAndWithdrawalArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header={localize('Deposits and withdrawals')}
                title={localize(
                    'Help centre | Frequently asked questions | Deposits and withdrawals | Deriv',
                )}
                description={localize('Frequently asked questions - Deposits and withdrawals')}
            >
                <PaymentMethods
                    text={localize('What payment methods can I use for deposits and withdrawals?')}
                    label="payment-methods"
                    is_mounted={is_mounted}
                />
                <WithdrawalProcessingTime
                    text={localize(
                        'How long does it take for my deposits and withdrawals to be processed?',
                    )}
                    label="deposit-withdrawal-processing-time"
                    is_mounted={is_mounted}
                />
                <MinimumDepositWithdrawal
                    text={localize('What is the minimum deposit or withdrawal amount?')}
                    label="minimum-deposit-or-withdrawal"
                    is_mounted={is_mounted}
                />
                <ExpiredVerificationLink
                    text={localize(
                        'My withdrawal verification link has expired. What should I do?',
                    )}
                    label="expired-verification-link"
                    is_mounted={is_mounted}
                />
                <LiftWithdrawalLimits
                    text={localize('How can I remove the withdrawal limit on my account?')}
                    label="lift-withdrawal-limits"
                    is_mounted={is_mounted}
                />
                <CreditCardDepositDeclined
                    text={localize('Why did my credit card deposit get declined?')}
                    label="credit-card-deposit-declined"
                    is_mounted={is_mounted}
                />
                <WithdrawDepositBonus
                    text={localize('Can I withdraw my deposit bonus?')}
                    label="withdraw-deposit-bonus"
                    is_mounted={is_mounted}
                />
                <WithdrawMaestroMastercard
                    text={localize("Why can't I withdraw using Maestro or Mastercard?")}
                    label="withdraw-to-maestro-mastercard"
                    is_mounted={is_mounted}
                />
                <ConversionRatesDepositsAndWithdrawals
                    text={localize(
                        'What conversion rates do you use for deposits and withdrawals?',
                    )}
                    label="What-conversion-rates-do-you-use-for-deposits-and-withdrawals"
                    is_mounted={is_mounted}
                />
                <HowCanICancelMyWithdrawal
                    text={localize('How can I cancel my withdrawal?')}
                    label="How-can-I-cancel-my-withdrawal"
                    is_mounted={is_mounted}
                />
                <DepositWithFriendsAndFamilyCard
                    text={localize(
                        "Can I deposit with my friend's/family member's debit/credit card or e-wallet?",
                    )}
                    label="deposit-with-friends-and-family-card"
                    is_mounted={is_mounted}
                />
                <PaymentMethodsOnTheWithdrawalPage
                    text={localize("Why can't I see any payment methods on the Withdrawal page?")}
                    label="payment-methods-on-the-Withdrawal-page"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DepositsAndWithdrawalArticle)
