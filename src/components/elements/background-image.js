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

export const Background = ({
    children,
    dark,
    data,
    fluid,
    is_unstyled = false,
    style,
    ...props
}) => {
    const image = getImage(data)
    const bgImage = convertToBgImage(image)

    if (is_unstyled) {
        return (
            <BackgroundImage Tag="div" {...bgImage} {...props}>
                {children}
            </BackgroundImage>
        )
    }

    return (
        <StyledBackground Tag="div" style={style} dark={dark} fluid={fluid} {...bgImage} {...props}>
            {children}
        </StyledBackground>
    )
}

Background.propTypes = {
    brightness: PropTypes.string,
    children: PropTypes.node,
    dark: PropTypes.string,
    data: PropTypes.object,
    fluid: PropTypes.array,
    is_unstyled: PropTypes.bool,
    style: PropTypes.object,
}
export default Background
