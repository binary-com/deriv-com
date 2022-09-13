import React, { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage, { IBackgroundImageProps } from 'gatsby-background-image'

const StyledBackground = styled(BackgroundImage)<{ $dark: string }>`
    background-color: black;

    &::before,
    &::after {
        filter: brightness(${({ $dark }) => ($dark ? $dark : '1')});
    }
`

interface BackgroundProps extends IBackgroundImageProps {
    children?: ReactNode
    dark?: string
    data: ImageDataLike | IGatsbyImageData
    is_unstyled?: boolean
    style?: CSSProperties
    loading?: string
}

export const Background = ({
    children,
    dark,
    data,
    is_unstyled = false,
    style,
    ...props
}: BackgroundProps) => {
    const image = getImage(data)
    const bg_image = convertToBgImage(image)

    if (is_unstyled) {
        return (
            <BackgroundImage Tag="div" {...bg_image} {...props}>
                {children}
            </BackgroundImage>
        )
    }

    return (
        <StyledBackground Tag="div" style={style} $dark={dark} {...bg_image} {...props}>
            {children}
        </StyledBackground>
    )
}

export default Background
