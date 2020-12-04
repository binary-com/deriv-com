import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { LocalizedLink, localize, Localize } from 'components/localization'
import { Accordion, AccordionItem, NavCard, Text, Divider } from 'components/elements'
import { useOutsideClick } from 'components/hooks/outside-click'
import { community_url } from 'common/utility'
// SVG
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'images/svg/forex-nav.svg'
import Commodities from 'images/svg/commodities-nav.svg'
import StockIndices from 'images/svg/stock-indices-nav.svg'
import SyntheticIndices from 'images/svg/synthetic-indices-nav.svg'
import MarginTrading from 'images/svg/margin-trading-nav.svg'
import Options from 'images/svg/options-nav.svg'
import Multipliers from 'images/svg/multipliers-nav.svg'
import Story from 'images/svg/menu/story.svg'
import Leadership from 'images/svg/menu/leadership.svg'
import Partner from 'images/svg/menu/partner.svg'
import Choose from 'images/svg/menu/choose.svg'
import Contact from 'images/svg/menu/contact.svg'
import Career from 'images/svg/menu/careers.svg'
import Help from 'images/svg/menu/help-center.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import Regulatory from 'images/svg/menu/regulatory.svg'
import Terms from 'images/svg/menu/terms.svg'
import SecureTrading from 'images/svg/menu/secure-trading.svg'
import Community from 'images/svg/menu/community.svg'
import Diagonal from 'images/svg/pink-right-diagonal.svg'
import AffiliateIb from 'images/svg/menu/affiliate-ib.svg'
import PaymentAgent from 'images/svg/menu/payment-agent.svg'

const OffCanvasMenu = styled.section`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    height: 100vh;
    width: 253px;
    opacity: 1;
    overflow: scroll;
    transition: left 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    left: ${(props) => (props.is_canvas_menu_open ? '0' : '-254px')};
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

const OffCanvasMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 1.6rem;

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
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    useOutsideClick(canvas, props.closeOffCanvasMenu, null, 'mousedown')

    return (
        <OffCanvasMenu is_canvas_menu_open={props.is_canvas_menu_open} ref={canvas}>
            <OffCanvasMenuContainer>
                <Accordion>
                    <AccordionItem
                        header={localize('Trade')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <Text color="grey-5" mb="8px" size="14px">
                            {localize('Trading platforms')}
                        </Text>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => (
                                    <img src={DTrader} alt="DTrader" width="32" height="32" />
                                )}
                                content={
                                    <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
                                }
                                title={<Localize translate_text="DTrader" />}
                                onClick={handleArrowClick}
                                to="/dtrader"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => <img src={DBot} alt="DBot" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Automated trading at your fingertips. No coding needed." />
                                }
                                title={<Localize translate_text="DBot" />}
                                onClick={handleArrowClick}
                                to="/dbot"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => <img src={DMT5} alt="DMT5" width="32" height="32" />}
                                content={
                                    <Localize translate_text="Trade on Deriv MetaTrader 5 (DMT5), the all-in-one FX and CFD trading platform." />
                                }
                                title={<Localize translate_text="DMT5" />}
                                onClick={handleArrowClick}
                                to="/dmt5"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                icon={() => (
                                    <img
                                        src={Smarttrader}
                                        alt="Smarttrader"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={
                                    <Localize translate_text="Trade the world’s markets with our popular user-friendly platform." />
                                }
                                title={<Localize translate_text="SmartTrader" />}
                                onClick={handleArrowClick}
                                to="trading"
                                is_smarttrader_link
                                external="true"
                                target="_blank"
                                otherLinkProps={{ rel: 'noopener noreferrer' }}
                            />
                        </Flex>
                        <Divider m="16px 0" width="100%" height="1px" color="grey-8" />
                        <Text color="grey-5" mb="8px" size="14px">
                            {localize('Trade types')}
                        </Text>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => (
                                    <img
                                        src={MarginTrading}
                                        alt="MarginTrading"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={
                                    <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
                                }
                                title={<Localize translate_text="Margin trading" />}
                                onClick={handleArrowClick}
                                to="/trade-types/margin/"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => (
                                    <img src={Options} alt="Options" width="32" height="32" />
                                )}
                                content={
                                    <Localize translate_text="Earn fixed payouts by predicting an asset's price movement." />
                                }
                                title={<Localize translate_text="Options" />}
                                onClick={handleArrowClick}
                                to="/trade-types/options"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={() => (
                                    <img
                                        src={Multipliers}
                                        alt="Multipliers"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={
                                    <Localize translate_text="Combine the upside of margin trading with the simplicity of options." />
                                }
                                title={<Localize translate_text="Multipliers" />}
                                onClick={handleArrowClick}
                                to="/trade-types/multiplier"
                            />
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Markets')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <Flex mb="3.2rem">
                            <NavCard
                                icon={() => <img src={Forex} alt="Forex" width="32" height="32" />}
                                content={localize(
                                    'Trade the world’s largest financial market with popular forex pairs.',
                                )}
                                title={localize('Forex')}
                                onClick={handleArrowClick}
                                to="/markets#forex"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                icon={() => (
                                    <img
                                        src={SyntheticIndices}
                                        alt="SyntheticIndices"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={localize(
                                    'Enjoy synthetic markets that emulate real-world market movements.',
                                )}
                                title={localize('Synthetic indices')}
                                onClick={handleArrowClick}
                                to="/markets#synthetic"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                icon={() => (
                                    <img
                                        src={StockIndices}
                                        alt="StockIndices"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={localize(
                                    'Predict broader market trends and diversify your risk with stock indices.',
                                )}
                                title={localize('Stock Indices')}
                                onClick={handleArrowClick}
                                to="/markets#stock"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                icon={() => (
                                    <img
                                        src={Commodities}
                                        alt="Commodities"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={localize(
                                    "Trade natural resources that are central to the world's economy.",
                                )}
                                title={localize('Commodities')}
                                onClick={handleArrowClick}
                                to="/markets#commodities"
                            />
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('About us')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/about/#story" onClick={handleArrowClick}>
                            <div>
                                <img src={Story} alt="story" width="24" height="24" />
                            </div>
                            <span>{localize('Our story')}</span>
                        </StyledLink>
                        <StyledLink to="/about/#leadership" onClick={handleArrowClick}>
                            <div>
                                <img src={Leadership} alt="leadership" width="24" height="24" />
                            </div>
                            <span>{localize('Our leadership')}</span>
                        </StyledLink>
                        <StyledLink to="/partners/" onClick={handleArrowClick}>
                            <div>
                                <img src={Partner} alt="partner" width="24" height="24" />
                            </div>
                            <span>{localize('Partnership programmes')}</span>
                        </StyledLink>
                        <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                            <div>
                                <img src={Choose} alt="choose" width="24" height="24" />
                            </div>
                            <span>{localize('Why choose us?')}</span>
                        </StyledLink>
                        <StyledLink to="/contact-us/" onClick={handleArrowClick}>
                            <div>
                                <img src={Contact} alt="contact" width="24" height="24" />
                            </div>
                            <span>{localize('Contact us')}</span>
                        </StyledLink>
                        <StyledLink to="/careers/" onClick={handleArrowClick}>
                            <div>
                                <img src={Career} alt="career" width="24" height="24" />
                            </div>
                            <Span>{localize('Careers')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="diagonal" width="16" height="16" />
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
                                <img src={Help} alt="help" width="24" height="24" />
                            </div>
                            <span>{localize('Help centre')}</span>
                        </StyledLink>
                        {/* TODO: add this when blog is ready */}
                        {/* <StyledLink to="/blog/" onClick={handleArrowClick}>
                            {localize('Blog')}
                        </StyledLink> */}
                        <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                            <div>
                                <img src={Payment} alt="payment" width="24" height="24" />
                            </div>
                            <span>{localize('Payment methods')}</span>
                        </StyledLink>
                        <StyledLink
                            to={community_url}
                            onClick={handleArrowClick}
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <img src={Community} alt="community" width="24" height="24" />
                            </div>
                            <Span>{localize('Community')}</Span>
                            <SpanSvg>
                                <img src={Diagonal} alt="diagonal" width="16" height="16" />
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
                                <img src={Regulatory} alt="regulatory" width="24" height="24" />
                            </div>
                            <span>{localize('Regulatory information')}</span>
                        </StyledLink>
                        <StyledLink to="/terms-and-conditions/" onClick={handleArrowClick}>
                            <div>
                                <img src={Terms} alt="terms" width="24" height="24" />
                            </div>
                            <span>{localize('Terms and conditions')}</span>
                        </StyledLink>
                        <StyledLink to="/responsible-trading/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={SecureTrading}
                                    alt="secure trading"
                                    width="24"
                                    height="24"
                                />
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
                                <img src={AffiliateIb} alt="affiliate ib" width="32" height="32" />
                            </div>
                            <span>{localize('Affiliates and IBs')}</span>
                        </StyledLink>
                        <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={PaymentAgent}
                                    alt="payment agent"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span>{localize('Payment agents')}</span>
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
        <OffCanvasMenuSecondary is_canvas_menu_open={props.is_canvas_menu_open} ref={canvas}>
            <OffCanvasMenuContainer>
                <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                    <div>
                        <img src={AffiliateIb} alt="affiliate ib" width="32" height="32" />
                    </div>
                    <span>{localize('Affiliates and IBs')}</span>
                </StyledLink>
                <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                    <div>
                        <img src={PaymentAgent} alt="payment agent" width="32" height="32" />
                    </div>
                    <span>{localize('Payment agents')}</span>
                </StyledLink>
            </OffCanvasMenuContainer>
        </OffCanvasMenuSecondary>
    )
}

OffCanvasMenuPartner.propTypes = {
    closeOffCanvasMenu: PropTypes.func,
    is_canvas_menu_open: PropTypes.bool,
}
export const moveOffCanvasMenu = (initState = false) => {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(initState)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}
