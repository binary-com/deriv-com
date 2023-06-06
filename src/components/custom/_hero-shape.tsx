import React, { ReactNode } from 'react'
import styled from 'styled-components'

type TProps = {
    color?: string
    angle?: number
    src?: string
    width?: string
    children?: ReactNode
}

const ContainerStyle = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
`
const ShapeStyle = styled.div<Pick<TProps, 'angle'>>`
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    transform-origin: center;
    transform: rotate(${({ angle }) => angle}deg);
`
const BackgroundStyle = styled.div<Pick<TProps, 'color' | 'width'>>`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: 100%;
`

const Shape: React.FC<TProps> = ({ color = '#FF444F', angle = 0, width = '50%', children }) => {
    return (
        <ContainerStyle>
            <ShapeStyle angle={angle}>
                <BackgroundStyle color={color} width={width}></BackgroundStyle>
            </ShapeStyle>
            {children}
        </ContainerStyle>
    )
}

export default Shape
