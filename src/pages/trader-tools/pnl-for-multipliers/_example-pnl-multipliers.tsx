import React from 'react'
import {
    FormulaContainer,
    FormulaHighlight,
    FormulaValueSwapSynthetic,
    FormulaValuePnlMobile,
    FormulaGreen,
    FormulaValue,
    PointerContainer,
    PointerDot,
    PointerStick,
    PointerStickHorizontal,
    PointerText,
    FormulaContainerMobile,
    FormulaHighlightMobile,
    FormulaValueMobile,
    PointerContainerMobile,
    PointerStickMobile,
    PointerHorizontalStickMobile,
    PointerStickHorizontalMobile,
    PointerDotMobile,
    PointerTextMobile,
    PointerTextMobilePnlMultiplier,
    StyledSpan,
    FormulaHighlightForPnlMultiplier,
    FormulaValuePnlMultiplierMobile,
    FormulaTopWrapperPnl,
    FormulaBottomWrapperPnl,
    FormulaTopWrapperMobile,
    FormulaTopWrapperPnlMultiplierMobile,
    FormulaBottomWrapperPnlMobile,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

export const StopLossLevelUp = () => {
    return (
        <>
            <Desktop>
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
                                    <Localize translate_text="Commission" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
                <FormulaContainerMobile height="202px" pt="65px">
                    <FormulaHighlightMobile height="90px" syn_mobile fs="14px">
                        <FormulaTopWrapperPnlMultiplierMobile ml="12px" cg="5px">
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

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

                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="0.2 )" />
                                <PointerContainerMobile top ml="-44px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMobile>
                        </FormulaTopWrapperPnlMultiplierMobile>

                        <FormulaBottomWrapperPnlMobile ml="0" mt="15px" cg="0">
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
                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="1 }" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="<0> 3351.46</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Stop loss level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const TakeProfitLevelUp = () => {
    return (
        <>
            <Desktop>
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
                                    <Localize translate_text="Commission" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
                <FormulaContainerMobile height="202px" pt="65px">
                    <FormulaHighlightMobile height="90px" syn_mobile fs="14px">
                        <FormulaTopWrapperPnlMultiplierMobile ml="12px" cg="5px">
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

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

                            <FormulaValuePnlMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="0.2 )" />
                                <PointerContainerMobile top ml="-44px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMobile>
                        </FormulaTopWrapperPnlMultiplierMobile>

                        <FormulaBottomWrapperPnlMobile ml="0" mt="15px" cg="0">
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
                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="1 }" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="<0> 3350.11</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-40px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit level" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

// Amount data

export const TakeProfitAmountUp = () => {
    return (
        <>
            <Desktop breakpoint="tablet">
                <FormulaContainer height="227px" pt="0">
                    <FormulaHighlightForPnlMultiplier height="110px" mt="60px" mb="60px">
                        <FormulaTopWrapperPnl mt="29px">
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
                                <PointerContainer width="200px" ml="-75px" height="89px">
                                    <PointerDot ml="100px" />
                                    <PointerStick ml="100px" height="31px" />
                                    <PointerStickHorizontal w="125px" ml="-25px" />
                                    <PointerStick ml="-150px" height="31px" />
                                    <PointerText ml="-150px">
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
                                    <PointerDot ml="-31px" />
                                    <PointerStick height="6px" ml="-32px" />
                                    <PointerStickHorizontal w="88px" ml="55px" />
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot ml="36px" />
                                    <PointerStick height="6px" ml="37px" />
                                    <PointerStick height="27px" ml="-42px" />
                                    <PointerText ml="-40px" top>
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
                                <PointerContainer height="89px" width="0" ml="-27px">
                                    <PointerDot ml="-70px" />
                                    <PointerStick ml="-70px" height="31px" />
                                    <PointerStickHorizontal w="55px" ml="-15px" />
                                    <PointerStick ml="38px" height="31px" />
                                    <PointerText ml="70px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile breakpoint="tablet">
                <FormulaContainerMobile height="220px" pt="65px">
                    <FormulaHighlightMobile height="107px" syn_mobile fs="13px">
                        <FormulaTopWrapperMobile ml="-13px" mt="-2px">
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="[ { 10" />
                                <PointerContainerMobile ml="5px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="( ( 3400" />
                                <PointerContainerMobile mw="120px" ml="-15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobilePnlMultiplier>
                                        <Localize translate_text=" profit level" />
                                    </PointerTextMobilePnlMultiplier>
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24 )" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="-51px" />
                                    <PointerStickMobile height="6px" ml="-51px" />
                                    <PointerStickHorizontalMobile ml="29px" />
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="30px" />
                                    <PointerStickMobile height="6px" ml="30px" />
                                    <PointerStickMobile height="18px" ml="-49px" />
                                    <PointerTextMobilePnlMultiplier ml="-39px" top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                        </FormulaTopWrapperMobile>
                        <FormulaBottomWrapperPnlMobile ml="-17px">
                            <FormulaValueMobile>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="-2px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobilePnlMultiplier ml="30px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.2 }," />
                                <PointerContainerMobile ml="-42px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="38px" />
                                    <PointerTextMobilePnlMultiplier ml="42px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="-10 ]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerHorizontalStickMobile ml="58px" w="59px" />
                                    <PointerStickMobile height="17px" ml="116px" />
                                    <PointerTextMobilePnlMultiplier ml="120px">
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="Max ( 6.83, -10 )" />
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0>6.83</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-30px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="-20px">
                                        <Localize translate_text="Take profit level" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const StopLossAmountDown = () => {
    return (
        <>
            <Desktop breakpoint="tablet">
                <FormulaContainer height="227px" pt="0">
                    <FormulaHighlightForPnlMultiplier height="110px" mt="60px" mb="60px">
                        <FormulaTopWrapperPnl mt="29px">
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
                                <PointerContainer width="200px" ml="-80px" height="89px">
                                    <PointerDot ml="100px" />
                                    <PointerStick ml="100px" height="31px" />
                                    <PointerStickHorizontal w="125px" ml="-25px" />
                                    <PointerStick ml="-150px" height="31px" />
                                    <PointerText ml="-150px">
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
                                    <PointerDot ml="-31px" />
                                    <PointerStick height="6px" ml="-32px" />
                                    <PointerStickHorizontal w="88px" ml="55px" />
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> &divide; </FormulaGreen>
                            </FormulaValue>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="3376.24" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot ml="36px" />
                                    <PointerStick height="6px" ml="37px" />
                                    <PointerStick height="27px" ml="-42px" />
                                    <PointerText ml="-40px" top>
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
                                <PointerContainer ml="-28px" height="89px" width="0">
                                    <PointerDot ml="-70px" />
                                    <PointerStick ml="-70px" height="31px" />
                                    <PointerStickHorizontal w="55px" ml="-15px" />
                                    <PointerStick ml="38px" height="31px" />
                                    <PointerText ml="70px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
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
                                <PointerContainer width="100px" ml="-30px">
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
            </Desktop>

            <Mobile breakpoint="tablet">
                <FormulaContainerMobile height="220px" pt="65px">
                    <FormulaHighlightMobile height="107px" syn_mobile fs="13px">
                        <FormulaTopWrapperMobile ml="-13px" mt="-2px">
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="Max" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="[ { 10" />
                                <PointerContainerMobile ml="5px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="Stake" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="(-( 3400" />
                                <PointerContainerMobile mw="120px" ml="-15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobilePnlMultiplier>
                                        <Localize translate_text=" profit level" />
                                    </PointerTextMobilePnlMultiplier>
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24 )" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="-51px" />
                                    <PointerStickMobile height="6px" ml="-51px" />
                                    <PointerStickHorizontalMobile ml="29px" />
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="30px" />
                                    <PointerStickMobile height="6px" ml="30px" />
                                    <PointerStickMobile height="27px" ml="-49px" />
                                    <PointerTextMobilePnlMultiplier ml="-39px" top>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                        </FormulaTopWrapperMobile>
                        <FormulaBottomWrapperPnlMobile ml="-17px">
                            <FormulaValueMobile>
                                <Localize translate_text="100 )" />
                                <PointerContainerMobile ml="-2px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="18px" />
                                    <PointerTextMobilePnlMultiplier ml="30px">
                                        <Localize translate_text="Multiplier" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="0.2 }," />
                                <PointerContainerMobile ml="-42px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="38px" />
                                    <PointerTextMobilePnlMultiplier ml="42px">
                                        <Localize translate_text="Commission" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="-10 ]" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerHorizontalStickMobile ml="58px" w="59px" />
                                    <PointerStickMobile height="17px" ml="116px" />
                                    <PointerTextMobilePnlMultiplier ml="120px">
                                        <Localize translate_text="Stake " />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="Max (-7.23, -10 )" />
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="<0>-7.23</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-30px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="-20px">
                                        <Localize translate_text="Stop loss amount" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}
