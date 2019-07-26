import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'

const StyledSection = styled.section`
    padding-left: 8rem;
`

const TncText = styled(Text)`
    margin: 2rem 0;
`

const TncListText = styled(Text)`
    margin: 0.8rem 0;
`

const StyledHeader = styled(Header)`
    margin-top: 3.2rem;
`

const StyledOrder = styled.ol`
    list-style: ${props => props.type || ''};
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        padding-left: 0.5rem;
    }
`

export const General = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Terms and Conditions')}
        </Header>
        <TncText>{localize('Version 1. Last modified 01-08-2019.')}</TncText>
        <TncText>
            {localize(
                'It is the responsibility of each Client to read and understand this legal notice and the terms and conditions pursuant to which an acquisition of financial contracts via this site is governed.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('A.  Introduction and scope of the agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'By accessing and using Deriv, you accept and agree to be bound by these terms and conditions. It is your responsibility to read and understand the following terms and conditions. These terms and conditions may be supplemented from time to time by additional terms and conditions applicable to a particular company or products',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The terms “We”, “Us”, “Our”, and “Ours” shall denote Binary (SVG) Ltd.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The services offered on Deriv are only suitable for you if you are able to bear the loss of all the money you invest and if you understand and have experienced the risks involved in the acquisition of such trades. International currency or commodity prices are highly volatile and difficult to predict. Due to such volatility, no trade purchased in Our system (whether or not the payout exceeds the premium amount) can be considered a safe trade',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The terms and conditions are provided in several languages. We attempt, as much as possible, to provide a faithful translation from the English version, reflecting the same principles. In the event of any differences between the English version of the Deriv website and any other language, the English version shall prevail.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. Governing laws and jurisdiction')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'It is your responsibility as you access Deriv to make sure that you understand and fully comply with the relevant laws or regulations of your own country. Deriv does not constitute and may not be used for the purposes of an offer or solicitation to anyone in any jurisdiction in which such offer or solicitation is not authorised or to any person to whom it is unlawful to make such an offer or solicitation. Access to Deriv and the offering of trades via Deriv in certain jurisdictions may be restricted; therefore, as you access Deriv, you are required to know about such restrictions and observe them.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The transactions performed on Deriv and the relationship between you and Us are governed by, and construed in accordance with, the laws of the country where We are incorporated (the "Jurisdiction"). You agree to submit to and bring any claim you may have before the Jurisdiction courts, and these courts will have sole authority to settle any disputes that may arise in relation thereto.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You agree that in any legal, arbitration, mediation, regulatory, administration, or any other proceedings initiated by you or by Us, Our records of your dealings shall constitute evidence. You shall cooperate fully with any investigation by any regulatory authority.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'If any provision of this agreement is held invalid or unenforceable by a court or regulatory body of competent jurisdiction, the remainder of this agreement shall remain in full force and effect.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The applicable Jurisdiction shall be St. Vincent and the Grenadines.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('C. Communication')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You may communicate with Us via Our website, email, phone, or exceptionally by post. Details can be found on the Contact us page of the website.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Generally, We will communicate with you via Our website or send an email to the email address that you have provided upon account opening. We will communicate with you in English or, when possible, in your preferred language as selected at account opening. If you utilise anti-spam filtering that requires a fee to receive emails from Us, you must make sure that the communication We send you will get through to you.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('D. Account Management')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>{localize('Account opening')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'You may only open an account on Deriv upon meeting the following conditions:',
                            )}
                        </TncListText>
                        <StyledOrder type="lower-roman">
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have read the terms and conditions in full and have understood that you will be buying and selling trades subject to these terms and conditions.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have read Our security and privacy statement and are aware of how We process information.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You are acting for your sole benefit and not for or on behalf of any other person.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize('You are over 18 years of age.')}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You are not resident in a restricted country such as Canada, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, the United Arab Emirates, the USA, or any other restricted country that has been identified by the FATF as having strategic deficiencies.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have sufficient experience and knowledge in matters of such trading to be capable of evaluating the merits and risks of acquiring trades via Deriv and has done so without relying on any information offered on Deriv.',
                                    )}
                                </TncListText>
                            </li>
                        </StyledOrder>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>{localize('Account closure')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'You may choose to close your account yourself or by contacting Us. You can only close your account and withdraw any pending funds if you do not have any open trade positions and have complied with the requested "Know Your Client" procedures.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'If you do not comply with the conditions of using Deriv, We may cancel your account and withhold any funds accumulated in it.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('E. Trades')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We do not provide a marketplace for investments, securities, derivatives, or speculations. Each trade that you purchase on Deriv is an individual agreement between you and Us and is not a security, nor is it transferable, negotiable, or assignable to, or with, any third party.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Acquisition of trades through Deriv must be effected in accordance with the terms and conditions presented. Acquisition of a trade is completed when the trade has been customised, the premium (or the payout, as the case may be) has been calculated, and payment has been verified.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>{localize('Rules and Restrictions')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'We may impose certain rules and restrictions on the placing of market orders on Deriv. Such rules may change from time to time according to market conditions and other factors. The following indicative rules are currently in place:',
                            )}
                        </TncListText>
                        <StyledOrder type="lower-roman">
                            <li>
                                <TncListText>
                                    {localize(
                                        'Trades are not usually offered at odds under 0.05 to 1 (i.e. payouts of under USD/GBP/EUR/AUD 1.05 for each USD/GBP/EUR/AUD 1 staked).',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Trades are not usually offered in the last hour of trade of any given market (for foreign exchange markets, the restriction may be extended up to three hours).',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Trades are not usually offered when the underlying market is at its intraday high or intraday low.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Trades are not usually offered during the first 10 minutes of market trade.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'During fast markets (i.e. periods of very fast market movements), trades may be offered at prices more unfavourable than those offered in usual market conditions.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Certain limits are imposed as to the acceptable levels for barrier/strike prices of trades. Typically, the barrier/strike may not be too close nor too far from the current underlying market level.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Some trades may not expire on a weekend; therefore, the expiry date of a trade may be pushed back to the following Monday if a trade expiry date falls on a Saturday or a Sunday.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Market prices are updated at most once per second. For any given second, the market price will be updated to the first tick, if any, received in that particular second on Our data feed.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'We do not guarantee the ability to sell a trade prior to its expiration time.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'Time restrictions are imposed on the availability of certain trades.',
                                    )}
                                </TncListText>
                            </li>
                        </StyledOrder>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'The following are conditions of using Deriv:',
                            )}
                        </TncListText>
                        <StyledOrder type="lower-roman">
                            <li>
                                <TncListText>
                                    {localize(
                                        "If you are employed in the banking and/or finance sector, you must not conduct trades through Deriv unless your employer is aware of your trading and the practice is not against your employer's policies.",
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You agree to comply with Our reasonable requests so We can verify your compliance with this term.',
                                    )}
                                </TncListText>
                            </li>
                        </StyledOrder>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>{localize('Payouts')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'We shall determine trade payouts by reference to the market quotes as displayed on Deriv relevant to the underlying index(ices) of the trade(s) or from the interbank trading data that We receive for forex quotes or commodity prices as displayed on Deriv. You should note that different markets may close at different times during the day due to local trading hours and time zones.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'For forex quotes, We define the closing times as shown in the Market opening times section of Deriv. In the event of any dispute regarding market or settlement values, Our decision shall be final and binding. You should note that certain markets (such as indices) are not open throughout the day and that trading may not be available when the markets are closed.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'We shall use Our best estimate of market price movements and the expected level of interest rates, implied volatilities, and other market conditions during the life of the financial trade to calculate the price that you will pay (or the payout that you will receive) for financial trades on Deriv at the time that the financial trade is purchased or sold. The calculation is based on complex mathematics and includes a bias in Our favour. The financial trade prices (or the payout amounts) that We offer you when you are speculating on the market or index prices may substantially differ from prices available in the primary markets where commodities or trades thereupon are traded, which is due to the bias favouring Us in the price calculation system referred to above.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'The charting data that We provide is indicative only and may at times differ from real market values. Our decision as to the calculation of a financial trade price will be final and binding. We allow the option to sell trades before the expiry time of some trades, but We are not obliged to do so and can suspend this option depending on the current market conditions. Trades may be amended when the underlying asset value is adjusted by corporate actions during the trade period.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>{localize('Manifest Error')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'In deciding whether an error is a Manifest Error, We may take into account any relevant information, including the state of the underlying market at the time of the error and any error within, or lack of clarity of, any information source or pronouncement. You have a duty to report to Us any such problems, errors, or suspected system inadequacies that you may experience and may not abuse or arbitrage such system problems or errors for profit. We will endeavour to resolve any such difficulties in the shortest time possible.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Any amendments to the contractual terms of Manifestly Erroneous trades shall be reasonable and fair and may involve closing and/or opening of positions, placing/deleting Orders without your involvement, making changes in Open Positions, deleting trades from trading history, etc. Monies exchanged between you and Us in connection with the Manifestly Erroneous trades shall be returned to the recipient according to the amendments made to the contractual terms and conditions of this agreement.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
            <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
                {localize('F. Client funds')}
            </StyledHeader>
            <StyledOrder type="decimal">
                <li>
                    <TncListText>
                        {localize(
                            'The money you give Us is not invested in any securities, futures, currencies, derivatives or other investments on your behalf.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We have various deposit methods available, each with their own processing times. Some methods may not be available for withdrawal. Full details of available methods for deposits and withdrawals, including settlement times, can be seen here.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You should not use your account as a banking facility and should only make deposits with a view to using funds to place trades. We are not a financial institution, and you will not receive interest on deposits.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We hold client funds in bank accounts that are separate from the operational accounts, and We have arranged so that the assets in your account will be returned to you in the event of insolvency.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Internal currency transfers between accounts are allowed up to a maximum of USD 2,500 or equivalent and are subject to a currency conversion fee. Transfers are allowed between any available currency pair.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
                {localize('G. Fraud and money laundering')}
            </StyledHeader>
            <StyledOrder type="decimal">
                <li>
                    <TncListText>
                        {localize(
                            'You shall not use Deriv for the purpose of money laundering.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We use best-practice anti-money laundering procedures. Funds that originate from criminal activity are not accepted. We are bound to report suspicious transactions to relevant authorities.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'All transactions are checked to prevent money laundering, which may have several effects on you such as:',
                        )}
                    </TncListText>
                    <StyledOrder type="lower-alpha">
                        <li>
                            <TncListText>
                                {localize(
                                    'You must complete the account opening form and provide all requested details to establish your identity, such as valid identification, address, email address, and personal telephone number.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'Withdrawals may only be paid to the account holder. You must ensure that all necessary details are provided to enable Us to process the withdrawal to the payment method selected.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize('You must register personally.')}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'You shall not hold or pool third-party funds into your own account that you hold with Us.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'It is prohibited to sell, transfer, and/or acquire accounts to/from other clients. Transfer of funds among other clients is also prohibited.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'No withdrawals and/or refunds may be collected on accounts opened under false names or on multiple accounts opened by the same person.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'We may, at Our sole discretion or as required by regulation, conduct appropriate "Know Your Customer" (KYC) procedures and ask you to provide proof of identity (such as a notarized copy of passport or other means of identity verification as We judge to be necessary), and We may suspend an account until satisfactory identification information, evidence of identity and address, source of funds, and/or source of wealth have been provided.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'You agree that We may use the personal information that you provide to conduct appropriate anti-fraud checks. The personal information that you provide may be disclosed to a credit reference or fraud prevention agency, which may keep a record of that information.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'We have the discretion to request information from you to verify your compliance with these terms. If you do not comply with Our reasonable request for information, We may cancel your account and withhold any funds accumulated in it.',
                                )}
                            </TncListText>
                        </li>
                    </StyledOrder>
                </li>
            </StyledOrder>
            <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
                {localize('H. Our rights')}
            </StyledHeader>
            <StyledOrder type="decimal">
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to suspend the operation of Deriv or some of its sections in the following cases:',
                        )}
                    </TncListText>
                </li>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'When, as a result of political, economic, military, or monetary events (including unusual market volatility or illiquidity) or any circumstances outside Our control, responsibility, and power, Deriv’s continued operation  is not reasonably practicable without materially and adversely affecting and prejudicing your or Our interests, or if, in Our opinion, a price cannot be calculated for financial trades',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'When there is a breakdown in the means of communication normally employed in determining the price or value of any of the financial trades or where the price or value of any of the financial trades cannot be promptly or accurately ascertained',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'In any event of an error in current prices, published odds, or trading software',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
                <li>
                    <TncListText>
                        {localize(
                            'We have and retain the right to terminate any event or trade, including but not limited to the occurrence of any of the above events.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to make changes to these terms and conditions. Any change to the terms and conditions made whilst Deriv is in operation will not apply retrospectively and will only apply to acquisitions of trades made after such a change. If any material changes to these terms and conditions are made, you will be notified in advance and shall either accept or decline to agree. If you decline to agree, your account may be frozen, suspended, or cancelled. You shall be allowed to withdraw any pending balance on account, subject to KYC verification. In such an event, We may at Our sole discretion close out your open trades at prices We consider fair and reasonable.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to adjust your account if any trade results in disruption or in case of a miscarried or aborted trade.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Although We have and retain all rights to refuse to do business with you and close your account, We warrant that all contractual obligations that are already made shall be honoured.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to void or amend the contractual terms of any transactions that We reasonably believe are entered into at prices that do not reflect fair market prices or that are entered into at an abnormally low level of risk due to an obvious or palpable error (a “Manifest Error”).',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right, in Our sole discretion, to refuse and/or cancel services, refuse and/or reverse the trades of, and charge deposit and/or withdrawal fees to anyone for any reason, including but not limited to the following:',
                        )}
                    </TncListText>
                </li>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'Any instance where We believe that your activity on Deriv may be illegal in your country or state or that it may contravene any laws, regulations, instruments, ordinances, or rules that govern the operation of any exchange, financial market, or financial regulatory environment',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Any instance where We may be approached or contacted by legal authorities or regulators from your country or state',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Any instance where We may suffer any pecuniary, fiscal, or regulatory disadvantage because of your activities on Deriv',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
                <li>
                    <TncListText>
                        {localize(
                            'We have the right to prohibit you from trading on Deriv if you have insider knowledge of any financial market or instrument.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to refuse to do business with you, to discontinue to do business with you, and to reverse your transactions if you do not accept or adhere to the anti-money laundering processes.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We have the right and obligation not to accept the information you have provided if We know or have a reason to believe that it is incorrect, inaccurate, or incomplete. In such cases, We may ask you to clarify or correct the details provided.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to make corrections to interbank trading data in the event of mispriced or typographically incorrect data.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Should a disruption occur in the data feeds that We cannot readily rectify, We reserve the right to refund the trade purchase.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to cancel/prohibit the use of deposit bonus and/or free bonus promotions at Our own discretion at any time.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If your account has no transaction recorded for over 12 months, We reserve the right to charge you a dormant fee of up to USD/EUR/AUD/GBP 25, or equivalent of USD 25 in any other currency as calculated in accordance with the current exchange rate published by www.xe.com or any other recognised data provider as on the date of charging of the fee, and repeat doing so every six months for as long as your account remains dormant.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'If you make repeated deposits and withdrawals without placing commensurate trades, We reserve the right to pass on to your account, without prior notice, any bank charges that We have incurred before closing your account.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We reserve the right to have risk limits in place, which affect your trading limits and may not be restricted solely to instruments and trade types. We may also impose volume trading limits on your account at Our sole discretion. Trading volume limits can be viewed in the Security & limits section of your account. If your account balance exceeds your maximum account size, please make withdrawals to bring the balance below this limit.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'We do not tolerate any form of inappropriate behaviour. This includes the usage of offensive language. We reserve the right to terminate or restrict your account if there is any form of inappropriate behaviour on your part.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
                {localize('I. Liability')}
            </StyledHeader>
            <StyledOrder type="decimal">
                <li>
                    <TncListText>{localize('Our liability')}</TncListText>
                </li>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'Except in the case of Our negligence, fraud, or default, We will not be liable in any way to you in the event of force majeure, or for the act of any government or legal authority, or for the failure of or damage or destruction to Our computer systems, data, or records, or any part thereof, or for delays, losses, errors, or omissions resulting from your failure in, or mismanagement of, any telecommunications, computer equipment, or software or any damages or losses deemed or alleged to have resulted from, or been caused by, Deriv or its content.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Any information given on these pages and/or related emails or newsletters that We have sent you is not intended as financial or investment advice, and We will not accept any liability in this respect.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'Neither We nor any of Our directors, officers, managers, employees, or agents shall be liable for any loss, damage, or debt to you that has arisen directly or indirectly out of or in connection with this agreement.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
                <li>
                    <TncListText>{localize('Your liability')}</TncListText>
                    <StyledOrder type="lower-alpha">
                        <li>
                            <TncListText>
                                {localize(
                                    'You agree to be fully and personally liable for the due settlement of every transaction into which you enter, using your account with Us.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'You are responsible for ensuring that you alone control access to the account and that no minors are granted access to trading on Deriv.',
                                )}
                            </TncListText>
                        </li>
                        <li>
                            <TncListText>
                                {localize(
                                    'You also indemnify Us against all costs and losses of any kind whatsoever as may be incurred by Us as a result, direct or indirect, of your failure to comply with any and all of your obligations set forth in this agreement and/or Our enforcement against you of any and all of Our rights under this agreement.',
                                )}
                            </TncListText>
                        </li>
                    </StyledOrder>
                </li>
            </StyledOrder>
            <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
                {localize('K. Force Majeure')}
            </StyledHeader>
            <StyledOrder type="decimal">
                <li>
                    <TncListText>
                        {localize(
                            'No party shall be deemed liable for any failure to meet its obligations under this agreement if it is prevented from performing those obligations by an event of Force Majeure. Force Majeure events are events beyond the control of either of the parties and are not reasonably foreseen; they materially affect the performance of any of the parties’ obligations under this agreement. Force Majeure events may include but are not limited to acts of God, war, state or governmental actions, exchange controls, nationalisations, devaluations, forfeitures, natural disasters, terrorism, and other inevitable, unforeseeable, unanticipated, and unpredicted events that are not dependent upon the will of the parties.',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
        </StyledOrder>
    </StyledSection>
)

export const DataFeed = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Data feed')}
        </Header>
        <TncText>
            {localize(
                'Here is some information about the data feeds used by the Company.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Differences with other data feeds')}
        </StyledHeader>
        <TncText>
            {localize(
                "The Company's data feed may at times differ slightly from other data feeds found on the Internet (who may themselves differ from each other). Reasons for differences in feed providers include:",
            )}
        </TncText>
        <TncText>
            {localize(
                "For forex: The forex market is an OTC (over the counter) market, where banks and other major financial institutions trade currencies amongst themselves without there being any central clearing house. Accordingly, there is no 'official' price source for forex quotes. Different data feeds will contain quotes from a different sub-set of international banks. Accordingly, prices may differ among providers, depending on which bank(s) they obtain prices from.",
            )}
        </TncText>
        <TncText>
            {localize(
                "Market-closing times: The client is asked to refer to Trading times page for the exact time of settlement for all contracts. Other websites may adopt a different convention (for example, some websites choose 4 o'clock NY time or 5 o'clock London time). As a result, the open, high, low, and closing prices displayed on the Company's website may differ from those on other websites, due to the market-closing time convention.",
            )}
        </TncText>
        <TncText>
            {localize(
                "Use of bid/ask prices: When the market is illiquid, the data feed may contain many bid and ask prices, without there actually being any traded price for quite a while. By taking an average of the bid/ask price (i.e. bid + ask, divided by 2), a market quote is generated that reflects the current market, without it actually being a traded price. The Company's system will generate prices from these bid and ask prices, whereas other websites might not. As a result, the Company's website might display ticks that do not appear in the data feeds of other websites.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company's data feed is designed to be one of the best and most robust available for a trading environment.",
            )}
        </TncText>
    </StyledSection>
)

export const SecurityAndPrivacy = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Security and privacy')}
        </Header>
        <TncText>
            {localize(
                "The Company recognises the importance of protecting the client's personal and financial information.",
            )}
        </TncText>
        <TncText>
            {localize(
                "All the information that the Company obtains about the client assists the Company in servicing the client and the client's account. The Company knows that the client may be concerned about what the Company does with this information.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company has outlined the Company's privacy practices for the client as follows:",
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Use of information')}
        </StyledHeader>
        <TncText>
            {localize(
                'The Company operates in full compliance with the General Data Protection Regulation (GDPR) and other applicable Data Protection laws. These regulatory measures place obligations on users of personal data like the Company. They also lay down the principles for fair and lawful processing of all the information that the Company acquires.',
            )}
        </TncText>
        <TncText>
            {localize(
                "It is the Company's commitment to safeguard the client's privacy online at all times. The Company only uses the client's personal information to help the Company service the client's account, to improve the Company's services to the client, and to provide the client with products that the client has requested. The Company does not sell the client's personal information to third parties, but the Company may provide it to payment providers to facilitate transactions on the client's account.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The client's personal information is used primarily as a way of validating the client as the legitimate account owner and proper recipient of withdrawal payments. The Company also uses this information to process the client's trades. The Company collects from the client all personal and financial data directly relating to the client when the client fills in the Company's account opening form. In all instances, the client has either a legal or a contractual obligation to provide the Company with the information. If such information is not provided, the Company will be unable to provide the client with its services.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company reserves the right to request further information from the client whenever deemed appropriate under the circumstances. For example, the Company may ask the client to send the Company additional acceptable documents to confirm the authenticity of the client's account details or of any withdrawal request.",
            )}
        </TncText>
    </StyledSection>
)

export const ConflictsPolicy = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the Conflicts policy')}
        </Header>
        <TncText>
            {localize(
                'The Company provides here a summary of the policy that the Company maintains in order to manage conflicts of interest in respect of the duties that the Company owes to clients.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('General')}
        </StyledHeader>
        <TncText>
            {localize(
                "Due to the nature of the Company's business as a trading counterparty, the Company's profits are tied to the net revenue generated by clients through trading. However, the Company aims to establish, maintain, and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to the interests of clients.",
            )}
        </TncText>
        <TncText>
            {localize(
                'Due to the high degree of risk involved, which could result in the loss of the entire investment, the Company has adequate internal procedures in place to ensure that the client is in all cases treated fairly and that the risk of damage to client interests will be mitigated.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize("The Company's policy")}
        </StyledHeader>
        <TncText>
            {localize(
                "The Company aims to keep a record of the kinds of activity that the Company carries on in which a material conflict could arise or has arisen. The Company also maintains procedures to manage actual or potential conflicts. This includes procedures to maintain appropriate independence among members of the Company's staff who are involved in potentially conflicting activities. Such independence-upholding procedures can be followed, for example, through the operation of information barriers, physical separation of staff, the segregation of duties and responsibilities, and the maintenance of a policy of independence, which requires the Company's staff, when providing services to a client, to act in the best interests of the client and to disregard any conflicts of interest, or in some circumstances, to decline to act for a client or potential client in order to avoid conflicts of interest.",
            )}
        </TncText>
    </StyledSection>
)

export const Copyright = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Copyright')}
        </Header>
        <TncText>
            {localize(
                'The Deriv.com website is protected by certain copyrights.',
            )}
        </TncText>
        <TncText>
            {localize(
                'The materials comprising the Deriv.com website (including without limitation all articles, text, images, logos, compilation, systems, code, and design) are under Copyright 1999-2019 Binary Group of companies with all rights reserved.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Such materials may be copied and distributed on a limited basis for noncommercial purposes only, provided that any material copied remains intact and that all copies include the following notice in a clearly visible position: “Copyright 1999-2019 Binary Ltd. All rights reserved.”',
            )}
        </TncText>
        <TncText>
            {localize(
                'These materials may not be copied or redistributed for commercial purposes or for compensation of any kind without prior written permission from a Binary Group company.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Deriv.com and the bull/bear logo are registered trademarks.',
            )}
        </TncText>
    </StyledSection>
)

export const ComplaintsAndDisputes = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Complaints and disputes')}
        </Header>
        <TncText>
            {localize(
                "If the client would like to file a complaint with regards to the Company's service, the client can contact the Company at complaints@deriv.com, providing any relevant details relating to the client's complaint. The Company will investigate the client's enquiry and a response will be given. The Company usually provides a final response within 15 working days from receipt of all relevant details.",
            )}
        </TncText>
    </StyledSection>
)

export const RiskDisclaimer = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Risk disclaimer')}
        </Header>
        <TncText>
            {localize(
                'This notice provides the client with information about the risks associated with the contracts the client may purchase through services provided by Binary.com services.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Binary Group members are sometimes referred to collectively as "Binary.com" or "the Company".',
            )}
        </TncText>
        <TncText>
            {localize(
                "This notice does not explain all of the risks involved in investments or similar products or how such risks relate to the client's personal circumstances. It is important that the client fully understand the risks involved before making a decision to enter into a trade with the Company.",
            )}
        </TncText>
        <TncText>
            {localize(
                "If the client chooses to enter into a contract with the Company, it is important that the client remains aware of the risks involved, that the client has adequate investment resources to bear such risks, and that the client monitors the client's positions carefully.",
            )}
        </TncText>
    </StyledSection>
)

export const OrderExecution = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the order execution policy')}
        </Header>
        <TncText>
            {localize(
                "The Company has a general duty to conduct its business with the client honestly, fairly, and professionally and to act in the client's best interests when opening and closing Binary Options trades with the client.",
            )}
        </TncText>
        <TncText>
            {localize(
                "More specifically, when the Company enters into a Binary Option trade with the client (each, a \"Contract\"), the Company has a duty to provide the client with 'best execution'. Best execution means that the Company must take reasonable steps to obtain the best possible result for the client when executing a client order. This document provides a summary of the Company's best execution policy.",
            )}
        </TncText>
        <TncText>
            {localize(
                'This policy applies to clients classified as retail or professional. Clients classified as eligible counterparties are outside the scope of this policy.',
            )}
        </TncText>
    </StyledSection>
)

export const PaymentAgents = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Payment agents terms and conditions')}
        </Header>
        <StyledHeader as="h4" weight="500" margin={{ top: '2rem' }}>
            {localize('A. Scope of agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement is between Deriv (SVG) Ltd (hereinafter referred to as "the Company" or "Deriv.com") and Payment Agent (hereinafter referred to as "the Agent"), both of whom agree to be bound by this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The Company and the Agent (hereinafter referred to as "the Parties") desire to enter into this agreement whereby the Company will offer to its clients local payment processing services through the Agent within a territory as specified in Section D of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. General')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement constitutes the entire agreement between the Parties and no earlier representation, arrangement, or agreement, whether written or oral, relating to any matter dealt with in this agreement between the Parties, shall have any force or effect before the Commencement Date.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'This agreement is supplied to the Agent in English. In the event that there is a difference between the English version and any translated versions of this document, the English version shall prevail. The Company shall not be liable for any loss or damage whatsoever caused by an error, inaccuracy, or misspelling and, as a result, by misunderstanding or misinterpretation of any of the terms or conditions or clauses or provisions of any translated versions of this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Each Party shall do anything reasonably required by the other Party to give effect to the provisions of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
