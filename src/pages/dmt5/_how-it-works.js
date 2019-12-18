import React from 'react'
import styled from 'styled-components'
import DMT5Video from './_dmt5-video.js'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledSection = styled(SectionContainer)`
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
`

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};

    @media ${device.tabletL} {
        text-align: left;
        ${props => (props.as === 'h4' ? 'font-size: 20px; font-wight: 500;' : 'font-size: 32px')}
    }
`

const HowItWorks = () => {
    return (
        <StyledSection>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center">
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" align="center">
                    {localize('Get started with DMT5 in 3 easy steps')}
                </StyledHeader>
                <DMT5Video />
            </Container>
        </StyledSection>
    )
}

export default HowItWorks
