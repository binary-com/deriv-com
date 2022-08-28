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
                            <Title>{<Localize translate_text="_t_ABOUT US_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/who-we-are/">
                                {<Localize translate_text="_t_Who we are_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/why-choose-us/">
                                {<Localize translate_text="_t_Why choose us_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/our-principles/">
                                {<Localize translate_text="_t_Principles_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/">
                                {<Localize translate_text="_t_Partnership programmes_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/contact_us/">
                                {<Localize translate_text="_t_Contact us_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/careers/">{<Localize translate_text="_t_Careers_t_" />}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="derivlife"
                                external={true}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="_t_Deriv life_t_" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <Title>{<Localize translate_text="_t_PRODUCTS_t_" />}</Title>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/trade-types/cfds/">
                                    {<Localize translate_text="_t_CFDs_t_" />}
                                </Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link to="/trade-types/options/">
                                        {<Localize translate_text="_t_Digital options_t_" />}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                            <LinkWrapper>
                                <Link to="/trade-types/multiplier/">
                                    {<Localize translate_text="_t_Multipliers_t_" />}
                                </Link>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="_t_MARKETS_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/forex/">{<Localize translate_text="_t_Forex_t_" />}</Link>
                        </LinkWrapper>
                        <NonUK>
                            {!is_ppc && (
                                <LinkWrapper>
                                    <Link to="/markets/synthetic/">
                                        {<Localize translate_text="_t_Synthetic indices_t_" />}
                                    </Link>
                                </LinkWrapper>
                            )}
                        </NonUK>
                        <LinkWrapper>
                            <Link to="/markets/stock/">
                                {<Localize translate_text="_t_Stocks & indices_t_" />}
                            </Link>
                        </LinkWrapper>
                        <NonUK>
                            <LinkWrapper>
                                <Link to="/markets/cryptocurrencies/">
                                    {<Localize translate_text="_t_Cryptocurrencies_t_" />}
                                </Link>
                            </LinkWrapper>
                        </NonUK>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/markets/basket-indices/">
                                    {<Localize translate_text="_t_Basket indices_t_" />}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/markets/commodities/">
                                {<Localize translate_text="_t_Commodities_t_" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="_t_TRADE_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {<Localize translate_text="_t_Deriv MT5_t_" />}
                            </Link>
                        </LinkWrapper>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/derivx/">{<Localize translate_text="_t_Deriv X_t_" />}</Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/deriv-go/">
                                    {<Localize translate_text="_t_Deriv GO_t_" />}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/dtrader/">{<Localize translate_text="_t_DTrader_t_" />}</Link>
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
                                    {<Localize translate_text="_t_SmartTrader_t_" />}
                                </Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/dbot/">{<Localize translate_text="_t_DBot_t_" />}</Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link
                                        to={binary_bot_url}
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {<Localize translate_text="_t_Binary Bot_t_" />}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                        </ROW>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="_t_LEGAL_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/regulatory/">
                                {<Localize translate_text="_t_Regulatory information_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/terms-and-conditions/#clients">
                                {<Localize translate_text="_t_Terms & conditions_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/responsible/">
                                {<Localize translate_text="_t_Secure & responsible trading_t_" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="_t_PARTNER_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/affiliate-ib/">
                                {<Localize translate_text="_t_Affiliates and IBs_t_" />}
                            </Link>
                        </LinkWrapper>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/partners/payment-agent/">
                                    {<Localize translate_text="_t_Payment agents_t_" />}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="api"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="_t_API_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/bug-bounty/">
                                {<Localize translate_text="_t_Bug bounty_t_" />}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{<Localize translate_text="_t_SUPPORT_t_" />}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/help-centre/">
                                {<Localize translate_text="_t_Help centre_t_" />}
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
                                {<Localize translate_text="_t_Community_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/payment-methods/">
                                {<Localize translate_text="_t_Payment methods_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to={deriv_status_page_url}
                                target="_blank"
                                external="true"
                                rel="noopener noreferrer"
                            >
                                {<Localize translate_text="_t_Status page_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/academy/">{<Localize translate_text="_t_Academy_t_" />}</Link>
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
