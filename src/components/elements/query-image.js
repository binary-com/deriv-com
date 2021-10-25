import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

export const ImageWrapper = styled.div`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
        border-radius: ${(props) => props.b_radius};
    }
`

const QueryImage = ({ alt, className, data, height, is_eager, width, b_radius }) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper b_radius={b_radius} width={width} height={height} className={className}>
                <GatsbyImage
                    image={image}
                    alt={alt}
                    height="100%"
                    loading={is_eager ? 'eager' : 'lazy'}
                />
            </ImageWrapper>
        )
    }
    return null
}

QueryImage.propTypes = {
    alt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    b_radius: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    height: PropTypes.string,
    is_eager: PropTypes.bool,
    width: PropTypes.string,
}

export default QueryImage
