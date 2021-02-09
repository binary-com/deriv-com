import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { AUDUSD, EURJPY, EURUSD, USDJPY } from 'components/elements/symbols.js'

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

const StepFX = () => {
    return (
        <React.Fragment>
            <Symbol>
                <img src={EURUSD} />
                <Text>{localize('EURUSD Step Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={AUDUSD} />
                <Text>{localize('AUDUSD Step Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDJPY} />
                <Text>{localize('USDJPY Step Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURJPY} />
                <Text>{localize('EURJPY Step Index')}</Text>
            </Symbol>
        </React.Fragment>
    )
}

export default StepFX
