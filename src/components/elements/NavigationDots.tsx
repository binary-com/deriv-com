import React, { ReactElement } from 'react'
import styled from 'styled-components'

type NavigationDotSProps = {
    count: number
    selected_index: number
    selected_color: string
    unselected_color: string
    onNavigate?: (...args: any[]) => void
}

const Dot = styled.div`
    cursor: pointer;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    padding: 0;
    outline: 0;
    border: 0;
    margin-right: 8px;
    background-color: var(${(props) => props.color ?? '--color-grey-21'});
`

const DotsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
`

const NavigationDots = ({
    count,
    selected_index,
    selected_color,
    unselected_color,
    onNavigate,
}: NavigationDotSProps): React.ReactElement => {
    const dotsList: Array<ReactElement> = []
    for (let i = 0; i < count; i++) {
        dotsList.push(
            <Dot
                key={i}
                color={i === selected_index ? selected_color : unselected_color}
                onClick={onNavigate ? () => onNavigate(i) : null}
            />,
        )
    }
    return <DotsContainer>{dotsList}</DotsContainer>
}

export default NavigationDots
