// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled, { css } from 'styled-components'
import { Container, CssGrid, Show, Flex } from '../containers'
import { Text, StyledLink, Accordion, AccordionItem } from '../elements'
import Copy from './copyright'
import { LocationContext } from './location-context'
import { localize, Localize } from 'components/localization'
import { smarttrader_url } from 'common/utility'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv-footer.svg'
/* TODO: [social-media] uncomment when social media accounts are ready for Deriv */
// import Twitter from 'images/svg/footer-twitter.svg'
// import Instagram from 'images/svg/footer-instagram.svg'
// import Facebook from 'images/svg/footer-facebook.svg'
import Warning from 'images/svg/warning.svg'

const DerivLogo = styled(Logo)`
    width: 14.5rem;
    @media ${device.tabletL} {
        width: 20.5rem;
    }
`
const StyledFooter = styled.footer`
    background-color: var(--color-grey-8);
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid var(--color-red);
    margin-bottom: ${(props) => (props.has_banner_cookie ? '18.4rem' : '0')};

    ${Container} {
        min-width: 328px;
        @media ${device.mobileM} {
            min-width: auto;
        }
    }
`
const StyledGrid = styled(CssGrid)`
    margin: 4rem 0;
    grid-template-areas: 'info info info . . items items items items items items items';
    column-gap: 2.4rem;
    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas: 'info';
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
        max-width: 28.2rem;
        @media ${device.tabletL} {
            font-size: var(--text-size-sm);
            max-width: unset;
        }
        @media ${device.mobileM} {
            max-width: auto;
        }
    }
`
const Items = styled.div`
    grid-area: items;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 2.4rem;
    row-gap: 4rem;
    grid-template-areas:
        'trade trade markets markets legal legal legal'
        'resource resource about about partner partner partner';
    @media ${device.tabletL} {
        display: none;
    }
`

const Col = styled.div`
    width: ${(props) => props.width};
    grid-area: ${(props) => props.grid_name};
    ${(props) => (props.margin_top ? 'margin-top: 3.9rem;' : '')}

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
        @media ${device.tabletL} {
            border-top: unset;
        }
    }
    @media ${device.tabletL} {
        border-top: 1px solid var(--color-red);
        padding-top: 1.5rem;
    }
`
const StyledContainer = styled(Container)`
    padding: 1.6rem 0;
`
const Row = styled.div`
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
    width: 100%;
    align-items: center;
    display: ${(props) => (props.flex ? 'flex' : 'block')};
`
const StyledText = styled(Text)`
    text-align: justify;
    color: var(--color-black-3);
    @media ${device.tabletL} {
        text-align: left;
        font-size: var(--text-size-sm);
    }
`
const BoldSharedCss = css`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
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
    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
/* TODO: [social-media] uncomment when social media accounts are ready for Deriv */
// const ExternalLink = styled.a`
//     text-decoration: none;
// `

// const SocialWrapper = styled(Flex)`
//     svg {
//         width: 4.2rem;
//         margin-right: 1rem;
//     }
//     ${Text} {
//         margin-top: 0;
//         letter-spacing: 2px;
//         color: var(--color-black-6);
//         margin-bottom: 0.8rem;

//         @media ${device.tabletL} {
//             margin-bottom: 1rem;
//         }
//     }
// `
const SocialMedia = styled(Flex)`
    @media ${device.tabletL} {
        margin-top: 2rem;
        flex-direction: row;
    }
`
const MobileAccordion = styled.section`
    border-top: 1px solid var(--color-red);
    background-color: var(--color-grey-8);

    p {
        letter-spacing: 2px;
    }
`
const Item = styled.div`
    padding: 0 0 3rem 2rem;
    background-color: var(--color-grey-8);

    a {
        font-size: var(--text-size-sm);
    }
`
const mobile_accordion_header = {
    border: 'none',
    padding: '0 2rem',
    backgroundColor: 'var(--color-grey-8)',
    boxShadow: 'none',
}
const Footer = () => {
    const { show_cookie_banner } = React.useContext(LocationContext)

    return (
        <StyledFooter has_banner_cookie={show_cookie_banner}>
            <Container>
                <StyledGrid columns="repeat(12, 1fr)" columngap="2.4rem" rowgap="3.9rem">
                    <InfoSection>
                        <DerivLogo />
                        <Text>
                            {localize(
                                'Deriv is a new trading platform created by the Deriv Group, a multi-award winning pioneer in online trading.',
                            )}
                        </Text>
                        <SocialMedia mt="3.1rem" jc="flex-start" direction="column">
                            {/* TODO: [social-media] uncomment when social media accounts are ready for Deriv */}
                            {/* <SocialWrapper mt="0.8rem" jc="space-between" direction="column">
                            <div>
                                <Text>{localize('CONNECT WITH US')}</Text>
                            </div>
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
                        </SocialWrapper> */}
                        </SocialMedia>
                    </InfoSection>
                    <Items>
                        <Col grid_name="trade">
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
                            <div>
                                <Link
                                    to={smarttrader_url}
                                    is_binary_link
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('SmartTrader')}
                                </Link>
                            </div>
                        </Col>
                        <Col grid_name="markets">
                            <div>
                                <Title>{localize('MARKETS')}</Title>
                            </div>
                            <div>
                                <Link to="/markets#forex">{localize('Forex')}</Link>
                            </div>
                            <div>
                                <Link to="/markets#synthetic">{localize('Synthetic indices')}</Link>
                            </div>
                            <div>
                                <Link to="/markets#stock">{localize('Stock indices')}</Link>
                            </div>
                            <div>
                                <Link to="/markets#commodities">{localize('Commodities')}</Link>
                            </div>
                        </Col>
                        <Col grid_name="legal">
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
                                <Link to="/responsible-trading">
                                    {localize('Secure and responsible trading')}
                                </Link>
                            </div>
                        </Col>
                        <Col grid_name="resource">
                            <div>
                                <Title>{localize('RESOURCES')}</Title>
                            </div>
                            <div>
                                <Link to="/help-centre">{localize('Help Centre')}</Link>
                            </div>
                            <div>
                                <Link to="/payment-methods">{localize('Payment methods')}</Link>
                            </div>
                        </Col>
                        <Col grid_name="about">
                            <div>
                                <Title>{localize('ABOUT US')}</Title>
                            </div>
                            <div>
                                <Link to="/about#story">{localize('Our story')}</Link>
                            </div>
                            <div>
                                <Link to="/about#leadership">{localize('Our leadership')}</Link>
                            </div>
                            <div>
                                <Link to="/partners">{localize('Partnership programmes')}</Link>
                            </div>
                            <div>
                                <Link to="/why-choose-us">{localize('Why choose us?')}</Link>
                            </div>
                            <div>
                                <Link to="/contact-us">{localize('Contact us')}</Link>
                            </div>
                            <div>
                                <Link to="/careers">{localize('Careers')}</Link>
                            </div>
                        </Col>
                        <Col grid_name="partner">
                            <div>
                                <Title>{localize('PARTNER WITH US')}</Title>
                            </div>
                            <div>
                                <Link to="/partners/affiliate-ib/">
                                    {localize('Affiliates and IBs')}
                                </Link>
                            </div>
                            <div>
                                <Link to="/partners/payment-agent">
                                    {localize('Payment agents')}
                                </Link>
                            </div>
                        </Col>
                    </Items>
                </StyledGrid>
            </Container>
            <Show.Mobile>
                <MobileAccordion>
                    <Accordion>
                        <AccordionItem
                            header={localize('TRADE')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/dtrader">{localize('DTrader')}</Link>
                            </Item>
                            <Item>
                                <Link to="/dbot">{localize('DBot')}</Link>
                            </Item>
                            <Item>
                                <Link to="/dmt5">{localize('DMT5')}</Link>
                            </Item>
                            <Item>
                                <Link
                                    to={smarttrader_url}
                                    is_binary_link
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('SmartTrader')}
                                </Link>
                            </Item>
                        </AccordionItem>
                        <AccordionItem
                            header={localize('MARKETS')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/markets#forex">{localize('Forex')}</Link>
                            </Item>
                            <Item>
                                <Link to="/markets#synthetic">{localize('Synthetic indices')}</Link>
                            </Item>
                            <Item>
                                <Link to="/markets#stock">{localize('Stock indices')}</Link>
                            </Item>
                            <Item>
                                <Link to="/markets#commodities">{localize('Commodities')}</Link>
                            </Item>
                        </AccordionItem>
                        <AccordionItem
                            header={localize('LEGAL')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/regulatory">{localize('Regulatory information')}</Link>
                            </Item>
                            <Item>
                                <Link to="/terms-and-conditions">
                                    {localize('Terms and conditions')}
                                </Link>
                            </Item>
                            <Item>
                                <Link to="/responsible-trading">
                                    {localize('Secure and responsible trading')}
                                </Link>
                            </Item>
                        </AccordionItem>
                        <AccordionItem
                            header={localize('RESOURCES')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/help-centre">{localize('Help Centre')}</Link>
                            </Item>
                            <Item>
                                <Link to="/payment-methods">{localize('Payment methods')}</Link>
                            </Item>
                        </AccordionItem>
                        <AccordionItem
                            header={localize('ABOUT US')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/about/#story">{localize('Our story')}</Link>
                            </Item>
                            <Item>
                                <Link to="/about/#leadership">{localize('Our leadership')}</Link>
                            </Item>
                            <Item>
                                <Link to="/why-choose-us">{localize('Why choose us?')}</Link>
                            </Item>
                            <Item>
                                <Link to="/contact-us">{localize('Contact us')}</Link>
                            </Item>
                            <Item>
                                <Link to="/careers">{localize('Careers')}</Link>
                            </Item>
                        </AccordionItem>
                        <AccordionItem
                            header={localize('PARTNER WITH US')}
                            arrow_thin
                            header_style={mobile_accordion_header}
                        >
                            <Item>
                                <Link to="/partners/affiliate-ib/">
                                    {localize('Affiliates and IBs')}
                                </Link>
                            </Item>
                            <Item>
                                <Link to="/partners/payment-agent">
                                    {localize('Payment agents')}
                                </Link>
                            </Item>
                        </AccordionItem>
                    </Accordion>
                </MobileAccordion>
            </Show.Mobile>
            <Disclaimer>
                <StyledContainer direction="column">
                    <Row>
                        <Show.Eu>
                            <StyledText mb="1rem">
                                {localize(
                                    'Products offered on Deriv.com are not available to clients residing in the EU and are accessible on Binary.com.',
                                )}
                            </StyledText>
                        </Show.Eu>
                        <StyledText>
                            <Localize
                                translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd, W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>view licence</0>)."
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
                                translate_text="Outside the EU, financial products are offered by Binary (SVG) LLC, Hinds Building, Kingstown, St Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, P.O. Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>view licence</1>); and Binary (FX) Ltd, Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>view licence</2>)."
                                components={[
                                    <StaticAsset
                                        key={0}
                                        target="_blank"
                                        href="/Vanuatu-Financial-Services-Commission.pdf"
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
                        <StyledText mt="1rem">
                            {localize(
                                "This website's services are not made available in certain countries including the USA, Canada, and Hong Kong, or to persons below 18.",
                            )}
                        </StyledText>
                    </Row>
                    <Row mt="2.4rem" mb="0.8rem" flex>
                        <Warning />
                        <Risk>{localize('Risk warning')}</Risk>
                    </Row>
                    <Row>
                        <StyledText>
                            <Localize
                                translate_text="The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading.</0>"
                                components={[
                                    <BoldLink key={0} target="_blank" to="/responsible-trading/" />,
                                ]}
                            />
                        </StyledText>
                    </Row>
                </StyledContainer>
            </Disclaimer>
            <Copy />
        </StyledFooter>
    )
}

export default Footer
