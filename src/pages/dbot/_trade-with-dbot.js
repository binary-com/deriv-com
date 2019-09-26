import React from 'react'
import styled from 'styled-components'
import Container, {
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'
// import device from 'themes/device'
import DTrader from 'images/svg/dtrader.svg'
import DMT5 from 'images/svg/dmt5.svg'

const GreyContainer = styled(Container)`
    background: grey;
`

export const TradeWithDbot = () => {

    return (
        <FlexGridContainer
            content_width="32.8rem"
            gap="1rem"
            grid="3"
            justify="center"
        >
            <Header
                font_size="4rem"
                align="center"
                lh="5rem"
            >
                {localize('Trade more efficiently with DBot')}
            </Header>
            <Header
                font_size="4rem"
                align="center"
                lh="5rem"
            >
                {localize('New to trading?')}
            </Header>
        </FlexGridContainer>
    )
}
