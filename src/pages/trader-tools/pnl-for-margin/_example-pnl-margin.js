import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValueSwapSynthetic,
    FormulaGreen,
    FormulaValue,
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
    FormulaTopWrapper,
    FormulaBottomWrapper,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

// Buy data
export const StopLoss = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1.17524" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> + </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="{-24" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="(1" />
                            <PointerContainer ml="3px">
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
                            <Localize translate_text="100,000)}" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size<0>1</0>"
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
                                translate_text="<0>1.1750</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="178px">
                    <FormulaHighlightMobile height="82px" syn_mobile>
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="1.17524" />
                                <PointerContainerMobile ml="3px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> + </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="{-24" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="profit amount" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="(1" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Volume" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100,0001)}" />
                                <PointerContainerMobile top ml="40px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Contract size <0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>

                        <FormulaBottomWrapper>
                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 1.1750</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="16px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss level" />
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

export const PipValue = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="|(1.1750" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or take profit level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1.17524)|" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.00001" />
                            <PointerContainer ml="3px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Point value <0>1</0>"
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
                                translate_text="<0>24</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss pip value" />
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
                            <Localize translate_text="|( 1.1750" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="-6px">
                                    <Localize translate_text="take profit level" />
                                </PointerTextMobile>
                                <PointerTextMobile top>
                                    <Localize translate_text="Stop loss or" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1.17524)|" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Point value <0>1</0>"
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
                                translate_text="<0>2<4/0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="-4px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Stop loss pip value" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

// Sell data

export const TakeProfitLevel = () => {
    return (
        <>
            <Show.Desktop max_width="tablet">
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValue>
                            <Localize translate_text="249.5961" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="{84" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or take" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text="profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="(3" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Volume" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="1)}" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Contract size <0>1</0>"
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
                                translate_text="<0>221.5961</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Take profit level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile min_width="tablet">
                <FormulaContainerMobile>
                    <FormulaHighlightMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="249.5961" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Asset price" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="{84" />
                            <PointerContainerMobile top>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="-80px">
                                    <Localize translate_text="take profit amount " />
                                </PointerTextMobile>
                                <PointerTextMobile top ml="-40px">
                                    <Localize translate_text="Stop loss or" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="(3" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1)}" />
                            <PointerContainerMobile top ml="4px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile top ml="30px">
                                    <Localize
                                        translate_text="Contract size <0>1</0>"
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
                                translate_text="<0>221.5961</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile ml="16px">
                                <PointerDotMobile />
                                <PointerStickMobile />
                                <PointerTextMobile>
                                    <Localize translate_text="Take profit level" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const ProfitPipValue = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="|(221.5961" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or take profit level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="249.5961)|" />
                            <PointerContainer ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.0001" />
                            <PointerContainer ml="3px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="VPoint value <0>1</0>"
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
                                translate_text="<0>280,000</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Take profit pip value" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="178px">
                    <FormulaHighlightMobile height="82px" syn_mobile>
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="|(221.5961" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="take profit level" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="Stop loss or" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="249.5961)|" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile ml="-25px">
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.0001" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="32px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Point value <0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>

                        <FormulaBottomWrapper>
                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 280,000</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="16px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="-15px">
                                        <Localize translate_text="Take profit pip value" />
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
