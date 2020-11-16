import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { GOLDUSD, PALLADIUMUSD, PLATINUMUSD, SILVERUSD } from 'components/elements/symbols.js'

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

const Metals = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={GOLDUSD} />
                <Text>{localize('Gold/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={PALLADIUMUSD} />
                <Text>{localize('Palladium/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={PLATINUMUSD} />
                <Text>{localize('Platinum/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={SILVERUSD} />
                <Text>{localize('Silver/USD')}</Text>
            </Symbol>
        </>
    )
}

export default Metals
