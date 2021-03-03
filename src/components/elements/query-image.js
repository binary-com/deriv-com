import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

export const ImageWrapper = styled.div`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => props.height};

    & .gatsby-image-wrapper {
        width: ${(props) => (props.width ? props.width : '100%')};
        height: ${(props) => props.height};
    }
`

const QueryImage = ({ data, alt, width, height, className }) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper width={width} height={height} className={className}>
                <GatsbyImage image={image} alt={alt} height="100%" />
            </ImageWrapper>
        )
    }
    return null
}

QueryImage.propTypes = {
    alt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
}
export default QueryImage
