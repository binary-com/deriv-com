import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    volatility_indices,
    volatility_indices_c_trader,
    volatility_indices_trade_type_eu,
} from '../static/content/_market-symbols'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'
import useBuildVariant from 'features/hooks/use-build-variant'

const VolatilityIndices = () => {
    const { region } = useBuildVariant()

    return (
        <>
            {region === "eu" ? (
                <>
                    {volatility_indices_trade_type_eu.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            ) : (
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

                    {volatility_indices.map((symbol, index) => (
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

                    {volatility_indices_c_trader.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default VolatilityIndices
