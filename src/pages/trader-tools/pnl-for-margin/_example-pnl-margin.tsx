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
    PnlMobileTakeProfitPip,
    FormulaValuePnlStoplossPip,
    PointerContainerMobile,
    PointerStickMobile,
    PointerDotMobile,
    PointerTextMobile,
    FormulaTopWrapperMobile,
    FormulaBottomWrapperPnlMobile,
    FormulaTopWrapper,
    StyledSpan,
    FormulaValuePnlMobile,
    FormulaValuePnlMobileTakeProfit,
} from '../common/_style'
import { Localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

export const StopLoss = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pl="30px" pr="30px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_1.17524_t_" />
                            <PointerContainer width="100px" ml="-10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> + </FormulaGreen>
                        </FormulaValueSwapSynthetic>
                        <FormulaTopWrapper>
                            <FormulaValueSwapSynthetic>
                                <Localize translate_text="_t_{ -24_t_" />
                                <PointerContainer top ml="-49px" width="200px">
                                    <PointerDot />
                                    <PointerStick />
                                    <PointerText top ml="-75px">
                                        <Localize translate_text="_t_Stop loss or take profit amount_t_" />
                                    </PointerText>
                                </PointerContainer>
                            </FormulaValueSwapSynthetic>
                        </FormulaTopWrapper>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_( 1_t_" />
                            <PointerContainer ml="-3px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>x</FormulaGreen>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_100,000 ) }_t_" />
                            <PointerContainer width="100px" ml="-10px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>
                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>1.1750</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-30px" width="80px">
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
                <FormulaContainerMobile pt="60px" height="208px">
                    <FormulaHighlightMobile fs="14px" height="90px" jc="space-evenly">
                        <FormulaTopWrapperMobile mt="-20px">
                            <FormulaValueMobile>
                                <Localize translate_text="_t_1.17524_t_" />
                                <PointerContainerMobile mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="56px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen> + </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_{ -24_t_" />
                                <PointerContainerMobile mw="120px" ml="-34px" height="76px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_ profit amount_t_" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_ Stop loss or take_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_( 1_t_" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="56px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Volume_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_100,0001 ) }_t_" />
                                <PointerContainerMobile top mw="0" height="76px" ml="-5px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Contract size_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapperMobile>

                        <FormulaBottomWrapperPnlMobile ml="-113px" mt="40px">
                            <FormulaValuePnlMobile mw="26px">
                                <FormulaGreen>=</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="_t_<0> 1.1750</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-23px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile ml="-10px">
                                        <Localize translate_text="_t_Stop loss level_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const PipValue = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pr="76px" pl="76px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_|(1.1750_t_" />
                            <PointerContainer top ml="-70px" width="200px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Stop loss or take profit level_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_1.17524)|_t_" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.00001_t_" />
                            <PointerContainer width="100px" ml="-10px" top>
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>24</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-50px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Stop loss pip value_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile height="200px" pt="66px">
                    <FormulaHighlightMobile height="78px">
                        <FormulaValueMobile>
                            <Localize translate_text="_t_|( 1.1750_t_" />
                            <PointerContainerMobile mw="120px" ml="-16px" height="72px" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile ml="12px">
                                    <Localize translate_text="_t_take profit level_t_" />
                                </PointerTextMobile>
                                <PointerTextMobile top>
                                    <Localize translate_text="_t_Stop loss or _t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValuePnlStoplossPip>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_1.17524)|_t_" />
                            <PointerContainerMobile mw="0" ml="-12px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Asset Price_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValuePnlStoplossPip>
                        <FormulaValueMobile>
                            <Localize translate_text="_t_0.00001_t_" />
                            <PointerContainerMobile mw="40px" height="72px" top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValuePnlStoplossPip>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="_t_<0>24</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile mw="40px" ml="-12px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile ml="-80px">
                                    <Localize translate_text="_t_Stop loss pip value_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const TakeProfitLevel = () => {
    return (
        <>
            <Desktop breakpoint="tablet">
                <FormulaContainer height="176px">
                    <FormulaHighlight pr="45px" pl="45px">
                        <FormulaValue>
                            <Localize translate_text="_t_249.5961_t_" />
                            <PointerContainer width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_{ 84_t_" />
                            <PointerContainer width="200px" top ml="-80px">
                                <PointerDot />
                                <PointerStick height="28px" />
                                <PointerText top>
                                    <Localize translate_text="_t_Stop loss or take profit amount_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_( 3_t_" />
                            <PointerContainer>
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize translate_text="_t_1 ) }_t_" />
                            <PointerContainer width="100px" top ml="-38px">
                                <PointerDot ml="-40px" />
                                <PointerStick ml="-40px" height="28px" />
                                <PointerText ml="40px" top>
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>

                        <FormulaValue>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValue>

                        <FormulaValue>
                            <Localize
                                translate_text="_t_<0>221.5961</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer ml="-20px" width="100px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Take profit level_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValue>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile height="180px" pt="65px">
                    <FormulaHighlightMobile>
                        <FormulaValueMobile>
                            <Localize translate_text="_t_249.5961_t_" />
                            <PointerContainerMobile mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_{ 84_t_" />
                            <PointerContainerMobile mw="120px" height="76px" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile ml="-80px">
                                    <Localize translate_text="_t_take profit amount_t_" />
                                </PointerTextMobile>
                                <PointerTextMobile top ml="-83px">
                                    <Localize translate_text="_t_ Stop loss or_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_( 3_t_" />
                            <PointerContainerMobile>
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile>
                                    <Localize translate_text="_t_Volume_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize translate_text="_t_1 ) }_t_" />
                            <PointerContainerMobile top mw="0" ml="-68px" height="76px">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile top ml="60px">
                                    <Localize translate_text="_t_Contract size_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="_t_<0>221.5961</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile mw="0">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile ml="-30px">
                                    <Localize translate_text="_t_Take profit level_t_" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}

export const ProfitPipValue = () => {
    return (
        <>
            <Desktop>
                <FormulaContainer height="176px">
                    <FormulaHighlight jc="space-evenly" pl="41px" pr="41px">
                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_|(221.5961_t_" />
                            <PointerContainer width="100px" top ml="-60px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Stop loss or take profit level_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_249.5961)|_t_" />
                            <PointerContainer width="100px" ml="-7px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Asset price_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="_t_0.0001_t_" />
                            <PointerContainer width="100px" top ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText top>
                                    <Localize translate_text="_t_Point value_t_" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize
                                translate_text="_t_<0>280,000</0>_t_"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainer width="100px" ml="-45px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="_t_Take profit pip value_t_" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>
                    </FormulaHighlight>
                </FormulaContainer>
            </Desktop>

            <Mobile>
                <FormulaContainerMobile pt="60px" height="212px">
                    <FormulaHighlightMobile height="100px">
                        <FormulaTopWrapperMobile mt="-20px" cg="6px" ml="-100px">
                            <FormulaValueMobile>
                                <Localize translate_text="_t_|(221.5961_t_" />
                                <PointerContainerMobile mw="120px" ml="-15px" height="76px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_  take profit level_t_" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_ Stop loss or _t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <PnlMobileTakeProfitPip>
                                <FormulaGreen> - </FormulaGreen>
                            </PnlMobileTakeProfitPip>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_249.5961)|_t_" />
                                <PointerContainerMobile ml="25px" height="76px" top mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top ml="-30px">
                                        <Localize translate_text="_t_Asset price_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <PnlMobileTakeProfitPip>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </PnlMobileTakeProfitPip>

                            <FormulaValueMobile>
                                <Localize translate_text="_t_0.0001_t_" />
                                <PointerContainerMobile mw="0" height="76px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="_t_Point value_t_" />
                                        <StyledSpan> 1</StyledSpan>
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaTopWrapperMobile>

                        <FormulaBottomWrapperPnlMobile mt="40px" ml="-175px">
                            <PnlMobileTakeProfitPip>
                                <FormulaGreen>=</FormulaGreen>
                            </PnlMobileTakeProfitPip>

                            <FormulaValueMobile>
                                <Localize
                                    translate_text="_t_<0> 280,000</0>_t_"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-35px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="25px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="_t_Take profit  pip value_t_" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>
                        </FormulaBottomWrapperPnlMobile>
                    </FormulaHighlightMobile>
                </FormulaContainerMobile>
            </Mobile>
        </>
    )
}
