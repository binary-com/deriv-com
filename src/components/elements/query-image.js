// TODO: replace image.js completely with this component
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ImageWrapper = styled.div`
    & .gatsby-image-wrapper {
        width: ${props => props.width};
        height: ${props => props.height};
    }
`

const QueryImage = ({ data, alt, width, height }) => {
    return (
        <ImageWrapper width={width} height={height}>
            <Img alt={alt} fluid={data.childImageSharp.fluid} height="100%" />
        </ImageWrapper>
    )
}

QueryImage.propTypes = {
    alt: PropTypes.string,
    data: PropTypes.object,
    height: PropTypes.string,
    width: PropTypes.string,
}
export default QueryImage
