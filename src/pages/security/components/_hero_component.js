import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BackgroundImage, Header } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'
import { localize } from 'components/localization'

const StyledContainer = styled(Container)`
    flex-direction: column;
    height: 100%;
    width: 60%;

    @media ${device.tablet} {
        padding: 0 2rem;
        align-items: flex-start;
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;
    line-height: 8rem;

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
    }
`

const Subheadline = styled(Header)`
    font-weight: normal;
    line-height: 36px;

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 26px;
    }
`

const HeroComponent = ({ background_data, background_height, background_dark }) => {
    return (
        <BackgroundImage
            data={background_data}
            alt="deriv security"
            style={{
                height: background_height,
                width: '100vw',
                backgroundSize: `cover`,
                maxWidth: '100%',
            }}
            dark={background_dark}
        >
            <StyledContainer>
                <StyledHeader as="h1" color="white" align="center" type="heading-1">
                    {localize('Bug bounty program')}
                </StyledHeader>

                <Subheadline as="h3" color="white" align="center" type="subtitle-1">
                    {localize('Security is a collaboration. Report bugs and be rewarded.')}
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

HeroComponent.propTypes = {
    background_dark: PropTypes.string,
    background_data: PropTypes.any,
    background_height: PropTypes.string,
}

export default HeroComponent
