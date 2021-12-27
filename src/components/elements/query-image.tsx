import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

type QueryImageProps = {
    alt: string
    className?: string
    data: ImageDataLike
    height?: string
    width?: string
    loading?: 'eager' | 'lazy'
}

export type ImageWrapperProps = {
    width: string
    height: string
    className?: string
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
`

const QueryImage = ({
    alt,
    className,
    data,
    height,
    loading,
    width,
    ...props
}: QueryImageProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper width={width} height={height} className={className}>
                <GatsbyImage image={image} alt={alt} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
