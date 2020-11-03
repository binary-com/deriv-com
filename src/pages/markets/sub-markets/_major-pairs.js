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

const MajorPairs = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={AUDJPY} />
                <Text>{localize('AUD/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={AUDUSD} />
                <Text>{localize('AUD/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURAUD} />
                <Text>{localize('EUR/AUD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURCAD} />
                <Text>{localize('EUR/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURCHF} />
                <Text>{localize('EUR/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURGBP} />
                <Text>{localize('EUR/GBP')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURJPY} />
                <Text>{localize('EUR/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURUSD} />
                <Text>{localize('EUR/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPAUD} />
                <Text>{localize('GBP/AUD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPJPY} />
                <Text>{localize('GBP/JPY')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPUSD} />
                <Text>{localize('GBP/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDCAD} />
                <Text>{localize('USD/CAD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDCHF} />
                <Text>{localize('USD/CHF')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDJPY} />
                <Text>{localize('USD/JPY')}</Text>
            </Symbol>
        </>
    )
}

export default MajorPairs
