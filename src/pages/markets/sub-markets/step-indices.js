import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { STEPINDICES } from 'components/elements/symbols.js'

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

const StepIndices = () => {
    return (
        <>
            <Symbol ai="center">
                <STEPINDICES />
                <Text>{localize('Step Index')}</Text>
            </Symbol>
        </>
    )
}

export default StepIndices
