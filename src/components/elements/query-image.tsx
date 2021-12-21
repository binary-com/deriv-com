import React, { MouseEventHandler, ReactElement } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

export type QueryImageProps = {
    alt: string
    className?: string
    data: ImageDataLike
    height?: string
    width?: string
    loading?: 'eager' | 'lazy'
    onMouseEnter?: MouseEventHandler<HTMLDivElement>
    onMouseLeave?: MouseEventHandler<HTMLDivElement>
    onClick?: MouseEventHandler<HTMLDivElement>
}

type ImageWrapperProps = {
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
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
}: QueryImageProps): ReactElement => {
    const image = getImage(data)
    if (data) {
        return (
            <ImageWrapper
                width={width}
                height={height}
                className={className}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <GatsbyImage image={image} alt={alt} loading={loading} {...props} />
            </ImageWrapper>
        )
    }
    return null
}

export default QueryImage
