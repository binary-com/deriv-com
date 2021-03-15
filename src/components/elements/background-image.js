import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
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
    const image = getImage(data)
    const bgImage = convertToBgImage(image)

    return (
        <StyledBackground Tag="div" style={style} dark={dark} {...bgImage} {...props}>
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
