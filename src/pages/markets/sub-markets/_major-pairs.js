import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
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
} from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;

    svg {
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

const MajorPairs = () => {
    return (
        <>
            <Symbol ai="center">
                <AUDJPY />
                <Text>{localize('AUD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <AUDUSD />
                <Text>{localize('AUD/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURAUD />
                <Text>{localize('EUR/AUD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURCAD />
                <Text>{localize('EUR/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURCHF />
                <Text>{localize('EUR/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURGBP />
                <Text>{localize('EUR/GBP')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURJPY />
                <Text>{localize('EUR/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURUSD />
                <Text>{localize('EUR/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPAUD />
                <Text>{localize('GBP/AUD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPJPY />
                <Text>{localize('GBP/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPUSD />
                <Text>{localize('GBP/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDCAD />
                <Text>{localize('USD/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDCHF />
                <Text>{localize('USD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDJPY />
                <Text>{localize('USD/JPY')}</Text>
            </Symbol>
        </>
    )
}

export default MajorPairs
