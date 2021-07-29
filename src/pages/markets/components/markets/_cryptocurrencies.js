import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades.js'
import { crypto_margin } from '../../static/content/_margin'
import { crypto_multiplier } from '../../static/content/_multipliers'
import Margin from '../sub-markets/_margin'
import Multipliers from '../sub-markets/_multipliers'
import { Localize } from 'components/localization'
import TightSpread from 'images/svg/tight-spread.svg'
import CryptoPairs from 'images/svg/crypto-pairs.svg'
import ZeroCommission from 'images/svg/zero-commission.svg'
import Leverage from 'images/svg/leverage.svg'
import { DerivStore } from 'store'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const Cryptocurrencies = ({ simple_step_content }) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const crypto_content = [
        {
            src: Leverage,
            text: is_eu_country ? (
                <Localize translate_text="1:2 leverage" />
            ) : (
                <Localize translate_text="1:50 leverage" />
            ),
        },
        {
            src: TightSpread,
            text: <Localize translate_text="Tight spreads" />,
        },
        {
            src: CryptoPairs,
            text: <Localize translate_text="17+ crypto pairs" />,
        },
        {
            src: ZeroCommission,
            text: <Localize translate_text="Zero commission" />,
        },
    ]

    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade cryptocurrencies on Deriv" />}
                text={
                    <Localize translate_text="Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies." />
                }
            >
                {crypto_content.map((content, index) => (
                    <div key={index} text={content.text} icon={<img src={content.src} alt="" />} />
                ))}
            </WhyTrade>
            <AvailableTrades
                Margin={<Margin market_content={crypto_margin} />}
                Multipliers={<Multipliers market_content={crypto_multiplier} is_crypto={true} />}
                name="Cryptocurrency"
                display_title={
                    <Localize translate_text="Cryptocurrency trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading cryptocurrencies on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="cryptocurrencies" />
        </>
    )
}

Cryptocurrencies.propTypes = {
    simple_step_content: PropTypes.array,
}

export default Cryptocurrencies
