import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValueSwapSynthetic,
    FormulaGreen,
    PointerContainer,
    PointerDot,
    PointerStick,
    PointerText,
    FormulaContainerMobile,
    FormulaHighlightMobile,
    FormulaValueMobile,
    FormulaValueSwapMobile,
    FormulaValueSwapFinancialMobile,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
    StyledSpan,
    FormulaTopWrapperSwapMobile,
    FormulaTopWrapperMobile,
    FormulaBottomWrapperMobile,
    FormulaContainerSwapMobile,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

export const SwapSyntheticExample = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="176px">
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.01_t_" />
                            <PointerContainer ml="-10px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_1_t_" />
                            <PointerContainer top ml="-33px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_400,000_t_" />
                            <PointerContainer ml="-10px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_( -7.5 _t_" />
                            <PointerContainer top ml="-15px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Swap rate_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_100 )_t_" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_360_t_" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>-0.83</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-25px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText ml="-10px">
                                    <Localize translate_text="_t_Swap charge_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerSwapMobile height="210px">
                    <FormulaHighlightMobile height="107px" syn_mobile>
                        <FormulaTopWrapperSwapMobile>
                            <FormulaValueMobile mw="30px">
                                <Localize translate_text="_t_0.01_t_" />
                                <PointerContainerMobile ml="7px" height="70px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Volume_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueSwapMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_1_t_" />
                                <PointerContainerMobile mw="0" ml="-32px" height="80px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="50px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Contract size_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapMobile>
                                <FormulaGreen>x</FormulaGreen>
                            </FormulaValueSwapMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_400,000_t_" />
                                <PointerContainerMobile top ml="-15px" mw="0" height="70px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_( -7.5 _t_" />
                                <PointerContainerMobile top ml="-13px" mw="0" height="70px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Swap rate_t_" />
                                        <StyledSpan> 2</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueSwapMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_100 )_t_" />
                            </FormulaValueMobile>

                            <FormulaValueSwapMobile>
                                <FormulaGreen>&divide; </FormulaGreen>
                            </FormulaValueSwapMobile>
                        </FormulaTopWrapperSwapMobile>

                        <FormulaBottomWrapperMobile ml="30px" padding-top="12px">
                            <FormulaValueMobile>
                                <Localize translate_text="_t_360_t_" />
                            </FormulaValueMobile>
                            <FormulaValueSwapMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="_t_<0> -0.83</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-20px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Swap charge_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerSwapMobile>
            </Mobile>
        </>
    )
}

export const SwapFinancialExample = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="132px" pt="8px">
                    <FormulaHighlight jc="space-evenly" pr="78px" pl="78px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_2_t_" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_100,000_t_" />
                            <PointerContainer ml="-25px" width="100px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.00001_t_" />
                            <PointerContainer ml="-16px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 2</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_-0.12 _t_" />
                            <PointerContainer ml="-24px" width="100px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Swap rate_t_" />
                                    <StyledSpan> 3</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>-0.24</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-45px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText ml="20px">
                                    <Localize translate_text="_t_Swap charge_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile>
                    <FormulaHighlightMobile>
                        <FormulaTopWrapperMobile>
                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="_t_2_t_" />
                                <PointerContainerMobile mw="0" ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Volume_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="_t_100,000_t_" />
                                <PointerContainerMobile mw="0" top ml="-20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Contract size_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>x</FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="_t_0.00001_t_" />
                                <PointerContainerMobile ml="-10px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Point value_t_" />
                                        <StyledSpan> 2</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="_t_-0.12 _t_" />
                                <PointerContainerMobile mw="0" ml="-18px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Swap rate_t_" />
                                        <StyledSpan> 3</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>
                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize
                                    translate_text="_t_<0> -0.24</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-26px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile ml="-8px">
                                        <Localize translate_text="_t_Swap charge_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>
                        </FormulaTopWrapperMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}
