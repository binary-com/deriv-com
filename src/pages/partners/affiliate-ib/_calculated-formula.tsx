import React from 'react'
import { CalculatedFormulaProps } from './_minimum-volume'
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

const CalculatedFormula = ({ data }: CalculatedFormulaProps) => {
    const itemList = data.list

    return (
        <>
            <Show.Desktop>
                {itemList.map((value, index) => {
                    const { formula, result } = value
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
                                        {result.description}
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
                        const { totalItem, formula } = value
                        const totalResult = value.result.total
                        const totalResultDesc = value.result.description
                        const totalNumberofOperation = 2
                        return totalItem > totalNumberofOperation ? (
                            <FormulaContainer key={index}>
                                <FormulaHighlight>
                                    <FormulaTopWrapper>
                                        {formula.map((list, indexData) => {
                                            const { item, description } = list
                                            const nextOperator = list.next_operator

                                            return (
                                                <>
                                                    <FormulaValueMobile key={indexData}>
                                                        {item}
                                                        <PointerContainer is_top={indexData > 0}>
                                                            <PointerDot />
                                                            <PointerStick />
                                                            <PointerText is_top={indexData > 0}>
                                                                {description}
                                                            </PointerText>
                                                        </PointerContainer>
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
                                            const { item, description } = list
                                            const nextOperator = list.next_operator

                                            return (
                                                <>
                                                    <FormulaValueMobileOneLine key={indexData}>
                                                        {item}
                                                        <PointerContainerMobile>
                                                            <PointerDot />
                                                            <PointerStick />
                                                            <PointerTextMobile>
                                                                {description}
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

export default CalculatedFormula
