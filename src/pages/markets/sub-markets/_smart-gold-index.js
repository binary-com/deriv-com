import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { GOLDUSD } from 'components/elements/symbols'

const Symbol = styled(Flex)`
    align-items: center;
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

const SmartGoldIndex = () => {
    return (
        <Symbol>
            <img src={GOLDUSD} />
            <Text>{localize('Smart Gold Index')}</Text>
        </Symbol>
    )
}

export default SmartGoldIndex
