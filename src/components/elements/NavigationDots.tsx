import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'

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

const NavigationDots = ({
    count,
    selected_index,
    selected_color,
    unselected_color,
    onNavigate,
}: NavigationDotSProps): ReactElement => {
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
    return (
        <Flex ai="center" m="2rem">
            {dotsList}
        </Flex>
    )
}

export default NavigationDots
