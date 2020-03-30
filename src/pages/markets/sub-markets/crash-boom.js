import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { BOOM500, BOOM1000, CRASH500, CRASH1000 } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0 0.8rem 3.5rem;
    height: unset;
    justify-content: flex-start;

    svg {
        width: 32px;
        height: 32px;
    }
    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
    }
`

const CrashBoom = () => {
    return (
        <>
            <Symbol ai="center">
                <BOOM1000 />
                <Text>{localize('Boom 1000 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <BOOM500 />
                <Text>{localize('Boom 500 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <CRASH1000 />
                <Text>{localize('Crash 1000 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <CRASH500 />
                <Text>{localize('Crash 1000 Index')}</Text>
            </Symbol>
        </>
    )
}

export default CrashBoom
