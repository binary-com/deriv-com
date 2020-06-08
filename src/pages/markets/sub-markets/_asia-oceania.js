import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OTCAUSTRALIAN, OTCHONGKONG, OTCJAPANESE } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    width: fit-content;

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

const AsiaOceania = () => {
    return (
        <>
            <Symbol ai="center">
                <OTCAUSTRALIAN />
                <Text>{localize('Australian Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCHONGKONG />
                <Text>{localize('Hong Kong Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCJAPANESE />
                <Text>{localize('Japanese Index')}</Text>
            </Symbol>
        </>
    )
}

export default AsiaOceania
