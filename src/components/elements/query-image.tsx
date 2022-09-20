import React, { CSSProperties, MouseEventHandler, ReactElement } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'

export type QueryImageProps = {
    alt: ReactElement | string
    className?: string
    data: ImageDataLike | IGatsbyImageData
    height?: string
    width?: string
    max_width?: string
    loading?: 'eager' | 'lazy'
    onMouseOver?: MouseEventHandler<HTMLDivElement>
    onMouseOut?: MouseEventHandler<HTMLDivElement>
    onClick?: MouseEventHandler<HTMLDivElement>
    style?: CSSProperties
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
    loading = 'lazy',
    onClick,
    width,
    ...props
}: QueryImageProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper
                width={width}
                height={height}
                className={className}
                onClick={onClick}
            >
                <GatsbyImage image={image} alt={alt as string} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
