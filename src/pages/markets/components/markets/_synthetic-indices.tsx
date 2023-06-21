import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import synthetic_content from '../../static/content/_synthetic'
import { synthetic_cfds, synthetic_cfds_eu } from '../../static/content/_cfds'
import { synthetic_multiplier, synthetic_multiplier_eu } from '../../static/content/_multipliers'
import { accumulators } from '../../static/content/_accumulators'
import { synthetic_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import Accumulators from '../sub-markets/_accumulators'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { TradeDetails } from '../sections/_trade-details'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
import useRegion from 'components/hooks/use-region'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'

type StockIndicesProps = {
    simple_step_content: SimpleStepContentElement[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_eu } = useRegion()
    const { is_deriv_go, is_accumulators_released } = usePlatformQueryParam()

    return (
        <div>
            <TradeDetails
                description={
                    <Localize translate_text="Deriv’s proprietary synthetics simulate real-world market movements. Backed by a cryptographically secure random number generator, these indices are available to trade 24/7 and are unaffected by regular market hours, global events, or market and liquidity risks." />
                }
            />
            <AvailableTrades
                CFDs={
                    <CFDs
                        market_content={is_eu ? synthetic_cfds_eu : synthetic_cfds}
                        market_tab_name={'synthetic-indices'}
                    />
                }
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('synthetics')}
                        options_list={synthetic_options}
                    />
                }
                Multipliers={
                    <Multipliers
                        is_crypto
                        market_content={is_eu ? synthetic_multiplier_eu : synthetic_multiplier}
                    />
                }
                Accumulators={
                    is_accumulators_released ? <Accumulators market_content={accumulators} /> : null
                }
                display_title={<Localize translate_text="Synthetics trades available on Deriv" />}
            />
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                pb="10x"
                md={{ pb: '40x', mb: '20x' }}
            >
                <Typography.Paragraph mb="10x" textcolor="black" align="center">
                    <Localize translate_text="_t_Want to know more about CFD trading conditions for the instruments we offer?_t_" />
                </Typography.Paragraph>
                <LinkButton.Primary
                    font_family="UBUNTU"
                    aria-label="check trading specs"
                    url={{
                        type: 'internal',
                        to: '/trading-specification',
                    }}
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </LinkButton.Primary>
            </Flex.Box>
            <FullWidthMultiColumn
                description={
                    <Localize translate_text="Deriv’s proprietary synthetics simulate real-world market movements. Backed by a cryptographically secure random number generator, these indices are available to trade 24/7 and are unaffected by regular market hours, global events, or market and liquidity risks." />
                }
                header={<Localize translate_text="Why trade synthetics on Deriv" />}
            >
                {synthetic_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={
                            <img width="48px" height="48px" src={content.src} alt={content.alt} />
                        }
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading synthetics on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarketsSlider current_market="synthetic" />}
        </div>
    )
}

export default StockIndices
