import React from 'react'
import { LocalizedLink, localize } from '../localization'
import styled from 'styled-components'
import device from 'themes/device'
import Container from '../containers/container'
import { Header, Text, LinkText } from '../elements/typography.js'
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
import Localize from 'components/localization/localize'

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
                            <Header as="h4">{localize('Trade')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/keep-safe/"
                                aria-label={localize('Keep safe')}
                            >
                                {localize('Keep safe')}
                            </StyledLink>
                        </div>
                        <div>
                            <Header as="h4">{localize('Company')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/about/"
                                aria-label={localize('About us')}
                            >
                                {localize('About us')}
                            </StyledLink>
                        </div>
                    </FooterNav>
                    <FooterNav>
                        <div>
                            <Header as="h4">{localize('Support')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/help-centre/"
                                aria-label={localize('Help Centre')}
                            >
                                {localize('Help Centre')}
                            </StyledLink>
                        </div>
                        <div>
                            <Header as="h4">{localize('Legal')}</Header>
                            <StyledLink
                                activeClassName="active"
                                to="/regulatory/"
                                aria-label={localize('Regulatory information')}
                            >
                                {localize('Regulatory information')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/terms-and-conditions/"
                                aria-label={localize('Terms and conditions')}
                            >
                                {localize('Terms and conditions')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="terms-and-conditions/#security-privacy"
                                aria-label={localize('Security and privacy')}
                            >
                                {localize('Security and privacy')}
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/responsible-trading/"
                                aria-label={localize('Responsible trading')}
                            >
                                {localize('Responsible trading')}
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
                        <Text>
                            <Localize
                                text="In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                                components={[
                                    <LinkText
                                        key={0}
                                        color="red"
                                        size="1.2rem"
                                        href="../WS-Binary-Investments-Europe-Limited.pdf"
                                        target="_blank"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text>
                        <Localize
                                text="Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>licence no. SIBA/L/18/1114</1>); and Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>licence no. MB/18/0024</2>)."
                                components={[
                                    <LinkText
                                        key={0}
                                        color="red"
                                        size="1.2rem"
                                        href="../List-of-Licensees-under-Dealers-in-Securities-Licensing-Act-CAP-70-18.11.2016.pdf"
                                        target="_blank"
                                    />,
                                    <LinkText
                                        key={1}
                                        color="red"
                                        size="1.2rem"
                                        href="../BVI_license.pdf"
                                        target="_blank"
                                    />,
                                    <LinkText
                                        key={2}
                                        color="red"
                                        size="1.2rem"
                                        href="../Labuan-license.pdf"
                                        target="_blank"
                                    />,
                                ]}
                            />
                        </Text>
                        <Text>
                            {localize("This website's services are not made available in certain countries including the USA, Canada, Hong Kong, Japan, or to persons under age 18.")}
                        </Text>
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
