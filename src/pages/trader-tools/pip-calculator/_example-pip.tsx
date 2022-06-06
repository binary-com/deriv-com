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
    FormulaValueSwapSynthetic,
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
                        <FormulaValue>
                            <Localize translate_text="0.01" />
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="1" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="1" />
                            <PointerContainer ml="-3px">
                                <PointerDot />
                                <PointerStick height="18px" />
                                <PointerText>
                                    <Localize translate_text="Contract" />
                                </PointerText>
                                <PointerText>
                                    <Localize
                                        translate_text=" size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="<0>0.01</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="8px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="178px">
                    <FormulaHighlightMobile height="82px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.01" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile top ml="-6px">
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1" />
                            <PointerContainerMobile ml="8px">
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1" />
                            <PointerContainerMobile top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
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
                        </FormulaValueSwapSynthetic>
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
                        <FormulaValue>
                            <Localize translate_text="0.00001" />
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="2" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="100,000" />
                            <PointerContainer ml="3px">
                                <PointerDot />
                                <PointerStick height="18px" />
                                <PointerText>
                                    <Localize translate_text="Contract" />
                                </PointerText>
                                <PointerText>
                                    <Localize
                                        translate_text=" size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
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
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="178px">
                    <FormulaHighlightMobile height="82px">
                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile top ml="-6px">
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueMobile>
                            <Localize translate_text="2" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueMobile>
                            <Localize translate_text="100,000" />
                            <PointerContainerMobile top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile height="28px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Contract size <0>2</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

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
