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
    FormulaHighlightForPnlMultiplier,
    FormulaTopWrapper,
    FormulaTopWrapperPnl,
    FormulaBottomWrapperPnl,
    PnlBottomWrapper,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Show } from 'components/containers'

// Level data
export const StopLossLevelUp = () => {
    return (
        <>
            <Show.Desktop>
                <FormulaContainer height="176px">
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
                            <Localize translate_text="{ ( -7.54" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="Stop loss or take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2 )" />
                            <PointerContainer width="100px" ml="-30px">
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
                            <Localize translate_text="( 10" />
                            <PointerContainer top ml="0">
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
                            <Localize translate_text="100 )" />
                            <PointerContainer ml="-10px">
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
                            <Localize translate_text="1 }" />
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
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" ml="-45px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="{ ( -7.54" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text=" profit amount" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="0.2 )" />
                                <PointerContainerMobile top ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueSwapSynthetic>
                        </FormulaTopWrapper>

                        <PnlBottomWrapper>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="( 10" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="1 }" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="<0> 3351.46</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
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
                <FormulaContainer height="176px">
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
                            <Localize translate_text="{ ( -7.54" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="Stop loss or take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>-</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2 )" />
                            <PointerContainer width="100px" ml="-35px">
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
                            <Localize translate_text="( 10" />
                            <PointerContainer top ml="0">
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
                            <Localize translate_text="100 )" />
                            <PointerContainer ml="-10px">
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
                            <Localize translate_text="1 }" />
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
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" ml="-45px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="{ ( -7.54" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text=" profit amount" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="0.2 )" />
                                <PointerContainerMobile top ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueSwapSynthetic>
                        </FormulaTopWrapper>

                        <PnlBottomWrapper>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="( 10" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="1 }" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValueSwapSynthetic>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="<0> 3350.11</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-40px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
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
                <FormulaContainer height="217px" pt="0">
                    <FormulaHighlightForPnlMultiplier height="96px" mt="60px" mb="60px">
                        <FormulaTopWrapperPnl>
                            <FormulaValue>
                                <Localize translate_text="Max" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="[{10" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
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
                                <PointerContainer width="200px" ml="-75px" height="0">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText>
                                        <Localize translate_text="Stop loss or take profit level" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24 )" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="100)" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
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
                                <PointerContainer height="0">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="5px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="-10]" />
                                <PointerContainer ml="10px" top>
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapperPnl>
                        <FormulaBottomWrapperPnl>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue mb="0" ml="-10px">
                                <Localize translate_text="Max(6.83, -10) " />
                            </FormulaValue>

                            <FormulaValue mb="0" ml="10px" width="10px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="<0>6.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-50px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText ml="-10px">
                                        <Localize translate_text="Take profit amount" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaBottomWrapperPnl>
                    </FormulaHighlightForPnlMultiplier>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile min_width="tablet">
                <FormulaContainerMobile height="240px">
                    <FormulaHighlightMobile height="93px" mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="[ { 10" />
                                <PointerContainerMobile ml="15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic mb="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="( ( 3400" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text=" profit level" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile mb="20px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24 )" />
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100" />
                                <PointerContainerMobile ml="12px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueMobile>
                                <Localize translate_text="-0.2 }," />
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

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="-10 ]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="Max ( 6.83, -10 )" />
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0>6.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-40px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile ml="-20px">
                                        <Localize translate_text="Take profit level" />
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
                <FormulaContainer height="217px" pt="0">
                    <FormulaHighlightForPnlMultiplier height="96px" mt="60px" mb="60px">
                        <FormulaTopWrapperPnl>
                            <FormulaValue>
                                <Localize translate_text="Max" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="[{10" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="(-(3400" />
                                <PointerContainer width="200px" ml="-80px" height="0">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText>
                                        <Localize translate_text="Stop loss or take profit level" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="3376.24 )" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Asset price" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="100)" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
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
                                <PointerContainer ml="-10px" height="0">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="5px">
                                        <Localize
                                            translate_text="Commission<0>1</0>"
                                            components={[<Sup key={0} />]}
                                        />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="-10]" />
                                <PointerContainer top ml="5px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="Stake" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapperPnl>
                        <FormulaBottomWrapperPnl>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0" ml="-10px">
                                <Localize translate_text="Max(-7.23, -10) " />
                            </FormulaValue>

                            <FormulaValue mb="0" width="20px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="<0>-7.23</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-40px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText ml="-25px">
                                        <Localize translate_text="Stop loss amount" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaBottomWrapperPnl>
                    </FormulaHighlightForPnlMultiplier>
                </FormulaContainer>
            </Show.Desktop>

            <Show.Mobile min_width="tablet">
                <FormulaContainerMobile height="240px">
                    <FormulaHighlightMobile height="93px" mt="85px">
                        <FormulaTopWrapper>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="[ { 10" />
                                <PointerContainerMobile ml="15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-20px">
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueSwapSynthetic mb="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="(-(3400" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="  take profit level" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueMobile mb="20px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24)" />
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValueMobile mb="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValueMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100" />
                                <PointerContainerMobile ml="12px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValueSwapSynthetic>

                            <FormulaValueMobile>
                                <Localize translate_text="-0.2 }," />
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

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="-10 ]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

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
                                <PointerContainerMobile mw="0" ml="-40px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobile ml="-20px">
                                        <Localize translate_text="Stop loss amount" />
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
