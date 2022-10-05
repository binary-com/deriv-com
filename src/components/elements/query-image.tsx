import React, { CSSProperties, MouseEventHandler, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export type QueryImageProps = {
    alt: ReactElement | string
    className?: string
    data: ImageDataLike | IGatsbyImageData
    height?: string
    width?: string
    loading?: 'eager' | 'lazy'
    disable_transition?: boolean
    onMouseOver?: MouseEventHandler<HTMLDivElement>
    onMouseOut?: MouseEventHandler<HTMLDivElement>
    onClick?: MouseEventHandler<HTMLDivElement>
    style?: CSSProperties
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
    const image = getImage(data)
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
