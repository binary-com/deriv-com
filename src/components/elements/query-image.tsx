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
    height: string | number
    loading?: 'eager' | 'lazy'
    width: string | number
}

type ImageWrapperProps = {
    width: string | number
    height: string | number
    className?: string
}

const QueryImage = ({
    alt,
    className,
    data,
    height,
    loading,
    width,
    ...props
}: QueryImageProps): React.ReactNode => {
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
