import React from 'react'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { derived_content } from '../../static/content/_derived'
import { derived_fx_cfds } from '../../static/content/_cfds'
import CFDs from '../sub-markets/_cfds'
import { StyledBox } from '../../static/style/_markets-style'
import { SimpleStepContentElement } from '../../static/content/_simple_step_content'
import { TradeDetails } from '../sections/_trade-details'
import Typography from 'features/components/atoms/typography'
import LinkButton from 'features/components/atoms/link-button'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets'))

type DerivedProps = {
    simple_step_content: SimpleStepContentElement[]
}
const Derived = ({ simple_step_content }: DerivedProps) => {
    return (
        <>
            <TradeDetails
                description={
                    <Localize translate_text="Derived FX gives you the opportunity to trade on simulated assets based on major forex pairs at the volatility of your choice. Our advanced algorithms track real-world currency prices and dampen the fluctuations caused by market sentiment and unexpected news events." />
                }
            />
            <AvailableTrades
                CFDs={<CFDs market_content={derived_fx_cfds} market_tab_name={'derived-fx'} />}
                display_title={<Localize translate_text="Derived FX trades available on Deriv" />}
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
                header={<Localize translate_text="Why trade derived FX on Deriv" />}
            >
                {derived_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        text={content.text}
                        icon={<img width="48px" height="48px" src={content.src} alt="" />}
                    />
                ))}
            </FullWidthMultiColumn>
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading derived FX on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="derived" />
        </>
    )
}

export default Derived
