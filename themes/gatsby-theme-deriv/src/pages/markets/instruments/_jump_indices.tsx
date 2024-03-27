import React from 'react'
import Symbol from '../components/helper/_symbol'
import { jump_indices } from '../static/content/_market-symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

interface JumpIndicesProps {
    is_cfd?: boolean
}

const JumpIndices = ({ is_cfd }: JumpIndicesProps) => {
    return (
        <>
            {is_cfd && (
                <>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="small"
                        className={dclsx('at-visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        weight="bold"
                        size="xs"
                        className={dclsx('at-visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv MT5 and Deriv X:_t_'} />
                    </Typography.Paragraph>
                </>
            )}

            {jump_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default JumpIndices
