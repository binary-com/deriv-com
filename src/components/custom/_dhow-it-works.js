import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
        ${(props) =>
            props.as === 'h4' ? 'font-size: var(--text-size-sm);' : 'font-size: var(--text-size-l)'}
    }
`

const DHowItWorks = ({ Video, title }) => {
    return (
        <SectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h4" type="sub-section-title" align="center" weight="500">
                    {localize('How it works')}
                </StyledHeader>
                <StyledHeader as="h2" type="page-title" align="center" mt="0.9rem">
                    {title}
                </StyledHeader>
                <Video />
            </Container>
        </SectionContainer>
    )
}

DHowItWorks.propTypes = {
    title: PropTypes.object,
    Video: PropTypes.object,
}
export default DHowItWorks
