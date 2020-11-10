// TODO: replace image.js completely with this component
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ImageWrapper = styled.div`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => props.height};

    & .gatsby-image-wrapper {
        width: ${(props) => (props.width ? props.width : '100%')};
        height: ${(props) => props.height};
    }
`

const QueryImage = ({ data, alt, width, height, className, eager, noFadeIn }) => {
    if (data) {
        const data_fluid = data.childImageSharp.fluid
        const data_fixed = data.childImageSharp.fixed
        return (
            <ImageWrapper width={width} height={height} className={className}>
                <Img
                    alt={alt}
                    {...(data_fluid ? { fluid: data_fluid } : { fixed: data_fixed })}
                    height="100%"
                    loading={eager ? 'eager' : ''}
                    fadeIn={noFadeIn ? 'false' : ''}
                />
            </ImageWrapper>
        )
    }

    return null
}

QueryImage.propTypes = {
    alt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    eager: PropTypes.bool,
    height: PropTypes.string,
    noFadeIn: PropTypes.bool,
    width: PropTypes.string,
}
export default QueryImage
