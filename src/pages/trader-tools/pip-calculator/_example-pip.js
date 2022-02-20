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
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
    Sup,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

export const PipSyntheticExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.01" />
                            <PointerContainer ml="-18px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText ml="10px">
                                    <Localize
                                        translate_text="Point value <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1" />
                            <PointerContainer ml="3px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
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
                                translate_text="<0>0.01</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText ml="10px">
                                    <Localize translate_text="Pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile>
                    <FormulaHighlightMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="0.01" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="-6px">
                                    <Localize
                                        translate_text="Point value <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1" />
                            <PointerContainerMobile top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueMobile>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>0.01</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="4px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Pip value" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const PipForexExample = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.00001" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

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
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="100,000" />
                            <PointerContainer ml="3px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
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
                                translate_text="<0>2</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile>
                    <FormulaHighlightMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="-6px">
                                    <Localize
                                        translate_text="Point value <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="2" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="100,000" />
                            <PointerContainerMobile top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueMobile>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>2</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="4px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Pip value" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}
