import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValue,
    FormulaGreen,
    PointerContainer,
    PointerDot,
    PointerStick,
    PointerText,
    FormulaContainerMobile,
    FormulaHighlightMobile,
    FormulaValueMobile,
    StyledSpan,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

export const PipSyntheticExample = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="180px" pt="50px">
                    <FormulaHighlight jc="space-evenly" pl="100px" pr="100px">
                        <FormulaValue>
                            <Localize translate_text="_t_0.01_t_" />
                            <PointerContainer top width="100px" ml="-25px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_1_t_" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_1_t_" />
                            <PointerContainer top ml="-28px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="_t_<0>0.01</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-8px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Pip value_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile>
                    <FormulaHighlightMobile jc="space-evenly">
                        <FormulaValueMobile>
                            <Localize translate_text="_t_0.01_t_" />
                            <PointerContainerMobile top mw="0" ml="-15px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_1_t_" />
                            <PointerContainerMobile ml="-2px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_1_t_" />
                            <PointerContainerMobile top ml="-37px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueMobile>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="_t_<0>0.01</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="-10px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Pip value_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const PipForexExample = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="180px" pt="50px">
                    <FormulaHighlight jc="space-evenly" pl="71px" pr="71px">
                        <FormulaValue>
                            <Localize translate_text="_t_0.00001_t_" />
                            <PointerContainer top ml="-15px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_2_t_" />
                            <PointerContainer ml="0">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_100,000_t_" />
                            <PointerContainer top ml="-20px" width="100px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="_t_<0>2</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-8px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText>
                                    <Localize translate_text="_t_Pip value_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile>
                    <FormulaHighlightMobile jc="space-evenly">
                        <FormulaValueMobile>
                            <Localize translate_text="_t_0.00001_t_" />
                            <PointerContainerMobile mw="0" top>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="-6px">
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_2_t_" />
                            <PointerContainerMobile ml="-5px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_100,000_t_" />
                            <PointerContainerMobile top ml="-25px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueMobile>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="_t_<0>2</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="-15px" mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile ml="-14px">
                                    <Localize translate_text="_t_Pip value_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}
