import React from 'react'
import styled from 'styled-components'
import { localize } from '../localization'
import Container from '../containers/container'
import { Header, Text } from '../elements/typography.js'
import { StyledLink } from '../elements/link'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv.svg'
import YouTube from 'images/svg/youtube.svg'
import Twitter from 'images/svg/twitter.svg'
import Telegram from 'images/svg/telegram.svg'
import Reddit from 'images/svg/reddit.svg'
import Facebook from 'images/svg/social-facebook.svg'
import Labuan from 'images/svg/footer-labuan.svg'
import FSC from 'images/svg/fsc.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import Warning from 'images/svg/warning.svg'
import Show from 'components/containers/show'

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
    grid-template-rows: 1fr;
    grid-row-gap: 2.4rem;
    width: 100%;

    * {
        align-self: center;
        justify-self: center;
    }
    span {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
    }
`
const RiskNote = styled.section`
    background-color: var(--color-black);
    padding: 1.4rem 0;
    color: var(--color-white);
    line-height: 1.2rem;

    p {
        &:first-child,
        &:last-child {
            margin: 0;
        }
    }
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

    /* TODO: remove this line after having real socal media account */
    display: none !important;
`
const RiskWarningText = styled.p`
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: justify;

    @media ${device.tabletL} {
        font-size: 1.5rem;
    }
`

const TextFooter = styled(Text)`
    ${props => {
        if (!props.mobile_only) return 'display: none;'
    }}
    @media ${device.tabletL} {
        word-spacing: 2px;
    }
`

const Footer = () => (
    <footer>
        <FooterSocket>
            <FooterContainer>
                <FooterNavGrid>
                    <FooterNav>
                        <Department grid_name="logo">
                            <Logo />
                        </Department>
                        <Department grid_name="trade">
                            <Header as="h4">{localize('Trade')}</Header>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/keep-safe/"
                                aria-label={localize('Keep safe')}
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
                            >
                                {localize('Regulatory information')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/terms-and-conditions/"
                                aria-label={localize('Terms and conditions')}
                            >
                                {localize('Terms and conditions')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                hidden
                                activeClassName="active"
                                to="terms-and-conditions/#security-privacy"
                                aria-label={localize('Security and privacy')}
                            >
                                {localize('Security and privacy')}
                            </FooterStyledLink>
                            <FooterStyledLink
                                activeClassName="active"
                                to="/responsible-trading/"
                                aria-label={localize('Responsible trading')}
                            >
                                {localize('Responsible trading')}
                            </FooterStyledLink>
                        </Department>
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
                <Show to="eu">
                    <LegalRow>
                        <div>
                            <span>
                                <Vanuatu />
                                <FSC />
                                <Labuan />
                            </span>
                        </div>
                        <div>
                            <TextFooter mobile_only>
                                {localize(
                                    'In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (licence no. IS/70156).',
                                )}
                            </TextFooter>
                            <TextFooter mobile_only>
                                {localize(
                                    'In the Isle of Man and the UK, Volatility Indices are offered by Binary (IOM) Ltd., First Floor, Millennium House, Victoria Road, Douglas, IM2 4RW, Isle of Man, British Isles; licensed and regulated respectively by (1) the Gambling Supervision Commission in the Isle of Man (current licence issued on 31 August 2017) and by (2) the Gambling Commission in the UK (licence reference no: 39172).',
                                )}
                            </TextFooter>
                            <TextFooter mobile_only>
                                {localize(
                                    "In the rest of the EU, Volatility Indices are offered by Binary (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta; licensed and regulated by (1) the Malta Gaming Authority in Malta (licence no. MGA/B2C/102/2000 issued on 01 August 2018), for UK clients by (2) the UK Gambling Commission (licence reference no: 39495), and for Irish clients by (3) the Revenue Commissioners in Ireland (Remote Bookmaker's Licence no. 1010285 issued on 1 July 2017). View complete Regulatory Information.",
                                )}
                            </TextFooter>
                        </div>
                    </LegalRow>
                </Show>
                <Show to="non-eu">
                    <LegalRow>
                        <div>
                            <span>
                                <Vanuatu />
                                <FSC />
                                <Labuan />
                            </span>
                        </div>
                        <div>
                            <TextFooter mobile_only>
                                {localize(
                                    'In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (licence no. IS/70156).',
                                )}
                            </TextFooter>
                            <TextFooter mobile_only>
                                {localize(
                                    'Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (view licence); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (licence no. SIBA/L/18/1114); and Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (licence no. MB/18/0024).',
                                )}
                            </TextFooter>
                            <TextFooter mobile_only>
                                {localize(
                                    "This website's services are not made available in certain countries including the USA, Canada, Hong Kong, Japan, or to persons under age 18.",
                                )}
                            </TextFooter>
                        </div>
                    </LegalRow>
                </Show>
            </Container>
        </Legal>
        <RiskNote>
            <Container>
                <div>
                    <h4>
                        <Warning /> {localize('Risk Warning')}
                    </h4>
                    <RiskWarningText>
                        {localize(
                            'The financial products offered via this website include binary options, contracts for difference ("CFD") and other complex derivatives and financial products. Trading binary options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Responsible Trading.',
                        )}
                    </RiskWarningText>
                </div>
            </Container>
        </RiskNote>
    </footer>
)

export default Footer
