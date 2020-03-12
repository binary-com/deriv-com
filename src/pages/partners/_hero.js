import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { BackgroundImage } from 'components/elements'

const StyeldContainer = styled(Container)`
    height: 100%;
`

const Hero = ({ children }) => {
    return (
        <BackgroundImage
            img_name="partners-banner.png"
            style={{
                height: '80rem',
                width: '100%',
            }}
        >
            <StyeldContainer direction="column" justify="center" align="center">
                {children}
            </StyeldContainer>
        </BackgroundImage>
    )
}

Hero.propTypes = {
    children: PropTypes.node,
}
export default Hero
