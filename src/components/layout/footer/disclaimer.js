import React from 'react'
import PropTypes from 'prop-types'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    StaticAsset,
    RiskWarning,
    BoldLink,
} from './common/style'
import { Mobile, Desktop, EU, NonEU } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { loss_percent } from 'common/constants'

const DisclaimerSection = ({ is_academy }) => {
    return (
        <>
            <DisclaimerWrapper>
                <NonEU>
                    <DisclaimerParagraph>
                        <Localize
                            translate_text="In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority, Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investments Services Act. Authorised by the Financial Conduct Authority and with deemed variation of permission. Subject to regulation by the Financial Conduct Authority. The nature and extent of consumer protections may differ from those for firms based in the UK. Details of the Financial Services Contracts Regime, which allows EEA-based firms to operate in the UK for a limited period to carry on activities that are necessary for the performance of pre-existing contracts, are available on the Financial Conduct Authority’s website."
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
                            translate_text="Outside the EU, financial products are offered by the following companies: Deriv (FX) Ltd, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, licensed by Labuan Financial Services Authority (<0>licence no. MB/18/0024</0>); Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, licensed by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); Deriv (V) Ltd, 1276, Kumul Highway, Port Vila, Vanuatu, licensed and regulated by the Vanuatu Financial Services Commission; and Deriv (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={1}
                                    target="_blank"
                                    href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </DisclaimerParagraph>
                </NonEU>
                <EU>
                    <DisclaimerParagraph>
                        <Localize
                            translate_text="In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority, Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investments Services Act."
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
                </EU>
                <DisclaimerParagraph>
                    {localize(
                        'Deriv Limited - 13 Castle Street, St. Helier, JE2 3BT, Jersey - is the holding company for the above subsidiaries.',
                    )}
                </DisclaimerParagraph>
                <DisclaimerParagraph>
                    {localize(
                        "This website's services are not available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.",
                    )}
                </DisclaimerParagraph>
                {is_academy && (
                    <DisclaimerParagraph>
                        {localize(
                            'The information contained in this academy is for educational purposes only and is not intended as financial or investment advice.',
                        )}
                    </DisclaimerParagraph>
                )}
                <RiskWarning>
                    <Desktop>
                        <NonEU>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                    components={[
                                        <BoldLink key={0} target="_blank" to="/responsible/" />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </NonEU>
                        <EU>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                    values={{ loss_percent }}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                        </EU>
                    </Desktop>
                    <Mobile>
                        <EU>
                            <DisclaimerParagraph no_margin line_height>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph line_height>
                                <Localize
                                    translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. {{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                    values={{ loss_percent }}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph line_height>
                                <Localize translate_text="The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                        </EU>
                        <NonEU>
                            <DisclaimerParagraph no_margin>
                                <Localize translate_text="CFDs are considered complex derivatives and may not be suitable for retail clients. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                    components={[
                                        <BoldLink key={0} target="_blank" to="/responsible/" />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </NonEU>
                    </Mobile>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

DisclaimerSection.propTypes = {
    is_academy: PropTypes.bool,
}

export default DisclaimerSection
