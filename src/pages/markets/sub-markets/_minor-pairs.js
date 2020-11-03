import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
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
} from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;

    img {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }
`

const MinorPairs = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={AUDCAD} />
                <Text>{localize('AUD/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={AUDCHF} />
                <Text>{localize('AUD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={AUDNZD} />
                <Text>{localize('AUD/NZD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURNZD} />
                <Text>{localize('EUR/NZD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPCAD} />
                <Text>{localize('GBP/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPCHF} />
                <Text>{localize('GBP/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPNOK} />
                <Text>{localize('GBP/NOK')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPNZD} />
                <Text>{localize('GBP/NZD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={NZDJPY} />
                <Text>{localize('NZD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={NZDUSD} />
                <Text>{localize('NZD/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDMXN} />
                <Text>{localize('USD/MXN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDNOK} />
                <Text>{localize('USD/NOK')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDPLN} />
                <Text>{localize('USD/PLN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDSEK} />
                <Text>{localize('USD/SEK')}</Text>
            </Symbol>
        </>
    )
}

export default MinorPairs
