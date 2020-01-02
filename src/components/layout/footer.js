// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled from 'styled-components'
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

const StyledFooter = styled.section`
    background-color: var(--color-grey-8);
    width: 100%;
    margin: 0 auto;
`
const StyledGrid = styled(CssGrid)`
    margin: 4rem 0;
    grid-template-areas: 'info info info . . items items items items items items items';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas: 'info'
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
const SocialMeida = styled.section`
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
    ${props => props.margin_top ? 'margin-top: 3.9rem;' : ''}

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

        :nth-child(-n+2) {
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
const Row = styled.div`
    margin-top: ${props => props.margin ? props.margin : '0'};
`
const StyledText = styled(Text)`
    text-align: justify;
    color: var(--color-black-3);
`
const BoldLink = styled(StyledLink)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
`
const Footer = () => (
    <StyledFooter>
            <Container>
                <StyledGrid columns='repeat(12, 1fr)' columngap='2.4rem' rowgap='3.9rem'>
                    <InfoSection>
                        <Logo width='14.5rem' />
                        <Text>{localize('Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading.')}</Text>
                        <SocialMeida>
                            <Text>{localize('CONNECT WITH US')}</Text>
                            <div>
                                <Facebook />
                                <Instagram />
                                <Twitter />
                            </div>
                        </SocialMeida>
                    </InfoSection>
                    <Items>
                        <Col width='20%'>
                            <div><Title>{localize('TRADE')}</Title></div>
                            <div><Link to='/dtrader'>{localize('DTrader')}</Link></div>
                            <div><Link to='/dbot'>{localize('DBot')}</Link></div>
                            <div><Link to='/dmt5'>{localize('DMT5')}</Link></div>
                        </Col>
                        <Col width='40%'>
                            <div><Title>{localize('LEGAL')}</Title></div>
                            <div><Link to='/regulatory'>{localize('Regulatory information')}</Link></div>
                            <div><Link to='/terms-and-conditions'>{localize('Terms and conditions')}</Link></div>
                            <div><Link to='/responsible-trading'>{localize('Responsible trading')}</Link></div>
                        </Col>
                        <Col width='25%'>
                            <div><Title>{localize('SUPPORT')}</Title></div>
                            <div><Link to='/help-centre'>{localize('Help centre')}</Link></div>
                            <div><Link to='/payment'>{localize('Payment methods')}</Link></div>
                            <div><Link to='/keep-safe'>{localize('Keep safe')}</Link></div>
                            <div><Link to='/why-choose-us'>{localize('Why choose us')}</Link></div>
                        </Col>
                        <Col margin_top width='20%'>
                            <div><Title>{localize('COMPANY')}</Title></div>
                            <div><Link to='/about-us'>{localize('About us')}</Link></div>
                        </Col>
                        <Col margin_top width='40%'>
                            <div><Title>{localize('PARTNER WITH US')}</Title></div>
                            <div><Link to='/affiliate'>{localize('Affiliate and IB programmes')}</Link></div>
                        </Col>
                        <Col margin_top width='25%'>
                            {!isProduction() && <LanguageSwitcher />}
                        </Col>
                    </Items>
                </StyledGrid>
            </Container>
            <Disclaimer>
                <Container>
                    <Row margin='2.4rem'>
                        <StyledText>
                            <Localize
                                translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd., W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (licence <0>no. IS/70156</0>)."
                                components={[<BoldLink key={0} target="_blank" to="/keep-safe/" />]} />
                        </StyledText>
                        <StyledText>
                            <Localize
                                translate_text="Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St. Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (view <0>licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (licence <0>no. SIBA/L/18/1114</0>); and Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (licence <0>no. MB/18/0024</0>)."
                                components={[<BoldLink key={0} target="_blank" to="/keep-safe/" />]} />
                        </StyledText>
                        <StyledText>
                            <Localize
                                translate_text="This website's services are not made available in certain countries including the USA, Canada, Hong Kong, Japan, or to persons under age 18."
                                components={[<BoldLink key={0} target="_blank" to="/keep-safe/" />]} />
                        </StyledText>
                    </Row>
                </Container>
            </Disclaimer>
    </StyledFooter>
)

export default Footer
