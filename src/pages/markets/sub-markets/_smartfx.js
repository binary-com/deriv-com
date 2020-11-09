import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { AUDINDEX, EURINDEX, GBPINDEX, USDINDEX } from 'components/elements/symbols.js'

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

const SmartFX = () => {
    return (
        <>
            <Symbol ai="center">
                <img src={AUDINDEX} />
                <Text>{localize('AUD Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={EURINDEX} />
                <Text>{localize('EUR Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={GBPINDEX} />
                <Text>{localize('GBP Index')}</Text>
            </Symbol>
            <Symbol ai="center">
                <img src={USDINDEX} />
                <Text>{localize('USD Index')}</Text>
            </Symbol>
        </>
    )
}

export default SmartFX
