import React from 'react'
import { drift_switch_indices } from '../static/content/_market-symbols'
import Symbol from '../components/helper/_symbol'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'
import useBuildVariant from 'features/hooks/use-build-variant'

const DriftSwitchIndices = () => {
    const { region } = useBuildVariant()

    return (
        <>
            {region === "row" && (
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
