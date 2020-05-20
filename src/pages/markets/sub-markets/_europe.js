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
    width: fit-content;
    margin: 1.6rem 2.4rem 0 0;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
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
            <Symbol ai="center" mr="0 !important">
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
