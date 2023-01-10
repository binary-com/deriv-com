import React from 'react'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    StaticAsset,
    RiskWarning,
} from '../footer/common/style.js'
import { Show } from 'components/containers'
import { Localize, localize } from 'components/localization'

const DisclaimerSection = () => {
    return (
        <>
            <DisclaimerWrapper>
                <DisclaimerParagraph>
                    <Localize
                        translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services in the European Union."
                        components={[
                            <StaticAsset
                                key={0}
                                target="_blank"
                                href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        'Deriv Limited - 13 Castle Street, St. Helier, JE2 3BT, Jersey - is the holding company for the above subsidiaries.',
                    )}
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        'This website’s services are not available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.',
                    )}
                </DisclaimerParagraph>
                <RiskWarning>
                    <Show.Desktop>
                        <DisclaimerParagraph no_margin>
                            <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                values={{ loss_percent: 71 }}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                        </DisclaimerParagraph>
                    </Show.Desktop>
                    <Show.Mobile>
                        <DisclaimerParagraph no_margin>
                            <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                values={{ loss_percent: 71 }}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                        </DisclaimerParagraph>
                    </Show.Mobile>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

export default DisclaimerSection
