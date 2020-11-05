import React from 'react'
import styled from 'styled-components'
import { ContentTitleWrapper, LinkWrapper, Title, Link, GridSubWrapper, GridLinkWrapper, SubLinkWrapper, LoginWrapper } from './_sitemap-styles'
import { Flex, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
import SitemapTree from 'images/svg/sitemap/sitemap-mobile-tree.svg'
import SitemapSubTree from 'images/svg/sitemap/sitemap-sub-tree.svg'
import Login from 'common/login'

const StyledTree = styled(SitemapTree)`
    margin-right: 39px;
    margin-top: 60px;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LinksRow = styled(Flex)`
    flex-direction: column;
    margin-bottom: ${props => props.last_child === "true" ? 'unset' : "32px"};

    div {
        margin-top: 8px;

        :first-child {
            margin-top: 4.2px;            
        }
    }
`

export const  MobileSitemap = () => {
    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <Show.Mobile min_width={"laptopM"}>
            <GridSubWrapper size="74px 80%">
                <StyledTree />
                <Flex direction="column">
                    <ContentTitleWrapper size="32px" weight="bold">
                        <Localize
                            translate_text="Homepage"
                        />
                    </ContentTitleWrapper>
                    <ContentWrapper>
                        <LinksRow>
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
                        </LinksRow>
                        <LinksRow>
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
                        </LinksRow>
                        <LinksRow>
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
                        </LinksRow>
                        <LinksRow>
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
                        </LinksRow>
                        <LinksRow>
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
                        </LinksRow>
                        <LinksRow>
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
                                        <SubLinkWrapper>
                                            <LoginWrapper onClick={handleLogin}>
                                                {localize('Log in')}
                                            </LoginWrapper>
                                        </SubLinkWrapper>
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
                        </LinksRow>
                        <LinksRow last_child="true">
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
                        </LinksRow>
                    </ContentWrapper>
                </Flex>
            </GridSubWrapper>
        </Show.Mobile>
    )
}