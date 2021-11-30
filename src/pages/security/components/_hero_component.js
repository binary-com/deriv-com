import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BackgroundImage, Header } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'
import { localize } from 'components/localization'

const StyledContainer = styled(Container)`
    height: 100%;
    padding: 160px 222px;

    @media ${device.tabletL} {
        padding: 80px 16px;
        align-items: flex-start;
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        font-size: 40px;
        line-height: 50px;
    }
`

const Subheadline = styled(Header)`
    font-weight: normal;

    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
    }
`

const HeroComponent = ({ background_data, background_dark }) => {
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
}

export default HeroComponent
