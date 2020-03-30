import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { AUDINDEX, EURINDEX, GBPINDEX, USDINDEX } from 'components/elements/symbols.js'

const Symbol = styled(Flex)`
    padding: 0.8rem 0;
    height: unset;

    ${Text} {
        font-weight: normal;
        margin-left: 1.6rem;
    }
`

const SmartFX = () => {
    return (
        <>
            <Symbol ai="center">
                <AUDINDEX />
                <Text>{localize('AUD Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <EURINDEX />
                <Text>{localize('EUR Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <GBPINDEX />
                <Text>{localize('GBP Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <USDINDEX />
                <Text>{localize('USD Index')}</Text>
            </Symbol>
        </>
    )
}

export default SmartFX
