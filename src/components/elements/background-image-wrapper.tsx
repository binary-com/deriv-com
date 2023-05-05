import React, { PropsWithChildren, ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'

type TWrapper = {
    is_dark?: boolean
    overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
    style?: CSSProperties
}

type TStaticImageWrapper = {
    children: ReactNode
}

const Wrapper = styled.div<TWrapper>`
    background-color: ${({ is_dark }) => (is_dark ? 'black' : 'transparent')};
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
    is_dark = true,
    overflow = 'hidden',
    style,
}: PropsWithChildren<TWrapper>) => (
    <Wrapper is_dark={is_dark} overflow={overflow} style={style}>
        {children}
    </Wrapper>
)

export default BackgroundImageWrapper
