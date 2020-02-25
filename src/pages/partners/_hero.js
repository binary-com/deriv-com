import React from 'react'
import styled from 'styled-components'
import Partner from 'common/partner'
import { Container } from 'components/containers'
import { Header, BackgroundImage } from 'components/elements'
import { Button } from 'components/form'
import { localize } from 'components/localization'

const StyeldContainer = styled(Container)`
    height: 100%;
`

const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 70rem;
    margin-bottom: 4rem;
`

const Hero = () => {
    return (
        <BackgroundImage
            img_name="partners-banner.png"
            style={{
                height: '80rem',
                width: '100%',
            }}
        >
            <StyeldContainer direction="column" justify="center" align="center">
                <StyledHeader as="h1" color="white" align="center">
                    {localize('Partner with a trusted online trading provider')}
                </StyledHeader>
                <Button onClick={Partner.redirectToSignup} secondary>
                    {localize('Sign up as affiliate & IB')}
                </Button>
            </StyeldContainer>
        </BackgroundImage>
    )
}

export default Hero
