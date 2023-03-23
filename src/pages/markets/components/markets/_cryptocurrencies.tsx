import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import { crypto_cfds } from '../../static/content/_cfds'
import { crypto_multiplier } from '../../static/content/_multipliers'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread-new.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs-new.svg'
import ZeroCommission from 'images/svg/markets/zero-commission-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import useRegion from 'components/hooks/use-region'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type CryptocurrenciesProps = {
    simple_step_content: SimpleStepContentElement[]
}

type CryptoContent = {
    src: string
    text: string
    alt: string
}

const Cryptocurrencies = ({ simple_step_content }: CryptocurrenciesProps) => {
    const { is_eu } = useRegion()
    const { is_deriv_go } = usePlatformQueryParam()

    const crypto_content: CryptoContent[] = [
        {
            src: Leverage,
            text: is_eu ? localize('_t_1:2 leverage_t_') : localize('_t_1:100 leverage_t_'),
            alt: 'Leverage',
        },
        {
            src: TightSpread,
            text: localize('_t_Tight spreads_t_'),
            alt: 'Spreads',
        },
        {
            src: CryptoPairs,
            text: localize('_t_25+ crypto pairs_t_'),
            alt: 'Crypto currency pairs',
        },
        {
            src: ZeroCommission,
            text: localize('_t_Zero commission_t_'),
            alt: 'Commission',
        },
    ]

    return (
        <>
            <WhyTrade header="_t_Why trade cryptocurrencies on Deriv_t_">
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
                display_title="_t_Cryptocurrency trades available on Deriv_t_"
            />
            <SimpleSteps
                header="_t_Start trading cryptocurrencies on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarkets except="cryptocurrencies" />}
        </>
    )
}

export default Cryptocurrencies
