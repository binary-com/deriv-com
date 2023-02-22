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
import { Desktop, Mobile } from 'components/containers'
import { Localize } from 'components/localization'

const CalculatedFormula = ({ data }: CalculatedFormulaProps) => {
    const itemList = data.list

    return (
        <>
            <Desktop>
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
                                                <PointerText>
                                                    <Localize translate_text={list.description} />
                                                </PointerText>
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
                                        {result.description && (
                                            <Localize translate_text={result.description} />
                                        )}
                                    </FormulaValueResultSwapSynthetic>
                                </FormulaResult>
                            </FormulaHighlight>
                        </FormulaContainer>
                    )
                })}
            </Desktop>
            <Mobile>
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
                                                                <Localize
                                                                    translate_text={description}
                                                                />
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
                                                {totalResult}{' '}
                                                {totalResultDesc && (
                                                    <Localize translate_text={totalResultDesc} />
                                                )}
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
                                                                <Localize
                                                                    translate_text={description}
                                                                />
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
                                                    <Localize translate_text={totalResultDesc} />
                                                </PointerTextMobile>
                                            </PointerContainerMobile>
                                        </FormulaResult>
                                    </FormulaTopWrapper>
                                </FormulaHighlight>
                            </FormulaContainerMobileOneLine>
                        )
                    })}
                </>
            </Mobile>
        </>
    )
}

export default CalculatedFormula
