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
                            <Localize translate_text="_t_3376.24_t_" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_{ ( -7.54_t_" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Stop loss or take profit amount_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.2 )_t_" />
                            <PointerContainer width="100px" ml="-30px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Commission_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_( 10_t_" />
                            <PointerContainer top ml="0">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Stake_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_100 )_t_" />
                            <PointerContainer ml="-10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Multiplier_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_1 }_t_" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>3351.46</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-20px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Stop loss level_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_{ ( -7.54_t_" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_ profit amount_t_" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_ Stop loss or take_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_0.2 )_t_" />
                                <PointerContainerMobile top ml="-44px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize translate_text="_t_Commission_t_" />
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
                                <Localize translate_text="_t_( 10_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_100 )_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_1 }_t_" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="_t_<0> 3351.46</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-20px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Stop loss level_t_" />
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
                            <Localize translate_text="_t_3376.24_t_" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_{ ( -7.54_t_" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Stop loss or take profit amount_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>-</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.2 )_t_" />
                            <PointerContainer width="100px" ml="-35px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Commission_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_( 10_t_" />
                            <PointerContainer top ml="0">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Stake_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_100 )_t_" />
                            <PointerContainer ml="-10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Multiplier_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_1 }_t_" />
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>3350.11</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-30px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Take profit level_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainerMobile mw="0" top ml="-15px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_{ ( -7.54_t_" />
                                <PointerContainerMobile mw="120px" ml="-25px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_ profit amount_t_" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_ Stop loss or take_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_0.2 )_t_" />
                                <PointerContainerMobile top ml="-44px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="40px">
                                        <Localize translate_text="_t_Commission_t_" />
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
                                <Localize translate_text="_t_( 10_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_100 )_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile ml="15px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>+</FormulaGreen>
                            </FormulaValuePnlMobile>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_1 }_t_" />
                            </FormulaValueSwapSynthetic>
                            <FormulaValuePnlMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize
                                    translate_text="_t_<0> 3350.11</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-40px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Take profit level_t_" />
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
                                <Localize translate_text="_t_Max_t_" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="_t_[{10_t_" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_((3400_t_" />
                                <PointerContainer width="200px" ml="-75px" height="89px">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="-50px">
                                        <Localize translate_text="_t_Stop loss or take profit level_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_3376.24 )_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot ml="36px" />
                                    <PointerStick height="6px" ml="37px" />
                                    <PointerStick height="27px" ml="-90px" />
                                    <PointerText ml="-90px" top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_100)_t_" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top ml="15px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen>- </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="_t_0.2},_t_" />
                                <PointerContainer height="89px" width="0" ml="-27px">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="5px">
                                        <Localize translate_text="_t_Commission_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_-10]_t_" />
                                <PointerContainer ml="10px" top>
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapperPnl>
                        <FormulaBottomWrapperPnl>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue mb="0" ml="-10px">
                                <Localize translate_text="_t_Max(6.83, -10) _t_" />
                            </FormulaValue>

                            <FormulaValue mb="0" ml="10px" width="10px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="_t_<0>6.83</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-50px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText ml="-10px">
                                        <Localize translate_text="_t_Take profit amount_t_" />
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
                                <Localize translate_text="_t_Max_t_" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="_t_[ { 10_t_" />
                                <PointerContainerMobile ml="5px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="_t_( ( 3400_t_" />
                                <PointerContainerMobile mw="120px" ml="-15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobilePnlMultiplier>
                                        <Localize translate_text="_t_ profit level_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="_t_ Stop loss or take_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="_t_3376.24 )_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="30px" />
                                    <PointerStickMobile height="6px" ml="30px" />
                                    <PointerStickMobile height="18px" ml="-49px" />
                                    <PointerTextMobilePnlMultiplier ml="-39px" top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                        </FormulaTopWrapperMobile>
                        <FormulaBottomWrapperPnlMobile ml="-17px">
                            <FormulaValueMobile>
                                <Localize translate_text="_t_100 )_t_" />
                                <PointerContainerMobile ml="-2px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="12px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_0.2 },_t_" />
                                <PointerContainerMobile ml="-42px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="42px">
                                        <Localize translate_text="_t_Commission_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_-10 ]_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerHorizontalStickMobile ml="58px" w="59px" />
                                    <PointerStickMobile height="17px" ml="116px" />
                                    <PointerTextMobilePnlMultiplier ml="120px">
                                        <Localize translate_text="_t_Stake _t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="_t_Max ( 6.83, -10 )_t_" />
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="_t_<0>6.83</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-30px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="-20px">
                                        <Localize translate_text="_t_Take profit level_t_" />
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
                                <Localize translate_text="_t_Max_t_" />
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="_t_[{10_t_" />
                                <PointerContainer top ml="10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_(-(3400_t_" />
                                <PointerContainer width="200px" ml="-80px" height="89px">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="-50px">
                                        <Localize translate_text="_t_Stop loss or take profit level_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue width="30px">
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_3376.24 )_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainer ml="-20px" top width="100px">
                                    <PointerDot ml="36px" />
                                    <PointerStick height="6px" ml="37px" />
                                    <PointerStick height="27px" ml="-90px" />
                                    <PointerText ml="-90px" top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                            <FormulaValue width="20px">
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_100)_t_" />
                                <PointerContainer top ml="-10px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top ml="15px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                            <FormulaValue width="20px">
                                <FormulaGreen>- </FormulaGreen>
                            </FormulaValue>
                            <FormulaValue>
                                <Localize translate_text="_t_0.2},_t_" />
                                <PointerContainer ml="-28px" height="89px" width="0">
                                    <PointerDot />
                                    <PointerStick height="62px" />
                                    <PointerText ml="5px">
                                        <Localize translate_text="_t_Commission_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>

                            <FormulaValue>
                                <Localize translate_text="_t_-10]_t_" />
                                <PointerContainer top ml="5px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValue>
                        </FormulaTopWrapperPnl>
                        <FormulaBottomWrapperPnl>
                            <FormulaValue mb="0" ml="170px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0" ml="-10px">
                                <Localize translate_text="_t_Max(-7.23, -10) _t_" />
                            </FormulaValue>

                            <FormulaValue mb="0" width="20px">
                                <FormulaGreen> = </FormulaGreen>
                            </FormulaValue>

                            <FormulaValue mb="0">
                                <Localize
                                    translate_text="_t_<0>-7.23</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainer width="100px" ml="-30px">
                                    <PointerDot />
                                    <PointerStick height="32px" />
                                    <PointerText ml="-25px">
                                        <Localize translate_text="_t_Stop loss amount_t_" />
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
                                <Localize translate_text="_t_Max_t_" />
                            </FormulaValueMobile>
                            <FormulaValueSwapSynthetic mb="20px">
                                <Localize translate_text="_t_[ { 10_t_" />
                                <PointerContainerMobile ml="5px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="_t_Stake_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="_t_(-( 3400_t_" />
                                <PointerContainerMobile mw="120px" ml="-15px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobilePnlMultiplier>
                                        <Localize translate_text="_t_ profit level_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                    <PointerTextMobilePnlMultiplier top>
                                        <Localize translate_text="_t_ Stop loss or take_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>-</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile mb="20px">
                                <Localize translate_text="_t_3376.24 )_t_" />
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
                                <Localize translate_text="_t_3376.24_t_" />
                                <PointerContainerMobile mw="0" top width="100px">
                                    <PointerDotMobile ml="30px" />
                                    <PointerStickMobile height="6px" ml="30px" />
                                    <PointerStickMobile height="27px" ml="-49px" />
                                    <PointerTextMobilePnlMultiplier ml="-39px" top>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> x </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                        </FormulaTopWrapperMobile>
                        <FormulaBottomWrapperPnlMobile ml="-17px">
                            <FormulaValueMobile>
                                <Localize translate_text="_t_100 )_t_" />
                                <PointerContainerMobile ml="-2px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="12px">
                                        <Localize translate_text="_t_Multiplier_t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen> - </FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_0.2 },_t_" />
                                <PointerContainerMobile ml="-42px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="42px">
                                        <Localize translate_text="_t_Commission_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_-10 ]_t_" />
                                <PointerContainerMobile ml="10px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="10px" />
                                    <PointerHorizontalStickMobile ml="58px" w="59px" />
                                    <PointerStickMobile height="17px" ml="116px" />
                                    <PointerTextMobilePnlMultiplier ml="120px">
                                        <Localize translate_text="_t_Stake _t_" />
                                    </PointerTextMobilePnlMultiplier>
                                </PointerContainerMobile>
                            </FormulaValueSwapSynthetic>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>
                            <FormulaValueMobile>
                                <Localize translate_text="_t_Max (-7.23, -10 )_t_" />
                            </FormulaValueMobile>

                            <FormulaValuePnlMultiplierMobile>
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMultiplierMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="_t_<0>-7.23</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-30px" width="100px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="28px" />
                                    <PointerTextMobilePnlMultiplier ml="-20px">
                                        <Localize translate_text="_t_Stop loss amount_t_" />
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
