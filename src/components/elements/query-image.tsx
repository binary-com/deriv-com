import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { GatsbyImageProps, ImageDataLike } from 'gatsby-plugin-image'

export interface ImageWrapperProps extends GatsbyImageProps {
    data?: ImageDataLike
    width: string
    height: string
    disable_transition: boolean
}

const GatsbyImageWrapper = styled(GatsbyImage)<ImageWrapperProps>`
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
    data,
    disable_transition = false,
    height,
    width,
    ...props
}: ImageWrapperProps) => {
    const image = getImage(data)
    if (data) {
        return (
            <GatsbyImageWrapper
                image={image}
                width={width}
                height={height}
                disable_transition={disable_transition}
                {...props}
            />
        )
    }
    return null
}

export default QueryImage
