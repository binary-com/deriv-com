import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades.js'
import crypto_content from '../../static/content/_cryptocurrencies'
import { crypto_margin } from '../../static/content/_margin'
import { crypto_multiplier } from '../../static/content/_multipliers'
import Margin from '../sub-markets/_margin'
import Multipliers from '../sub-markets/_multipliers'
import { Localize } from 'components/localization'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const Cryptocurrencies = ({ simple_step_content }) => {
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade cryptocurrency on Deriv" />}
                text={
                    <Localize translate_text="Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies." />
                }
            >
                {crypto_content.map((content, index) => (
                    <div
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
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
