import React from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { BackgroundImage, Typography } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'
import { localize } from 'components/localization'

interface HeroComponentProps {
    background_data: ImageDataLike
    background_dark: string
}

const StyledContainer = styled(Container)`
    height: 100%;
    padding: 160px 222px;

    @media ${device.tabletL} {
        padding: 120px 16px;
        width: 100%;
    }
`

const Subheadline = styled(Typography)`
    font-weight: normal;
    margin-top: 16px;
`

const HeroComponent = ({ background_data, background_dark }: HeroComponentProps) => {
    return (
        <BackgroundImage
            data={background_data}
            alt="deriv security"
            style={{
                backgroundSize: `cover`,
                maxWidth: '100%',
            }}
            dark={background_dark}
        >
            <StyledContainer direction="column">
                <Typography as="h1" element_color="white" align="center" type="heading-1">
                    {localize('Bug bounty program')}
                </Typography>

                <Subheadline as="p" element_color="white" align="center" type="subtitle-1">
                    {localize('Security is a collaboration. Report bugs and be rewarded.')}
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

export default HeroComponent
