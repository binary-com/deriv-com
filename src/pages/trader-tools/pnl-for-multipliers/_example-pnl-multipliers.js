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
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text=" price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="{(-7.54" />
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or " />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text="take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2)" />
                            <PointerContainer ml="3px">
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
                            <PointerContainer ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
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
                            <PointerContainer ml="15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text=" level" />
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
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top>
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-45px">
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
                                            translate_text="Commission <0>1</0>"
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
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Asset" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text="price" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen> x </FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="{(-7.54" />
                            <PointerContainer ml="-15px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss or" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text="take profit amount" />
                                </PointerText>
                            </PointerContainer>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <FormulaGreen>+</FormulaGreen>
                        </FormulaValueSwapSynthetic>

                        <FormulaValueSwapSynthetic>
                            <Localize translate_text="0.2)" />
                            <PointerContainer ml="3px">
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
                            <PointerContainer ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
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
                            <PointerContainer ml="10px">
                                <PointerDot />
                                <PointerStick />
                                <PointerText>
                                    <Localize translate_text="Stop loss" />
                                </PointerText>
                                <PointerText>
                                    <Localize translate_text="level" />
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
                                <Localize translate_text="3376.24" />
                                <PointerContainerMobile top ml="-5px">
                                    <PointerDotMobile />
                                    <PointerStickMobile />
                                    <PointerTextMobile top ml="-45px">
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
                                            translate_text="Commission <0>1</0>"
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
