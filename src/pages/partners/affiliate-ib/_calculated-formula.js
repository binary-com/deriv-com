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
    return (
        <>
            <Show.Desktop>
                {data.list.map((value, index) => (
                    <FormulaContainer key={index}>
                        <FormulaHighlight>
                            {value.formula.map((list, indexData) => (
                                <>
                                    <FormulaValueSwapSynthetic key={indexData}>
                                        {list.item}
                                        <PointerContainer>
                                            <PointerDot />
                                            <PointerStick />
                                            <PointerText>{list.description}</PointerText>
                                        </PointerContainer>
                                    </FormulaValueSwapSynthetic>
                                    {list.next_operator ? (
                                        <FormulaValueSwapSynthetic>
                                            <FormulaGreen>{list.next_operator}</FormulaGreen>
                                        </FormulaValueSwapSynthetic>
                                    ) : (
                                        ''
                                    )}
                                </>
                            ))}
                            <FormulaResult>
                                <FormulaValueResultSwapSynthetic>
                                    <FormulaResultGreen>=</FormulaResultGreen>
                                    {value.result.total}
                                    {value.result.description ? value.result.description : ''}
                                </FormulaValueResultSwapSynthetic>
                            </FormulaResult>
                        </FormulaHighlight>
                    </FormulaContainer>
                ))}
            </Show.Desktop>
            <Show.Mobile>
                {data.list.map((value, index) => (
                    <>
                        {value.totalItem > 2 ? (
                            <FormulaContainer key={index}>
                                <FormulaHighlight>
                                    <FormulaTopWrapper>
                                        {value.formula.map((list, indexData) => (
                                            <>
                                                <FormulaValueMobile key={indexData}>
                                                    {list.item}
                                                    {indexData > 0 ? (
                                                        <PointerContainer top>
                                                            <PointerDot />
                                                            <PointerStick />
                                                            <PointerText top>
                                                                {list.description}
                                                            </PointerText>
                                                        </PointerContainer>
                                                    ) : (
                                                        <PointerContainer>
                                                            <PointerDot />
                                                            <PointerStick />
                                                            <PointerText>
                                                                {list.description}
                                                            </PointerText>
                                                        </PointerContainer>
                                                    )}
                                                </FormulaValueMobile>

                                                {list.next_operator ? (
                                                    <FormulaValueMobile>
                                                        <FormulaGreen>
                                                            {list.next_operator}
                                                        </FormulaGreen>
                                                    </FormulaValueMobile>
                                                ) : (
                                                    ''
                                                )}
                                            </>
                                        ))}
                                    </FormulaTopWrapper>
                                    <FormulaBottomWrapper>
                                        <FormulaResult>
                                            <FormulaValueResultSwapSynthetic>
                                                <FormulaResultGreen>=</FormulaResultGreen>
                                                {value.result.total} {value.result.description}
                                            </FormulaValueResultSwapSynthetic>
                                        </FormulaResult>
                                    </FormulaBottomWrapper>
                                </FormulaHighlight>
                            </FormulaContainer>
                        ) : (
                            <FormulaContainerMobileOneLine>
                                <FormulaHighlight>
                                    <FormulaTopWrapper oneLine>
                                        {value.formula.map((list, indexData) => (
                                            <>
                                                <FormulaValueMobileOneLine key={indexData}>
                                                    {list.item}
                                                    <PointerContainerMobile>
                                                        <PointerDot />
                                                        <PointerStick />
                                                        <PointerTextMobile>
                                                            {list.description}
                                                        </PointerTextMobile>
                                                    </PointerContainerMobile>
                                                </FormulaValueMobileOneLine>
                                                {list.next_operator ? (
                                                    <FormulaValueMobileOneLine>
                                                        <FormulaGreen>
                                                            {list.next_operator}
                                                        </FormulaGreen>
                                                    </FormulaValueMobileOneLine>
                                                ) : (
                                                    ''
                                                )}
                                            </>
                                        ))}
                                        <FormulaResult>
                                            <FormulaValueResultSwapSynthetic>
                                                <FormulaResultGreen>=</FormulaResultGreen>
                                                {value.result.total}
                                            </FormulaValueResultSwapSynthetic>

                                            <PointerContainerMobile>
                                                <PointerDot />
                                                <PointerStick />
                                                <PointerTextMobile>
                                                    {value.result.description}
                                                </PointerTextMobile>
                                            </PointerContainerMobile>
                                        </FormulaResult>
                                    </FormulaTopWrapper>
                                </FormulaHighlight>
                            </FormulaContainerMobileOneLine>
                        )}
                    </>
                ))}
            </Show.Mobile>
        </>
    )
}

CalculatedFormula.propTypes = {
    data: PropTypes.object,
}

export default CalculatedFormula
