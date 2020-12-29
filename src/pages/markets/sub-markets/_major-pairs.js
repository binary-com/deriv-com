import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import {
    AUDJPY,
    AUDUSD,
    EURAUD,
    EURCAD,
    EURCHF,
    EURGBP,
    EURJPY,
    EURUSD,
    GBPAUD,
    GBPJPY,
    GBPUSD,
    USDCAD,
    USDCHF,
    USDJPY,
} from 'components/elements/symbols'

const MajorPairs = () => {
    return (
        <>
            <Symbol>
                <img src={AUDJPY} />
                <Text>{localize('AUD/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={AUDUSD} />
                <Text>{localize('AUD/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURAUD} />
                <Text>{localize('EUR/AUD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURCAD} />
                <Text>{localize('EUR/CAD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURCHF} />
                <Text>{localize('EUR/CHF')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURGBP} />
                <Text>{localize('EUR/GBP')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURJPY} />
                <Text>{localize('EUR/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURUSD} />
                <Text>{localize('EUR/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPAUD} />
                <Text>{localize('GBP/AUD')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPJPY} />
                <Text>{localize('GBP/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPUSD} />
                <Text>{localize('GBP/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDCAD} />
                <Text>{localize('USD/CAD')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDCHF} />
                <Text>{localize('USD/CHF')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDJPY} />
                <Text>{localize('USD/JPY')}</Text>
            </Symbol>
        </>
    )
}

export default MajorPairs
