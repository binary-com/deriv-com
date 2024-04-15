import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    step_indices_ctrader,
    step_indices_mt5,
    step_indices_derivx,
} from '../static/content/_market-symbols'
import { STEPINDICESNEW } from 'components/elements/symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

interface StepIndicesProps {
    is_cfd?: boolean
}

const StepIndices = ({ is_cfd }: StepIndicesProps) => {
    return (
        <>
            {is_cfd ? (
                <>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="small"
                        className={dclsx('at-visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv MT5:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="xs"
                        className={dclsx('at-visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv MT5:_t_'} />
                    </Typography.Paragraph>
                    {step_indices_mt5.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}

                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="small"
                        className={dclsx('at-visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv X:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="xs"
                        className={dclsx('at-visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv X:_t_'} />
                    </Typography.Paragraph>
                    {step_indices_derivx.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="small"
                        className={dclsx('at-visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv cTrader:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="xs"
                        className={dclsx('at-visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv cTrader:_t_'} />
                    </Typography.Paragraph>
                    {step_indices_ctrader.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            ) : (
                <Symbol src={STEPINDICESNEW} text="_t_Step Index_t_" />
            )}
        </>
    )
}

export default StepIndices
