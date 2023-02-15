import React from 'react'
import styled from 'styled-components'
import { LinksWrapper, LinkWrapper, LinksCol, Title, Link } from './common/style'
import InvestInPeople from 'images/svg/layout/invest-in-people-logo.svg'
import { Localize } from 'components/localization'
import { Flex, Desktop } from 'components/containers'
import { deriv_status_page_url, binary_bot_url } from 'common/constants'
import useRegion from 'components/hooks/use-region'

type MainLinksSectionProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
}

const LogoWrapper = styled.div`
    margin-top: 16px;
    height: 28px;

    img {
        height: 100%;
        width: auto;
        object-fit: contain;
    }
`
const StyledTitle = styled(Title)`
    font-family: Ubuntu, sans-serif;
`
const StyledLink = styled(Link)`
    font-family: Ubuntu, sans-serif;
`

const MainLinksSection = ({ is_ppc = false, is_ppc_redirect = false }: MainLinksSectionProps) => {
    const { is_row } = useRegion()
    return (
        <LinksWrapper>
            <Desktop>
                <Flex jc="space-between">
                    <LinksCol>
                        <LinkWrapper>
                            <StyledTitle>{<Localize translate_text="ABOUT US" />}</StyledTitle>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/who-we-are/">
                                {<Localize translate_text="Who we are" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/why-choose-us/">
                                {<Localize translate_text="Why choose us" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/our-principles/">
                                {<Localize translate_text="Principles" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/partners/">
                                {<Localize translate_text="Partnership programmes" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/contact_us/">
                                {<Localize translate_text="Contact us" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/careers/">
                                {<Localize translate_text="Careers" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink
                                to=""
                                type="derivlife"
                                external={true}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Deriv life" />}
                            </StyledLink>
                            <LogoWrapper>
                                <img src={InvestInPeople} />
                            </LogoWrapper>
                        </LinkWrapper>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <StyledTitle>
                                    {<Localize translate_text="TRADE TYPES" />}
                                </StyledTitle>
                            </LinkWrapper>
                            <LinkWrapper>
                                <StyledLink to="/trade-types/cfds/">
                                    {<Localize translate_text="CFDs" />}
                                </StyledLink>
                            </LinkWrapper>
                            {is_row && (
                                <LinkWrapper>
                                    <StyledLink to="/trade-types/options/">
                                        {<Localize translate_text="Digital options" />}
                                    </StyledLink>
                                </LinkWrapper>
                            )}
                            <LinkWrapper>
                                <StyledLink to="/trade-types/multiplier/">
                                    {<Localize translate_text="Multipliers" />}
                                </StyledLink>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <StyledTitle>{<Localize translate_text="MARKETS" />}</StyledTitle>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/markets/forex/">
                                {<Localize translate_text="Forex" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/markets/synthetic/">
                                {<Localize translate_text="Derived" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/markets/stock/">
                                {<Localize translate_text="Stocks & indices" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/markets/cryptocurrencies/">
                                {<Localize translate_text="Cryptocurrencies" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/markets/commodities/">
                                {<Localize translate_text="Commodities" />}
                            </StyledLink>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <StyledTitle>{<Localize translate_text="PLATFORMS" />}</StyledTitle>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {<Localize translate_text="Deriv MT5" />}
                            </StyledLink>
                        </LinkWrapper>
                        {is_row && (
                            <>
                                <LinkWrapper>
                                    <StyledLink to="/derivx/">
                                        {<Localize translate_text="Deriv X" />}
                                    </StyledLink>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <StyledLink to="/deriv-go/">
                                        {<Localize translate_text="Deriv GO" />}
                                    </StyledLink>
                                </LinkWrapper>
                            </>
                        )}
                        <LinkWrapper>
                            <StyledLink to="/dtrader/">
                                {<Localize translate_text="DTrader" />}
                            </StyledLink>
                        </LinkWrapper>
                        {is_row && (
                            <>
                                <LinkWrapper>
                                    <Link
                                        to="trading"
                                        type="smart_trader"
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {<Localize translate_text="SmartTrader" />}
                                    </Link>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <StyledLink to="/dbot/">
                                        {<Localize translate_text="DBot" />}
                                    </StyledLink>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <Link
                                        to={binary_bot_url}
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {<Localize translate_text="Binary Bot" />}
                                    </Link>
                                </LinkWrapper>
                            </>
                        )}
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <StyledTitle>{<Localize translate_text="LEGAL" />}</StyledTitle>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/regulatory/">
                                {<Localize translate_text="Regulatory information" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/terms-and-conditions/#clients">
                                {<Localize translate_text="Terms & conditions" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/responsible/">
                                {<Localize translate_text="Secure & responsible trading" />}
                            </StyledLink>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <StyledTitle>{<Localize translate_text="PARTNER" />}</StyledTitle>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/partners/affiliate-ib/">
                                {<Localize translate_text="Affiliates and IBs" />}
                            </StyledLink>
                        </LinkWrapper>
                        {is_row && (
                            <LinkWrapper>
                                <StyledLink to="/partners/payment-agent/">
                                    {<Localize translate_text="Payment agents" />}
                                </StyledLink>
                            </LinkWrapper>
                        )}
                        <LinkWrapper>
                            <Link
                                to=""
                                type="api"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="API" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/bug-bounty/">
                                {<Localize translate_text="Bug bounty" />}
                            </StyledLink>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="SUPPORT" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/help-centre/">
                                {<Localize translate_text="Help centre" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="community"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Community" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink to="/payment-methods/">
                                {<Localize translate_text="Payment methods" />}
                            </StyledLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to={deriv_status_page_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                external
                            >
                                {<Localize translate_text="Status page" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <StyledLink
                                to=""
                                type="academy"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Academy" />}
                            </StyledLink>
                        </LinkWrapper>
                    </LinksCol>
                </Flex>
            </Desktop>
        </LinksWrapper>
    )
}

export default MainLinksSection
