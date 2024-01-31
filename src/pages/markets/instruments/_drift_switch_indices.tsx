import React from 'react'
import Symbol from '../components/helper/_symbol'
import { drift_switch_indices } from '../static/content/_market-symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

const DriftSwitchIndices = () => {
    return (
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
            {drift_switch_indices.map((symbol) => (
                <Symbol
                    key={symbol.text}
                    src={symbol.src}
                    text={symbol.text}
                    has_demo_tag={false}
                />
            ))}
        </>
    )
}

export default DriftSwitchIndices
