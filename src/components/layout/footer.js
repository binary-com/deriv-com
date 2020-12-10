import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, CssGrid, Flex, Show } from '../containers'
import { StyledLink, Text, QueryImage } from '../elements'
import { LocationContext } from './location-context'
import { mga_link_url } from 'common/utility'
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
//EU icons
import Gamstop from 'images/svg/gamstop.svg'
import MgaLogo from 'images/svg/mga-logo.svg'
import Over18 from 'images/svg/over-18.svg'

const StyledFooter = styled.footer`
    background-color: var(--color-grey-25);
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${(props) => (props.has_banner_cookie ? '18.4rem' : '0')};
    padding-bottom: 1.6rem;

    ${Container} {
        @media ${device.tabletL} {
            width: 100%;
        }
    }

    @media ${device.mobileL} {
        padding-bottom: 6rem;
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

    @media ${device.tabletL} {
        margin-left: 2rem;
    }
`
const LinksWrapper = styled.div`
    grid-area: links;
    background: var(--color-grey-25);
    padding: 0.8rem 0 2.4rem 0;
    border-bottom: 1px solid var(--color-grey-26);
    border-top: 2px solid var(--color-grey-26);

    @media ${device.tabletL} {
        padding: 0;
    }
`
const LinksCol = styled(Flex)`
    flex-direction: column;
    width: fit-content;
    min-width: 100px;
    margin-right: 20px;

    :last-child {
        margin-right: 0;
    }
`

const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
`
const Link = styled(StyledLink)`
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    line-height: 1.5;
`
const LinkWrapper = styled.div`
    margin-top: ${(props) => (props.first_child == 'true' ? '0.8rem' : '1.6rem')};

    @media ${device.laptopM} {
        ${Title} {
            font-size: var(--text-size-xs);
        }
        ${Link} {
            font-size: var(--text-size-xs);
        }
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
const Copyright = styled(Flex)`
    grid-area: copyright;
    background: var(--color-grey-25);
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }

    @media ${device.tabletL} {
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
const EuLogoWrapper = styled(Flex)`
    grid-area: eulogowrapper;
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

const StyledGamstop = styled.img`
    margin-right: 2.4rem;
`
const StyledCoatArms = styled.div`
    margin-right: 2.4rem;
`
const StyledMgaLogo = styled.img`
    margin-right: 2.4rem;
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
const SocialWrapperComponent = () => {
    return (
        <SocialWrapper>
            <LocalizedLink
                external="true"
                to="https://www.facebook.com/derivdotcom/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Facebook} alt="facebook" width="41" height="41" />
            </LocalizedLink>
            <LocalizedLink
                external="true"
                to="https://twitter.com/derivdotcom"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Twitter} alt="twitter" width="41" height="41" />
            </LocalizedLink>
            <LocalizedLink
                external="true"
                to="https://www.instagram.com/deriv_official/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Instagram} alt="instagram" width="41" height="41" />
            </LocalizedLink>
            <LocalizedLink
                external="true"
                to="https://www.linkedin.com/company/derivdotcom/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Linkedin} alt="linkedin" width="41" height="41" />
            </LocalizedLink>
        </SocialWrapper>
    )
}

const query = graphql`
    query {
        iom: file(relativePath: { eq: "isle-of-man-coat-of-arms.png" }) {
            ...fadeIn
        }
    }
`

const Footer = () => {
    const image_query = useStaticQuery(query)
    const { show_cookie_banner } = React.useContext(LocationContext)

    mobile_accordion_header_about.borderTop = 'none'

    return (
        <StyledFooter has_banner_cookie={show_cookie_banner}>
            <Container>
                <StyledGrid>
                    <DerivLogoWrapper>
                        <StyledLogo src={Logo} alt="logo" width="147" height="25" />
                        <Show.Eu>
                            <Show.Desktop>
                                <SocialWrapperComponent />
                            </Show.Desktop>
                        </Show.Eu>
                    </DerivLogoWrapper>
                    <LinksWrapper>
                        <Show.Desktop>
                            <Flex jc="space-between">
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('ABOUT')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/about#story">{localize('Our story')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/about#leadership">
                                            {localize('Our leadership')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/partners">
                                            {localize('Partnership programmes')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/why-choose-us">
                                            {localize('Why choose us?')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/contact-us">{localize('Contact us')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/careers">{localize('Careers')}</Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('TRADE')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/dtrader">{localize('DTrader')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/dbot">{localize('DBot')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/dmt5">{localize('DMT5')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link
                                            to="trading"
                                            is_smarttrader_link
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {localize('SmartTrader')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('TRADE TYPES')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/trade-types/margin">
                                            {localize('Margin trading')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/trade-types/options">{localize('Options')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/trade-types/multiplier">
                                            {localize('Multipliers')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('MARKETS')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/markets#forex">{localize('Forex')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#synthetic">
                                            {localize('Synthetic indices')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#stock">{localize('Stock indices')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/markets#commodities">
                                            {localize('Commodities')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('LEGAL')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/regulatory">
                                            {localize('Regulatory information')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/terms-and-conditions">
                                            {localize('Terms and conditions')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/responsible-trading">
                                            {localize('Secure and responsible trading')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('PARTNER')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/partners/affiliate-ib/">
                                            {localize('Affiliates and IBs')}
                                        </Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/partners/payment-agent">
                                            {localize('Payment agents')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                                <LinksCol>
                                    <LinkWrapper>
                                        <Title>{localize('RESOURCES')}</Title>
                                    </LinkWrapper>
                                    <LinkWrapper first_child="true">
                                        <Link to="/help-centre">{localize('Help centre')}</Link>
                                    </LinkWrapper>
                                    <LinkWrapper>
                                        <Link to="/payment-methods">
                                            {localize('Payment methods')}
                                        </Link>
                                    </LinkWrapper>
                                </LinksCol>
                            </Flex>
                        </Show.Desktop>
                    </LinksWrapper>
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
                                    translate_text="Deriv Investments (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed for financial products by the Malta Financial Services Authority for clients in the EU (<0>licence no. IS/70156</0>)."
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
                                    translate_text="Deriv (MX) Ltd, Millennium House, Level 1, Victoria Road, Douglas IM2 4RW, Isle of Man, is licensed by the Gambling Supervision Commission in the Isle of Man (<0>view licence</0>) and by the UK Gambling Commission for clients in the UK (<1>account no. 39172</1>)."
                                    components={[
                                        <StaticAsset
                                            key={0}
                                            target="_blank"
                                            href="/regulatory/Deriv_(MX)_Ltd.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                        <StaticAssetLink
                                            external
                                            key={1}
                                            target="_blank"
                                            to="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39172"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </DisclaimerParagraph>
                            <DisclaimerParagraph>
                                <Localize
                                    translate_text="Deriv (Europe) Limited, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, is licensed for synthetic indices by the Malta Gaming Authority (<0>licence no. MGA/B2C/102/2000</0>), by the UK Gambling Commission for clients in the UK (<1>account no. 39495</1>), and by the Revenue Commissioners for clients in Ireland (licence no. 1010285)."
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
                                            to="https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39495"
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
                            <Show.Desktop>
                                <Show.NonEU>
                                    <DisclaimerParagraph no_margin>
                                        <Localize translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                                    </DisclaimerParagraph>
                                    <DisclaimerParagraph>
                                        <Localize
                                            translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                            components={[
                                                <BoldLink
                                                    key={0}
                                                    target="_blank"
                                                    to="/responsible-trading/"
                                                />,
                                            ]}
                                        />
                                    </DisclaimerParagraph>
                                </Show.NonEU>
                                <Show.Eu>
                                    <DisclaimerParagraph no_margin>
                                        <Localize translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 74% of retail investor accounts lose money when trading CFDs with Deriv Investments (Europe) Limited. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                                    </DisclaimerParagraph>
                                    <DisclaimerParagraph>
                                        <Localize
                                            translate_text="Gambling can be addictive, so please play responsibly. Visit <0>Secure and responsible trading</0> and <1>begambleaware.org</1> for more information."
                                            components={[
                                                <BoldLink
                                                    key={0}
                                                    target="_blank"
                                                    to="/responsible-trading/"
                                                />,
                                                <BoldLink
                                                    external
                                                    key={0}
                                                    target="_blank"
                                                    to="https://www.begambleaware.org/"
                                                />,
                                            ]}
                                        />
                                    </DisclaimerParagraph>
                                </Show.Eu>
                            </Show.Desktop>
                            <Show.Mobile>
                                <Show.Eu>
                                    <DisclaimerParagraph no_margin>
                                        <Localize translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 74% of retail investor accounts lose money when trading CFDs with Deriv Investments (Europe) Limited. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money." />
                                    </DisclaimerParagraph>
                                    <DisclaimerParagraph>
                                        <Localize
                                            translate_text="Gambling can be addictive, so please play responsibly. Visit <0>Secure and responsible trading</0> and <1>begambleaware.org</1> if you need further information."
                                            components={[
                                                <BoldLink
                                                    key={0}
                                                    target="_blank"
                                                    to="/responsible-trading/"
                                                />,
                                                <BoldLink
                                                    external
                                                    key={0}
                                                    target="_blank"
                                                    to="https://www.begambleaware.org/"
                                                />,
                                            ]}
                                        />
                                    </DisclaimerParagraph>
                                </Show.Eu>
                                <Show.NonEU>
                                    <DisclaimerParagraph no_margin>
                                        <Localize
                                            translate_text="The financial products offered on this website include options and contracts for difference (CFDs) which are considered complex derivatives and may not be suitable for everyone. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. The products mentioned here may be affected by changes in currency exchange rates. If you invest in these products, you may lose some or all of your investment, and the value of your investment may fluctuate. You should never invest money that you cannot afford to lose and never trade with borrowed money."
                                            components={[<strong key={0} />]}
                                        />
                                    </DisclaimerParagraph>
                                    <DisclaimerParagraph>
                                        <Localize
                                            translate_text="Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading</0>."
                                            components={[
                                                <BoldLink
                                                    key={0}
                                                    target="_blank"
                                                    to="/responsible-trading/"
                                                />,
                                            ]}
                                        />
                                    </DisclaimerParagraph>
                                </Show.NonEU>
                            </Show.Mobile>
                        </RiskWarning>
                    </Disclaimer>
                    <Copyright>
                        <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                        <Text ml="0.4rem">{localize('2020 Deriv | All rights reserved')}</Text>
                    </Copyright>
                    <Show.NonEU>
                        <SocialWrapperComponent />
                    </Show.NonEU>
                    <Show.Eu>
                        <Show.Mobile>
                            <SocialWrapperComponent />
                        </Show.Mobile>
                    </Show.Eu>
                    <Show.Eu>
                        <Show.Desktop>
                            <EuLogoWrapper mt="1rem" ai="center">
                                <LocalizedLink
                                    external="true"
                                    to="https://www.gamstop.co.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <StyledGamstop src={Gamstop} alt="gamstop desktop" />
                                </LocalizedLink>

                                <LocalizedLink
                                    external="true"
                                    to="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <StyledCoatArms>
                                        <QueryImage
                                            data={image_query.iom}
                                            alt={'IOM'}
                                            width="6.4rem"
                                            height="auto"
                                        />
                                    </StyledCoatArms>
                                </LocalizedLink>
                                <LocalizedLink
                                    external="true"
                                    to={mga_link_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <StyledMgaLogo src={MgaLogo} alt="mga logo desktop" />
                                </LocalizedLink>
                                <img src={Over18} alt="over18 desktop" />
                            </EuLogoWrapper>
                        </Show.Desktop>
                        <Show.Mobile>
                            <EuLogoWrapper mt="1rem" ai="center">
                                <LocalizedLink
                                    external="trues"
                                    to="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <StyledCoatArms>
                                        <QueryImage
                                            data={image_query.iom}
                                            alt={'IOM'}
                                            width="6.4rem"
                                            height="auto"
                                        />
                                    </StyledCoatArms>
                                </LocalizedLink>
                                <Flex fd="column" width="auto">
                                    <LocalizedLink
                                        external="true"
                                        to={mga_link_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StyledMgaLogo src={MgaLogo} alt="mga logo" />
                                    </LocalizedLink>
                                    <LocalizedLink
                                        external="true"
                                        to="https://www.gamstop.co.uk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StyledGamstop src={Gamstop} alt="gamstop mobile" />
                                    </LocalizedLink>
                                </Flex>
                                <img src={Over18} alt="over18 mobile" />
                            </EuLogoWrapper>
                        </Show.Mobile>
                    </Show.Eu>
                </StyledGrid>
            </Container>
        </StyledFooter>
    )
}

export default Footer
