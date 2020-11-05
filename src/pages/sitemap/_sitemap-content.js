import React from 'react'
import styled from 'styled-components'
import { GridSubWrapper } from './_sitemap-styles'
import { Flex } from 'components/containers'
import { StyledLink, Text } from 'components/elements'
import { localize } from 'components/localization'
import Login from 'common/login'
import SitemapSubTree from 'images/svg/sitemap/sitemap-sub-tree.svg'
import device from 'themes/device'

export const LinkWrapper = styled.div`
    margin-top: ${(props) => (props.first_child == 'true' ? '0.8rem' : '1.6rem')};
`

export const Title = styled(Text)`
    color: var(--color-black-3);
    font-size: 16px;
    font-weight: bold;
`

export const Link = styled(StyledLink)`
    color: var(--color-red);
    font-size: 14px;
    line-height: 1.5;
`

export const GridLinkWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
`

export const SubLinkWrapper = styled.div`
    margin-top: ${props => props.first_child === "true" ? "1.6rem" : "11px"};

    @media ${device.laptopM} {
        margin-top: 7.2px !important;
    }
`

export const LoginWrapper = styled.a`
    color: var(--color-red);
    font-size: 14px;
    line-height: 1.5;
    text-decoration: none;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const AboutUs = () => {
    return (
        <>
            <LinkWrapper>
            <Title>{localize('About us')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/about#story">{localize('Our story')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/about#leadership">
                    {localize('Our leadership')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/partners">
                    {localize('Partnership programmes')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/why-choose-us">
                    {localize('Why choose us?')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/contact-us">{localize('Contact us')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/careers">{localize('Careers')}</Link>
            </LinkWrapper>
        </>
    )
}

export const Trade = () => {
    return (
        <>
            <LinkWrapper>
                <Title>{localize('Trade')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/dtrader">{localize('DTrader')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/dbot">{localize('DBot')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/dmt5">{localize('DMT5')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link
                    to="trading"
                    is_smarttrader_link
                    external="true"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {localize('SmartTrader')}
                </Link>
            </LinkWrapper>
        </>
    )
}

export const TradeTypes = () => {
    return (
        <>
            <LinkWrapper>
                <Title>{localize('Trade types')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/trade-types/margin">
                    {localize('Margin')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/trade-types/options">{localize('Options')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/trade-types/multiplier">
                    {localize('Multipliers')}
                </Link>
            </LinkWrapper>
        </>
    )
}

export const Markets = () => {
    return (
        <>
            <LinkWrapper>
                <Title>{localize('Markets')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/markets#forex">{localize('Forex')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/markets#synthetic">
                    {localize('Synthetic indices')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/markets#stock">{localize('Stock indices')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/markets#commodities">
                    {localize('Commodities')}
                </Link>
            </LinkWrapper>
        </>
    )
}

export const Legal = () => {
    return (
        <>
            <LinkWrapper>
                <Title>{localize('Legal')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/regulatory">
                    {localize('Regulatory information')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/terms-and-conditions">
                    {localize('Terms and conditions')}
                </Link>
                <GridSubWrapper>
                    <SitemapSubTree />
                    <GridLinkWrapper>
                        <SubLinkWrapper first_child="true">
                            <Link to="#">
                                {localize('For clients')}
                            </Link>
                        </SubLinkWrapper>
                        <SubLinkWrapper>
                            <Link to="#">
                                {localize('For business partners')}
                            </Link>
                        </SubLinkWrapper>
                    </GridLinkWrapper>
                </GridSubWrapper>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/responsible-trading">
                    {localize('Secure and responsible trading')}
                </Link>
            </LinkWrapper>
        </>
    )
}

export const Partner = () => {
    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <>
            <LinkWrapper>
                <Title>{localize('Partner')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/partners/affiliate-ib/">
                    {localize('Affiliates and IBs')}
                </Link>
                <GridSubWrapper>
                    <SitemapSubTree />
                    <GridLinkWrapper>
                        <LinkWrapper>
                            <LoginWrapper onClick={handleLogin}>
                                {localize('Log in')}
                            </LoginWrapper>
                        </LinkWrapper>
                        <SubLinkWrapper>
                            <Link to="/signup">
                                {localize('Sign up')}
                            </Link>
                        </SubLinkWrapper>
                    </GridLinkWrapper>
                </GridSubWrapper>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/partners/payment-agent">
                    {localize('Payment agents')}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/partners/payment-agent">
                    {localize('Developers')}
                </Link>
            </LinkWrapper>
        </>
    )
}

export const Resources = () => {
    return (
        <>
            <LinkWrapper>
                <Title>{localize('Resources')}</Title>
            </LinkWrapper>
            <LinkWrapper first_child="true">
                <Link to="/help-centre">{localize('Help centre')}</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/payment-methods">
                    {localize('Payment methods')}
                </Link>
            </LinkWrapper>
        </>
    )
}