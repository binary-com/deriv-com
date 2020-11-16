import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { MARKETBULL, MARKETBEAR } from 'components/elements/symbols.js'

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
const DailyResetIndices = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={MARKETBEAR} />
                <Text>{localize('Bear Market Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={MARKETBULL} />
                <Text>{localize('Bull Market Index')}</Text>
            </Symbol>
        </>
    )
}

export default DailyResetIndices
