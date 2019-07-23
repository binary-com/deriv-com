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

const FooterNavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 2rem 0;

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
    }
`
const FooterNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    width: 100%;
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
`
const Social = styled.div`
    /* temporary disabled */ 
    display: none;
    font-size: 1.2rem;
    color: var(--color-grey-3);
    padding: 0 2rem;

    svg {
        margin-top: 0.8rem;
        margin-right: 0.8rem;
    }
    @media ${device.tabletL} {
        padding: 0;
    }
`

const Footer = () => (
    <footer>
        <FooterSocket>
            <Container>
                <FooterNavGrid>
                    <FooterNav>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <Header as="h4">
                                {localize('Trade')}
                            </Header>
                            <StyledLink
                                activeClassName="active"
                                to="/keep-safe/"
                                aria-label={localize('Keep Safe')}
                            >
                                {localize('Keep Safe')}
                            </StyledLink>
                        </div>
                        <div>
                            <Header as="h4">
                                {localize('Company')}
                            </Header>
                            <StyledLink
                                activeClassName="active"
                                to="/about"
                                aria-label={localize('About us')}
                            >
                                {localize('About us')}
                            </StyledLink>
                        </div>
                    </FooterNav>
                    <FooterNav>
                        <div>
                            <Header as="h4">
                                {localize('Support')}
                            </Header>
                            <StyledLink
                                activeClassName="active"
                                to="/help-centre"
                                aria-label={localize('Help Centre')}
                            >
                                {localize('Help Centre')}
                            </StyledLink>
                        </div>
                        <div>
                            <Header as="h4">
                                {localize('Legal')}
                            </Header>
                            <StyledLink
                                activeClassName="active"
                                to="/regulatory"
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
                                activeClassName="active"
                                to="/terms-and-conditions/#security-privacy"
                                aria-label={localize('Security and Privacy')}
                            >
                                {localize('Security and Privacy')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/responsible-trading"
                                aria-label={localize('Responsible Trading')}
                            >
                                {localize('Responsible Trading')}
                            </StyledLink>
                        </div>
                        <Social>
                            <p>{localize('Follow us on')}</p>
                            <YouTube />
                            <Twitter />
                            <Telegram />
                            <Reddit />
                            <Facebook />
                        </Social>
                    </FooterNav>
                </FooterNavGrid>
            </Container>
        </FooterSocket>
        <Legal>
            <Container>
                <LegalRow>
                    <div>
                        <Text>{localize('The financial products offered by this website is offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines.')}</Text>
                        <Text>{localize('This website\'s services are not made available in certain countries such as the USA, Canada, Hong Kong, Japan, or to persons under age 18.')}</Text>
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
