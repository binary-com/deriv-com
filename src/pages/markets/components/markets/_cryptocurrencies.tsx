import React, { ReactElement } from 'react'
import Loadable from '@loadable/component'
import { navigate } from 'gatsby'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import { crypto_cfds } from '../../static/content/_cfds'
import { crypto_multiplier } from '../../static/content/_multipliers'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import { StyledBox } from '../../static/style/_markets-style'
import { Localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread-new.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs-new.svg'
import ZeroCommission from 'images/svg/markets/zero-commission-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import { NonUK } from 'components/containers/visibility'
import { useCountryRule } from 'components/hooks/use-country-rule'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CryptocurrenciesProps = {
    simple_step_content: SimpleStepsContent[]
}

type CryptoContent = {
    src: string
    text: ReactElement
}

const Cryptocurrencies = ({ simple_step_content }: CryptocurrenciesProps) => {
    const { is_uk_eu, is_uk } = useCountryRule()
    const crypto_content: CryptoContent[] = [
        {
            src: Leverage,
            text: is_uk_eu ? (
                <Localize translate_text="_t_1:2 leverage_t_" />
            ) : (
                <Localize translate_text="_t_1:100 leverage_t_" />
            ),
        },
        {
            src: TightSpread,
            text: <Localize translate_text="_t_Tight spreads_t_" />,
        },
        {
            src: CryptoPairs,
            text: <Localize translate_text="_t_25+ crypto pairs_t_" />,
        },
        {
            src: ZeroCommission,
            text: <Localize translate_text="_t_Zero commission_t_" />,
        },
    ]

    if (is_uk) {
        navigate('/404/')
    }

    return (
        <NonUK>
            <WhyTrade
                header={<Localize translate_text="_t_Why trade cryptocurrencies on Deriv_t_" />}
                text={
                    <Localize translate_text="_t_Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies._t_" />
                }
            >
                {crypto_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    ></StyledBox>
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_content={crypto_cfds} />}
                Multipliers={<Multipliers market_content={crypto_multiplier} is_crypto={true} />}
                display_title={
                    <Localize translate_text="_t_Cryptocurrency trades available on Deriv_t_" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="_t_Start trading cryptocurrencies on Deriv in 3 simple steps_t_" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="cryptocurrencies" />
        </NonUK>
    )
}

export default Cryptocurrencies
