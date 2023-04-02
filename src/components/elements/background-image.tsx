import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData } from 'gatsby-plugin-image'
import { Flex } from 'components/containers'

type TBackgroundImage = {
    data: ImageDataLike | IGatsbyImageData
    alt: string
    image_opacity?: string
    child_style?: React.CSSProperties
}

const Wrapper = styled.div`
    background-color: black;
    position: relative;
    overflow: hidden;
    z-index: 0;
`

const BackgroundImage = ({
    children,
    alt,
    data,
    image_opacity,
    child_style,
}: React.PropsWithChildren<TBackgroundImage>) => {
    const image = getImage(data)

    return (
        <Wrapper>
            <Flex height="100%" position="absolute" z_index="-1">
                <GatsbyImage
                    image={image}
                    alt={alt}
                    style={{ opacity: image_opacity || '1', width: '100%' }}
                />
            </Flex>

            <div style={child_style}>{children}</div>
        </Wrapper>
    )
}

export default BackgroundImage
