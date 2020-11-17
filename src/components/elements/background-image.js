import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const StyledBackground = styled(BackgroundImage)`
    background-color: black;

    &::before,
    &::after {
        filter: brightness(${(props) => (props.dark ? props.dark : '1')});
    }
`

export const Background = ({ children, data, style, dark, ...props }) => {
    return (
        <StyledBackground
            Tag="div"
            style={style}
            fluid={data.childImageSharp.fluid}
            dark={dark}
            {...props}
        >
            {children}
        </StyledBackground>
    )
}

Background.propTypes = {
    brightness: PropTypes.string,
    children: PropTypes.node,
    dark: PropTypes.string,
    data: PropTypes.object,
    img_name: PropTypes.string,
    style: PropTypes.object,
}
export default Background
