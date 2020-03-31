import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OILUSD } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;

    svg {
        width: 32px;
        height: 32px;
    }
    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
    }
`

const Energy = () => {
    return (
        <>
            <Symbol ai="center">
                <OILUSD />
                <Text>{localize('Oil/USD')}</Text>
            </Symbol>
        </>
    )
}

export default Energy
