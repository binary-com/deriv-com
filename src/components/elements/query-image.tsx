import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { GatsbyImageProps, ImageDataLike } from 'gatsby-plugin-image'

export interface ImageWrapperProps extends GatsbyImageProps {
    data?: ImageDataLike
    width: string
    height: string
    disable_transition: boolean
    loading: 'eager' | 'lazy'
}

const ImageWrapper = styled.div<ImageWrapperProps>`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
    .gatsby-image-wrapper [data-main-image] {
        ${({ loading, disable_transition }) => {
            if (disable_transition && loading === 'eager') {
                return css`
                    transition: none;
                    opacity: 1;
                `
            }
        }}
    }
`

const QueryImage = ({
    alt,
    data,
    disable_transition = false,
    height,
    width,
    loading,
    ...props
}: ImageWrapperProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper
                loading={loading}
                width={width}
                height={height}
                disable_transition={disable_transition}
                {...props}
            >
                <GatsbyImage alt={alt} image={image} loading={loading} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
