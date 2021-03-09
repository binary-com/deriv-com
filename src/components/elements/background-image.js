import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const StyledBackground = styled(BackgroundImage)`
    background-color: black;

    &::before,
    &::after {
        filter: brightness(${(props) => (props.dark ? props.dark : '1')});
    }
`

// Maps current background image to <BackgroundImage>
// Source: https://github.com/timhagn/gatsby-background-image/issues/141
// TODO: Remove or replace once gatsby-background-image fully supports Gatsby3
const getBgImageType = (imageData) => (imageData.layout === 'fixed' ? 'fixed' : 'fluid')
const getAspectRatio = (imageData) => imageData.width / imageData.height
const getPlaceholder = (imageData) => {
    if (imageData.placeholder) {
        return imageData.placeholder.fallback.includes(`base64`)
            ? { base64: imageData.placeholder.fallback }
            : { tracedSvg: imageData.placeholder.fallback }
    }
    return {}
}

const convertToBgImage = (imageData) => {
    if (imageData && imageData.layout) {
        const returnBgObject = {}
        const bgType = getBgImageType(imageData)
        const aspectRatio = getAspectRatio(imageData)
        const placeholder = getPlaceholder(imageData)
        returnBgObject[bgType] = {
            ...imageData.images.fallback,
            ...placeholder,
            aspectRatio,
        }
        return returnBgObject
    }
    return {}
}

export const Background = ({ children, data, style, dark, ...props }) => {
    const image = getImage(data)
    const bgImage = convertToBgImage(image)
    return (
        <StyledBackground Tag="div" style={style} {...bgImage} dark={dark} {...props}>
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
