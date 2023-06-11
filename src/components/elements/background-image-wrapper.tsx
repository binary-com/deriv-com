import React, { PropsWithChildren, ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'

type TWrapper = {
    overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    style?: CSSProperties
    dark_background?: boolean
}

type TStaticImageWrapper = {
    children: ReactNode
}

const Wrapper = styled.div<TWrapper>`
    background-color: ${({ dark_background }) => (dark_background ? 'black' : 'transparent')};
    position: relative;
    overflow: ${({ overflow }) => overflow};
    z-index: 0;
`

export const StaticImageWrapper = ({ children }: TStaticImageWrapper) => (
    <Flex height="100%" position="absolute" z_index="-1">
        {children}
    </Flex>
)

const BackgroundImageWrapper = ({
    children,
    overflow = 'hidden',
    style,
    dark_background,
}: PropsWithChildren<TWrapper>) => (
    <Wrapper dark_background={dark_background} overflow={overflow} style={style}>
        {children}
    </Wrapper>
)

export default BackgroundImageWrapper
