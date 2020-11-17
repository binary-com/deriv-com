import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { BOOM500, BOOM1000, CRASH500, CRASH1000 } from 'components/elements/symbols.js'

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
const CrashBoom = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={BOOM1000} />
                <Text>{localize('Boom 1000 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={BOOM500} />
                <Text>{localize('Boom 500 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={CRASH1000} />
                <Text>{localize('Crash 1000 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={CRASH500} />
                <Text>{localize('Crash 500 Index')}</Text>
            </Symbol>
        </>
    )
}

export default CrashBoom
