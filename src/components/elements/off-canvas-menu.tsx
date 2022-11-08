import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Flex } from 'components/containers'
import { DerivStore } from 'store'
import { LocalizedLink, Localize } from 'components/localization'
import { Accordion, AccordionItem, NavCard, Header } from 'components/elements'
import { deriv_status_page_url } from 'common/constants'
import AffiliateIb from 'images/svg/menu/affiliate-ib.svg'
import Blog from 'images/svg/custom/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DerivedFX from 'images/svg/custom/derived-fx.svg'
import DerivLife from 'images/svg/menu/deriv-life.svg'
import API from 'images/svg/menu/developers.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import Forex from 'images/svg/custom/forex-nav.svg'
import Help from 'images/svg/menu/help-center.svg'
import CFD from 'images/svg/custom/margin-trading-nav.svg'
import Multipliers from 'images/svg/custom/multipliers-nav.svg'
import Options from 'images/svg/custom/options-nav.svg'
import Partner from 'images/svg/menu/partner.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import PaymentAgent from 'images/svg/menu/payment-agent.svg'
import BugBounty from 'images/svg/menu/bug-bounty.svg'
import Regulatory from 'images/svg/menu/regulatory.svg'
import SecureTrading from 'images/svg/menu/secure-trading.svg'
import Status from 'images/svg/elements/status.svg'
import StockIndices from 'images/svg/custom/stock-indices-nav.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import Story from 'images/svg/menu/story.svg'
import Terms from 'images/svg/menu/terms.svg'
import Trade from 'images/svg/custom/trader-tool-nav.svg'
import Signals from 'images/svg/menu/signals.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { isShowBranding } from 'common/utility'

const OffCanvasMenu = styled.section<OffCanvasMenuWrapperPropps>`
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
    z-index: 4;
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

type OffCanvasMenuWrapperPropps = {
    closeOffCanvasMenu?: () => void
    is_canvas_menu_open?: boolean
    is_ppc?: boolean
    is_ppc_redirect?: boolean
}

export const OffCanvasMenuWrapper = (props: OffCanvasMenuWrapperPropps) => {
    const { is_uk_country } = React.useContext(DerivStore)
    const { is_row } = useCountryRule()
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    useOutsideClick(canvas, props.closeOffCanvasMenu, null, 'mousedown')

    const accordian_array = [
        {
            id: 'trade_types_01',
            title: 'Trade',
            component: (
                <>
                    {!props.is_ppc && (
                        <>
                            <Header color="grey-5" mb="8px" size="14px">
                                {<Localize translate_text="Trade types" />}
                            </Header>
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
                            {is_row && (
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
                </>
            ),
        },
        {
            id: 'market_types_02',
            title: 'Markets',
            component: (
                <>
                    <Flex mb="3.2rem">
                        <NavCard
                            aria_label="Forex"
                            icon={() => <img src={Forex} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="Trade the world’s largest financial market with popular forex pairs." />
                            }
                            title={<Localize translate_text="Forex" />}
                            onClick={handleArrowClick}
                            to="/markets/forex/"
                        />
                    </Flex>
                    <Flex mb="3.2rem">
                        <NavCard
                            aria_label="Derived"
                            icon={() => <img src={DerivedFX} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="Enjoy trading asset prices derived<br/> from real-world or simulated markets." />
                            }
                            title={<Localize translate_text="Derived" />}
                            onClick={handleArrowClick}
                            to="/markets/synthetic/"
                        />
                    </Flex>
                    <Flex mb="3.2rem">
                        <NavCard
                            aria_label="Stocks & indices"
                            icon={() => <img src={StockIndices} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="Predict broader market trends and diversify your risk with stocks & indices." />
                            }
                            title={<Localize translate_text="Stocks & indices" />}
                            onClick={handleArrowClick}
                            to="/markets/stock/"
                        />
                    </Flex>
                    {!is_uk_country && (
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Cryptocurrencies"
                                icon={() => (
                                    <img src={Cryptocurrencies} alt="" width="32" height="32" />
                                )}
                                content={
                                    <Localize translate_text="Trade with leverage on the price movement of popular crypto-fiat pairs." />
                                }
                                title={<Localize translate_text="Cryptocurrencies" />}
                                onClick={handleArrowClick}
                                to="/markets/cryptocurrencies/"
                            />
                        </Flex>
                    )}
                    <Flex>
                        <NavCard
                            aria_label="Commodities"
                            icon={() => <img src={Commodities} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="Trade natural resources that are central to the world's economy." />
                            }
                            title={<Localize translate_text="Commodities" />}
                            onClick={handleArrowClick}
                            to="/markets/commodities/"
                        />
                    </Flex>
                </>
            ),
        },
        {
            id: 'about_us_03',
            title: 'About us',
            component: (
                <>
                    <StyledLink to="/who-we-are/" onClick={handleArrowClick}>
                        <div>
                            <img src={Story} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Who we are" />}</span>
                    </StyledLink>
                    <StyledLink to="/partners/" onClick={handleArrowClick}>
                        <div>
                            <img src={Partner} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Partnership programmes" />}</span>
                    </StyledLink>
                    <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                        <div>
                            <img src={Choose} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Why choose us" />}</span>
                    </StyledLink>
                    <StyledLink to="/contact_us/" onClick={handleArrowClick}>
                        <div>
                            <img src={Contact} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Contact us" />}</span>
                    </StyledLink>
                    <StyledLink to="/careers/" onClick={handleArrowClick}>
                        <div>
                            <img src={Career} alt="" width="24" height="24" />
                        </div>
                        <Span>{<Localize translate_text="Careers" />}</Span>
                    </StyledLink>
                    <StyledLink
                        to=""
                        external={true}
                        type="derivlife"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleArrowClick}
                    >
                        <div>
                            <img src={DerivLife} alt="" width="24" height="24" />
                        </div>
                        <Span>{<Localize translate_text="Deriv life" />}</Span>
                        <SpanSvg>
                            <img src={Diagonal} alt="" width="16" height="16" />
                        </SpanSvg>
                    </StyledLink>
                </>
            ),
        },
        {
            id: 'resources_04',
            title: 'Resources',
            component: (
                <>
                    <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                        <div>
                            <img src={Help} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Help centre" />}</span>
                    </StyledLink>
                    <StyledLink
                        to=""
                        type="community"
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleArrowClick}
                    >
                        <div>
                            <img src={Community} alt="" width="24" height="24" />
                        </div>
                        <Span>{<Localize translate_text="Community" />}</Span>
                        <SpanSvg>
                            <img src={Diagonal} alt="" width="16" height="16" />
                        </SpanSvg>
                    </StyledLink>
                    <StyledLink to="/trader-tools/" onClick={handleArrowClick}>
                        <div>
                            <img src={Trade} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Traders’ tools" />}</span>
                    </StyledLink>
                    <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                        <div>
                            <img src={Payment} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Payment methods" />}</span>
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
                        <span>{<Localize translate_text="DMT5 Signals" />}</span>
                    </StyledLink>
                    <StyledLink
                        to={deriv_status_page_url}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleArrowClick}
                    >
                        <div>
                            <img src={Status} alt="" width="24" height="24" />
                        </div>
                        <Span>{<Localize translate_text="Status page" />}</Span>
                        <SpanSvg>
                            <img src={Diagonal} alt="" width="16" height="16" />
                        </SpanSvg>
                    </StyledLink>
                    <StyledLink to="/academy/" onClick={handleArrowClick}>
                        <div>
                            <img src={Blog} alt="" width="24" height="24" />
                        </div>
                        <Span>{<Localize translate_text="Academy" />}</Span>
                    </StyledLink>
                </>
            ),
        },
        {
            id: 'legal_05',
            title: 'Legal',
            component: (
                <>
                    <StyledLink to="/regulatory/" onClick={handleArrowClick}>
                        <div>
                            <img src={Regulatory} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Regulatory information" />}</span>
                    </StyledLink>
                    <StyledLink to="/terms-and-conditions/#clients" onClick={handleArrowClick}>
                        <div>
                            <img src={Terms} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Terms and conditions" />}</span>
                    </StyledLink>
                    <StyledLink to="/responsible/" onClick={handleArrowClick}>
                        <div>
                            <img src={SecureTrading} alt="" width="24" height="24" />
                        </div>
                        <span>{<Localize translate_text="Secure and responsible trading" />}</span>
                    </StyledLink>
                </>
            ),
        },
        {
            id: 'partner_06',
            title: 'Partner',
            component: (
                <>
                    <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                        <div>
                            <img src={AffiliateIb} alt="" width="32" height="32" />
                        </div>
                        <span>{<Localize translate_text="Affiliates and IBs" />}</span>
                    </StyledLink>
                    {is_row && (
                        <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                            <div>
                                <img src={PaymentAgent} alt="" width="32" height="32" />
                            </div>
                            <span>{<Localize translate_text="Payment agents" />}</span>
                        </StyledLink>
                    )}
                    <StyledLink
                        to=""
                        type="api"
                        target="_blank"
                        external
                        rel="noopener noreferrer"
                        onClick={handleArrowClick}
                    >
                        <div>
                            <img src={API} alt="" width="32" height="32" />
                        </div>
                        <span>{<Localize translate_text="API" />}</span>
                    </StyledLink>
                    <StyledLink to="/bug-bounty/" onClick={handleArrowClick}>
                        <div>
                            <img src={BugBounty} alt="" width="32" height="32" />
                        </div>
                        <span>{<Localize translate_text="Bug bounty" />}</span>
                    </StyledLink>
                </>
            ),
        },
    ].filter((item) => {
        return !isShowBranding() ? item.title !== 'About us' : item
    })

    return (
        <OffCanvasMenu is_canvas_menu_open={props.is_canvas_menu_open} ref={canvas}>
            <OffCanvasMenuContainer>
                <Accordion>
                    {accordian_array.map((item) => {
                        return (
                            <AccordionItem
                                header={<Localize translate_text={item.title} />}
                                header_style={header_style}
                                style={content_style}
                                key={item.id}
                            >
                                {item.component}
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </OffCanvasMenuContainer>
        </OffCanvasMenu>
    )
}

type OffCanvasMenuPartnerProps = {
    closeOffCanvasMenu?: () => void
    is_canvas_menu_open?: boolean
    is_ppc?: boolean
}

export const OffCanvasMenuPartner = (props: OffCanvasMenuPartnerProps) => {
    const canvas = useRef<HTMLDivElement>()
    const { is_row } = useCountryRule()

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
                    <span>{<Localize translate_text="Affiliates and IBs" />}</span>
                </StyledLink>
                {is_row && (
                    <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                        <div>
                            <img src={PaymentAgent} alt="" width="32" height="32" />
                        </div>
                        <span>{<Localize translate_text="Payment agents" />}</span>
                    </StyledLink>
                )}
                <StyledLink
                    to=""
                    type="api"
                    target="_blank"
                    external
                    rel="noopener noreferrer"
                    onClick={handleArrowClick}
                >
                    <div>
                        <img src={API} alt="" width="32" height="32" />
                    </div>
                    <span>{<Localize translate_text="API" />}</span>
                </StyledLink>
                <StyledLink to="/bug-bounty/" onClick={handleArrowClick}>
                    <div>
                        <img src={BugBounty} alt="" width="32" height="32" />
                    </div>
                    <span>{<Localize translate_text="Bug bounty" />}</span>
                </StyledLink>
            </OffCanvasMenuContainer>
        </OffCanvasMenuSecondary>
    )
}

export const useMoveOffCanvasMenu = (initState = false) => {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(initState)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}
