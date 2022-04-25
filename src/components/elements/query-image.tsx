import React, { MouseEventHandler, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike } from 'gatsby-plugin-image'

type queryImageDataLike = {
    __typename?: 'File'
    childImageSharp: { __typename?: 'ImageSharp'; gatsbyImageData: ImageDataLike }
}

type dataLike = queryImageDataLike | ImageDataLike

export type QueryImageProps = {
    alt: ReactElement | string
    className?: string
    data: dataLike
    height?: string
    width?: string
    max_width?: string
    loading?: 'eager' | 'lazy'
    disable_transition?: boolean
    onMouseOver?: MouseEventHandler<HTMLDivElement>
    onMouseOut?: MouseEventHandler<HTMLDivElement>
    onClick?: MouseEventHandler<HTMLDivElement>
}

export type ImageWrapperProps = {
    width: string
    height: string
    className?: string
    loading: 'eager' | 'lazy'
    disable_transition?: boolean
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
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
    className,
    data,
    disable_transition = false,
    height,
    loading = 'lazy',
    onClick,
    width,
    ...props
}: QueryImageProps) => {
    let image = null
    if (data && '__typename' in data) {
        image = getImage(data.childImageSharp.gatsbyImageData)
    } else {
        image = getImage(data as ImageDataLike)
    }

    if (data) {
        return (
            <ImageWrapper
                loading={loading}
                width={width}
                height={height}
                className={className}
                disable_transition={disable_transition}
                onClick={onClick}
            >
                <GatsbyImage image={image} alt={alt as string} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
