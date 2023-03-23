import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import { derived_content } from '../../static/content/_derived'
import { derived_fx_cfds } from '../../static/content/_cfds'
import CFDs from '../sub-markets/_cfds'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type DerivedProps = {
    simple_step_content: SimpleStepContentElement[]
}
const Derived = ({ simple_step_content }: DerivedProps) => {
    return (
        <>
            <WhyTrade
                description="_t_Derived FX gives you the opportunity to trade on simulated assets based on major forex pairs at the volatility of your choice. Our advanced algorithms track real-world currency prices and dampen the fluctuations caused by market sentiment and unexpected news events._t_"
                header="_t_Why trade Derived FX on Deriv_t_"
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
                CFDs={<CFDs market_content={derived_fx_cfds} market_tab_name={'derived-fx'} />}
                display_title="_t_Derived FX trades available on Deriv_t_"
            />

            <SimpleSteps
                header="_t_Start trading Derived FX on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="derived" />
        </>
    )
}

export default Derived
