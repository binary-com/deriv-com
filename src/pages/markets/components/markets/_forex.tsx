import React from 'react'
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
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import Button from 'components/custom/_button'
import useRegion from 'components/hooks/use-region'
import { Localize, localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'

//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type ForexProps = {
    simple_step_content: SimpleStepContentElement[]
}
const Forex = ({ simple_step_content }: ForexProps) => {
    const { is_row, is_eu } = useRegion()

    return (
        <>
            <AvailableTrades
                CFDs={<CFDs market_content={is_eu ? forex_cfds_eu : forex_cfds} />}
                DigitalOptions={
                    is_row && (
                        <DigitalOptions
                            market_name={localize('forex')}
                            options_list={forex_options}
                        />
                    )
                }
                Multipliers={
                    <Multipliers market_content={is_eu ? forex_multiplier_eu : forex_multiplier} />
                }
                // name="Forex"
                display_title={<Localize translate_text="Forex trades available on Deriv" />}
            />
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                pb="10x"
                md={{ pb: '40x', mb: '20x' }}
            >
                <Typography.Paragraph size="medium" mb="10x" textcolor="black" align="center">
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
            <FullWidthMultiColumn
                gap="2rem"
                header={<Localize translate_text="Why trade forex on Deriv" />}
            >
                {(is_eu ? forex_content_eu : forex_content).map((content, index) => (
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
                    <Localize translate_text="Start trading forex on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
            />

            <OtherMarkets except="forex" />
        </>
    )
}

export default Forex
