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
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import { Localize, localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))
import { DerivStore } from 'store'

type StockIndicesProps = {
    simple_step_content: SimpleStepsContent[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="Why trade synthetic indices on Deriv" />}
                text={
                    <Localize translate_text="Deriv’s proprietary synthetic indices simulate real-world market movements. Backed by a cryptographically secure random number generator, these indices are available to trade 24/7 and are unaffected by regular market hours, global events, or market and liquidity risks." />
                }
            >
                {synthetic_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_content={is_eu_country ? synthetic_cfds_eu : synthetic_cfds} />}
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('synthetic indices')}
                        options_list={synthetic_options}
                    />
                }
                Multipliers={
                    <Multipliers
                        is_crypto
                        market_content={
                            is_eu_country ? synthetic_multiplier_eu : synthetic_multiplier
                        }
                    />
                }
                display_title={
                    <Localize translate_text="Synthetic indices trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading synthetic indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="synthetic_indices" />
        </div>
    )
}

export default StockIndices
