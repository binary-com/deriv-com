import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import { derived_content } from '../../static/content/_derived'
import { derived_fx_cfds } from '../../static/content/_cfds'
import CFDs from '../sub-markets/_cfds'
import { StyledBox } from '../../static/style/_markets-style'
import { Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type DerivedProps = {
    simple_step_content: SimpleStepsContent[]
}
const Derived = ({ simple_step_content }: DerivedProps) => {
    return (
        <>
            <WhyTrade
                description={
                    <Localize translate_text="Derived FX gives you the opportunity to trade on simulated assets based on major forex pairs at the volatility of your choice. Our advanced algorithms track real-world currency prices and dampen the fluctuations caused by market sentiment and unexpected news events." />
                }
                header={<Localize translate_text="Why trade Derived FX on Deriv" />}
                text={
                    <Localize translate_text="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events." />
                }
            >
                {derived_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_content={derived_fx_cfds} />}
                display_title={<Localize translate_text="Derived FX trades available on Deriv" />}
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading Derived FX on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets />
        </>
    )
}

export default Derived
