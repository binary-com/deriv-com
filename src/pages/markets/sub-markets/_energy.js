import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OILUSD } from 'components/elements/symbols.js'

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
