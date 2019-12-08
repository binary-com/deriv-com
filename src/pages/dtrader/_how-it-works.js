import React from 'react'
import styled from 'styled-components'
import DtraderVideo from './_dtrader-video.js'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};
    ${props => props.font_size ? ('font-size:' + props.font_size) : ('')};
    
    @media ${device.tabletL} {
        text-align: left;
        ${props => (props.as === 'h4' ? 'font-size: 20px; font-wight: 500;' : 'font-size: 32px')}
    }
`

const HowItWorks = () => {
    return (
        <SectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center" weight='500'>
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" align="center" font_size='3.6rem'>
                    {localize('Make a trade in 3 easy steps')}
                </StyledHeader>
                <DtraderVideo />
            </Container>
        </SectionContainer>
    )
}

export default HowItWorks
