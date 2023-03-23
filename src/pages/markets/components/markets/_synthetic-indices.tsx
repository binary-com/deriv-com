import React from 'react'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import synthetic_content from '../../static/content/_synthetic'
import { synthetic_cfds, synthetic_cfds_eu } from '../../static/content/_cfds'
import { synthetic_multiplier, synthetic_multiplier_eu } from '../../static/content/_multipliers'
import { synthetic_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))
import useRegion from 'components/hooks/use-region'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type StockIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_eu } = useRegion()
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <div>
            <WhyTrade
                description="_t_Deriv’s proprietary synthetics simulate real-world market movements. Backed by a cryptographically secure random number generator, these indices are available to trade 24/7 and are unaffected by regular market hours, global events, or market and liquidity risks._t_"
                header="_t_Why trade synthetics on Deriv_t_"
            >
                {synthetic_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={
                    <CFDs
                        market_content={is_eu ? synthetic_cfds_eu : synthetic_cfds}
                        market_tab_name={'synthetic-indices'}
                    />
                }
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('_t_synthetics_t_')}
                        options_list={synthetic_options}
                    />
                }
                Multipliers={
                    <Multipliers
                        is_crypto
                        market_content={is_eu ? synthetic_multiplier_eu : synthetic_multiplier}
                    />
                }
                display_title="_t_Synthetics trades available on Deriv_t_"
            />
            <SimpleSteps
                header="_t_Start trading synthetics on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarkets except="derived" />}
        </div>
    )
}

export default StockIndices
