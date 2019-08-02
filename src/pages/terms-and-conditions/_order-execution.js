import React from 'react'
import { Header } from 'components/elements/typography'
import {
    StyledSection,
    TncText,
    StyledHeader,
    StyledOrder,
    TncListText,
} from './_styles'
import { localize } from 'components/localization'

export const OrderExecution = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Order execution policy')}
        </Header>
        <TncText>
            {localize(
                'We have a general duty to conduct Our business with you honestly, fairly, and professionally and to act in your best interests when opening and closing trades with you.',
            )}
        </TncText>
        <TncText>
            {localize(
                "More specifically, when We enter into a trade with you, We have a duty to provide you with 'best execution'. Best execution means that We must take reasonable steps to obtain the best possible result for you when executing your order. This document provides a summary of Our best execution policy.",
            )}
        </TncText>
        <TncText>
            {localize(
                'You should note that Our duty to provide you with best execution does not apply to the trading of synthetic products, where there is no underlying financial market.',
            )}
        </TncText>
        <TncText>
            {localize(
                'This policy applies to you if you are classified as retail or professional. If you are an eligible counterparty, you are outside the scope of this policy.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('General')}
        </StyledHeader>
        <TncText>
            {localize(
                'Our order execution policy comprises a set of procedures that are designed to obtain the best possible execution result for you, subject to the following factors:',
            )}
        </TncText>
        <StyledOrder type="lower-alpha">
            <li>
                <TncListText>
                    {localize('The nature of your trades')}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The priorities that you have identified for Us in relation to entering into those trades',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The practices relating to the market in question, with the aim of producing a result that provides, in Our view, the best balance across a range of sometimes conflicting factors',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <TncText>
            {localize(
                'Our policy cannot provide a guarantee, however, that when entering into trades with you, the price will always be better than one that is or might have been available elsewhere.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Order execution')}
        </StyledHeader>
        <TncText>
            {localize(
                'We deal in derivatives on Our own account. Your orders will be executed by Us and We will always be your sole execution venue for all of the trades that you make on Deriv. This means that We will always act as your counterparty and take the other side of your trade. You should be aware that you are exposed to higher risks as all trades are traded on over-the-counter (OTC) markets, as opposed to regulated exchanges. This section of the policy will outline how We intend to comply with Our best execution obligations.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Best execution factors')}
        </StyledHeader>
        <TncText>
            {localize(
                'In relation to trades that you make on Deriv, We act as principal and not as agent on your behalf; therefore, We act as the sole execution venue for the execution of your trades.',
            )}
        </TncText>
        <TncText>
            {localize(
                "We will mainly ensure best execution for you by giving due consideration to the market price when calculating Our bid/ask price for the underlying reference product to which your trade relates. In order to ascertain the market price, We have access to a number of different data sources, which provide Us with an objective view of the bids and asks available to arms' length traders.",
            )}
        </TncText>
        <TncText>
            {localize(
                'In the case of some trades, there may be no functioning or open market or exchange on which the reference product is traded at the time of your order. In such cases, We set out to determine a fair underlying price based on a number of factors, such as price movements on associated markets and other market influences and information about your order.',
            )}
        </TncText>
        <TncText>
            {localize(
                'We are required to take a number of factors into account when considering how to give you best execution, specifically:',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('(a) Price and cost')}
        </StyledHeader>
        <TncText>
            {localize(
                'We have internally set appropriate controls and monitoring to verify that Our aggregate return on various underlying options and durations is equal to Our commission charge of 3 - 5%.  Proper back-testing is conducted on a quarterly basis to certify that Our return does not exceed this set mark-up and hence ascertain continued fair prices to the clientele, whilst mitigating Our conflicts of interest.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('(b) Speed')}
        </StyledHeader>
        <TncText>
            {localize(
                'Due to the online nature of the business and instruments, there is a small delay between an order being entered and the same order being executed on the server. Any significant delay can have negative impacts on you; therefore, We monitor the latency between the entering and execution of your orders. Should this delay exceed the established threshold, then the system administrators will be notified so that they can investigate any possible issue.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('(c) Likelihood of execution')}
        </StyledHeader>
        <TncText>
            {localize(
                'We strive to ensure that all the orders placed are executed; however, this is not always possible due to material difficulties or unusual circumstances. In any instance that We become aware of any material difficulty relevant to the proper execution of an order, We promptly inform you of the issue.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('(d) Likelihood of settlement')}
        </StyledHeader>
        <TncText>
            {localize(
                'During volatile markets, Our trading platform runs across a high number of concurrent online users, high volumes of client orders, and a high number of imported price ticks.  As part of Our best execution delivery to you, We ensure that Our platform runs smoothly under such stressed conditions and take all reasonable steps to safeguard the continuity and regularity in the performance of investment activities.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('(e) Size and nature')}
        </StyledHeader>
        <TncText>
            {localize(
                'Orders will generally be auto-accepted if they do not exceed Our exposure limits and you have enough remaining balance in your account. With every trade purchased, We have systems in place that automatically carry out a large exposure check, and, in case the new total exposure result is greater than or equal to 25% of the eligible capital, you cannot make the trade.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Specific instructions')}
        </StyledHeader>
        <TncText>
            {localize(
                'When you give Us specific instructions, including (a) specifying the price of a trade or (b) specifying the price at which a trade is to be closed, then those instructions take precedence over other aspects of Our policy.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('No fiduciary duty')}
        </StyledHeader>
        <TncText>
            {localize(
                "Our commitment to provide you with 'best execution' does not mean that We owe you any fiduciary responsibilities over and above the specific regulatory obligations placed upon Us or as may be otherwise contracted between you and Us.",
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Monitoring and review of this policy')}
        </StyledHeader>
        <TncText>
            {localize(
                'We will monitor the effectiveness of Our order execution arrangements and order execution policy. We will assess from time to time whether the venues that We rely upon in pricing our trades on your behalf allow Us to achieve best execution on a consistent basis or whether We need to make changes to Our execution arrangements. We will also review its order execution arrangements and order execution policy in respect of material changes, either regarding one of Our chosen pricing venues or what might otherwise affect Our ability to continue to achieve best execution. Should there be any material changes to Our order execution arrangements or order execution policy, We will notify you.',
            )}
        </TncText>
    </StyledSection>
)
