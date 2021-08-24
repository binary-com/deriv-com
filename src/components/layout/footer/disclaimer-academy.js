import React from 'react'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    RiskWarning,
    StaticAsset,
    // BoldLink,
} from './common/style.js'
import { Localize, localize } from 'components/localization'

const DisclaimerSectionAcademy = () => {
    return (
        <>
            <DisclaimerWrapper>
                <DisclaimerParagraph>
                    <Localize
                        translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed in Malta <0>(licence no. IS/70156)</0> and regulated by the Malta Financial Services Authority under the Investments Services Act to provide investment services in the European Union. It is also authorised and subject to limited regulation by the Financial Conduct Authority in the UK. Details about the extent of our authorisation and regulation by the Financial Conduct Authority are available from us on request."
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
                        translate_text="Deriv (MX) Ltd, Millennium House, Level 1, Victoria Road, Douglas IM2 4RW, Isle of Man, is licensed and regulated by the Gambling Supervision Commission in the Isle of Man <0>(view licence)</0> and by the UK Gambling Commission for clients in the UK <1>(account no. 39172)</1>."
                        components={[
                            <StaticAsset
                                key={0}
                                target="_blank"
                                href="/regulatory/Deriv_(MX)_Ltd.pdf"
                                rel="noopener noreferrer"
                            />,
                            <StaticAsset
                                key={1}
                                target="_blank"
                                href="https://www.gamblingcommission.gov.uk/public-register/business/detail/39172"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    <Localize
                        translate_text="Deriv (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed and regulated for synthetic indices by the Malta Gaming Authority <0>(licence no. MGA/B2C/102/2000)</0>, by the Gambling Commission for clients in Great Britain <1>(account no. 39495)</1>, and by the Revenue Commissioners for clients in Ireland (licence no. 1010285)."
                        components={[
                            <StaticAsset
                                key={0}
                                target="_blank"
                                href="/regulatory/Deriv_(Europe)_Limited.pdf"
                                rel="noopener noreferrer"
                            />,
                            <StaticAsset
                                key={1}
                                target="_blank"
                                href="https://www.gamblingcommission.gov.uk/public-register/business/detail/39495"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        "This website's services are not available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.",
                    )}
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        'The information contained in this blog post is for educational purposes only and is not intended as financial or investment advice.',
                    )}
                </DisclaimerParagraph>
                <RiskWarning>
                    <DisclaimerParagraph>
                        <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                    </DisclaimerParagraph>
                    <DisclaimerParagraph>
                        <Localize translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 63% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money." />
                    </DisclaimerParagraph>
                    <DisclaimerParagraph>
                        <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                    </DisclaimerParagraph>
                    <DisclaimerParagraph>
                        <Localize translate_text="Gambling can be addictive, so please play responsibly. Visit Secure and responsible trading and begambleaware.org for more information." />
                    </DisclaimerParagraph>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

export default DisclaimerSectionAcademy
