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
    PnlBottomWrapper,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

// Level data
export const StopLossLevelUp = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="3376.24" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="{(-7.54" />
                            <PointerContainer width="200px" top ml="-40px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="take profit amount " />
                                </PointerText>
                                <PointerText top>
                                    <Localize translate_text="Stop loss or" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2)" />
                            <PointerContainer width="100px" ml="-20px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Commission <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="(10" />
                            <PointerContainer top ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="Stake" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="100)" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Multiplier" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1}" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="<0>3351.46</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-20px">
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
                <FormulaContainerMobile height="230px">
                    <FormulaHighlightMobile height="82px" syn_mobile mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-30px">
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="{-7.54" />
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
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.2)" />
                                <PointerContainerMobile top ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="75px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>

                        <PnlBottomWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="(10" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="-15px">
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="100)" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="25px" />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="1}" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 3351.46</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="30px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </PnlBottomWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const TakeProfitLevelUp = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer>
                    <FormulaHighlight>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="3376.24" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="{(-7.54" />
                            <PointerContainer width="200px" top ml="-35px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="take profit amount" />
                                </PointerText>
                                <PointerText top>
                                    <Localize translate_text="Stop loss or" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2)" />
                            <PointerContainer width="100px" ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize
                                        translate_text="Commission <0>1</0>"
                                        components={[<Sup key={0} />]}
                                    />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="(10" />
                            <PointerContainer top ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="Stake" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="100)" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Multiplier" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="1}" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="<0>3350.11</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-30px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Take profit level" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile>
                <FormulaContainerMobile height="230px">
                    <FormulaHighlightMobile height="82px" syn_mobile mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top ml="-5px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top ml="-30px">
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="{-7.54" />
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
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.2)" />
                                <PointerContainerMobile top ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="75px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>

                        <PnlBottomWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="(10" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="-15px">
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="100)" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="1}" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0> 3350.11</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="30px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </PnlBottomWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

// Amount data

export const TakeProfitAmountUp = () => {
    return (
        <>
            <Show.Desktop max_width="tablet">
                <FormulaContainer height="220px">
                    <FormulaHighlight height="90px" mt="60px">
                        <FormulaTopWrapper>
                            <FormulaValue>
                                <Localize translate_text="Max" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="[{10" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="((3400" />
                                <PointerContainer width="200px" ml="-30px">
                                    <PointerDot />
                                    <PointerStick height="55px" />
                                    <PointerText>
                                        <Localize translate_text="Stop loss or  " />
                                    </PointerText>
                                    <PointerText>
                                        <Localize translate_text="take profit level" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24)" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick height="15px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick height="15px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="100)" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen>- </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="0.2}," />
                                <PointerContainer>
                                    <PointerDot />
                                    <PointerStick height="55px" />
                                    <PointerText ml="5px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="-10]" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize translate_text="Max (6.83, -10)" />
                            </FormulaValue>

                            <FormulaValue mb="0" width="10px">
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="<0>6.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-10px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText>
                                        <Localize translate_text="Take profit" />
                                    </PointerText>
                                    <PointerText>
                                        <Localize translate_text="amount" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapper>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile min_width="tablet">
                <FormulaContainerMobile height="240px">
                    <FormulaHighlightMobile height="73px" mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="[{10" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-20px">
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="((3400" />
                                <PointerContainerMobile top ml="20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="12px" />
                                    <PointerTextMobile top ml="15px">
                                        <Localize translate_text="Stop loss or take profit level " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24)" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100" />
                                <PointerContainerMobile top ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="-0.2}," />
                                <PointerContainerMobile ml="4px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile>
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="-10]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="Max (6.83, -10)" />
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0>6.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="8px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit" />
                                    </PointerTextMobile>
                                    <PointerTextMobile>
                                        <Localize translate_text=" Amount" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}

export const StopLossAmountDown = () => {
    return (
        <>
            <Show.Desktop max_width="tablet">
                <FormulaContainer height="220px">
                    <FormulaHighlight height="90px" mt="60px">
                        <FormulaTopWrapper>
                            <FormulaValue>
                                <Localize translate_text="Max" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="[{10" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="((3400" />
                                <PointerContainer width="200px" ml="-25px">
                                    <PointerDot />
                                    <PointerStick height="70px" />
                                    <PointerText>
                                        <Localize translate_text="Stop loss or " />
                                    </PointerText>
                                    <PointerText>
                                        <Localize translate_text="take profit level " />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24)" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="100)" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen>- </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="0.2}," />
                                <PointerContainer>
                                    <PointerDot />
                                    <PointerStick height="55px" />
                                    <PointerText ml="5px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="-10]" />
                                <PointerContainer top>
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize translate_text="Max (-7.23, -10)" />
                            </FormulaValue>

                            <FormulaValue mb="0" width="20px">
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="<0>-7.23</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-20px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText>
                                        <Localize translate_text="Stop loss" />
                                    </PointerText>
                                    <PointerText>
                                        <Localize translate_text="amount" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapper>
                    </FormulaHighlight>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile min_width="tablet">
                <FormulaContainerMobile height="240px">
                    <FormulaHighlightMobile height="73px" mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile>
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="[{10" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-20px">
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="(-(3400" />
                                <PointerContainerMobile top ml="20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="12px" />
                                    <PointerTextMobile top ml="15px">
                                        <Localize translate_text="Stop loss or take profit level " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24)" />
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100" />
                                <PointerContainerMobile top ml="5px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="-0.2}," />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="42px" />
                                    <PointerTextMobile ml="20px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="-10]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="Max (-7.23, -10)" />
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0>-7.23</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="8px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss" />
                                    </PointerTextMobile>
                                    <PointerTextMobile>
                                        <Localize translate_text=" Amount" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapper>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Show.Mobile>
        </>
    )
}
