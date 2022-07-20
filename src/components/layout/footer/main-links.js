import React from 'react'
import PropTypes from 'prop-types'
import { LinksWrapper, LinkWrapper, LinksCol, Title, Link } from './common/style.js'
import { Localize } from 'components/localization'
import { Flex, NonUK, ROW, Desktop } from 'components/containers'
import { deriv_status_page_url, binary_bot_url } from 'common/constants'

const MainLinksSection = ({ is_ppc, is_ppc_redirect }) => {
    return (
        <LinksWrapper>
            <Desktop>
                <Flex jc="space-between">
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="ABOUT US" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/who-we-are/">
                                {<Localize translate_text="Who we are" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/why-choose-us/">
                                {<Localize translate_text="Why choose us" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/our-principles/">
                                {<Localize translate_text="Principles" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/">
                                {<Localize translate_text="Partnership programmes" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/contact_us/">
                                {<Localize translate_text="Contact us" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/careers/">{<Localize translate_text="Careers" />}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="derivlife"
                                external={true}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Deriv life" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <Title>{<Localize translate_text="PRODUCTS" />}</Title>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/trade-types/cfds/">
                                    {<Localize translate_text="CFDs" />}
                                </Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link to="/trade-types/options/">
                                        {<Localize translate_text="Digital options" />}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                            <LinkWrapper>
                                <Link to="/trade-types/multiplier/">
                                    {<Localize translate_text="Multipliers" />}
                                </Link>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="MARKETS" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/forex/">{<Localize translate_text="Forex" />}</Link>
                        </LinkWrapper>
                        <NonUK>
                            {!is_ppc && (
                                <LinkWrapper>
                                    <Link to="/markets/synthetic/">
                                        {<Localize translate_text="Synthetic indices" />}
                                    </Link>
                                </LinkWrapper>
                            )}
                        </NonUK>
                        <LinkWrapper>
                            <Link to="/markets/stock/">
                                {<Localize translate_text="Stocks & indices" />}
                            </Link>
                        </LinkWrapper>
                        <NonUK>
                            <LinkWrapper>
                                <Link to="/markets/cryptocurrencies/">
                                    {<Localize translate_text="Cryptocurrencies" />}
                                </Link>
                            </LinkWrapper>
                        </NonUK>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/markets/basket-indices/">
                                    {<Localize translate_text="Basket indices" />}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/markets/commodities/">
                                {<Localize translate_text="Commodities" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="TRADE" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {<Localize translate_text="Deriv MT5" />}
                            </Link>
                        </LinkWrapper>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/derivx/">{<Localize translate_text="Deriv X" />}</Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/deriv-go/">
                                    {<Localize translate_text="Deriv GO" />}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/dtrader/">{<Localize translate_text="DTrader" />}</Link>
                        </LinkWrapper>
                        <ROW>
                            <LinkWrapper>
                                <Link
                                    to="trading"
                                    type="smart_trader"
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {<Localize translate_text="SmartTrader" />}
                                </Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/dbot/">{<Localize translate_text="DBot" />}</Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link
                                        to={binary_bot_url}
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {<Localize translate_text="Binary Bot" />}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                        </ROW>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="LEGAL" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/regulatory/">
                                {<Localize translate_text="Regulatory information" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/terms-and-conditions/#clients">
                                {<Localize translate_text="Terms & conditions" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/responsible/">
                                {<Localize translate_text="Secure & responsible trading" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="PARTNER" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/affiliate-ib/">
                                {<Localize translate_text="Affiliates and IBs" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/payment-agent/">
                                {<Localize translate_text="Payment agents" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="api"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="API" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/bug-bounty/">
                                {<Localize translate_text="Bug bounty" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="SUPPORT" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/help-centre/">
                                {<Localize translate_text="Help centre" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="community"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Community" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/payment-methods/">
                                {<Localize translate_text="Payment methods" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to={deriv_status_page_url}
                                target="_blank"
                                external="true"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="Status page" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/academy/">{<Localize translate_text="Academy" />}</Link>
                        </LinkWrapper>
                    </LinksCol>
                </Flex>
            </Desktop>
        </LinksWrapper>
    )
}

export default MainLinksSection

MainLinksSection.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}
