import React from 'react'
import { LocalizedLink, localize } from '../localization'
import styled from 'styled-components'
import device from 'themes/device'
import Container from '../containers/container'
import { Header, Text } from '../elements/typography.js'
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
    padding: 3rem 0;

    p {
        margin: 1rem 0;
        line-height: 1.8rem;
        color: var(--color-grey-3);
        font-size: 1.2rem;
    }
`
const LegalRow = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
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
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-align: justify;
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
const StyledLink = styled(props => <LocalizedLink {...props} />)`
    display: table;
    color: var(--color-red);
    text-decoration: none;
    font-size: 1.4rem;
    margin-bottom: 1.8rem;

    &:hover {
        text-decoration: underline;
    }
    @media ${device.tabletL} {
        ${props => {
            if (props.hidden) return 'display: none;'
        }}
    }
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
            padding-top: 3rem;
            padding: 3rem 0 0.7rem 0;
        }
        div {
            display: flex;
            justify-content: space-around;
        }
    }
    // **********************************************
    display: none !important;  // REMOVE THIS LATER
    // **********************************************
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
                            <StyledLink
                                activeClassName="active"
                                to="/keep-safe/"
                                aria-label={localize('Keep Safe')}
                            >
                                {localize('Keep Safe')}
                            </StyledLink>
                        </Department>
                        <Department grid_name="company">
                            <Header as="h4">{localize('Company')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/about/"
                                aria-label={localize('About Us')}
                            >
                                {localize('About Us')}
                            </StyledLink>
                        </Department>
                        <Department grid_name="support">
                            <Header as="h4">{localize('Support')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/help-centre/"
                                aria-label={localize('Help Centre')}
                            >
                                {localize('Help Centre')}
                            </StyledLink>
                        </Department>
                        <Department grid_name="legal">
                            <Header as="h4">{localize('Legal')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/regulatory/"
                                aria-label={localize('Regulatory Information')}
                            >
                                {localize('Regulatory Information')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/terms-and-conditions/"
                                aria-label={localize('Terms and Conditions')}
                            >
                                {localize('Terms and Conditions')}
                            </StyledLink>
                            <StyledLink
                                hidden
                                activeClassName="active"
                                to="terms-and-conditions/#security-privacy"
                                aria-label={localize('Security and Privacy')}
                            >
                                {localize('Security and Privacy')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/responsible-trading/"
                                aria-label={localize('Responsible Trading')}
                            >
                                {localize('Responsible Trading')}
                            </StyledLink>
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
                <LegalRow>
                    <div>
                        <TextFooter>
                            {localize(
                                'The financial products offered by this website is offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines.',
                            )}
                        </TextFooter>
                        <TextFooter>
                            {localize(
                                "This website's services are not made available in certain countries such as the USA, Canada, Hong Kong, Japan, or to persons under age 18.",
                            )}
                        </TextFooter>
                        <TextFooter mobile_only>
                            {localize(
                                'The financial products offered by this website is offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines.',
                            )}
                        </TextFooter>
                        <TextFooter mobile_only>
                            {localize(
                                "This website's services are accessible worldwide except in certain countries such as the USA, Canada, Hong Kong, Japan, or to persons under age 18.",
                            )}
                        </TextFooter>
                    </div>
                    <div>
                        <span>
                            <Vanuatu />
                            <FSC />
                            <Labuan />
                        </span>
                    </div>
                </LegalRow>
            </Container>
        </Legal>
        <RiskNote>
            <Container>
                <div>
                    <h4>
                        <Warning /> {localize('Risk Warning')}
                    </h4>
                    <p>
                        {localize(
                            'The financial products offered via this website include binary options, contracts for difference ("CFD") and other complex derivatives and financial products. Trading binary options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Responsible Trading.',
                        )}
                    </p>
                </div>
            </Container>
        </RiskNote>
    </footer>
)
export default Footer
