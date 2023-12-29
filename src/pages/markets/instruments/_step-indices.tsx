import React from 'react'
import Symbol from '../components/helper/_symbol'
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
            {is_cfd && (
                <>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="small"
                        className={dclsx('visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="xs"
                        className={dclsx('visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
                    </Typography.Paragraph>
                </>
            )}

            <Symbol src={STEPINDICESNEW} text="_t_Step Index_t_" />
        </>
    )
}

export default StepIndices
