import React from 'react'
import { StyledSection, TncText, StyledHeader } from './_styles'

import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

export const RiskDisclaimer = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Risk disclaimer')}
        </Header>
        <TncText>
            {localize(
                'This notice provides you with information about the risks associated with the investment contracts that you may purchase through the services that We provide. We provide a wide range of products, including trades relating to foreign exchange, indices, etc.',
            )}
        </TncText>
        <TncText>
            {localize(
                'This notice does not explain all of the risks involved in investments or similar products or how such risks relate to your personal circumstances. ',
            )}
        </TncText>
        <TncText>
            {localize(
                'If you choose to enter into a trade with Us, it is important that you remain aware of the risks involved, have adequate investment resources to bear such risks, and monitor your positions carefully. You should make careful considerations independently, both prior to applying to engage in trade with Deriv and prior to making any individual order.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('General risks')}
        </StyledHeader>
        <StyledHeader as="h5" weight="500">
            {localize('No advice')}
        </StyledHeader>
        <TncText>
            {localize(
                'Our services are provided on an execution-only basis. We do not provide investment advice in relation to Our products or services. We sometimes provide factual information or research recommendations about a market, information about transaction procedures, and information about the potential risks involved and how those risks may be minimised. However, it is ultimately your decision to use Our products or services.',
            )}
        </TncText>
        <TncText>
            {localize(
                'You are responsible for managing your tax and legal affairs, including making any regulatory filings and payments and complying with applicable laws and regulations. We do not provide any regulatory, tax, or legal advice. If you are in any doubt as to the tax treatment or liabilities of the products available on Deriv, you may wish to seek independent advice.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('Appropriateness')}
        </StyledHeader>
        <TncText>
            {localize(
                'During the application process, We may ask you for information about your background, experience, and investment assets and earnings. We do not monitor on your behalf whether the amount of money that you have sent Us or your profits or losses are consistent with that information. It is up to you to assess whether your investment resources are adequate for your investment activity with Us and your risk appetite in the products and services that you use.',
            )}
        </TncText>
        <StyledHeader as="h5" weight="500">
            {localize('Monitoring positions')}
        </StyledHeader>
        <TncText>
            {localize(
                'It is your responsibility to monitor all of your positions closely. During the period that you have any open contracts, you should always have the ability to access your accounts.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Trading risks')}
        </StyledHeader>
        <TncText>
            {localize(
                'You are advised that the trades offered by Deriv are not under the rules of any recognised, designated, or regulated exchange. Consequently, engaging in these trades may expose you to substantially greater risks than the investments that are so traded.',
            )}
        </TncText>
        <TncText>{localize('You are warned of the following risks:')}</TncText>
        <TncText>
            {localize(
                'Derivative investment instruments can be highly volatile. The prices of the underlying instrument that a Deriv trade refers to may fluctuate rapidly and over wide ranges and may reflect unforeseeable events or changes in conditions, none of which can be controlled by you or Us.',
            )}
        </TncText>
        <TncText>
            {localize(
                'We try to maintain a reasonable relation between the quoted prices of each underlying asset that a trade refers to and the actual market prices of such an asset. We make no warranty, expressed or implied, that the quoted prices represent prevailing market prices.',
            )}
        </TncText>
        <TncText>
            {localize(
                'We may have access to information that is not available to you, may have acquired trading positions at prices that are not available to you, and may have interests different from your interests. We do not undertake any obligation to provide you with market or other information that We possess, nor to alter or refrain from your own trading.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Information of the previous performance of any underlying instrument or asset does not guarantee its current and/or future performance. Past performance is not a reliable indicator of future results.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Risks of Investment Products')}
        </StyledHeader>
        <TncText>
            {localize(
                'Trading exposes you to the performance of the underlying or reference instrument or asset to which the trade refers, including foreign exchange, indices, and commodities, each of which have their own features and risks.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Exchange rate risk: Exchange rates between foreign currencies can change rapidly due to a wide range of economic, political, and other conditions, exposing you to the risk of exchange rate losses in addition to the inherent risk of loss from trading the underlying Investment Product. If you deposit funds in a currency to trade contracts denominated in a different currency, your gains or losses on the underlying investment may be affected by changes in the exchange rate between the currencies.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Other risks: There are other risks related to trading Investment Products and foreign currencies that cannot be described in detail in this document. Generally, however, securities, options, and currency transactions involve exposure to a combination of the following risk factors: market risk, credit risk, settlement risk, liquidity risk, operational risk, and legal risk. For example, there can be serious market disruptions if local or overseas economic, political, or other unforeseen events affect the market. In addition to these types of risk, there may be other factors such as accounting and tax treatment issues that you should consider.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Internet trading risks')}
        </StyledHeader>
        <TncText>
            {localize(
                'There are risks associated with utilising an Internet-based deal execution trading system, including, but not limited to, the failure of hardware, software, and Internet connection. Since We do not control signal power, its reception or routing via Internet, the configuration of your equipment, or the reliability of its connection, We cannot be responsible for communication failures, distortions, or delays during online trading.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Accuracy of information')}
        </StyledHeader>
        <TncText>
            {localize(
                'The content on this website is subject to change at any time without notice and is provided for the sole purpose of assisting traders in making independent investment decisions. We have taken reasonable measures to ensure the accuracy of the information on the website.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Costs and charges')}
        </StyledHeader>
        <TncText>
            {localize(
                'Any costs and charges for depositing and withdrawing money are set out here. Other charges incurred might include currency conversions, spreads, and commissions. You should be aware of all costs and charges that apply to you because they will affect your profitability.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Cryptocurrency risks')}
        </StyledHeader>
        <TncText>
            {localize(
                'Cryptocurrencies are volatile assets that are extremely vulnerable to market fluctuations. Trading in cryptocurrencies is a highly speculative investment because prices of cryptocurrencies can go up and down — potentially to a worthless (zero) value. You should not trade in cryptocurrencies unless you fully understand and are aware that trades and/or investments involving cryptocurrencies are complex and high risk in nature, and you not only risk incurring significant losses over a short period of time but also risk losing all of your invested capital.',
            )}
        </TncText>
        <TncText>
            {localize(
                'If you lose your cryptocurrencies as a result of cryptocurrency exchanges and wallet providers being hacked or becoming insolvent, there is no assurance of a recourse. It is your responsibility to store your cryptocurrencies securely. We will not accept liability for any loss or damage that arises, directly or indirectly, from the theft of your cryptocurrency or the insolvency of exchanges and wallet providers that you use.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Cryptocurrency-related transactions that occur on the blockchain might take place without the supervision and regulation of financial institutions and government agencies. The absence of an overarching authority overseeing cryptographic transactions means that there is no recourse to banks, payment service providers, or regulators in the event of erroneous or fraudulent transactions. It is your responsibility to check what rules and protections apply in your relevant jurisdiction before investing and/or trading in virtual currency and/or trading on contracts for difference relating to virtual currency. You should be aware of all the risks associated with cryptocurrency trading and seek advice from an independent financial advisor and/or legal advisor if you have any doubts.',
            )}
        </TncText>
    </StyledSection>
)
