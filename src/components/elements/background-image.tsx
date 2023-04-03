import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike, IGatsbyImageData, GatsbyImageProps } from 'gatsby-plugin-image'
import { Flex } from 'components/containers'

type TBackgroundImage = Omit<GatsbyImageProps, 'image'> & {
    data: ImageDataLike | IGatsbyImageData
    image_opacity?: string
    child_style?: React.CSSProperties
    child_class?: string
    dark_background?: boolean
}

const Wrapper = styled.div<{ dark_background: boolean }>`
    background-color: ${({ dark_background }) => (dark_background ? 'black' : 'transparent')};
    position: relative;
    overflow: hidden;
    z-index: 0;
`

const BackgroundImage = ({
    children,
    data,
    image_opacity,
    child_style,
    child_class,
    dark_background = true,
    ...rest
}: React.PropsWithChildren<TBackgroundImage>) => {
    const image = getImage(data)

    return (
        <Wrapper dark_background={dark_background}>
            <Flex height="100%" position="absolute" z_index="-1">
                <GatsbyImage
                    image={image}
                    style={{ opacity: image_opacity || '1', width: '100%' }}
                    {...rest}
                />
            </Flex>

            <div style={child_style} className={child_class}>
                {children}
            </div>
        </Wrapper>
    )
}

export default BackgroundImage
