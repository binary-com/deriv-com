import React from 'react'
import styled from 'styled-components'
import { OtherPlatform } from 'components/elements/other-platforms.js'
import { localize } from 'components/localization'

const TradeWrapper = styled.div`
    padding-bottom: 7.2rem;
`

export const Trade = () => (
    <TradeWrapper>
        <OtherPlatform
            header={localize('Trade the way you like')}
            subHeader={localize(
                'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
            )}
            exclude=""
        />
    </TradeWrapper>
)
