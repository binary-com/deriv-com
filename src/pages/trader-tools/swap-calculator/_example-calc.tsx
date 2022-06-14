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
    FormulaValueSwapFinancialMobile,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
    Sup,
    FormulaTopWrapper,
    FormulaBottomWrapper,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

export const SwapSyntheticExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer height="176px">
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.01" />
                            <PointerContainer ml="-10px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1" />
                            <PointerContainer top ml="-33px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText top>
                                    <Localize
                                        translate_text="Contract size <0>1</>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="400,000" />
                            <PointerContainer ml="-10px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="( -7.5 " />
                            <PointerContainer top ml="-15px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText top>
                                    <Localize
                                        translate_text="Swap rate <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="100 )" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="360" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="<0>-0.83</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-25px" width="100px">
                                <PointerDot />
                                <PointerStick height="34px" />
                                <PointerText ml="-10px">
                                    <Localize translate_text="Swap charge" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="172px">
                    <FormulaHighlightMobile height="84px" syn_mobile>
                        <FormulaTopWrapper>
                            <FormulaValueMobile mw="30px">
                                <Localize translate_text="0.01" />
                                <PointerContainerMobile ml="7px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Volume" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="1" />
                                <PointerContainerMobile mw="0" ml="-32px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="46px" />
                                    <PointerTextMobile>
                                        <Localize
                                            translate_text="Contract size <0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>x</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="400,000" />
                                <PointerContainerMobile top ml="-15px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="( -7.5 " />
                                <PointerContainerMobile top ml="-13px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Swap rate <0>2</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100 )" />
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide; </FormulaGreen>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>

                        <FormulaBottomWrapper ml="30px">
                            <FormulaValueMobile>
                                <Localize translate_text="360" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> -0.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-20px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Swap charge" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const SwapFinancialExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer height="132px" pt="8px">
                    <FormulaHighlight jc="space-evenly" pr="78px" pl="78px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="2" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="100,000" />
                            <PointerContainer ml="-25px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize
                                        translate_text="Contract size <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.00001" />
                            <PointerContainer ml="-16px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="-0.12 " />
                            <PointerContainer ml="-24px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize
                                        translate_text="Swap rate <0>3</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="<0>-0.24</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-45px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText ml="20px">
                                    <Localize translate_text="Swap charge" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="152px">
                    <FormulaHighlightMobile jc="space-evenly" height="70px">
                        <FormulaTopWrapper>
                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="2" />
                                <PointerContainerMobile mw="0" ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Volume" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="100,000" />
                                <PointerContainerMobile mw="0" top ml="-30px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Contract size <0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>x</FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="0.00001" />
                                <PointerContainerMobile ml="-20px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize
                                            translate_text="Point value<0>2</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize translate_text="-0.12 " />
                                <PointerContainerMobile mw="0" ml="-18px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Swap rate <0>3</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>
                            <FormulaValueSwapFinancialMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapFinancialMobile>

                            <FormulaValueSwapFinancialMobile>
                                <Localize
                                    translate_text="<0> -0.24</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-26px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile ml="-8px">
                                        <Localize translate_text="Swap charge" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapFinancialMobile>
                        </FormulaTopWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}
