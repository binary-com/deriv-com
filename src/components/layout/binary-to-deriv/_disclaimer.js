import React from 'react'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    StaticAsset,
    StaticAssetLink,
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
                        translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services in the European Union. It is also authorised and subject to limited regulation by the Financial Conduct Authority in the UK. Details about the extent of our authorisation and regulation by the Financial Conduct Authority are available from us on request."
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
                    <Localize
                        translate_text="Deriv (Europe) Limited, W Business Centre, Level
                        3, Triq Dun Karm, Birkirkara, BKR 9033, Malta is licensed and regulated for digital options based on synthetic indices by the Malta Gaming Authority” (<0>licence no. MGA/B2C/102/2000</0>), by the Gambling Commission for clients in Great Britain (<1>account no. 39495</1>), and by the Revenue Commissioners for clients in Ireland (licence no. 1010285)."
                        components={[
                            <StaticAsset
                                key={0}
                                target="_blank"
                                href="/regulatory/Deriv_(Europe)_Limited.pdf"
                                rel="noopener noreferrer"
                            />,
                            <StaticAssetLink
                                external="true"
                                key={1}
                                target="_blank"
                                to="https://www.gamblingcommission.gov.uk/public-register/business/detail/39172"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        "This website's services are not made available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.",
                    )}
                </DisclaimerParagraph>
                <RiskWarning>
                    <Show.Desktop>
                        <DisclaimerParagraph no_margin>
                            <Localize translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone." />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                values={{ loss_percent: 66 }}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                        </DisclaimerParagraph>
                    </Show.Desktop>
                    <Show.Mobile>
                        <DisclaimerParagraph no_margin>
                            <Localize translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone." />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                values={{ loss_percent: 66 }}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                        </DisclaimerParagraph>
                    </Show.Mobile>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

export default DisclaimerSection
