import React from 'react'
import PropTypes from 'prop-types'
import { WhyTrade } from '../_why-trade'
// TODO: active when design was ready
// import { LearnMore } from '../_learn-more'
import OtherMarkets from '../_other-markets.js'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import Multipliers from './_multipliers.js'
import SimpleSteps from 'common/_simple-steps'
import { localize } from 'components/localization'
//SVG
import FriendlySupport from 'images/svg/friendly-support.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Leverage from 'images/svg/leverage.svg'

// const what_trade_sub_header = [
//     {
//         text: localize(
//             'Foreign exchange, otherwise known as forex or FX, is the buying and selling of currencies. Where the primary purpose for this exchange is gaining profit from changes in the relative values of currencies on the forex market, we call it forex trading.',
//         ),
//     },
//     {
//         text: localize(
//             'Trading forex has several benefits including round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunity to trade on world events.',
//         ),
//     },
// ]
// TODO: active when design was ready
// const learn_more_data = [
//     {
//         header: localize('Torquatos nostros quos dolores suscipiantur'),
//         text: [localize('test1-1'), localize('test1-2')],
//     },
//     {
//         header: localize('Alii autem quibus ego'),
//         text: [localize('test2-1'), localize('test2-2')],
//     },
//     {
//         header: localize('Alii autem, quibus ego assentior, cum a natura?'),
//         text: [localize('test3-1'), localize('test3-2')],
//     },
//     {
//         header: localize('At vero eos censes tantas'),
//         text: [localize('test4-1'), localize('test4-2')],
//     },
// ]

const Forex = ({ simple_step_content }) => {
    simple_step_content[1].text =
        'Open a real account, make a deposit, and start trading forex and other markets. '
    // const learn_more_section = useRef(null)
    return (
        <>
            <WhyTrade
                header={localize('Why trade forex on Deriv')}
                text={localize(
                    'Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.',
                )}
            >
                <div text={localize('High leverage, tight spreads')} icon={<Leverage />}></div>
                <div
                    text={localize('Responsive, easy-to-use platforms')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div text={localize('Advanced charting widgets')} icon={<AdvancedCharting />}></div>
                <div
                    text={localize('Convenient deposit and withdrawal methods')}
                    icon={<Deposit />}
                ></div>
                <div
                    text={localize('Friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            {/* <WhatTrade
                sub_header={what_trade_sub_header}
                header={localize('What is forex?')}
                learn_more_section={learn_more_section}
            /> */}

            <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
                Multipliers={Multipliers}
                name="Forex"
            />
            <SimpleSteps
                header={localize('Start trading forex on Deriv in 3 simple steps')}
                content={simple_step_content}
                sign_up
            />
            {/* TODO: active when design was ready */}
            {/* <div ref={learn_more_section}>
                <LearnMore data={learn_more_data} header={localize('Learn more about forex')} />
            </div> */}
            <OtherMarkets except="forex" />
        </>
    )
}
Forex.propTypes = {
    simple_step_content: PropTypes.array,
}
export default Forex
