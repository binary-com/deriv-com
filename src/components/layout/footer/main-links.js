import React from 'react'
import PropTypes from 'prop-types'
import { LinksWrapper, LinkWrapper, LinksCol, Title, Link } from './common/style.js'
import { localize } from 'components/localization'
import { Flex, Show, NonEU } from 'components/containers'
import { deriv_status_page_url } from 'common/constants'

const MainLinksSection = ({ is_ppc, is_ppc_redirect }) => {
    return (
        <LinksWrapper>
            <Show.Desktop>
                <Flex jc="space-between">
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('ABOUT')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
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
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('TRADE')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to="/dtrader/">{localize('DTrader')}</Link>
                        </LinkWrapper>
                        <NonEU>
                            <LinkWrapper>
                                <Link to="/landing/deriv-go/">{localize('Deriv GO')}</Link>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/dbot/">{localize('DBot')}</Link>
                            </LinkWrapper>
                        </NonEU>
                        <LinkWrapper>
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {localize('DMT5')}
                            </Link>
                        </LinkWrapper>
                        <NonEU>
                            <LinkWrapper>
                                <Link to="/derivx/">{localize('Deriv X')}</Link>
                            </LinkWrapper>
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
                                <Link
                                    to="https://bot.deriv.com"
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Binary Bot')}
                                </Link>
                            </LinkWrapper>
                        </NonEU>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <Title>{localize('TRADE TYPES')}</Title>
                            </LinkWrapper>
                            <LinkWrapper first_child="true">
                                <Link to="/trade-types/cfds/">{localize('CFDs')}</Link>
                            </LinkWrapper>
                            <NonEU>
                                <LinkWrapper>
                                    <Link to="/trade-types/options/">{localize('Options')}</Link>
                                </LinkWrapper>
                            </NonEU>
                            <LinkWrapper>
                                <Link to="/trade-types/multiplier/">{localize('Multipliers')}</Link>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('MARKETS')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to="/markets/forex/">{localize('Forex')}</Link>
                        </LinkWrapper>
                        {!is_ppc && (
                            <LinkWrapper>
                                <Link to="/markets/synthetic/">
                                    {localize('Synthetic indices')}
                                </Link>
                            </LinkWrapper>
                        )}
                        <LinkWrapper>
                            <Link to="/markets/stock/">{localize('Stocks & indices')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/commodities/">{localize('Commodities')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/cryptocurrencies/">
                                {localize('Cryptocurrencies')}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('APPS')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                {localize('Deriv MT5')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/dtrader/">{localize('DTrader')}</Link>
                        </LinkWrapper>
                        <NonEU>
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
                            <LinkWrapper>
                                <Link
                                    to="https://bot.deriv.com"
                                    external="true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Binary Bot')}
                                </Link>
                            </LinkWrapper>
                        </NonEU>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('LEGAL')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
                            <Link to="/regulatory/">{localize('Regulatory information')}</Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/terms-and-conditions/#clients">
                                {localize('Terms and conditions')}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/responsible/">
                                {localize('Secure and responsible trading')}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('PARTNER')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
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
                                target="_blank"
                                external="true"
                                rel="noopener noreferrer"
                            >
                                {localize('API')}
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>{localize('RESOURCES')}</Title>
                        </LinkWrapper>
                        <LinkWrapper first_child="true">
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
                            <Link to="/trader-tools/">{localize('Traders’ tools')}</Link>
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
            </Show.Desktop>
        </LinksWrapper>
    )
}

export default MainLinksSection

MainLinksSection.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    type: PropTypes.string,
}
