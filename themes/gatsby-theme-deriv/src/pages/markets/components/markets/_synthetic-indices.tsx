import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import synthetic_content from '../../static/content/_synthetic'
import { synthetic_cfds, synthetic_cfds_eu } from '../../static/content/_cfds'
import { synthetic_multiplier, synthetic_multiplier_eu } from '../../static/content/_multipliers'
import { synthetic_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import { TradeDetails } from '../sections/_trade-details'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TSimpleStepContent } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type StockIndicesProps = {
    simple_step_content: TSimpleStepContent[]
}

const StockIndices = ({ simple_step_content }: StockIndicesProps) => {
    const { is_deriv_go } = usePlatformQueryParam()
    const { region } = useBuildVariant()
    const cfds = region === 'eu' ? synthetic_cfds_eu : synthetic_cfds
    const multiplier = region === 'eu' ? synthetic_multiplier_eu : synthetic_multiplier

    return (
        <div>
            <TradeDetails description="_t_Deriv’s proprietary synthetic indices simulate real-world market movements. Backed by a cryptographically secure random number generator, these indices are available to trade 24/7 and are unaffected by regular market hours, global events, or market and liquidity risks._t_" />
            <AvailableTrades
                CFDs={<CFDs market_content={cfds} />}
                DigitalOptions={
                    <DigitalOptions market_name="synthetics" options_list={synthetic_options} />
                }
                Multipliers={<Multipliers is_crypto market_content={multiplier} />}
                display_title="_t_Synthetic indices trades available on Deriv_t_"
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
                {!is_deriv_go ? (
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
                ) : null}
            </Flex.Box>
            <FullWidthMultiColumn header="_t_Why trade synthetic indices on Deriv_t_">
                {synthetic_content.map(({ alt, src, text }) => (
                    <StyledBox
                        key={text}
                        text={text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header="_t_Start trading synthetic indices on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            {!is_deriv_go && <OtherMarketsSlider current_market="synthetic" />}
        </div>
    )
}

export default StockIndices
