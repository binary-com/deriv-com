import React from 'react'
import PropTypes from 'prop-types'
import {
    FormulaBottomWrapper,
    FormulaContainer,
    FormulaContainerMobileOneLine,
    FormulaGreen,
    FormulaHighlight,
    FormulaResultGreen,
    FormulaResult,
    FormulaTopWrapper,
    FormulaValueMobile,
    FormulaValueMobileOneLine,
    FormulaValueResultSwapSynthetic,
    FormulaValueSwapSynthetic,
    PointerContainer,
    PointerContainerMobile,
    PointerDot,
    PointerStick,
    PointerText,
    PointerTextMobile,
} from './_style'
import { Show } from 'components/containers'

const CalculatedFormula = ({ data }) => {
    let itemList = data.list

    return (
        <>
            <Show.Desktop>
                {itemList.map((value, index) => {
                    const formula = value.formula
                    const result = value.result

                    return (
                        <FormulaContainer key={index}>
                            <FormulaHighlight>
                                {formula.map((list, indexData) => (
                                    <>
                                        <FormulaValueSwapSynthetic key={indexData}>
                                            {list.item}
                                            <PointerContainer>
                                                <PointerDot />
                                                <PointerStick />
                                                <PointerText>{list.description}</PointerText>
                                            </PointerContainer>
                                        </FormulaValueSwapSynthetic>
                                        {list.next_operator && (
                                            <FormulaValueSwapSynthetic>
                                                <FormulaGreen>{list.next_operator}</FormulaGreen>
                                            </FormulaValueSwapSynthetic>
                                        )}
                                    </>
                                ))}
                                <FormulaResult>
                                    <FormulaValueResultSwapSynthetic>
                                        <FormulaResultGreen>=</FormulaResultGreen>
                                        {result.total}
                                        {result.description && result.description}
                                    </FormulaValueResultSwapSynthetic>
                                </FormulaResult>
                            </FormulaHighlight>
                        </FormulaContainer>
                    )
                })}
            </Show.Desktop>
            <Show.Mobile>
                <>
                    {itemList.map((value, index) => {
                        const totalItem = value.totalItem
                        const formula = value.formula
                        const totalResult = value.result.total
                        const totalResultDesc = value.result.description
                        return totalItem > 2 ? (
                            <FormulaContainer key={index}>
                                <FormulaHighlight>
                                    <FormulaTopWrapper>
                                        {formula.map((list, indexData) => {
                                            let items = list.item
                                            let desc = list.description
                                            let nextOperator = list.next_operator

                                            return (
                                                <>
                                                    <FormulaValueMobile key={indexData}>
                                                        {items}
                                                        {indexData > 0 ? (
                                                            <PointerContainer top>
                                                                <PointerDot />
                                                                <PointerStick />
                                                                <PointerText top>
                                                                    {desc}
                                                                </PointerText>
                                                            </PointerContainer>
                                                        ) : (
                                                            <PointerContainer>
                                                                <PointerDot />
                                                                <PointerStick />
                                                                <PointerText>{desc}</PointerText>
                                                            </PointerContainer>
                                                        )}
                                                    </FormulaValueMobile>

                                                    {nextOperator && (
                                                        <FormulaValueMobile>
                                                            <FormulaGreen>
                                                                {nextOperator}
                                                            </FormulaGreen>
                                                        </FormulaValueMobile>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </FormulaTopWrapper>
                                    <FormulaBottomWrapper>
                                        <FormulaResult>
                                            <FormulaValueResultSwapSynthetic>
                                                <FormulaResultGreen>=</FormulaResultGreen>
                                                {totalResult} {totalResultDesc}
                                            </FormulaValueResultSwapSynthetic>
                                        </FormulaResult>
                                    </FormulaBottomWrapper>
                                </FormulaHighlight>
                            </FormulaContainer>
                        ) : (
                            <FormulaContainerMobileOneLine>
                                <FormulaHighlight>
                                    <FormulaTopWrapper oneLine>
                                        {formula.map((list, indexData) => {
                                            let items = list.item
                                            let desc = list.description
                                            let nextOperator = list.next_operator

                                            return (
                                                <>
                                                    <FormulaValueMobileOneLine key={indexData}>
                                                        {items}
                                                        <PointerContainerMobile>
                                                            <PointerDot />
                                                            <PointerStick />
                                                            <PointerTextMobile>
                                                                {desc}
                                                            </PointerTextMobile>
                                                        </PointerContainerMobile>
                                                    </FormulaValueMobileOneLine>
                                                    {nextOperator && (
                                                        <FormulaValueMobileOneLine>
                                                            <FormulaGreen>
                                                                {nextOperator}
                                                            </FormulaGreen>
                                                        </FormulaValueMobileOneLine>
                                                    )}
                                                </>
                                            )
                                        })}
                                        <FormulaResult>
                                            <FormulaValueResultSwapSynthetic>
                                                <FormulaResultGreen>=</FormulaResultGreen>
                                                {totalResult}
                                            </FormulaValueResultSwapSynthetic>

                                            <PointerContainerMobile>
                                                <PointerDot />
                                                <PointerStick />
                                                <PointerTextMobile>
                                                    {totalResultDesc}
                                                </PointerTextMobile>
                                            </PointerContainerMobile>
                                        </FormulaResult>
                                    </FormulaTopWrapper>
                                </FormulaHighlight>
                            </FormulaContainerMobileOneLine>
                        )
                    })}
                </>
            </Show.Mobile>
        </>
    )
}

CalculatedFormula.propTypes = {
    data: PropTypes.object,
}

export default CalculatedFormula
