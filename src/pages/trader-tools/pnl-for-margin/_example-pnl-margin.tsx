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
                                    <Localize translate_text="Contract size" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
                <FormulaContainerMobile pt="60px" height="208px">
                    <FormulaHighlightMobile fs="14px" height="90px" jc="space-evenly">
                        <FormulaTopWrapperMobile mt="-20px">
                            <FormulaValueMobile>
                                <Localize translate_text="1.17524" />
                                <PointerContainerMobile mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="56px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen> + </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="{ -24" />
                                <PointerContainerMobile mw="120px" ml="-34px" height="76px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile>
                                        <Localize translate_text=" profit amount" />
                                    </PointerTextMobile>
                                    <PointerTextMobile top>
                                        <Localize translate_text=" Stop loss or take" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen>&divide;</FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="( 1" />
                                <PointerContainerMobile>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="56px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Volume" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <FormulaValuePnlMobile mw="21px">
                                <FormulaGreen>x </FormulaGreen>
                            </FormulaValuePnlMobile>

                            <FormulaValueMobile>
                                <Localize translate_text="100,0001 ) }" />
                                <PointerContainerMobile top mw="0" height="76px" ml="-5px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Contract size" />
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
                                    translate_text="<0> 1.1750</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile mw="0" ml="-23px">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="22px" />
                                    <PointerTextMobile ml="-10px">
                                        <Localize translate_text="Stop loss level" />
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
                                    <Localize translate_text="Point value" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
                <FormulaContainerMobile height="200px" pt="66px">
                    <FormulaHighlightMobile height="78px">
                        <FormulaValueMobile>
                            <Localize translate_text="|( 1.1750" />
                            <PointerContainerMobile mw="120px" ml="-16px" height="72px" top>
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

                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValuePnlStoplossPip>

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

                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValuePnlStoplossPip>
                        <FormulaValueMobile>
                            <Localize translate_text="0.00001" />
                            <PointerContainerMobile mw="40px" height="72px" top ml="3px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile top>
                                    <Localize translate_text="Point value" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>
                        <FormulaValuePnlStoplossPip>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValuePnlStoplossPip>

                        <FormulaValueMobile>
                            <Localize
                                translate_text="<0>24</0>"
                                components={[<FormulaGreen key={0} />]}
                            />
                            <PointerContainerMobile mw="40px" ml="-12px">
                                <PointerDotMobile />
                                <PointerStickMobile height="32px" />
                                <PointerTextMobile ml="-80px">
                                    <Localize translate_text="Stop loss pip value" />
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
                                    <Localize translate_text="Contract size" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
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

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen> - </FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize translate_text="{ 84" />
                            <PointerContainerMobile mw="120px" height="76px" top>
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile ml="-80px">
                                    <Localize translate_text="take profit amount" />
                                </PointerTextMobile>
                                <PointerTextMobile top ml="-83px">
                                    <Localize translate_text=" Stop loss or" />
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen>&divide;</FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

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

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

                        <FormulaValueMobile>
                            <Localize translate_text="1 ) }" />
                            <PointerContainerMobile top mw="0" ml="-68px" height="76px">
                                <PointerDotMobile />
                                <PointerStickMobile height="24px" />
                                <PointerTextMobile top ml="60px">
                                    <Localize translate_text="Contract size" />
                                    <StyledSpan> 1</StyledSpan>
                                </PointerTextMobile>
                            </PointerContainerMobile>
                        </FormulaValueMobile>

                        <FormulaValuePnlMobileTakeProfit>
                            <FormulaGreen>=</FormulaGreen>
                        </FormulaValuePnlMobileTakeProfit>

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
                                    <Localize translate_text="Point value" />
                                    <StyledSpan> 1</StyledSpan>
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
            </Desktop>

            <Mobile>
                <FormulaContainerMobile pt="60px" height="212px">
                    <FormulaHighlightMobile height="100px">
                        <FormulaTopWrapperMobile mt="-20px" cg="6px" ml="-100px">
                            <FormulaValueMobile>
                                <Localize translate_text="|(221.5961" />
                                <PointerContainerMobile mw="120px" ml="-15px" height="76px" top>
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

                            <PnlMobileTakeProfitPip>
                                <FormulaGreen> - </FormulaGreen>
                            </PnlMobileTakeProfitPip>

                            <FormulaValueMobile>
                                <Localize translate_text="249.5961)|" />
                                <PointerContainerMobile ml="25px" height="76px" top mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top ml="-30px">
                                        <Localize translate_text="Asset price" />
                                    </PointerTextMobile>
                                </PointerContainerMobile>
                            </FormulaValueMobile>

                            <PnlMobileTakeProfitPip>
                                <FormulaGreen>&divide;</FormulaGreen>
                            </PnlMobileTakeProfitPip>

                            <FormulaValueMobile>
                                <Localize translate_text="0.0001" />
                                <PointerContainerMobile mw="0" height="76px" top>
                                    <PointerDotMobile />
                                    <PointerStickMobile height="24px" />
                                    <PointerTextMobile top>
                                        <Localize translate_text="Point value" />
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
                                    translate_text="<0> 280,000</0>"
                                    components={[<FormulaGreen key={0} />]}
                                />
                                <PointerContainerMobile ml="-35px" mw="0">
                                    <PointerDotMobile />
                                    <PointerStickMobile height="25px" />
                                    <PointerTextMobile>
                                        <Localize translate_text="Take profit  pip value" />
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
