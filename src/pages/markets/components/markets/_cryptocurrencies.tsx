import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { crypto_cfds } from '../../static/content/_cfds'
import { crypto_multiplier } from '../../static/content/_multipliers'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { localize, Localize } from 'components/localization'
import TightSpread from 'images/svg/markets/tight-spread-new.svg'
import CryptoPairs from 'images/svg/markets/crypto-pairs-new.svg'
import ZeroCommission from 'images/svg/markets/zero-commission-new.svg'
import Leverage from 'images/svg/stock-indices/stocks-high-leverage.svg'
import useRegion from 'components/hooks/use-region'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
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
            text: is_eu ? localize('1:2 leverage') : localize('1:100 leverage'),
            alt: '1 to 100 leverage',
        },
        {
            src: TightSpread,
            text: localize('Tight spreads'),
            alt: 'tight spreads',
        },
        {
            src: CryptoPairs,
            text: localize('30+ crypto pairs'),
            alt: 'Crypto currency pairs',
        },
        {
            src: ZeroCommission,
            text: localize('Zero commission'),
            alt: 'zero commission',
        },
    ]

    return (
        <>
            <AvailableTrades
                CFDs={<CFDs market_content={crypto_cfds} />}
                Multipliers={<Multipliers market_content={crypto_multiplier} is_crypto={true} />}
                display_title={
                    <Localize translate_text="Cryptocurrency trades available on Deriv" />
                }
            />
            <FullWidthMultiColumn
                header={<Localize translate_text="Why trade cryptocurrencies on Deriv" />}
            >
                {crypto_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img width="48px" height="48px" src={content.src} alt="" />}
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading cryptocurrencies on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarkets except="cryptocurrencies" />}
        </>
    )
}

export default Cryptocurrencies
