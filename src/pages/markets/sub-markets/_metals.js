import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { GOLDUSD, PALLADIUMUSD, PLATINUMUSD, SILVERUSD } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;
    margin-right: 2.4rem;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
    }
`

const Metals = () => {
    return (
        <>
            <Symbol ai="center">
                <GOLDUSD />
                <Text>{localize('Gold/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <PALLADIUMUSD />
                <Text>{localize('Palladium/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <PLATINUMUSD />
                <Text>{localize('Platinum/USD')}</Text>
            </Symbol>
            <Symbol ai="center">
                <SILVERUSD />
                <Text>{localize('Silver/USD')}</Text>
            </Symbol>
        </>
    )
}

export default Metals
