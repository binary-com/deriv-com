import React, { useEffect, useState } from 'react'
import Symbol from '../components/helper/_symbol'
import { dex_indices } from '../static/content/_market-symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'
import useRegion from 'components/hooks/use-region'

const DexIndices = () => {
    const { is_row } = useRegion()
    const [show_row_content, setRowContent] = useState(true)

    useEffect(() => {
        !is_row && setRowContent(false)
    }, [is_row])
    return (
        <>
            {show_row_content && (
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

            {dex_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default DexIndices
