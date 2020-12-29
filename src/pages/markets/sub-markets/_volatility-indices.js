import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
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
} from 'components/elements/symbols'

const VolatilityIndices = () => {
    return (
        <>
            <Symbol>
                <img src={INDEX10S1} />
                <Text>{localize('Volatility 10 (1s) Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX25S1} />
                <Text>{localize('Volatility 25 (1s) Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX50S1} />
                <Text>{localize('Volatility 50 (1s) Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX75S1} />
                <Text>{localize('Volatility 75 (1s) Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX100S1} />
                <Text>{localize('Volatility 100 (1s) Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX10} />
                <Text>{localize('Volatility 10 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX25} />
                <Text>{localize('Volatility 25 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX50} />
                <Text>{localize('Volatility 50 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX75} />
                <Text>{localize('Volatility 75 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={INDEX100} />
                <Text>{localize('Volatility 100 Index')}</Text>
            </Symbol>
        </>
    )
}

export default VolatilityIndices
