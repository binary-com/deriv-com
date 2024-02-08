import React, { useEffect, useState } from 'react'
import Symbol from '../components/helper/_symbol'
import {
    crash_boom,
    crash_boom_ctrader,
    crash_boom_trade_type_eu,
} from '../static/content/_market-symbols'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

const CrashBoom = () => {
    const { is_eu } = useRegion()
    const [show_eu_content, setShowEuContent] = useState(false)

    useEffect(() => {
        if (is_eu) setShowEuContent(true)
    }, [is_eu])

    return (
        <>
            {show_eu_content ? (
                <>
                    {crash_boom_trade_type_eu.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            ) : (
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
                    {crash_boom.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}

                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="small"
                        className={dclsx('visible-larger-than-phone')}
                    >
                        <Localize translate_text={'_t_Deriv cTrader:_t_'} />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        mb="4x"
                        mt="8x"
                        weight="bold"
                        size="xs"
                        className={dclsx('visible-phone-only')}
                    >
                        <Localize translate_text={'_t_Deriv cTrader:_t_'} />
                    </Typography.Paragraph>

                    {crash_boom_ctrader.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default CrashBoom
