import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const ImageWrapper = styled.div<ImageWrapperProps>`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
`

type QueryImageProps = {
    alt: string
    className?: string
    data: any
    height: any
    is_eager: boolean
    width: any
}

type ImageWrapperProps = {
    width: any
    height: any
    className?: string
}

const QueryImage = ({ alt, className, data, height, is_eager, width }: QueryImageProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper width={width} height={height} className={className}>
                <GatsbyImage image={image} alt={alt} loading={is_eager ? 'eager' : 'lazy'} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
