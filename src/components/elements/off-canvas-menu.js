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
import Story from 'components/svgs/story'
import Leadership from 'components/svgs/leadership'
import Partner from 'components/svgs/partner'
import Choose from 'components/svgs/choose'
import Contact from 'components/svgs/contact'
import Career from 'components/svgs/careers'
import Help from 'components/svgs/help-centre'
import Payment from 'components/svgs/payment-methods'
import Regulatory from 'components/svgs/regulatory'
import Terms from 'components/svgs/terms'
import SecureTrading from 'components/svgs/secure-trading'

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
const StyledLink = styled((props) => <LocalizedLink {...props} />)`
    color: var(--color-black-3);
    margin-top: 18px;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;

    & svg {
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
                                icon={DTrader}
                                content={
                                    <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
                                }
                                title={<Localize translate_text="DTrader" />}
                                to="/dtrader"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={DBot}
                                content={
                                    <Localize translate_text="Automated trading at your fingertips. No coding needed." />
                                }
                                title={<Localize translate_text="DBot" />}
                                to="/dbot"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={DMT5}
                                content={
                                    <Localize translate_text="The platform of choice for professionals worldwide." />
                                }
                                title={<Localize translate_text="DMT5" />}
                                to="/dmt5"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                icon={Smarttrader}
                                content={
                                    <Localize translate_text="Trade the world’s markets with our popular user-friendly platform." />
                                }
                                title={<Localize translate_text="SmartTrader" />}
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
                                icon={MarginTrading}
                                content={
                                    <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
                                }
                                title={<Localize translate_text="Margin trading" />}
                                to="/trade-types/margin/"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={Options}
                                content={
                                    <Localize translate_text="Earn fixed payouts by predicting an assets price movement." />
                                }
                                title={<Localize translate_text="Options" />}
                                to="/trade-types/options"
                            />
                        </Flex>
                        <Flex mb="2rem">
                            <NavCard
                                icon={Multipliers}
                                content={
                                    <Localize translate_text="Combine the upside of margin trading with the simplicity of options." />
                                }
                                title={<Localize translate_text="Multipliers" />}
                                to="/trade-types/multipliers"
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
                                icon={() => <Forex dynamic_id="mobile_markets" />}
                                content={localize(
                                    'Trade the world’s largest financial market with popular forex pairs.',
                                )}
                                title={localize('Forex')}
                                to="/markets#forex"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                icon={() => <Commodities dynamic_id="mobile_commodities" />}
                                content={localize(
                                    "Trade natural resources that are central to the world's economy.",
                                )}
                                title={localize('Commodities')}
                                to="/markets#commodities"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                icon={() => <StockIndices dynamic_id="mobile_stock" />}
                                content={localize(
                                    'Predict broader market trends and diversify your risk with stock indices.',
                                )}
                                title={localize('Stock Indices')}
                                to="/markets#stock"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                icon={() => <SyntheticIndices dynamic_id="mobile_synthetic" />}
                                content={localize(
                                    'Enjoy synthetic markets that emulate real-world market movements.',
                                )}
                                title={localize('Synthetic indices')}
                                to="/markets#synthetic"
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
                                <Story dynamic_id="story-mobile" />
                            </div>
                            <span>{localize('Our story')}</span>
                        </StyledLink>
                        <StyledLink to="/about/#leadership" onClick={handleArrowClick}>
                            <div>
                                <Leadership dynamic_id="leadership-mobile" />
                            </div>
                            <span>{localize('Our leadership')}</span>
                        </StyledLink>
                        <StyledLink to="/partners/" onClick={handleArrowClick}>
                            <div>
                                <Partner dynamic_id="partner-mobile" />
                            </div>
                            <span>{localize('Partnership programmes')}</span>
                        </StyledLink>
                        <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                            <div>
                                <Choose dynamic_id="choose-mobile" />
                            </div>
                            <span>{localize('Why choose us?')}</span>
                        </StyledLink>
                        <StyledLink to="/contact-us/" onClick={handleArrowClick}>
                            <div>
                                <Contact dynamic_id="contact-mobile" />
                            </div>
                            <span>{localize('Contact us')}</span>
                        </StyledLink>
                        <StyledLink to="/careers/" onClick={handleArrowClick}>
                            <div>
                                <Career dynamic_id="career-mobile" />
                            </div>
                            <span>{localize('Careers')}</span>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Resources')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            <div>
                                <Help dynamic_id="help-mobile" />
                            </div>
                            <span>{localize('Help centre')}</span>
                        </StyledLink>
                        {/* TODO: add this when blog is ready */}
                        {/* <StyledLink to="/blog/" onClick={handleArrowClick}>
                            {localize('Blog')}
                        </StyledLink> */}
                        <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                            <div>
                                <Payment dynamic_id="payment-mobile" />
                            </div>
                            <span>{localize('Payment methods')}</span>
                        </StyledLink>
                        <StyledLink to={community_url} onClick={handleArrowClick} target="_blank">
                            {localize('Community')}
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Legal')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/regulatory/" onClick={handleArrowClick}>
                            <div>
                                <Regulatory dynamic_id="regulatory-mobile" />
                            </div>
                            <span>{localize('Regulatory information')}</span>
                        </StyledLink>
                        <StyledLink to="/terms-and-conditions/" onClick={handleArrowClick}>
                            <div>
                                <Terms dynamic_id="terms-mobile" />
                            </div>
                            <span>{localize('Terms and conditions')}</span>
                        </StyledLink>
                        <StyledLink to="/responsible-trading/" onClick={handleArrowClick}>
                            <div>
                                <SecureTrading dynamic_id="secure-trading-mobile" />
                            </div>
                            <span>{localize('Secure and responsible trading')}</span>
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

const SingleLink = styled(StyledLink)`
    font-weight: bold;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
`

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
                <SingleLink weight="bold" to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                    {localize('Affiliates and IBs')}
                </SingleLink>
                <SingleLink weight="bold" to="/partners/payment-agent/" onClick={handleArrowClick}>
                    {localize('Payment agents')}
                </SingleLink>
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
