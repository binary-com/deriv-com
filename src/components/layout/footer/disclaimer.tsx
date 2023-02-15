import React from 'react'
import {
    DisclaimerWrapper,
    DisclaimerParagraph,
    RiskWarningParagraph,
    StaticAsset,
    RiskWarning,
    BoldLink,
} from './common/style'
import { Mobile, Desktop } from 'components/containers'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const DisclaimerSection = () => {
    const { is_eu, is_non_eu, is_cpa_plan } = useRegion()
    return (
        <>
            <DisclaimerWrapper>
                {(is_non_eu || is_cpa_plan) && (
                    <>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority, Triq L-Imdina, Zone 1, Central Business District, Birkirkara CBD 1010, Malta, under the Investment Services Act (<0>licence</0>). The registered office of Deriv Investments (Europe) Limited is at W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR9033, Malta."
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
                                translate_text="Deriv (FX) Ltd is licensed by Labuan Financial Services Authority (<0>licence</0>). The registered office of Deriv (FX) Ltd is at F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_(FX)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission (<0>licence</0>). The registered office of Deriv (BVI) is at Kingston Chambers, P.O Box 173, Road Town, Tortola, British Virgin Islands."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_(BVI)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission (<0>licence</0>). The registered office of Deriv (V) Ltd is at 1276 Kumul Highway, Port Vila, Vanuatu."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/regulatory/Deriv_(V)_Ltd.pdf"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            {localize(
                                'Deriv (SVG) LLC has a registered office at Hinds Buildings, Kingstown, St. Vincent and the Grenadines.',
                            )}
                        </DisclaimerParagraph>
                        <DisclaimerParagraph>
                            {localize(
                                'Deriv Holdings (Guernsey) Limited — 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ — is the holding company for the above subsidiaries.',
                            )}
                        </DisclaimerParagraph>
                    </>
                )}
                {is_eu && (
                    <>
                        <DisclaimerParagraph>
                            <Localize
                                translate_text="Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act <0>(licence)</0>. The registered office of Deriv Investments (Europe) Limited is at W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR9033, Malta."
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
                                'Deriv Holdings (Guernsey) Limited — 2nd Floor, 1 Cornet Street, St Peter Port, Guernsey, GY1 1BZ — is the holding company for the above subsidiary.',
                            )}
                        </DisclaimerParagraph>
                    </>
                )}
                <RiskWarning>
                    <Desktop>
                        {is_non_eu && !is_cpa_plan && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that the financial products offered on this website, including contracts for difference (CFDs), carry a high level of risk and may not be suitable for all clients." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions</0>, <0>Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                        {is_cpa_plan && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that the financial products offered on this website, including contracts for difference (CFDs), carry a high level of risk and may not be suitable for all clients." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="<0>EU statutory disclaimer</0>: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 71% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                        components={[<strong key={0} />]}
                                    />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions</0>, <0>Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                        {is_eu && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that CFDs and other products offered on this website are complex derivatives and may not be suitable for all clients. Trading in these products carries a substantial risk of losing money rapidly." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions</0>, <0>Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                    </Desktop>
                    <Mobile>
                        {is_non_eu && !is_cpa_plan && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that the financial products offered on this website, including contracts for difference (CFDs), carry a high level of risk and may not be suitable for all clients." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions, Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                        {is_cpa_plan && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that the financial products offered on this website, including contracts for difference (CFDs), carry a high level of risk and may not be suitable for all clients." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="<0>EU statutory disclaimer</0>: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 71% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                                        components={[<strong key={0} />]}
                                    />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions</0>, <0>Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                        {is_eu && (
                            <>
                                <RiskWarningParagraph no_margin>
                                    <Localize translate_text="Please remember that CFDs and other products offered on this website are complex derivatives and may not be suitable for all clients. Trading in these products carries a substantial risk of losing money rapidly." />
                                </RiskWarningParagraph>
                                <RiskWarningParagraph>
                                    <Localize
                                        translate_text="Make sure to read our <0>Terms and conditions</0>, <0>Risk disclosure</0>, and <1>Secure and responsible trading</1> to fully understand the risks involved before using our services. Please also note that the information on this website does not constitute investment advice."
                                        components={[
                                            <BoldLink
                                                key={0}
                                                target="_blank"
                                                to="/terms-and-conditions/"
                                            />,
                                            <BoldLink key={1} target="_blank" to="/responsible/" />,
                                        ]}
                                    />
                                </RiskWarningParagraph>
                            </>
                        )}
                    </Mobile>
                </RiskWarning>
            </DisclaimerWrapper>
        </>
    )
}

export default DisclaimerSection
