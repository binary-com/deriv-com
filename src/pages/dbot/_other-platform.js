import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import DTrader from 'images/svg/dtrader-48.svg'
import DMT5 from 'images/svg/dmt5-48.svg'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    margin-bottom: 4rem;

    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export const OtherPlatform = () => {
    return (
        <SectionContainer>
            <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                {localize('Check out our other platforms')}
            </StyledHeader>
            <FlexGridContainer
                content_width="32.8rem"
                gap="1rem"
                grid="3"
                justify="center"
            >
                <StyledLink to="/dtrader">
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
                </StyledLink>
                <StyledLink to="/dmt5">
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
                </StyledLink>
            </FlexGridContainer>
        </SectionContainer>
    )
}
