import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import DTrader from 'images/svg/dtrader.svg'
import DMT5 from 'images/svg/dmt5.svg'

const StyledHeader = styled(Header)`
    margin-bottom: 4rem;
`

export const OtherPlatform = () => {
    return (
        <SectionContainer>
            <StyledHeader
                font_size="4rem"
                align="center"
                lh="5rem"
            >
                {localize('Check out our other platforms')}
            </StyledHeader>
            <FlexGridContainer
                    content_width="32.8rem"
                    gap="1rem"
                    grid="3"
                    justify="center"
                >
                <Card
                    title={localize('DTrader')}
                    Icon={DTrader}
                    content={[
                        localize(
                            'Everything you need to trade the markets you want',
                        ),
                    ]}
                    width="32.8rem"
                    min_height="27.8rem"
                />
                <Card
                    title={localize('DMT5')}
                    Icon={DMT5}
                    content={[
                        localize(
                            'All-in-one platform for FX and CFD trading',
                        ),
                    ]}
                    width="32.8rem"
                    min_height="27.8rem"
                />
            </FlexGridContainer>
        </SectionContainer>
    )
}
