import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const StyledBackground = styled(BackgroundImage)`
    &::before,
    &::after {
        filter: brightness(${props => (props.dark ? props.dark : '1')});
    }
`

const Background = ({ children, data, style, ...props }) => {
    return (
        <StyledBackground Tag="div" style={style} fluid={data.childImageSharp.fluid} {...props}>
            {children}
        </StyledBackground>
    )
}

Background.propTypes = {
    brightness: PropTypes.string,
    children: PropTypes.node,
    data: PropTypes.object,
    img_name: PropTypes.string,
    style: PropTypes.object,
}
export default Background
