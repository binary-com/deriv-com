import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OTCAUSTRALIAN, OTCHONGKONG, OTCJAPANESE } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;
    justify-content: flex-start;
    width: 17.3rem;
    margin: 0 auto;

    svg {
        width: 32px;
        height: 32px;
    }
    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
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
