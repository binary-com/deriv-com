import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'
import device from 'themes/device.js'

const StyledSection = styled(SectionContainer)`
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-6),
        var(--color-white)
    );
`

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};

    @media ${device.tabletL} {
        text-align: left;
        ${props =>
            props.as === 'h4'
                ? 'font-size: 20px; font-wight: 500;'
                : 'font-size: 32px'}
    }
`

const DHowItWorks = ({ subtitle, Video }) => {
    return (
        <StyledSection>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center">
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" align="center">
                    {subtitle}
                </StyledHeader>
                <Video />
            </Container>
        </StyledSection>
    )
}

export default DHowItWorks
