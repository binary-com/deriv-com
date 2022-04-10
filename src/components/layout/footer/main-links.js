import React from 'react'
import PropTypes from 'prop-types'
import { LinksWrapper, LinkWrapper, LinksCol, Title, Link } from './common/style.js'
import { localize } from 'components/localization'
import { Flex, NonUK, ROW, Desktop } from 'components/containers'
import { deriv_status_page_url, binary_bot_url } from 'common/constants'

const MainLinksSection = ({ is_ppc, is_ppc_redirect }) => {
    return (
        <LinksWrapper>
            <Desktop>
                <Flex jc="space-between">
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('ABOUT US')}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/who-we-are/">{localize('Who we are')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/why-choose-us/">{localize('Why choose us')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/">{localize('Partnership programmes')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/contact_us/">{localize('Contact us')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/careers/">{localize('Careers')}</Link>
                        </LinkWrapper>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <Title>{localize('PRODUCTS')}</Title>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/trade-types/cfds/">{localize('CFDs')}</Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link to="/trade-types/options/">
                                        {localize('Digital options')}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                            <LinkWrapper>
                                <Link to="/trade-types/multiplier/">{localize('Multipliers')}</Link>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('MARKETS')}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/forex/">{localize('Forex')}</Link>
                        </LinkWrapper>
                        <NonUK>
                            {!is_ppc && (
                                <LinkWrapper>
                                    <Link to="/markets/synthetic/">
                                        {localize('Synthetic indices')}
                                    </Link>
                                </LinkWrapper>
                            )}
                        </NonUK>
                        <LinkWrapper>
                            <Link to="/markets/stock/">{localize('Stocks & indices')}</Link>
                        </LinkWrapper>
                        <NonUK>
                            <LinkWrapper>
                                <Link to="/markets/cryptocurrencies/">
                                    {localize('Cryptocurrencies')}
                                </Link>
                            </LinkWrapper>
                        </NonUK>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/markets/basket-indices/">
                                    {localize('Basket indices')}
                                </Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/markets/commodities/">{localize('Commodities')}</Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('TRADE')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {localize('Deriv MT5')}
                            </Link>
                        </LinkWrapper>
                        <ROW>
                            <LinkWrapper>
                                <Link to="/derivx/">{localize('DerivX')}</Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/deriv-go/">{localize('Deriv GO')}</Link>
                            </LinkWrapper>
                        </ROW>
                        <LinkWrapper>
                            <Link to="/dtrader/">{localize('DTrader')}</Link>
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
                                    {localize('SmartTrader')}
                                </Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/dbot/">{localize('DBot')}</Link>
                            </LinkWrapper>
                            <ROW>
                                <LinkWrapper>
                                    <Link
                                        to={binary_bot_url}
                                        external="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {localize('Binary Bot')}
                                    </Link>
                                </LinkWrapper>
                            </ROW>
                        </ROW>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('LEGAL')}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/regulatory/">{localize('Regulatory information')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/terms-and-conditions/#clients">
                                {localize('Terms & conditions')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/responsible/">
                                {localize('Secure & responsible trading')}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('PARTNER')}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/affiliate-ib/">
                                {localize('Affiliates and IBs')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/payment-agent/">{localize('Payment agents')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="api"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('API')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/bug-bounty/">{localize('Bug bounty')}</Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('SUPPORT')}</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/help-centre/">{localize('Help centre')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="community"
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Community')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/payment-methods/">{localize('Payment methods')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to={deriv_status_page_url}
                                target="_blank"
                                external="true"
                                rel="noopener noreferrer"
                            >
                                {localize('Status page')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/academy/">{localize('Academy')}</Link>
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
