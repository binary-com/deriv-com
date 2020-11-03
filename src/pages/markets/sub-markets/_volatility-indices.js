import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import {
    INDEX10,
    INDEX25,
    INDEX50,
    INDEX75,
    INDEX100,
    INDEX10S1,
    INDEX100S1,
    INDEX25S1,
    INDEX50S1,
    INDEX75S1,
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

const VolatilityIndices = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={INDEX10S1} />
                <Text>{localize('Volatility 10 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX25S1} />
                <Text>{localize('Volatility 25 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX50S1} />
                <Text>{localize('Volatility 50 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX75S1} />
                <Text>{localize('Volatility 75 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX100S1} />
                <Text>{localize('Volatility 100 (1s) Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX10} />
                <Text>{localize('Volatility 10 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX25} />
                <Text>{localize('Volatility 25 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX50} />
                <Text>{localize('Volatility 50 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX75} />
                <Text>{localize('Volatility 75 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={INDEX100} />
                <Text>{localize('Volatility 100 Index')}</Text>
            </Symbol>
        </>
    )
}

export default VolatilityIndices
