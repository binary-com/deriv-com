import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike } from 'gatsby-plugin-image'

type QueryImageProps = {
    alt: string | React.ReactElement
    className?: string
    data: ImageDataLike
    height?: string
    width?: string
    loading?: 'eager' | 'lazy'
}

type ImageWrapperProps = {
    width: string
    height: string
    className?: string
    loading: 'eager' | 'lazy'
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    & .gatsby-image-wrapper {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height};
    }
    .gatsby-image-wrapper [data-main-image] {
        ${(props) => {
            if (props.loading === 'eager') {
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
    className,
    data,
    height,
    loading = 'lazy',
    width,
    ...props
}: QueryImageProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper loading={loading} width={width} height={height} className={className}>
                <GatsbyImage image={image} alt={alt} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
