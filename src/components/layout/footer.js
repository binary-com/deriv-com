// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled, { css } from 'styled-components'
import { Container, CssGrid } from '../containers'
import { Text, StyledLink } from '../elements'
import { localize, Localize, LanguageSwitcher } from 'components/localization'
import { isProduction } from 'common/websocket/config'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv-footer.svg'
import Twitter from 'images/svg/footer-twitter.svg'
import Instagram from 'images/svg/footer-instagram.svg'
import Facebook from 'images/svg/footer-facebook.svg'
import Warning from 'images/svg/warning.svg'
import Copyright from 'images/svg/copyright.svg'

const StyledFooter = styled.footer`
    background-color: var(--color-grey-8);
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid var(--color-red);
`
const StyledGrid = styled(CssGrid)`
    margin: 4rem 0;
    grid-template-areas: 'info info info . . items items items items items items items';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas:
            'info'
            'items';
        grid-row-gap: 4rem;
    }
`
const InfoSection = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    ${Text} {
        margin-top: 2.2rem;
    }
`
const Items = styled.div`
    grid-area: items;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BlackNav = styled.section`
    background-color: var(--color-black);
    width: 100%;

    p {
        font-size: var(--text-size-xs);
        color: var(--color-white);
        display: flex;
        align-items: center;
        line-height: normal;
    }
    svg {
        margin-right: 0.8rem;
    }
`
const SocialMedia = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 6.4rem;

    ${Text} {
        margin-top: 0;
        letter-spacing: 2px;
        color: var(--color-black-6);
    }
    div {
        display: flex;
        width: 100%;
        max-width: 11.2rem;
        justify-content: space-between;

        svg {
            width: 3.2rem;
        }
    }
    @media ${device.tabletL} {
        margin-top: 2rem;
    }
`
const Col = styled.div`
    width: ${props => props.width};
    ${props => (props.margin_top ? 'margin-top: 3.9rem;' : '')}

    div {
        margin-top: 0.8rem;
    }
    div:first-child {
        margin: 0;
    }
    ul {
        max-width: 15.2rem;
        width: 98%;
    }
    @media ${device.tabletS} {
        width: 50%;
        margin-top: 3rem;

        :nth-child(-n + 2) {
            margin-top: 0;
        }
    }
`
const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
    letter-spacing: 0.2rem;
`
const Link = styled(StyledLink)`
    color: var(--color-black-3);
    margin-top: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.5;
`
const Disclaimer = styled.section`
    background-color: var(--color-grey-8);

    ${Container} {
        border-top: 1px solid var(--color-red);
    }
`
const StyledContainer = styled(Container)`
    padding: 1.6rem 0;
`
const Row = styled.div`
    margin-top: ${props => (props.margin ? props.margin : '0')};
    width: 100%;
    align-items: center;
    display: ${props => (props.flex ? 'flex' : 'block')};
`
const StyledText = styled(Text)`
    text-align: justify;
    color: var(--color-black-3);
`
const BoldSharedCss = css`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
`
const BoldLink = styled(StyledLink)`
    ${BoldSharedCss}
`
const Risk = styled(Text)`
    ${BoldSharedCss}
    margin-left: 0.9rem;
`
const StaticAsset = styled.a`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`
const ExternalLink = styled.a`
    text-decoration: none;
`
const Footer = () => (
    <StyledFooter>
        <Container>
            <StyledGrid columns="repeat(12, 1fr)" columngap="2.4rem" rowgap="3.9rem">
                <InfoSection>
                    <Logo width="14.5rem" />
                    <Text>
                        {localize(
                            'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading.',
                        )}
                    </Text>
                    <SocialMedia>
                        <Text>{localize('CONNECT WITH US')}</Text>
                        <div>
                            <ExternalLink
                                href="https://www.facebook.com/derivdotcom/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook />
                            </ExternalLink>
                            <ExternalLink
                                href="https://www.instagram.com/derivdotcom/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram />
                            </ExternalLink>
                            <ExternalLink
                                href="https://twitter.com/derivdotcom"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter />
                            </ExternalLink>
                        </div>
                    </SocialMedia>
                </InfoSection>
                <Items>
                    <Col width="23%">
                        <div>
                            <Title>{localize('TRADE')}</Title>
                        </div>
                        <div>
                            <Link to="/dtrader">{localize('DTrader')}</Link>
                        </div>
                        <div>
                            <Link to="/dbot">{localize('DBot')}</Link>
                        </div>
                        <div>
                            <Link to="/dmt5">{localize('DMT5')}</Link>
                        </div>
                    </Col>
                    <Col width="40%">
                        <div>
                            <Title>{localize('LEGAL')}</Title>
                        </div>
                        <div>
                            <Link to="/regulatory">{localize('Regulatory information')}</Link>
                        </div>
                        <div>
                            <Link to="/terms-and-conditions">
                                {localize('Terms and conditions')}
                            </Link>
                        </div>
                        <div>
                            <Link to="/responsible-trading">{localize('Responsible trading')}</Link>
                        </div>
                    </Col>
                    <Col width="25%">
                        <div>
                            <Title>{localize('SUPPORT')}</Title>
                        </div>
                        <div>
                            <Link to="/help-centre">{localize('Help centre')}</Link>
                        </div>
                        {/* <div><Link to='/payment'>{localize('Payment methods')}</Link></div> */}
                        <div>
                            <Link to="/keep-safe">{localize('Keep safe')}</Link>
                        </div>
                        <div>
                            <Link to="/why-choose-us">{localize('Why choose us')}</Link>
                        </div>
                    </Col>
                    <Col margin_top width="23%">
                        <div>
                            <Title>{localize('COMPANY')}</Title>
                        </div>
                        <div>
                            <Link to="/about">{localize('About us')}</Link>
                        </div>
                        <div>
                            <Link to="/contact-us">{localize('Contact us')}</Link>
                        </div>
                    </Col>
                    {/* <Col margin_top width='40%'>
                        <div><Title>{localize('PARTNER WITH US')}</Title></div>
                        <div><Link to='/affiliate'>{localize('Affiliate and IB programmes')}</Link></div>
                    </Col> */}
                    <Col margin_top width="25%">
                        {!isProduction() && <LanguageSwitcher />}
                    </Col>
                </Items>
            </StyledGrid>
        </Container>
        <Disclaimer>
            <StyledContainer direction="column">
                <Row>
                    <StyledText>
                        <Localize
                            translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (licence <0>no. IS/70156</0>)."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </StyledText>
                    <StyledText>
                        <Localize
                            translate_text="Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (view <0>licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (licence <1>no. SIBA/L/18/1114</1>); and Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (licence <2>no. MB/18/0024</2>)."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/BVL-Certificate-of-Principal-License.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={1}
                                    target="_blank"
                                    href="/BVI_license.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={2}
                                    target="_blank"
                                    href="/Labuan-license.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </StyledText>
                    <StyledText>
                        {localize(
                            "This website's services are not made available in certain countries including the USA, Canada, Hong Kong, Japan, or to persons under age 18.",
                        )}
                    </StyledText>
                </Row>
                <Row margin="2.4rem" flex>
                    <Warning />
                    <Risk>{localize('RISK WARNING')}</Risk>
                </Row>
                <Row>
                    <StyledText>
                        <Localize
                            translate_text='The financial products offered via this website include binary options, contracts for difference ("CFDs") and other complex derivatives and financial products. Trading binary options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Responsible Trading.</0>'
                            components={[
                                <BoldLink key={0} target="_blank" to="/responsible-trading/" />,
                            ]}
                        />
                    </StyledText>
                </Row>
            </StyledContainer>
        </Disclaimer>
        <BlackNav>
            <StyledContainer justify="flex-start">
                <StyledText>
                    <Copyright width="1.6rem" />
                    {new Date().getUTCFullYear()} {localize('Deriv | All rights reserved')}
                </StyledText>
            </StyledContainer>
        </BlackNav>
    </StyledFooter>
)

export default Footer
