import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'themes/theme.breakpoints'

type TProps = {
    color?: string
    angle?: number
    src?: string
    width?: string
    children?: ReactNode
    angle_mobile?: number
    width_mobile?: string
    width_tablet?: string
}

const ContainerStyle = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
`
const ShapeStyle = styled.div<Pick<TProps, 'angle' | 'angle_mobile'>>`
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    transform-origin: center;
    transform: rotate(${({ angle }) => angle}deg);
    @media ${breakpoints.xs} {
        transform: rotate(${({ angle_mobile }) => angle_mobile}deg);
    }
`
const BackgroundStyle = styled.div<Pick<TProps, 'color' | 'width' | 'width_mobile' | 'width_tablet'>>`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: 100%;
    @media ${breakpoints.xs} {
        width: ${({ width_mobile }) => width_mobile};
    }
    @media ${breakpoints.sm} {
        width: ${({ width_tablet }) => width_tablet};
    }
    @media ${breakpoints.md} {
        width: ${({ width_tablet }) => width_tablet};
    }
`

const Shape: React.FC<TProps> = ({ color = '#FF444F', angle = 0, angle_mobile = 0, width = '50%', width_mobile, width_tablet, children }) => {
    return (
        <ContainerStyle>
            <ShapeStyle angle={angle} angle_mobile={angle_mobile}>
                <BackgroundStyle color={color} width={width} width_mobile={width_mobile} width_tablet={width_tablet}></BackgroundStyle>
            </ShapeStyle>
            {children}
        </ContainerStyle>
    )
}

export default Shape
