import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { OTCUS, OTCUSTECH, OTCWALLSTREET } from 'components/elements/symbols.js'

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

const Americas = () => {
    return (
        <>
            <Symbol ai="center">
                <OTCUS />
                <Text>{localize('US Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCUSTECH />
                <Text>{localize('US Tech Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <OTCWALLSTREET />
                <Text>{localize('Wall Street Index')}</Text>
            </Symbol>
        </>
    )
}

export default Americas
