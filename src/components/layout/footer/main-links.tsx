import React from 'react'
import { LinksWrapper, LinkWrapper, LinksCol, Title, Link } from './common/style'
import { Localize } from 'components/localization'
import { Flex, Desktop } from 'components/containers'
import { deriv_status_page_url, binary_bot_url } from 'common/constants'
import useRegion from 'components/hooks/use-region'

type MainLinksSectionProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
}

const MainLinksSection = ({ is_ppc = false, is_ppc_redirect = false }: MainLinksSectionProps) => {
    const { is_row } = useRegion()
    return (
        <LinksWrapper>
            <Desktop>
                <Flex jc="space-between">
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_ABOUT US_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/who-we-are/">
                                <Localize translate_text="_t_Who we are_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/why-choose-us/">
                                <Localize translate_text="_t_Why choose us_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/our-principles/">
                                <Localize translate_text="_t_Principles_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/">
                                <Localize translate_text="_t_Partnership programmes_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/contact_us/">
                                <Localize translate_text="_t_Contact us_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/careers/">
                                <Localize translate_text="_t_Careers_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="derivlife"
                                external={true}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Localize translate_text="_t_Deriv life_t_" />
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    {!is_ppc && (
                        <LinksCol>
                            <LinkWrapper>
                                <Title>
                                    <Localize translate_text="_t_PRODUCTS_t_" />
                                </Title>
                            </LinkWrapper>
                            <LinkWrapper>
                                <Link to="/trade-types/cfds/">
                                    <Localize translate_text="_t_CFDs_t_" />
                                </Link>
                            </LinkWrapper>
                            {is_row && (
                                <LinkWrapper>
                                    <Link to="/trade-types/options/">
                                        <Localize translate_text="_t_Digital options_t_" />
                                    </Link>
                                </LinkWrapper>
                            )}
                            <LinkWrapper>
                                <Link to="/trade-types/multiplier/">
                                    <Localize translate_text="_t_Multipliers_t_" />
                                </Link>
                            </LinkWrapper>
                        </LinksCol>
                    )}
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_MARKETS_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/forex/">
                                <Localize translate_text="_t_Forex_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/synthetic/">
                                {<Localize translate_text="_t_Derived_t_" />}
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/stock/">
                                <Localize translate_text="_t_Stocks & indices_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/cryptocurrencies/">
                                <Localize translate_text="_t_Cryptocurrencies_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/markets/commodities/">
                                <Localize translate_text="_t_Commodities_t_" />
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_TRADE_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
                                <Localize translate_text="_t_Deriv MT5_t_" />
                            </Link>
                        </LinkWrapper>
                        {is_row && (
                            <>
                                <LinkWrapper>
                                    <Link to="/derivx/">
                                        <Localize translate_text="_t_Deriv X_t_" />
                                    </Link>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <Link to="/deriv-go/">
                                        <Localize translate_text="_t_Deriv GO_t_" />
                                    </Link>
                                </LinkWrapper>
                            </>
                        )}
                        <LinkWrapper>
                            <Link to="/dtrader/">
                                <Localize translate_text="_t_DTrader_t_" />
                            </Link>
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
                                        <Localize translate_text="_t_SmartTrader_t_" />
                                    </Link>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <Link to="/dbot/">
                                        <Localize translate_text="_t_DBot_t_" />
                                    </Link>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <Link
                                        to={binary_bot_url}
                                        external
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Localize translate_text="_t_Binary Bot_t_" />
                                    </Link>
                                </LinkWrapper>
                            </>
                        )}
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_LEGAL_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/regulatory/">
                                <Localize translate_text="_t_Regulatory information_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/terms-and-conditions/#clients">
                                <Localize translate_text="_t_Terms & conditions_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/responsible/">
                                <Localize translate_text="_t_Secure & responsible trading_t_" />
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_PARTNER_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/partners/affiliate-ib/">
                                <Localize translate_text="_t_Affiliates and IBs_t_" />
                            </Link>
                        </LinkWrapper>
                        {is_row && (
                            <LinkWrapper>
                                <Link to="/partners/payment-agent/">
                                    <Localize translate_text="_t_Payment agents_t_" />
                                </Link>
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
                                <Localize translate_text="_t_API_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/bug-bounty/">
                                <Localize translate_text="_t_Bug bounty_t_" />
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                    <LinksCol>
                        <LinkWrapper>
                            <Title>
                                <Localize translate_text="_t_SUPPORT_t_" />
                            </Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/help-centre/">
                                <Localize translate_text="_t_Help centre_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="community"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Localize translate_text="_t_Community_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link to="/payment-methods/">
                                <Localize translate_text="_t_Payment methods_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to={deriv_status_page_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                external
                            >
                                <Localize translate_text="_t_Status page_t_" />
                            </Link>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Link
                                to=""
                                type="academy"
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Localize translate_text="_t_Academy_t_" />
                            </Link>
                        </LinkWrapper>
                    </LinksCol>
                </Flex>
            </Desktop>
        </LinksWrapper>
    )
}

export default MainLinksSection
