import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import {
    OTCUK,
    OTCSWISS,
    OTCGERMAN,
    OTCFRENCH,
    OTCDUTCH,
    OTCHONGKONG,
} from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;
    justify-content: flex-start;
    width: 15.81rem;
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

const Europe = () => {
    return (
        <>
            <Symbol ai="center">
                <OTCDUTCH />
                <Text>{localize('Dutch Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCHONGKONG />
                <Text>{localize('Euro 50 Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCFRENCH />
                <Text>{localize('French Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCGERMAN />
                <Text>{localize('German Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCSWISS />
                <Text>{localize('Swiss Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCUK />
                <Text>{localize('UK Index')}</Text>
            </Symbol>
        </>
    )
}

export default Europe
