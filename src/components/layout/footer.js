// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled from 'styled-components'
import { localize, LanguageSwitcher } from '../localization'
import { Container, CssGrid } from '../containers'
import { Text, StyledLink } from '../elements'
import { isProduction } from 'common/websocket/config'
// Icons
import Logo from 'images/svg/deriv-footer.svg'
import Twitter from 'images/svg/twitter.svg'
import Telegram from 'images/svg/telegram.svg'
import Facebook from 'images/svg/social-facebook.svg'

const StyledFooter = styled.section`
    background-color: var(--color-white);
    width: 100%;
    margin: 0 auto;
`
const Wrapper = styled.div`
    background-color: var(--color-grey-8);
    max-width: 1440px;
    padding: 4rem 0;
    margin: 0 auto;
`
const StyledContainer = styled(Container)`
    width: 100%;
`
const StyledGrid = styled(CssGrid)`
    grid-template-areas: 'info info info . . items items items items items items items';
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
const Col = styled.div`
    width: ${props => props.width};
    ${props => props.margin_top ? 'margin-top: 3.9rem;' : ''}

    div {
        margin-top: 0.8rem;
    }
    div:first-child {
        margin: 0;
    }
`
const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
    letter-spacing: 0.2rem;
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
const Link = styled(StyledLink)`
    color: var(--color-black-3);
    margin-top: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.5;
`
const Footer = () => (
    <StyledFooter>
        <Wrapper>
            <StyledContainer>
                <StyledGrid columns='repeat(12, 1fr)' columngap='2.4rem' rowgap='3.9rem'>
                    <InfoSection>
                        <Logo width='14.5rem' />
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
            </StyledContainer>
        </Wrapper>
    </StyledFooter>
)

export default Footer
