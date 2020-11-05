import React from 'react'
import styled from 'styled-components'
import { ContentTitleWrapper, LinkWrapper, Title, Link, GridSubWrapper, GridLinkWrapper, SubLinkWrapper, LoginWrapper } from './_sitemap-styles'
import { Flex, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
import SitemapTree from 'images/svg/sitemap/sitemap-tree.svg'
import SitemapSubTree from 'images/svg/sitemap/sitemap-sub-tree.svg'
import Login from 'common/login'

const StyledTree = styled(SitemapTree)`
    margin-left: 25px;
`

const GridWrapper = styled.div`
    display:  grid;
    grid-template-columns: 157px 80px 89px 108px 196px 108px 115px;
    grid-gap: 40px;
    justify-content: center;
`

const LinksCol = styled(Flex)`
    flex-direction: column;
    width: 100%;
    min-width: 100px;
    margin-right: 20px;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }
`

export const DesktopSitemap = () => {
    const handleLogin = () => {
        Login.redirectToLogin()
    }
    
    return (
        <Show.Desktop max_width={"laptopM"}>
            <ContentTitleWrapper size="32px" weight="bold">
                <Localize
                    translate_text="Homepage"
                />
            </ContentTitleWrapper>
            <StyledTree />
            <GridWrapper>
                <LinksCol>
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
                </LinksCol>
                <LinksCol>
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
                </LinksCol>
                <LinksCol>
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
                </LinksCol>
                <LinksCol>
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
                </LinksCol>
                <LinksCol>
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
                                <SubLinkWrapper>
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
                </LinksCol>
                <LinksCol>
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
                </LinksCol>
                <LinksCol>
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
                </LinksCol>
            </GridWrapper>
        </Show.Desktop>
    )
}