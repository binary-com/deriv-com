import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Container, CssGrid, Flex, Show } from '../../containers'
import { StyledLink, Text } from '../../elements'
import { DerivStore } from 'store'
import {
    fb_url,
    fb_url_career,
    instagram_url,
    instagram_url_career,
    linkedin_url,
    linkedin_url_career,
    twitter_url,
} from 'common/constants'
// TODO: (discussion) make footer pure component, and move usage of footer to custom
import device from 'themes/device'
import { localize, Localize, LocalizedLink } from 'components/localization'
// Icons
import CopyrightIc from 'images/svg/copyright.svg'
import Logo from 'images/svg/deriv-footer.svg'
import Twitter from 'images/svg/footer-twitter.svg'
import Instagram from 'images/svg/footer-instagram.svg'
import Facebook from 'images/svg/footer-facebook.svg'
import Linkedin from 'images/svg/footer-linkedin.svg'

const StyledFooter = styled.footer`
    background-color: var(--color-grey-25);
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${(props) => props.is_eu_country && '7.3rem'};
    padding-bottom: 1.6rem;

    @media (max-width: 1090px) {
        margin-bottom: ${(props) => props.is_eu_country && '9rem'};
    }
    @media (max-width: 991px) {
        margin-bottom: ${(props) => props.is_eu_country && '11rem'};
        padding-bottom: 0;
    }
    @media (max-width: 826px) {
        margin-bottom: ${(props) => props.is_eu_country && '12.2rem'};
    }
    @media (max-width: 710px) {
        margin-bottom: ${(props) => props.is_eu_country && '10.6rem'};
    }
    @media (max-width: 538px) {
        margin-bottom: ${(props) => props.is_eu_country && '13.8rem'};
    }

    ${Container} {
        @media ${device.tabletL} {
            width: 100%;
        }
    }
`
const StyledGrid = styled(CssGrid)`
    width: 100%;
    grid-template-columns: 2fr;
    grid-template-areas:
        'logo logo'
        'links links'
        'disclaimer disclaimer'
        'copyright social'
        'copyright eulogowrapper';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas:
            'logo'
            'links'
            'social'
            'disclaimer'
            'eulogowrapper'
            'copyright';
    }
`
const DerivLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: logo;
    background: var(--color-grey-25);
    padding: 4rem 0 2rem 0;
    border-bottom: solid 1px var(--color-grey-26);

    @media ${device.tabletL} {
        width: 90%;
        margin: 0 auto;
        padding: 32px 0 16px;
    }
`
const Disclaimer = styled.div`
    grid-area: disclaimer;
    background: var(--color-grey-25);
`
const DisclaimerParagraph = styled(Text)`
    font-size: var(--text-size-xs);
    margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};

    @media ${device.tabletL} {
        width: 90%;
        margin: 2rem auto 0;
        font-size: var(--text-size-sm);
    }
`
const shared_css = css`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const StaticAsset = styled.a`
    ${shared_css}
`
const StaticAssetLink = styled(LocalizedLink)`
    ${shared_css}
`
const RiskWarning = styled.div`
    background-color: var(--color-grey-28);
    border-left: 4px solid var(--color-grey-27);
    padding: 1.6rem;
    margin-top: 2rem;

    @media ${device.tabletL} {
        border-top: 2px solid var(--color-grey-27);
        border-left: none;
        width: 90%;
        margin: 4rem auto 0;
        padding: 1rem;

        p {
            padding: 0;
            width: 100%;
        }
    }
`

const BoldLink = styled(StyledLink)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const NormalLink = styled(StyledLink)`
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    margin-right: ${(props) => (props.margin_right ? '40px' : '0px')};
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
        margin-right: ${(props) => (props.margin_right ? '33px' : '0px')};
    }
`

const Copyright = styled(Flex)`
    grid-area: copyright;
    background: var(--color-grey-25);
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;

    p {
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        padding: 2rem 0;
        justify-content: center;

        p {
            font-size: 1.75rem;
            line-height: 1.5;
        }
    }
`

const CopyrightLeftWrapper = styled(Flex)`
    justify-content: start;

    @media ${device.tabletL} {
        justify-content: center;
        margin-bottom: 16px;
    }
`
const CopyrightRightWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: flex-end;

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const SocialWrapper = styled.div`
    grid-area: social;
    background: var(--color-grey-25);
    margin: 1.6rem 0;

    img {
        margin-left: 1.6rem;
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1rem;

        a:first-child {
            img {
                margin-left: 0;
            }
        }
    }
`
const StyledLogo = styled.img`
    width: 18.2rem;
`

const mobile_accordion_header = {
    borderTop: '1px solid var(--color-grey-26)',
    borderBottom: 'none',
    padding: '0',
    margin: '0 2rem',
    backgroundColor: 'var(--color-grey-25)',
    boxShadow: 'none',
}

const mobile_accordion_header_about = Object.assign({}, mobile_accordion_header)

const SocialWrapperComponent = ({ is_career_page }) => {
    const alt_string = (is_career_page ? 'career' : '') + ' icon link'
    const accounts = [
        {
            link: is_career_page ? fb_url_career : fb_url,
            image: Facebook,
            image_alt: `facebook ${alt_string}`,
        },
        {
            link: is_career_page ? instagram_url_career : instagram_url,
            image: Instagram,
            image_alt: `instagram ${alt_string}`,
        },
        {
            link: is_career_page ? linkedin_url_career : linkedin_url,
            image: Linkedin,
            image_alt: `linkedin ${alt_string}`,
        },
    ]

    const twitter = {
        link: twitter_url,
        image: Twitter,
        image_alt: `twitter ${alt_string}`,
    }

    if (!is_career_page) {
        accounts.splice(1, 0, twitter)
    }

    return <SocialMediaComponent social_accounts={accounts} />
}

SocialWrapperComponent.propTypes = {
    is_career_page: PropTypes.bool,
}

const SocialMediaComponent = ({ social_accounts }) => (
    <SocialWrapper>
        {social_accounts.map((account, index) => (
            <LocalizedLink
                key={index}
                external="true"
                to={account.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={account.image} alt={account.image_alt} width="41" height="41" />
            </LocalizedLink>
        ))}
    </SocialWrapper>
)

SocialMediaComponent.propTypes = {
    social_accounts: PropTypes.array,
}

const Footer = ({ type }) => {
    const { is_eu_country } = React.useContext(DerivStore)

    mobile_accordion_header_about.borderTop = 'none'
    const current_year = new Date().getFullYear()

    return (
        <StyledFooter is_eu_country={is_eu_country}>
            <Container>
                <StyledGrid>
                    <DerivLogoWrapper>
                        <StyledLogo src={Logo} alt="logo" width="147" height="25" />
                        <Show.Eu>
                            <Show.Desktop>
                                <SocialWrapperComponent is_career_page={type === 'careers'} />
                            </Show.Desktop>
                        </Show.Eu>
                    </DerivLogoWrapper>
                    <Disclaimer>
                        <Show.NonEU>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="In the EU, financial products are offered by Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
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
                                    translate_text="Outside the EU, financial products are offered by the following companies: Deriv (FX) Ltd, F16, Level 1, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, licensed by Labuan Financial Services Authority (<0>licence no. MB/18/0024</0>); Deriv (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, licensed by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); Deriv (V) Ltd (<2>view licence</2>), 1276, Kumul Highway, Port Vila, Vanuatu, licensed and regulated by the Vanuatu Financial Services Commission; Champion Group Ltd (<3>view licence</3>), 1276, Kumul Highway, Port Vila, Vanuatu, Republic of Vanuatu, licensed by the Vanuatu Financial Services Commission; and Deriv (SVG) LLC, Hinds Buildings, Kingstown, St. Vincent and the Grenadines."
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
                                        <StaticAsset
                                            key={3}
                                            target="_blank"
                                            href="/regulatory/Champion_Group_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </Show.NonEU>
                        <Show.Eu>
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
                                    translate_text="Deriv (MX) Ltd, Millennium House, Level 1, Victoria Road, Douglas IM2 4RW, Isle of Man, licensed and regulated by the Gambling Supervision Commission in the Isle of Man (<0>view licence</0>) and by the UK Gambling Commission for clients in the UK (<1>account no. 39172</1>)."
                                    components={[
                                        <StaticAsset
                                            key={0}
                                            target="_blank"
                                            href="/regulatory/Deriv_(MX)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <StaticAssetLink
                                            external="true"
                                            key={1}
                                            target="_blank"
                                            to="https://beta.gamblingcommission.gov.uk/public-register/business/detail/39172"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Deriv (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed and regulated for synthetic indices by the Malta Gaming Authority (<0>licence no. MGA/B2C/102/2000</0>), by the Gambling Commission for clients in Great Britain (<1>account no. 39495</1>), and by the Revenue Commissioners for clients in Ireland (licence no. 1010285)."
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
                                            to="https://beta.gamblingcommission.gov.uk/public-register/business/detail/39495"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </Show.Eu>
                        <DisclaimerParagraph>
                            {localize(
                                "This website's services are not made available in certain countries, including the USA, Canada, and Hong Kong, or to persons below 18.",
                            )}
                        </DisclaimerParagraph>
                        <RiskWarning>
                            <DisclaimerParagraph no_margin>
                                <Localize
                                    translate_text="<0>RISK WARNING:</0> The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <1>Secure and responsible trading.</1>"
                                    components={[
                                        <strong key={0} />,
                                        <BoldLink key={1} target="_blank" to="/responsible/" />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                        </RiskWarning>
                    </Disclaimer>
                    <Copyright>
                        <CopyrightLeftWrapper>
                            <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                            <Text ml="0.4rem">
                                <Localize
                                    translate_text="{{current_year}} Deriv | All rights reserved"
                                    values={{ current_year }}
                                />
                            </Text>
                        </CopyrightLeftWrapper>
                        <CopyrightRightWrapper>
                            <Localize
                                translate_text="<0>Terms and conditions</0>"
                                components={[
                                    <NormalLink
                                        key={0}
                                        target="_blank"
                                        to="/terms-and-conditions#clients"
                                        margin_right
                                    />,
                                ]}
                            />
                            <Localize
                                translate_text="<0>Privacy policy</0>"
                                components={[
                                    <NormalLink
                                        key={0}
                                        target="_blank"
                                        to="/tnc/security-and-privacy.pdf"
                                    />,
                                ]}
                            />
                        </CopyrightRightWrapper>
                    </Copyright>
                </StyledGrid>
            </Container>
        </StyledFooter>
    )
}

Footer.propTypes = {
    type: PropTypes.string,
}

export default Footer
