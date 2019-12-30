import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};
    ${props => props.font_size && ('font-size:' + props.font_size)};
    
    @media ${device.tabletL} {
        text-align: left;
        ${props => (props.as === 'h4' ? 'font-size: 20px; font-wight: 500;' : 'font-size: 32px')}
    }
`

const DHowItWorks = ({ Video, title }) => {
    return (
        <SectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" align="center" weight='500'>
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" align="center" font_size='3.6rem'>
                    {localize(title)}
                </StyledHeader>
                <Video />
            </Container>
        </SectionContainer>
    )
}

DHowItWorks.propTypes = {
    title: PropTypes.string,
    Video: PropTypes.func,
}
export default DHowItWorks
