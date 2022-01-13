import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Flex } from 'components/containers'
import { LocalizedLink, localize, Localize } from 'components/localization'
import { Accordion, AccordionItem, NavCard, Text, Divider } from 'components/elements'
import { deriv_status_page_url } from 'common/constants'
// SVG
import AffiliateIb from 'images/svg/menu/affiliate-ib.svg'
import Blog from 'images/svg/custom/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DBot from 'images/svg/dbot/dbot-icon.svg'
import BinaryBot from 'images/svg/binarybot-icon.svg'
import API from 'images/svg/menu/developers.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import Forex from 'images/svg/custom/forex-nav.svg'
import Help from 'images/svg/menu/help-center.svg'
import Leadership from 'images/svg/menu/leadership.svg'
import CFD from 'images/svg/custom/margin-trading-nav.svg'
import Multipliers from 'images/svg/custom/multipliers-nav.svg'
import Options from 'images/svg/custom/options-nav.svg'
import Partner from 'images/svg/menu/partner.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import PaymentAgent from 'images/svg/menu/payment-agent.svg'
import Regulatory from 'images/svg/menu/regulatory.svg'
import SecureTrading from 'images/svg/menu/secure-trading.svg'
import Smarttrader from 'images/svg/custom/smarttrader.svg'
import Status from 'images/svg/elements/status.svg'
import StockIndices from 'images/svg/custom/stock-indices-nav.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import Story from 'images/svg/menu/story.svg'
import SyntheticIndices from 'images/svg/custom/synthetic-indices-nav.svg'
import Terms from 'images/svg/menu/terms.svg'
import { DerivStore } from 'store'
import Trade from 'images/svg/custom/trader-tool-nav.svg'
import Signals from 'images/svg/menu/signals.svg'

const OffCanvasMenu = styled.section`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    height: 100vh;
    width: 253px;
    opacity: 1;
    overflow: scroll;
    transition: transform 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    left: -254px;
    ${({ is_canvas_menu_open }) => is_canvas_menu_open && 'transform: translateX(254px)'};
`

const OffCanvasMenuSecondary = styled(OffCanvasMenu)`
    top: 10rem;
`

const Span = styled.span`
    width: 100%;
`

const SpanSvg = styled.span`
    & > img {
        width: 16px;
        height: 16px;
    }
`

const StyledLink = styled((props) => <LocalizedLink {...props} />)`
    color: var(--color-black-3);
    margin-top: 18px;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;

    & > div > img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    &:first-child {
        margin-top: 16px;
    }
`

const SvgWrapper = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`

const OffCanvasMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem 21rem;

    div {
        a:first-child {
            margin-top: 0;
        }
    }
`

const header_style = {
    border: 'none',
    padding: '0',
    boxShadow: 'none',
    flexDirection: 'row',
}

const content_style = {
    marginLeft: '8px',
    paddingBottom: '16px',
    flexDirection: 'column',
    display: 'flex',
}

export const OffCanvasMenuWrapper = (props) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    useOutsideClick(canvas, props.closeOffCanvasMenu, null, 'mousedown')

    return (
        <OffCanvasMenu
            is_canvas_menu_open={props.is_canvas_menu_open}
            ref={canvas}
            is_eu_country={is_eu_country}
        >
            <OffCanvasMenuContainer>
                <Accordion>
                    <AccordionItem
                        header={localize('Trade')}
                        header_style={header_style}
                        style={content_style}
                    >
                        {!props.is_ppc && (
                            <>
                                <Text color="grey-5" mb="8px" size="14px">
                                    {localize('Trade types')}
                                </Text>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="CFDs"
                                        icon={() => <img src={CFD} alt="" width="32" height="32" />}
                                        content={
                                            <Localize translate_text="Trade with leverage and tight spreads for better returns on successful trades." />
                                        }
                                        title={<Localize translate_text="CFDs" />}
                                        onClick={handleArrowClick}
                                        to="/trade-types/cfds/"
                                    />
                                </Flex>
                                {!is_eu_country && (
                                    <Flex mb="2rem">
                                        <NavCard
                                            aria_label="Options"
                                            icon={() => (
                                                <img src={Options} alt="" width="32" height="32" />
                                            )}
                                            content={
                                                <Localize translate_text="Earn fixed payouts by predicting an asset's price movement." />
                                            }
                                            title={<Localize translate_text="Options" />}
                                            onClick={handleArrowClick}
                                            to="/trade-types/options/"
                                        />
                                    </Flex>
                                )}
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="Multipliers"
                                        icon={() => (
                                            <img src={Multipliers} alt="" width="32" height="32" />
                                        )}
                                        content={
                                            <Localize translate_text="Combine the upside of CFDs with the simplicity of options." />
                                        }
                                        title={<Localize translate_text="Multipliers" />}
                                        onClick={handleArrowClick}
                                        to="/trade-types/multiplier/"
                                    />
                                </Flex>
                            </>
                        )}

                        <Divider m="16px 0" width="100%" height="1px" color="grey-8" />

                        <Text color="grey-5" mb="8px" size="14px">
                            {localize('Trading platforms')}
                        </Text>
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="DMT5"
                                icon={() => <img src={DMT5} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Trade on Deriv MT5 (DMT5), the all-in-one FX and CFD trading platform." />
                                }
                                title={<Localize translate_text="DMT5" />}
                                onClick={handleArrowClick}
                                to={props.is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}
                            />
                        </Flex>
                        {!is_eu_country && (
                            <Flex mb="2rem">
                                <NavCard
                                    aria_label="Derivx"
                                    icon={() => <img src={DerivX} alt="" width="32" height="32" />}
                                    content={
                                        <Localize translate_text="Trade FX and CFDs on a customisable, easy-to-use trading platform." />
                                    }
                                    title={<Localize translate_text="Deriv X" />}
                                    onClick={handleArrowClick}
                                    to="/derivx/"
                                />
                            </Flex>
                        )}

                        <Flex mb="2rem">
                            <NavCard
                                aria_label="DTrader"
                                icon={() => <img src={DTrader} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
                                }
                                title={<Localize translate_text="DTrader" />}
                                onClick={handleArrowClick}
                                to="/dtrader/"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="SmartTrader"
                                icon={() => <img src={Smarttrader} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Trade the world’s markets with our popular user-friendly platform." />
                                }
                                title={<Localize translate_text="SmartTrader" />}
                                onClick={handleArrowClick}
                                to="trading"
                                type="smart_trader"
                                external="true"
                                target="_blank"
                                otherLinkProps={{ rel: 'noopener noreferrer' }}
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="DBot"
                                icon={() => <img src={DBot} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Automated trading at your fingertips. No coding needed." />
                                }
                                title={<Localize translate_text="DBot" />}
                                onClick={handleArrowClick}
                                to="/dbot/"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="Binary Bot"
                                icon={() => <img src={BinaryBot} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Our classic &ldquo;drag-and-drop&rdquo; tool for creating trading bots, featuring pop-up trading charts, for advanced users." />
                                }
                                title={<Localize translate_text="Binary Bot" />}
                                onClick={handleArrowClick}
                                to="https://bot.deriv.com/"
                                external="true"
                                target="_blank"
                                otherLinkProps={{ rel: 'noopener noreferrer' }}
                            />
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header="Markets"
                        header_style={header_style}
                        style={content_style}
                    >
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Forex"
                                icon={() => <img src={Forex} alt="" width="32" height="32" />}
                                content={localize(
                                    'Trade the world’s largest financial market with popular forex pairs.',
                                )}
                                title={localize('Forex')}
                                onClick={handleArrowClick}
                                to="/markets/forex/"
                            />
                        </Flex>
                        {!props.is_ppc && (
                            <Flex mb="3.2rem">
                                <NavCard
                                    aria_label="Synthetic indices"
                                    icon={() => (
                                        <img src={SyntheticIndices} alt="" width="32" height="32" />
                                    )}
                                    content={localize(
                                        'Enjoy synthetic markets that emulate real-world market movements.',
                                    )}
                                    title={localize('Synthetic indices')}
                                    onClick={handleArrowClick}
                                    to="/markets/synthetic/"
                                />
                            </Flex>
                        )}
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Stocks & indices"
                                icon={() => (
                                    <img src={StockIndices} alt="" width="32" height="32" />
                                )}
                                content={localize(
                                    'Predict broader market trends and diversify your risk with stocks & indices.',
                                )}
                                title={localize('Stocks & indices')}
                                onClick={handleArrowClick}
                                to="/markets/stock/"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Cryptocurrencies"
                                icon={() => (
                                    <img src={Cryptocurrencies} alt="" width="32" height="32" />
                                )}
                                content={localize(
                                    'Trade with leverage on the price movement of popular crypto-fiat pairs.',
                                )}
                                title={localize('Cryptocurrencies')}
                                onClick={handleArrowClick}
                                to="/markets/cryptocurrencies/"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                aria_label="Commodities"
                                icon={() => <img src={Commodities} alt="" width="32" height="32" />}
                                content={localize(
                                    "Trade natural resources that are central to the world's economy.",
                                )}
                                title={localize('Commodities')}
                                onClick={handleArrowClick}
                                to="/markets/commodities/"
                            />
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('About us')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/story/" onClick={handleArrowClick}>
                            <div>
                                <img src={Story} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Our story')}</span>
                        </StyledLink>
                        <StyledLink to="/leadership/" onClick={handleArrowClick}>
                            <div>
                                <img src={Leadership} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Our leadership')}</span>
                        </StyledLink>
                        <StyledLink to="/partners/" onClick={handleArrowClick}>
                            <div>
                                <img src={Partner} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Partnership programmes')}</span>
                        </StyledLink>
                        <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                            <div>
                                <img src={Choose} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Why choose us?')}</span>
                        </StyledLink>
                        <StyledLink to="/contact_us/" onClick={handleArrowClick}>
                            <div>
                                <img src={Contact} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Contact us')}</span>
                        </StyledLink>
                        <StyledLink to="/careers/" onClick={handleArrowClick}>
                            <div>
                                <img src={Career} alt="" width="24" height="24" />
                            </div>
                            <Span>{localize('Careers')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="" width="16" height="16" />
                            </SpanSvg>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Resources')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            <div>
                                <img src={Help} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Help centre')}</span>
                        </StyledLink>
                        <StyledLink
                            to=""
                            type="community"
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <img src={Community} alt="" width="24" height="24" />
                            </div>
                            <Span>{localize('Community')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="" width="16" height="16" />
                            </SpanSvg>
                        </StyledLink>
                        <StyledLink to="/trader-tools/" onClick={handleArrowClick}>
                            <div>
                                <img src={Trade} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Traders’ tools')}</span>
                        </StyledLink>
                        <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                            <div>
                                <img src={Payment} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Payment methods')}</span>
                        </StyledLink>
                        <StyledLink
                            to="/dmt5-trading-signals/#signal-subscriber/"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <SvgWrapper>
                                    <img src={Signals} alt="" width="24" height="24" />
                                </SvgWrapper>
                            </div>
                            <span>{localize('DMT5 Signals')}</span>
                        </StyledLink>
                        <StyledLink
                            to={deriv_status_page_url}
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <img src={Status} alt="" width="24" height="24" />
                            </div>
                            <Span>{localize('Status page')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="" width="16" height="16" />
                            </SpanSvg>
                        </StyledLink>
                        <StyledLink to="/academy/" onClick={handleArrowClick}>
                            <div>
                                <img src={Blog} alt="" width="24" height="24" />
                            </div>
                            <Span>{localize('Academy')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="" width="16" height="16" />
                            </SpanSvg>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Legal')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/regulatory/" onClick={handleArrowClick}>
                            <div>
                                <img src={Regulatory} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Regulatory information')}</span>
                        </StyledLink>
                        <StyledLink to="/terms-and-conditions/#clients" onClick={handleArrowClick}>
                            <div>
                                <img src={Terms} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Terms and conditions')}</span>
                        </StyledLink>
                        <StyledLink to="/responsible/" onClick={handleArrowClick}>
                            <div>
                                <img src={SecureTrading} alt="" width="24" height="24" />
                            </div>
                            <span>{localize('Secure and responsible trading')}</span>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Partner')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                            <div>
                                <img src={AffiliateIb} alt="" width="32" height="32" />
                            </div>
                            <span>{localize('Affiliates and IBs')}</span>
                        </StyledLink>
                        <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                            <div>
                                <img src={PaymentAgent} alt="" width="32" height="32" />
                            </div>
                            <span>{localize('Payment agents')}</span>
                        </StyledLink>
                        <StyledLink
                            to=""
                            type="api"
                            target="_blank"
                            external="true"
                            rel="noopener noreferrer"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <img src={API} alt="" width="32" height="32" />
                            </div>
                            <span>{localize('API')}</span>
                        </StyledLink>
                    </AccordionItem>
                </Accordion>
            </OffCanvasMenuContainer>
        </OffCanvasMenu>
    )
}

OffCanvasMenuWrapper.propTypes = {
    closeOffCanvasMenu: PropTypes.func,
    is_canvas_menu_open: PropTypes.bool,
}

export const OffCanvasMenuPartner = (props) => {
    const { is_eu_country } = React.useContext(DerivStore)
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    const outerClick = (e) => {
        if (!canvas.current.contains(e.target)) {
            props.closeOffCanvasMenu()
        } else return
    }

    useEffect(() => {
        document.addEventListener('mousedown', outerClick, false)
        return () => {
            document.removeEventListener('mousedown', outerClick, false)
        }
    }, [])

    return (
        <OffCanvasMenuSecondary
            is_canvas_menu_open={props.is_canvas_menu_open}
            ref={canvas}
            is_eu_country={is_eu_country}
        >
            <OffCanvasMenuContainer>
                <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                    <div>
                        <img src={AffiliateIb} alt="affiliate ib" width="32" height="32" />
                    </div>
                    <span>{localize('Affiliates and IBs')}</span>
                </StyledLink>
                <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                    <div>
                        <img src={PaymentAgent} alt="" width="32" height="32" />
                    </div>
                    <span>{localize('Payment agents')}</span>
                </StyledLink>
                <StyledLink
                    to=""
                    type="api"
                    target="_blank"
                    external="true"
                    rel="noopener noreferrer"
                    onClick={handleArrowClick}
                >
                    <div>
                        <img src={API} alt="" width="32" height="32" />
                    </div>
                    <span>{localize('API')}</span>
                </StyledLink>
            </OffCanvasMenuContainer>
        </OffCanvasMenuSecondary>
    )
}

OffCanvasMenuPartner.propTypes = {
    closeOffCanvasMenu: PropTypes.func,
    is_canvas_menu_open: PropTypes.bool,
    is_ppc: PropTypes.bool,
}

OffCanvasMenuWrapper.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
}

export const moveOffCanvasMenu = (initState = false) => {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(initState)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}
