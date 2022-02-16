import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'

const StyledSectionContainer = styled(SectionContainer)`
    border: 1.5px solid var(--color-blue-5);
    background-color: var(--color-blue-4);
    border-radius: 6px;
    padding-top: 20px;
`
export const CalculationOutput = styled.div`
    display: inline-block;
    align-items: center;
    color: black;
`
export const PointerDot = styled.div`
    height: 8px;
    width: 8px;
    border: 5px solid black;
    border-radius: 50%;
    opacity: 0.1;
`
export const PointerStick = styled.div`
    position: relative;
    height: 20px;
    width: 1.5px;
    background-color: black;
    opacity: 0.1;
`
export const PointerText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--color-green);
    position: relative;
`
export const Operator = styled.div`
    display: inline-block;
    color: var(--color-green);
    margin-left: 20px;
`

const ExampleCalculation = ({ data }) => {
    return (
        <StyledSectionContainer fd="column" jc="center" max_height="100px">
            {data.map((item, index) => {
                return (
                    <CalculationOutput key={index}>
                        <Header weight="bold" align="center" type="paragraph-1" ml="20px">
                            {item.value}
                            <Operator>{item.next_operator}</Operator>
                        </Header>
                        <Flex fd="column" mt="8px" ai="center" ml="10px">
                            <PointerDot />
                            <PointerStick />
                            <PointerText>{item.description}</PointerText>
                        </Flex>
                    </CalculationOutput>
                )
            })}
        </StyledSectionContainer>
    )
}

export default ExampleCalculation

ExampleCalculation.propTypes = {
    data: PropTypes.object,
}
