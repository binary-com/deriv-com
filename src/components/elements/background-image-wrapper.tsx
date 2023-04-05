import React, { PropsWithChildren, ReactNode } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'

type TWrapper = {
    is_dark?: boolean
}

type TStaticImageWrapper = {
    children: ReactNode
}

const Wrapper = styled.div<TWrapper>`
    background-color: ${({ is_dark }) => (is_dark ? 'black' : 'transparent')};
    position: relative;
    overflow: hidden;
    z-index: 0;
`

export const StaticImageWrapper = ({ children }: TStaticImageWrapper) => (
    <Flex height="100%" position="absolute" z_index="-1">
        {children}
    </Flex>
)

const BackgroundImageWrapper = ({ children, is_dark = true }: PropsWithChildren<TWrapper>) => (
    <Wrapper is_dark={is_dark}>{children}</Wrapper>
)

export default BackgroundImageWrapper
