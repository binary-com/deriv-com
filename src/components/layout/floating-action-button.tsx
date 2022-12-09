import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div<{ has_hover: boolean }>`
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    margin: 0 1.6rem 1.6rem 1.6rem;
    pointer-events: all;
    animation: scale 0.2s;
    transition: all 0.2s;
    scale: ${({ has_hover }) => (has_hover ? '1.1' : '1')};

    @keyframes scale {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(100%);
        }
    }
`

type TProps = {
    children: (has_hover: boolean) => JSX.Element
    onClick?: React.MouseEventHandler<HTMLDivElement>
    className?: string
}

const FloatingActionButton = ({ children, onClick, className }: TProps) => {
    const [has_hover, setHasHover] = useState(false)

    return (
        <Container
            className={className}
            onClick={onClick}
            has_hover={has_hover}
            onMouseEnter={() => setHasHover(true)}
            onMouseLeave={() => setHasHover(false)}
        >
            {children(has_hover)}
        </Container>
    )
}

export default FloatingActionButton
