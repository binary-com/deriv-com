import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { forex_content, forex_content_eu } from '../../static/content/_forex'
import { forex_cfds, forex_cfds_eu } from '../../static/content/_cfds'
import { forex_multiplier, forex_multiplier_eu } from '../../static/content/_multipliers'
import { forex_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { StyledBox } from '../../static/style/_markets-style'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize, localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { TSimpleStepContent } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))

type ForexProps = {
    simple_step_content: TSimpleStepContent[]
}

const Forex = ({ simple_step_content }: ForexProps) => {
    const { region } = useBuildVariant()

    const content = region === 'eu' ? forex_content_eu : forex_content
    const cfds = region === 'eu' ? forex_cfds_eu : forex_cfds
    const show_digital_options = region === 'eu' ? false : true
    const multiplier = region === 'eu' ? forex_multiplier_eu : forex_multiplier

    return (
        <>
            <AvailableTrades
                CFDs={<CFDs market_content={cfds} />}
                DigitalOptions={
                    show_digital_options && (
                        <DigitalOptions market_name="forex" options_list={forex_options} />
                    )
                }
                Multipliers={<Multipliers market_content={multiplier} />}
                display_title="_t_Forex trades available on Deriv_t_"
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
                    size="medium"
                    aria-label="check trading specs"
                    url={{
                        type: 'internal',
                        to: '/trading-specification',
                    }}
                >
                    <Localize translate_text="_t_Check trading specs_t_" />
                </LinkButton.Primary>
            </Flex.Box>
            <FullWidthMultiColumn gap="2rem" header="_t_Why trade forex on Deriv_t_">
                {content.map(({ alt, src, text }) => (
                    <StyledBox
                        key={text}
                        text={text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header="_t_Start trading forex on Deriv in 3 simple steps_t_"
                content={simple_step_content}
            />
            <OtherMarketsSlider current_market="forex" />
        </>
    )
}

export default Forex
