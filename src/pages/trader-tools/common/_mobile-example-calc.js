import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'

const StyledSectionContainer = styled(SectionContainer)`
    border: 1.5px solid var(--color-blue-5);
    background-color: var(--color-blue-4);
    border-radius: 6px;
    padding-top: 20px;
`
const CalculationOutput = styled.div`
    display: inline-block;
    align-items: center;
    color: black;
`
const PointerContainerMobile = styled.div`
    display: flex;
    position: relative;
    height: 80px;
    margin-top: ${(props) => (props.top ? '-100px' : '8px')};
    flex-direction: ${(props) => (props.top ? 'column-reverse' : 'column')};
    margin-left: ${(props) => (props.ml ? props.ml : '0')};
    align-items: center;
    max-width: 20px;
    white-space: nowrap;
`
const PointerDotMobile = styled.div`
    height: 7px;
    width: 7px;
    background-color: black;
    border-radius: 50%;
    opacity: 0.1;
`
const PointerStickMobile = styled.div`
    position: relative;
    height: ${(props) => (props.height ? props.height : '18px')};
    width: 1px;
    background-color: black;
    opacity: 0.1;
`
const PointerTextMobile = styled.div`
    margin-top: ${(props) => (props.top ? '0' : '5px')};
    margin-bottom: ${(props) => (props.top ? '5px' : '0')};
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue-5);
`
const Operator = styled.div`
    display: inline-block;
    color: var(--color-green);
    margin-left: 20px;
`

const MobileExampleCalculation = ({ data }) => {
    return (
        <StyledSectionContainer fd="column" jc="center" max_height="150px">
            {data.map((item, index) => {
                return (
                    <CalculationOutput key={index}>
                        <Header weight="bold" align="center" type="paragraph-1" ml="20px">
                            {item.value}
                            <Operator>{item.next_operator}</Operator>
                        </Header>
                        <PointerContainerMobile is_top={item > 0}>
                            <PointerDotMobile />
                            <PointerStickMobile />
                            <PointerTextMobile is_top={item > 0}>
                                {item.description}
                            </PointerTextMobile>
                        </PointerContainerMobile>
                    </CalculationOutput>
                )
            })}
        </StyledSectionContainer>
    )
}

export default MobileExampleCalculation

MobileExampleCalculation.propTypes = {
    data: PropTypes.object,
}
