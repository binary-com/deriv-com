import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import {
    AUDCAD,
    AUDCHF,
    AUDNZD,
    EURZND,
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
    padding: 0.8rem 0;
    height: unset;

    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
    }
`

const MinorPairs = () => {
    return (
        <>
            <Symbol ai="center">
                <AUDCAD />
                <Text>{localize('AUD/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <AUDCHF />
                <Text>{localize('AUD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <AUDNZD />
                <Text>{localize('AUD/NZD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURZND />
                <Text>{localize('EUR/ZND')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPCAD />
                <Text>{localize('GBP/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPCHF />
                <Text>{localize('GBP/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPNOK />
                <Text>{localize('GBP/NOK')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPNZD />
                <Text>{localize('GBP/NZD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <NZDJPY />
                <Text>{localize('NZD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <NZDUSD />
                <Text>{localize('NZD/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDMXN />
                <Text>{localize('USD/MXN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDNOK />
                <Text>{localize('USD/NOK')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDPLN />
                <Text>{localize('USD/PLN')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDSEK />
                <Text>{localize('USD/SEK')}</Text>
            </Symbol>
        </>
    )
}

export default MinorPairs
