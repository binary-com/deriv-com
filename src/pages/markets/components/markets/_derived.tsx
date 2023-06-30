import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { derived_content } from '../../static/content/_derived'
import { derived_fx_cfds } from '../../static/content/_cfds'
import CFDs from '../sub-markets/_cfds'
import { StyledBox } from '../../static/style/_markets-style'
import { TradeDetails } from '../sections/_trade-details'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TSimpleStepContent } from 'pages/markets/static/content/_types'

const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type DerivedProps = {
    simple_step_content: TSimpleStepContent[]
}

const Derived = ({ simple_step_content }: DerivedProps) => {
    return (
        <>
            <TradeDetails description="_t_Derived FX gives you the opportunity to trade on simulated assets based on major forex pairs at the volatility of your choice. Our advanced algorithms track real-world currency prices and dampen the fluctuations caused by market sentiment and unexpected news events._t_" />
            <AvailableTrades
                CFDs={<CFDs market_content={derived_fx_cfds} />}
                display_title="_t_Derived FX trades available on Deriv_t_"
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
            <FullWidthMultiColumn header="_t_Why trade derived FX on Deriv_t_">
                {derived_content.map(({ alt, src, text }) => (
                    <StyledBox
                        key={text}
                        text={text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header="_t_Start trading derived FX on Deriv in 3 simple steps_t_"
                content={simple_step_content}
                sign_up
            />
            <OtherMarketsSlider current_market="synthetic" />
        </>
    )
}

export default Derived
