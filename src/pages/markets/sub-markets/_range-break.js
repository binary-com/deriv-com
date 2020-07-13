import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { RANGEBREAK100, RANGEBREAK200 } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: 22rem;
    justify-content: flex-start;

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
const RangeBreak = () => {
    return (
        <>
            <Symbol ai="center">
                <RANGEBREAK100 />
                <Text>{localize('Range Break 100 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <RANGEBREAK200 />
                <Text>{localize('Range Break 200 Index')}</Text>
            </Symbol>
        </>
    )
}

export default RangeBreak
