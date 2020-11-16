import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledSectionContainer = styled(SectionContainer)`
    padding: 9.1rem 0 7.7rem 0;

    @media ${device.tabletL} {
        padding: 29px 0 40px 0;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 4.8rem;

    @media ${device.tabletL} {
        ${(props) =>
            props.as === 'h4' ? 'font-size: var(--text-size-sm);' : 'font-size: var(--text-size-l)'}
    }
`

const HowTo = ({ Steps, is_provider }) => {
    return (
        <StyledSectionContainer style={{ backgroundColor: 'var(--color-grey-25)' }}>
            <Container justify="center" direction="column">
                <StyledHeader as="h2">{localize('How to subscribe to an MT5 signal')}</StyledHeader>
                <Steps is_provider={is_provider} />
            </Container>
        </StyledSectionContainer>
    )
}

HowTo.propTypes = {
    is_provider: PropTypes.bool,
    Steps: PropTypes.func,
    title: PropTypes.object,
}
export default HowTo
