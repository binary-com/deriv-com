import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import {
    AUDCAD,
    AUDCHF,
    AUDNZD,
    EURNZD,
    GBPCAD,
    GBPCHF,
    GBPNOK,
    GBPNZD,
    NZDJPY,
    NZDUSD,
    USDMXN,
    USDNOK,
    USDPLN,
    USDSEK,
} from 'components/elements/symbols'

const MinorPairs = () => {
    return (
        <>
            <Symbol>
                <img src={AUDCAD} />
                <Text>{localize('AUD/CAD')}</Text>
            </Symbol>
            <Symbol>
                <img src={AUDCHF} />
                <Text>{localize('AUD/CHF')}</Text>
            </Symbol>
            <Symbol>
                <img src={AUDNZD} />
                <Text>{localize('AUD/NZD')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURNZD} />
                <Text>{localize('EUR/NZD')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPCAD} />
                <Text>{localize('GBP/CAD')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPCHF} />
                <Text>{localize('GBP/CHF')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPNOK} />
                <Text>{localize('GBP/NOK')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPNZD} />
                <Text>{localize('GBP/NZD')}</Text>
            </Symbol>
            <Symbol>
                <img src={NZDJPY} />
                <Text>{localize('NZD/JPY')}</Text>
            </Symbol>
            <Symbol>
                <img src={NZDUSD} />
                <Text>{localize('NZD/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDMXN} />
                <Text>{localize('USD/MXN')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDNOK} />
                <Text>{localize('USD/NOK')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDPLN} />
                <Text>{localize('USD/PLN')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDSEK} />
                <Text>{localize('USD/SEK')}</Text>
            </Symbol>
        </>
    )
}

export default MinorPairs
