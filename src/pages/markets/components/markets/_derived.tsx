import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import synthetic_content from '../../static/content/_synthetic'
import { derived_content } from '../../static/content/_derived'
import { derived_fx_cfds, synthetic_cfds_eu } from '../../static/content/_cfds'
import { synthetic_multiplier_eu } from '../../static/content/_multipliers'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import { StyledBox } from '../../static/style/_markets-style'
import { Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type DerivedProps = {
    simple_step_content: SimpleStepsContent[]
}
const Derived = ({ simple_step_content }: DerivedProps) => {
    const { is_row } = useCountryRule()
    const description = is_row ? (
        <Localize translate_text="Derived FX gives you the opportunity to trade on simulated assets based on major forex pairs at the volatility of your choice.Our advanced algorithms track real - world currency prices and dampen the fluctuations caused by market sentiment and unexpected news events." />
    ) : (
        ''
    )
    const header = is_row ? (
        <Localize translate_text="Why trade Derived FX on Deriv" />
    ) : (
        <Localize translate_text="Why trade derived on Deriv" />
    )
    const simple_steps_header = is_row ? (
        <Localize translate_text="Start trading Derived FX on Deriv in 3 simple steps" />
    ) : (
        <Localize translate_text="Start trading Derived on Deriv in 3 simple steps" />
    )
    const display_title = is_row ? (
        <Localize translate_text="Derived FX trades available on Deriv" />
    ) : (
        <Localize translate_text="Derived trades available on Deriv" />
    )
    const market_content = is_row ? derived_content : synthetic_content

    return (
        <>
            <WhyTrade description={description} header={header}>
                {market_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    />
                ))}
            </WhyTrade>
            {is_row ? (
                <AvailableTrades
                    CFDs={<CFDs market_content={derived_fx_cfds} />}
                    display_title={display_title}
                />
            ) : (
                <AvailableTrades
                    CFDs={<CFDs market_content={synthetic_cfds_eu} />}
                    Multipliers={<Multipliers is_crypto market_content={synthetic_multiplier_eu} />}
                    display_title={<Localize translate_text="Derived trades available on Deriv" />}
                />
            )}
            <SimpleSteps header={simple_steps_header} content={simple_step_content} sign_up />
            <OtherMarkets except="derived" />
        </>
    )
}

export default Derived
