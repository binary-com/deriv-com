import React from 'react'
import PropTypes from 'prop-types'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    StaticAsset,
    RiskWarning,
    BoldLink,
} from './common/style'
import { Mobile, Desktop } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { loss_percent } from 'common/constants'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { getLegalEntityName } from 'brand'

const DisclaimerSection = ({ is_academy }) => {
    const { is_eu, is_non_eu } = useCountryRule()
    const brand_limited = getLegalEntityName('limited')
    const brand_investments = getLegalEntityName('investments')
    const brand_fx = getLegalEntityName('fx')
    const brand_bvi = getLegalEntityName('bvi')
    const brand_v = getLegalEntityName('v')
    const brand_svg = getLegalEntityName('svg')

    return (
        <>
            <DisclaimerWrapper>
                {is_non_eu && (
                    <>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="In the EU, financial products are offered by {{brand_investments}}, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority, Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investments Services Act. Authorised by the Financial Conduct Authority and with deemed variation of permission. Subject to regulation by the Financial Conduct Authority. The nature and extent of consumer protections may differ from those for firms based in the UK. Details of the Financial Services Contracts Regime, which allows EEA-based firms to operate in the UK for a limited period to carry on activities that are necessary for the performance of pre-existing contracts, are available on the Financial Conduct Authority’s website."
                                values={{ brand_investments }}
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
                                translate_text="Outside the EU, financial products are offered by the following companies: {{brand_fx}}, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, licensed by Labuan Financial Services Authority (<0>licence no. MB/18/0024</0>); {{brand_bvi}}, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, licensed by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); {{brand_v}} (<2>view licence</2>), 1276, Kumul Highway, Port Vila, Vanuatu, licensed and regulated by the Vanuatu Financial Services Commission; and {{brand_svg}}, Hinds Buildings, Kingstown, St. Vincent and the Grenadines."
                                values={{ brand_fx, brand_bvi, brand_v, brand_svg }}
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
                                    <StaticAsset
                                        key={2}
                                        target="_blank"
                                        href="/regulatory/Deriv_(V)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                    </>
                )}
                {is_eu && (
                    <>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="In the EU, financial products are offered by {{ brand_investments }}, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed in Malta (<0>licence no. IS/70156</0>) and regulated by the Malta Financial Services Authority, Triq l-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investments Services Act."
                                values={{ brand_investments }}
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
                    </>
                )}
                <DisclaimerParagraph>
                    {localize(
                        '{{brand_limited}} Limited - 13 Castle Street, St. Helier, JE2 3BT, Jersey - is the holding company for the above subsidiaries.',
                        { brand_limited },
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
                        {is_non_eu && (
                            <>
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
                            </>
                        )}
                        {is_eu && (
                            <>
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
                            </>
                        )}
                    </Desktop>
                    <Mobile>
                        {is_eu && (
                            <>
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
                            </>
                        )}
                        {is_non_eu && (
                            <>
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
                            </>
                        )}
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
