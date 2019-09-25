import React from 'react'
import styled from 'styled-components'
import {
    localize,
    Localize,
    LocalizedLink,
    LanguageSwitcher,
} from '../localization'
import Container from '../containers/container'
import { Header, Text } from '../elements/typography.js'
import { StyledLink } from '../elements/link'
import { isProduction } from 'common/websocket/config'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv.svg'
import YouTube from 'images/svg/youtube.svg'
import Twitter from 'images/svg/twitter.svg'
import Telegram from 'images/svg/telegram.svg'
import Reddit from 'images/svg/reddit.svg'
import Facebook from 'images/svg/social-facebook.svg'
import Warning from 'images/svg/warning.svg'

const FooterContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
        margin: 0;
    }
`

const FooterNavGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    padding: 2rem 0;
    @media ${device.tabletL} {
        padding: 0;
    }
`
const FooterNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
    width: 100%;
    grid-template-areas: 'logo trade company support legal social';
    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 0;
        grid-template-areas:
            'logo .'
            'support company'
            'trade legal'
            'social social';
    }
`
const Department = styled.div`
    grid-area: ${props => props.grid_name};
    @media ${device.tabletL} {
        padding: 1.5rem 0 1.5rem 12%;

        a {
            margin-bottom: 3.5rem;
        }
        a:last-child {
            margin-bottom: 0;
        }

        ${props => {
            if (props.grid_name === 'social') {
                return 'padding: 0;'
            }
            if (props.grid_name === 'company') {
                return 'padding-left: 0;'
            }
            if (props.grid_name === 'legal') {
                return 'padding: 1.5rem 0 3rem 0;'
            }
        }}
    }
`

const FooterSocket = styled.section`
    box-shadow: inset 0 1px 0 0 var(--color-grey-2);
    background-color: var(--color-white);
    padding: 2rem 0;

    h4 {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    @media ${device.tabletL} {
        padding-bottom: 0;
    }
`
const Legal = styled.section`
    background-color: var(--color-grey-1);
    width: 100%;
    padding: 2.4rem 0;

    p {
        margin: 1.2rem 0;
        line-height: 1.8rem;
        color: var(--color-grey-3);
        font-size: 1.2rem;
    }
`
const LegalRow = styled.div`
    display: grid;
    grid-template-columns: (1, 1fr);
    grid-column-gap: 1rem;
    width: 100%;
    grid-template-areas:
        'li'
        'lt';

    * {
        align-self: center;
        justify-self: center;
    }
    span {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 8rem;

        @media ${device.tabletL} {
            grid-column-gap: 0;
        }
    }
    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        grid-row-gap: 2rem;
        grid-template-areas:
            'lt'
            'li';
    }
`
const LegalTextWrapper = styled.div`
    grid-area: lt;

    p:first-child {
        padding-top: 1.2rem;
    }
`
const RiskNote = styled.section`
    background-color: var(--color-black);
    padding: 3.5rem 0;
    color: var(--color-white);
    line-height: 1.2rem;

    h4 {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 1.1rem;
    }

    @media ${device.tabletL} {
        padding: 3rem 0;
    }
`
const FooterStyledLink = styled(StyledLink)`
    display: table;
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
    font-weight: 500;
`
const Social = styled.div`
    font-size: 1.2rem;
    color: var(--color-grey-3);
    padding: 0 2rem;

    svg {
        margin-top: 0.8rem;
        margin-right: 0.8rem;
    }
    @media ${device.tabletL} {
        text-align: center;
        background-color: var(--color-grey-1);
        display: flex;
        flex-direction: column;

        p {
            padding: 3rem 0 0.7rem 0;
        }
        div {
            display: flex;
            justify-content: space-around;
        }
    }

    /* TODO: remove this line after having real social media account */
    display: none !important;
`
const RiskWarningText = styled.p`
    line-height: 1.8rem;
    font-size: 1.2rem;
    text-align: justify;

    @media ${device.tabletL} {
        font-size: 1.5rem;
    }
`

const TextFooter = styled(Text)`
    font-size: 1.2rem;
    text-align: justify;
    @media ${device.tabletL} {
        font-size: 1.5rem;
    }
`
const FooterBoldLink = styled.a`
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--color-gray-3);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`
const FooterExtLink = styled.a`
    display: ${props => props.display || 'table'};
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
    font-weight: 500;
    color: var(--color-red);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
    :visited {
        color: var(--color-red);
        text-decoration: none;
    }
`
const ResponsibleTradingBoldText = styled(LocalizedLink)`
    color: var(--color-white);
    font-weight: bold;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`
const Footer = () => (
    <footer>
        <FooterSocket>
            <FooterContainer>
                <FooterNavGrid>
                    <FooterNav>
                        <Department grid_name="logo">
                            <LocalizedLink to="/" aria-label={localize('Home')}>
                                <Logo />
                            </LocalizedLink>
                        </Department>
                        <Department grid_name="trade">
                            <Header as="h4">{localize('Trade')}</Header>
                            <FooterExtLink
                                href="https://deriv.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={localize('DTrader')}
                            >
                                {localize('DTrader')}
                            </FooterExtLink>
                            <FooterExtLink
                                display="none"
                                href="https://deriv.app/bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={localize('DBot')}
                            >
                                {localize('DBot')}
                            </FooterExtLink>
                            <FooterExtLink
                                display="none"
                                href="https://deriv.app/mt5"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={localize('DMT5')}
                            >
                                {localize('DMT5')}
                            </FooterExtLink>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/keep-safe/"
                                aria-label={localize('Keep safe')}
                                partiallyActive={true}
                            >
                                {localize('Keep safe')}
                            </FooterStyledLink>
                        </Department>
                        <Department grid_name="company">
                            <Header as="h4">{localize('Company')}</Header>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/about/"
                                aria-label={localize('About us')}
                                partiallyActive={true}
                            >
                                {localize('About us')}
                            </FooterStyledLink>
                        </Department>
                        <Department grid_name="support">
                            <Header as="h4">{localize('Support')}</Header>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/help-centre/"
                                aria-label={localize('Help Centre')}
                                partiallyActive={true}
                            >
                                {localize('Help Centre')}
                            </FooterStyledLink>
                        </Department>
                        <Department grid_name="legal">
                            <Header as="h4">{localize('Legal')}</Header>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/regulatory/"
                                aria-label={localize('Regulatory information')}
                                partiallyActive={true}
                            >
                                {localize('Regulatory information')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/terms-and-conditions/"
                                aria-label={localize('Terms and conditions')}
                                partiallyActive={true}
                            >
                                {localize('Terms and conditions')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                hidden
                                activeClassName="active"
                                to="/terms-and-conditions/#security-privacy"
                                aria-label={localize('Security and privacy')}
                                partiallyActive={true}
                            >
                                {localize('Security and privacy')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/responsible-trading/"
                                aria-label={localize('Responsible trading')}
                                partiallyActive={true}
                            >
                                {localize('Responsible trading')}
                            </FooterStyledLink>
                        </Department>
                        {!isProduction() && <LanguageSwitcher />}
                        <Department grid_name="social">
                            <Social>
                                <p>{localize('Follow us on')}</p>
                                <div>
                                    <YouTube />
                                    <Twitter />
                                    <Telegram />
                                    <Reddit />
                                    <Facebook />
                                </div>
                            </Social>
                        </Department>
                    </FooterNav>
                </FooterNavGrid>
            </FooterContainer>
        </FooterSocket>
        <Legal>
            <Container>
                <LegalRow>
                    <LegalTextWrapper>
                        <TextFooter>
                            <Localize
                                translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                                components={[
                                    <FooterBoldLink
                                        key={0}
                                        target="_blank"
                                        href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    />,
                                ]}
                            />
                        </TextFooter>
                        <TextFooter>
                            <Localize
                                translate_text="Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); and Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>licence no. MB/18/0024</2>)."
                                components={[
                                    <FooterBoldLink
                                        key={0}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.vfsc.vu/wp-content/uploads/2015/12/List-of-Licensees-under-Dealers-in-Securities-Licensing-Act-CAP-70-18.11.2016.pdf"
                                    />,
                                    <FooterBoldLink
                                        key={1}
                                        target="_blank"
                                        href="/BVI_license.pdf"
                                    />,
                                    <FooterBoldLink
                                        key={2}
                                        target="_blank"
                                        href="/Labuan-license.pdf"
                                    />,
                                ]}
                            />
                        </TextFooter>
                        <TextFooter>
                            {localize(
                                'This website‘s services are not made available in certain countries including the USA, Canada, Hong Kong, Japan, or to persons under age 18.',
                            )}
                        </TextFooter>
                    </LegalTextWrapper>
                </LegalRow>
            </Container>
        </Legal>
        <RiskNote>
            <Container>
                <div>
                    <h4>
                        <Warning /> {localize('Risk Warning')}
                    </h4>
                    <RiskWarningText>
                        <Localize
                            translate_text='The financial products offered via this website include binary options, contracts for difference ("CFDs") and other complex derivatives and financial products. Trading binary options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Responsible Trading</0>.'
                            components={[
                                <ResponsibleTradingBoldText
                                    key={0}
                                    target="_blank"
                                    to="/responsible-trading/"
                                />,
                            ]}
                        />
                    </RiskWarningText>
                </div>
            </Container>
        </RiskNote>
    </footer>
)

export default Footer
