import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValueSwapSynthetic,
    FormulaValueSwapSyntheticMobile,
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
    FormulaTopWrapperMobile,
    FormulaBottomWrapperPnlMobile,
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
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pl="30px" pr="30px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1.17524" />
                            <PointerContainer width="100px" ml="-10px">
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
                        <FormulaTopWrapper>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="{ -24" />
                                <PointerContainer top ml="-49px" width="200px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top ml="-75px">
                                        <Localize translate_text="Stop loss or take profit amount" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                        </FormulaTopWrapper>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="( 1" />
                            <PointerContainer ml="-3px">
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
                            <Localize translate_text="100,000 ) }" />
                            <PointerContainer width="100px" ml="-10px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
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
                            <PointerContainer ml="-30px" width="80px">
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
                <FormulaContainerMobile pt="60px" height="192px">
                    <FormulaHighlightMobile height="90px">
                        <FormulaTopWrapperMobile mt="-20px" cg="6px" ml="-20px">
                            <FormulaValueMobile>
                                <Localize translate_text="1.17524" />
                                <PointerContainerMobile mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSyntheticMobile mw="10px">
                                <FormulaGreen> + </FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="{ -24" />
                                <PointerContainerMobile mw="120px" ml="-45px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="  take profit amount" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSyntheticMobile mw="10px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="( 1" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Volume" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSyntheticMobile mw="10px">
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100,0001 ) }" />
                                <PointerContainerMobile top mw="0" ml="-5px">
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
                        </FormulaTopWrapperMobile>

                        <FormulaBottomWrapperPnlMobile mt="40px" ml="-80px">
                            <FormulaValueSwapSyntheticMobile mw="30px">
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 1.1750</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="12px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
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
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pr="76px" pl="76px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="|(1.1750" />
                            <PointerContainer top ml="-70px" width="200px">
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
                            <PointerContainer width="100px">
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
                            <PointerContainer width="100px" ml="-10px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
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
                            <PointerContainer width="100px" ml="-50px">
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
                <FormulaContainerMobile height="190px" pt="60px">
                    <FormulaHighlightMobile height="78px">
                        <FormulaValueMobile>
                            <Localize translate_text="|( 1.1750" />
                            <PointerContainerMobile mw="120px" ml="-16px" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile ml="12px">
                                    <Localize translate_text="take profit level" />
                                </PointerTextMobile>
                                <PointerTextMobile top>
                                    <Localize translate_text="Stop loss or " />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="20px">
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1.17524)|" />
                            <PointerContainerMobile mw="0" ml="-12px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Asset Price" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="20px">
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile mw="40px" top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile top>
                                    <Localize
                                        translate_text="Point value<0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValueSwapSyntheticMobile mw="20px">
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>24</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile mw="40px" ml="-5px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile ml="-80px">
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
                <FormulaContainer height="176px">
                    <FormulaHighlight pr="45px" pl="45px">
                        <FormulaValue>
                            <Localize translate_text="249.5961" />
                            <PointerContainer width="100px">
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
                            <Localize translate_text="{ 84" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="Stop loss or take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="( 3" />
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
                            <Localize translate_text="1 ) }" />
                            <PointerContainer width="100px" top ml="-38px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
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
                            <PointerContainer ml="-20px" width="100px">
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

            <Show.Mobile>
                <FormulaContainerMobile height="180px" pt="65px">
                    <FormulaHighlightMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="249.5961" />
                            <PointerContainerMobile mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Asset price" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="15px">
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="{ 84" />
                            <PointerContainerMobile mw="120px" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile ml="-80px">
                                    <Localize translate_text="take profit amount" />
                                </PointerTextMobile>
                                <PointerTextMobile top ml="-40px">
                                    <Localize translate_text=" Stop loss or" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="15px">
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="( 3" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile>
                                    <Localize translate_text="Volume" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="15px">
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize translate_text="1 ) }" />
                            <PointerContainerMobile top mw="0" ml="-68px">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile top ml="60px">
                                    <Localize
                                        translate_text="Contract size <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValueSwapSyntheticMobile mw="30px">
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSyntheticMobile>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>221.5961</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile ml="-30px">
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
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pl="41px" pr="41px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="|(221.5961" />
                            <PointerContainer width="100px" top ml="-60px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="Stop loss or take profit level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="249.5961)|" />
                            <PointerContainer width="100px" ml="-7px">
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
                            <PointerContainer width="100px" top ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
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
                                translate_text="<0>280,000</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-45px">
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
                <FormulaContainerMobile pt="60px" height="202px">
                    <FormulaHighlightMobile height="90px">
                        <FormulaTopWrapperMobile mt="-20px" cg="6px" ml="-100px">
                            <FormulaValueMobile>
                                <Localize translate_text="|(221.5961" />
                                <PointerContainerMobile mw="120px" ml="-15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="  take profit level" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSyntheticMobile mw="15px">
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="249.5961)|" />
                                <PointerContainerMobile ml="25px" top mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top ml="-30px">
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSyntheticMobile mw="15px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.0001" />
                                <PointerContainerMobile mw="0" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top>
                                        <Localize
                                            translate_text="Point value<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapperMobile>

                        <FormulaBottomWrapperPnlMobile mt="40px" ml="-160px">
                            <FormulaValueSwapSyntheticMobile mw="15px">
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapSyntheticMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 280,000</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-35px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="20px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit  pip value" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}
