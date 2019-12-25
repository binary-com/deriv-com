// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled from 'styled-components'
import { localize, Localize, LocalizedLink, LanguageSwitcher } from '../localization'
import { Container, CssGrid } from '../containers'
import { Header, Text, StyledLink } from '../elements'
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

const FooterWrapper = styled.section`
    background-color: var(--color-white);
`
const StyledGrid = styled(CssGrid)`
    grid-template-areas: 'info info info . . items items items items items items items';
`
const InfoSection = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${Text} {
        margin-top: 2.2rem;
        max-width: 22.9rem;
    }
`
const Items = styled.div`
    grid-area: items;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const Col = styled.div`
    width: 100%;
    max-width: 20.4rem;
`
const SocialMeida = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${Text} {
        letter-spacing: 2px;
        color: var(--color-black-6);
    }
`
const Footer = () => (
    <FooterWrapper>
        <Container>
            <StyledGrid columns='repeat(12, 1fr)' columngap='2.4rem'>
                <InfoSection>
                    <Logo />
                    <Text>{localize('Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading.')}</Text>
                    <SocialMeida>
                        <Text>{localize('CONNECT WITH US')}</Text>
                        <div>
                            <Facebook />
                            <Telegram />
                            <Twitter />
                        </div>
                    </SocialMeida>
                </InfoSection>
                <Items>
                    <Col>
                        <div><Text>{localize('TRADE')}</Text></div>
                        <div><StyledLink to='/dtrader'>{localize('DTrader')}</StyledLink></div>
                        <div><StyledLink to='/dbot'>{localize('DBot')}</StyledLink></div>
                        <div><StyledLink to='/dmt5'>{localize('DMT5')}</StyledLink></div>
                    </Col>
                    <Col>
                        <div><Text>{localize('LEGAL')}</Text></div>
                        <div><StyledLink to='/regulatory'>{localize('Regulatory information')}</StyledLink></div>
                        <div><StyledLink to='/terms-and-conditions'>{localize('Terms and conditions')}</StyledLink></div>
                        <div><StyledLink to='/responsible-trading'>{localize('Responsible trading')}</StyledLink></div>
                    </Col>
                    <Col>
                        <div><Text>{localize('SUPPORT')}</Text></div>
                        <div><StyledLink to='/help-centre'>{localize('Help centre')}</StyledLink></div>
                        <div><StyledLink to='/payment'>{localize('Payment methods')}</StyledLink></div>
                        <div><StyledLink to='/keep-safe'>{localize('Keep safe')}</StyledLink></div>
                        <div><StyledLink to='/why-choose-us'>{localize('Why choose us')}</StyledLink></div>
                    </Col>
                    <Col>
                        <div><Text>{localize('COMPANY')}</Text></div>
                        <div><StyledLink to='/about-us'>{localize('About us')}</StyledLink></div>
                    </Col>
                    <Col>
                        <div><Text>{localize('PARTNER WITH US')}</Text></div>
                        <div><StyledLink to='/affiliate'>{localize('Affiliate and IB programmes')}</StyledLink></div>
                    </Col>
                    <Col>
                        {!isProduction() && <LanguageSwitcher />}
                    </Col>
                </Items>
            </StyledGrid>
        </Container>
    </FooterWrapper>
)

export default Footer
