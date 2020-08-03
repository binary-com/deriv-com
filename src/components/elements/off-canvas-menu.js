import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { LocalizedLink, localize, Localize } from 'components/localization'
import { Accordion, AccordionItem, NavCard } from 'components/elements'
import { useOutsideClick } from 'components/hooks/outside-click'
// SVG
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'components/svgs/_market-forex.js'
import Commodities from 'components/svgs/_market-commodities.js'
import StockIndices from 'components/svgs/_market-stock.js'
import SyntheticIndices from 'components/svgs/_market-synthetic.js'
import { community_url } from 'common/utility'

const OffCanvasMenu = styled.section`
    position: fixed;
    background-color: var(--color-white);
    top: 7.2rem;
    height: 100vh;
    width: 253px;
    opacity: 0.98;
    transition: left 0.4s;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    left: ${(props) => (props.is_canvas_menu_open ? '0' : '-254px')};
`

const OffCanvasMenuSecondary = styled(OffCanvasMenu)`
    top: 10rem;
`
const StyledLink = styled((props) => <LocalizedLink {...props} />)`
    color: var(--color-black-3);
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 2.8rem;

    &:first-child {
        margin-top: 2.5rem;
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
    marginLeft: '1.6rem',
    paddingBottom: '1.6rem',
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
                            {localize('Our story')}
                        </StyledLink>
                        <StyledLink to="/about/#leadership" onClick={handleArrowClick}>
                            {localize('Our leadership')}
                        </StyledLink>
                        <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                            {localize('Why choose us?')}
                        </StyledLink>
                        <StyledLink to="/contact-us/" onClick={handleArrowClick}>
                            {localize('Contact us')}
                        </StyledLink>
                        <StyledLink to="/careers/" onClick={handleArrowClick}>
                            {localize('Careers')}
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Resources')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            {localize('Help centre')}
                        </StyledLink>
                        {/* TODO: add this when blog is ready */}
                        {/* <StyledLink to="/blog/" onClick={handleArrowClick}>
                            {localize('Blog')}
                        </StyledLink> */}
                        <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                            {localize('Payment methods')}
                        </StyledLink>
                        <StyledLink to={community_url} onClick={handleArrowClick}>
                            {localize('Community')}
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header={localize('Legal')}
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/regulatory/" onClick={handleArrowClick}>
                            {localize('Regulatory information')}
                        </StyledLink>
                        <StyledLink to="/terms-and-conditions/" onClick={handleArrowClick}>
                            {localize('Terms and conditions')}
                        </StyledLink>
                        <StyledLink to="/responsible-trading/" onClick={handleArrowClick}>
                            {localize('Secure and responsible trading')}
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
