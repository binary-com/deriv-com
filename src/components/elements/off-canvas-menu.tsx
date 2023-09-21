import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { withLangDirection } from 'themes/function'
import { TString } from 'types/generics'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink, localize } from 'components/localization'
import {
    Accordion,
    AccordionItem,
    Divider,
    ImageWithDireciton,
    NavCard,
    Text,
} from 'components/elements'
import { binary_bot_url, deriv_status_page_url } from 'common/constants'
// SVG
import AffiliateIb from 'images/svg/menu/affiliate-ib.svg'
import Blog from 'images/svg/custom/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DerivedFX from 'images/svg/custom/derived-fx.svg'
import DerivLife from 'images/svg/menu/deriv-life.svg'
import { DbotIcon } from 'images/svg/dbot'
import BinaryBot from 'images/svg/binarybot-icon.svg'
import API from 'images/svg/menu/developers.svg'
import Diagonal from 'images/svg/elements/pink-right-diagonal.svg'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import { DerivEzLogoRed } from 'images/svg/deriv-ez'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import DerivGo from 'images/svg/deriv-go/deriv-go-icon.svg'
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
import Smarttrader from 'images/svg/custom/smarttrader.svg'
import Status from 'images/svg/elements/status.svg'
import StockIndices from 'images/svg/custom/stock-indices-nav.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import Story from 'images/svg/menu/story.svg'
import Terms from 'images/svg/menu/terms.svg'
import Trade from 'images/svg/custom/trader-tool-nav.svg'
import Signals from 'images/svg/menu/signals.svg'
import useRegion from 'components/hooks/use-region'

type OffCanvasMenuWrapperProps = {
    closeOffCanvasMenu?: () => void
    is_canvas_menu_open?: boolean
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    is_rtl: boolean
}

const OffCanvasMenu = styled.section<OffCanvasMenuWrapperProps>`
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
    ${({ is_canvas_menu_open }) =>
        withLangDirection({
            rtl_styles: css`
                transform: ${is_canvas_menu_open ? 'translateX(-254px)' : null};
            `,
            ltr_styles: css`
                transform: ${is_canvas_menu_open ? 'translateX(254px)' : null};
            `,
        })}
    z-index: 4;
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

const derived_text_eu: TString =
    '_t_Enjoy trading asset prices derived from<br/> simulated markets._t_'
const derived_text_row: TString =
    '_t_Enjoy trading asset prices derived from real-world<br/> or simulated markets._t_'

export const OffCanvasMenuWrapper = (props: OffCanvasMenuWrapperProps) => {
    const { is_row } = useRegion()
    const canvas = useRef()

    const handleArrowClick = () => {
        props.closeOffCanvasMenu()
    }

    const is_rtl = useIsRtl()

    useOutsideClick(canvas, props.closeOffCanvasMenu, null, 'mousedown')

    return (
        <OffCanvasMenu is_canvas_menu_open={props.is_canvas_menu_open} is_rtl={is_rtl} ref={canvas}>
            <OffCanvasMenuContainer>
                <Accordion>
                    <AccordionItem
                        header="_t_Trade_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        {!props.is_ppc && (
                            <>
                                <Text color="grey-5" mb="8px" size="14px">
                                    <Localize translate_text="_t_Trade types_t_" />
                                </Text>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="CFDs"
                                        Icon={() => (
                                            <img
                                                src={CFD}
                                                alt={localize('_t_CFDs trade type_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Trade with leverage and tight spreads for better returns on successful trades._t_"
                                        title="_t_CFDs_t_"
                                        onClick={handleArrowClick}
                                        to="/trade-types/cfds/"
                                    />
                                </Flex>
                                {is_row && (
                                    <Flex mb="2rem">
                                        <NavCard
                                            aria_label="Options"
                                            Icon={() => (
                                                <img
                                                    src={Options}
                                                    alt={localize('_t_Options trade type_t_')}
                                                    width="32"
                                                    height="32"
                                                />
                                            )}
                                            content="_t_Earn a range of payouts without risking more than your initial stake._t_"
                                            title="_t_Options_t_"
                                            onClick={handleArrowClick}
                                            to="/trade-types/options/digital-options/up-and-down/"
                                        />
                                    </Flex>
                                )}
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="Multipliers"
                                        Icon={() => (
                                            <img
                                                src={Multipliers}
                                                alt={localize('_t_Multipliers trade type_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Get the upside of CFDs without the downside of losing more than your stake._t_"
                                        title="_t_Multipliers_t_"
                                        onClick={handleArrowClick}
                                        to="/trade-types/multiplier/"
                                    />
                                </Flex>
                            </>
                        )}
                        <Divider m="16px 0" width="100%" height="1px" color="grey-8" />
                        <Text color="grey-5" mb="8px" size="14px">
                            <Localize translate_text="_t_Trading platforms_t_" />
                        </Text>
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="DMT5"
                                Icon={() => (
                                    <img
                                        src={DMT5}
                                        alt={localize('_t_Deriv MT5 trading platform_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Trade on Deriv MT5, the all-in-one CFD trading platform._t_"
                                title="_t_Deriv MT5_t_"
                                onClick={handleArrowClick}
                                to={props.is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}
                            />
                        </Flex>
                        {is_row && (
                            <>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="Derivx"
                                        Icon={() => (
                                            <img
                                                src={DerivX}
                                                alt={localize('_t_Deriv X trading paltform_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_A highly customisable and easy-to-use CFD trading platform._t_"
                                        title="_t_Deriv X_t_"
                                        onClick={handleArrowClick}
                                        to="/derivx/"
                                    />
                                </Flex>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="Derivez"
                                        Icon={() => (
                                            <img
                                                src={DerivEzLogoRed}
                                                alt={localize('_t_Deriv EZ trading paltform_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Trade on global markets from anywhere with our mobile-first CFD trading platform._t_"
                                        title="_t_Deriv EZ_t_"
                                        onClick={handleArrowClick}
                                        to="/deriv-ez/"
                                    />
                                </Flex>
                            </>
                        )}
                        <Flex mb="2rem">
                            <NavCard
                                aria_label="DTrader"
                                Icon={() => (
                                    <img
                                        src={DTrader}
                                        alt={localize('_t_Dtrader trading platform_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_A whole new trading experience on a powerful yet easy to use platform._t_"
                                title="_t_DTrader_t_"
                                onClick={handleArrowClick}
                                to="/dtrader/"
                            />
                        </Flex>
                        {is_row && (
                            <>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="Deriv GO"
                                        Icon={() => (
                                            <img
                                                src={DerivGo}
                                                alt={localize('_t_Deriv GO mobile trading app_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app._t_"
                                        title="_t_Deriv GO_t_"
                                        onClick={handleArrowClick}
                                        to="/deriv-go/"
                                    />
                                </Flex>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="SmartTrader"
                                        Icon={() => (
                                            <img
                                                src={Smarttrader}
                                                alt={localize('_t_SmartTrader trading platform_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Trade the world’s markets with our popular user-friendly platform._t_"
                                        title="_t_SmartTrader_t_"
                                        onClick={handleArrowClick}
                                        to="trading"
                                        type="smart_trader"
                                        external
                                        target="_blank"
                                        otherlinkprops={{ rel: 'noopener noreferrer' }}
                                    />
                                </Flex>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="DBot"
                                        Icon={() => (
                                            <img
                                                src={DbotIcon}
                                                alt={localize('_t_Dbot for auto trading_t_')}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content="_t_Automated trading at your fingertips. No coding needed._t_"
                                        title="_t_DBot_t_"
                                        onClick={handleArrowClick}
                                        to="/dbot/"
                                    />
                                </Flex>
                                <Flex mb="2rem">
                                    <NavCard
                                        aria_label="BinaryBot"
                                        Icon={() => (
                                            <img
                                                src={BinaryBot}
                                                alt={localize(
                                                    '_t_Binary bot for creating trading bot_t_',
                                                )}
                                                width="32"
                                                height="32"
                                            />
                                        )}
                                        content='_t_Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users._t_'
                                        title="_t_Binary Bot_t_"
                                        onClick={handleArrowClick}
                                        to={binary_bot_url}
                                        external
                                        target="_blank"
                                        otherlinkprops={{ rel: 'noopener noreferrer' }}
                                    />
                                </Flex>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Markets_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Forex"
                                Icon={() => (
                                    <img
                                        src={Forex}
                                        alt={localize('_t_Forex_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Trade the world’s largest financial market with popular forex pairs._t_"
                                title="_t_Forex_t_"
                                onClick={handleArrowClick}
                                to="/markets/forex/"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Derived"
                                Icon={() => (
                                    <img
                                        src={DerivedFX}
                                        alt={localize('_t_Synthetic indices_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content={is_row ? derived_text_row : derived_text_eu}
                                title="_t_Derived_t_"
                                onClick={handleArrowClick}
                                to="/markets/synthetic/"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Stocks & indices"
                                Icon={() => (
                                    <img
                                        src={StockIndices}
                                        alt={localize('_t_Stocks & indices_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Predict broader market trends and diversify your risk with stocks & indices._t_"
                                title="_t_Stocks & indices_t_"
                                onClick={handleArrowClick}
                                to="/markets/stock/"
                            />
                        </Flex>
                        <Flex mb="3.2rem">
                            <NavCard
                                aria_label="Cryptocurrencies"
                                Icon={() => (
                                    <img
                                        src={Cryptocurrencies}
                                        alt={localize('_t_Cryptocurrencies_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Trade with leverage on the price movement of popular crypto-fiat pairs._t_"
                                title="_t_Cryptocurrencies_t_"
                                onClick={handleArrowClick}
                                to="/markets/cryptocurrencies/"
                            />
                        </Flex>
                        <Flex>
                            <NavCard
                                aria_label="Commodities"
                                Icon={() => (
                                    <img
                                        src={Commodities}
                                        alt={localize('_t_Commodities_t_')}
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Trade natural resources that are central to the world's economy._t_"
                                title="_t_Commodities_t_"
                                onClick={handleArrowClick}
                                to="/markets/commodities/"
                            />
                        </Flex>
                    </AccordionItem>
                    <AccordionItem
                        header="_t_About us_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/who-we-are/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Story}
                                    alt={localize('_t_who we are_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Who we are_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/partners/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Partner}
                                    alt={localize('_t_partners_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Partnership programmes_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/why-choose-us/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Choose}
                                    alt={localize('_t_why choose us_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Why choose us_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/contact_us/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Contact}
                                    alt={localize('_t_contact us_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Contact us_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/careers/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Career}
                                    alt={localize('_t_careers_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <Span>
                                <Localize translate_text="_t_Careers_t_" />
                            </Span>
                        </StyledLink>
                        <StyledLink
                            to=""
                            external
                            type="derivlife"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <img
                                    src={DerivLife}
                                    alt={localize('_t_Deriv life_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <Span>
                                <Localize translate_text="_t_Deriv life_t_" />
                            </Span>
                            <SpanSvg>
                                <ImageWithDireciton
                                    src={Diagonal}
                                    alt={localize('_t_Diagonal_t_')}
                                    width="16"
                                    height="16"
                                />
                            </SpanSvg>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Resources_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/help-centre/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Help}
                                    alt={localize('_t_help centre_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Help centre_t_" />
                            </span>
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
                                <img
                                    src={Community}
                                    alt={localize('_t_community_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <Span>
                                <Localize translate_text="_t_Community_t_" />
                            </Span>
                            <SpanSvg>
                                <ImageWithDireciton
                                    src={Diagonal}
                                    alt={localize('_t_Diagonal_t_')}
                                    width="16"
                                    height="16"
                                />
                            </SpanSvg>
                        </StyledLink>
                        <StyledLink to="/trader-tools/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Trade}
                                    alt={localize('_t_trader tools_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Traders’ tools_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/payment-methods/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Payment}
                                    alt={localize('_t_payment methods_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Payment methods_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink
                            to="/dmt5-trading-signals/#signal-subscriber/"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <SvgWrapper>
                                    <img
                                        src={Signals}
                                        alt={localize('_t_signal-subscriber_t_')}
                                        width="24"
                                        height="24"
                                    />
                                </SvgWrapper>
                            </div>
                            <span>
                                <Localize translate_text="_t_Deriv MT5 signals_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink
                            to={deriv_status_page_url}
                            external
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleArrowClick}
                        >
                            <div>
                                <img
                                    src={Status}
                                    alt={localize('_t_status_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <Span>
                                <Localize translate_text="_t_Status page_t_" />
                            </Span>
                            <SpanSvg>
                                <ImageWithDireciton
                                    src={Diagonal}
                                    alt={localize('_t_Diagonal_t_')}
                                    width="16"
                                    height="16"
                                />
                            </SpanSvg>
                        </StyledLink>
                        <StyledLink
                            to=""
                            external
                            type="blog"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <img
                                    src={Blog}
                                    alt={localize('_t_blog_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <Span>
                                <Localize translate_text="_t_Blog_t_" />
                            </Span>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Legal_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/regulatory/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Regulatory}
                                    alt={localize('_t_regulatory information_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Regulatory information_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/terms-and-conditions/#clients" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={Terms}
                                    alt={localize('_t_terms and conditions_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Terms and conditions_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/responsible/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={SecureTrading}
                                    alt={localize('_t_secure and responsible trading_t_')}
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Secure and responsible trading_t_" />
                            </span>
                        </StyledLink>
                    </AccordionItem>
                    <AccordionItem
                        header="_t_Partner_t_"
                        header_style={header_style}
                        style={content_style}
                    >
                        <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={AffiliateIb}
                                    alt={localize('_t_affiliates and IBs_t_')}
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_Affiliates and IBs_t_" />
                            </span>
                        </StyledLink>
                        {is_row && (
                            <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                                <div>
                                    <img
                                        src={PaymentAgent}
                                        alt={localize('_t_payment agents_t_')}
                                        width="32"
                                        height="32"
                                    />
                                </div>
                                <span>
                                    <Localize translate_text="_t_Payment agents_t_" />
                                </span>
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
                                <img src={API} alt={localize('_t_API_t_')} width="32" height="32" />
                            </div>
                            <span>
                                <Localize translate_text="_t_API_t_" />
                            </span>
                        </StyledLink>
                        <StyledLink to="/bug-bounty/" onClick={handleArrowClick}>
                            <div>
                                <img
                                    src={BugBounty}
                                    alt={localize('_t_bug bounty_t_')}
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span>
                                <Localize translate_text="_t_bug bounty_t_" />
                            </span>
                        </StyledLink>
                    </AccordionItem>
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
    const { is_row } = useRegion()
    const is_rtl = useIsRtl()

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
            is_rtl={is_rtl}
            is_canvas_menu_open={props.is_canvas_menu_open}
            ref={canvas}
        >
            <OffCanvasMenuContainer>
                <StyledLink to="/partners/affiliate-ib/" onClick={handleArrowClick}>
                    <div>
                        <img
                            src={AffiliateIb}
                            alt={localize('_t_affiliate ib_t_')}
                            width="32"
                            height="32"
                        />
                    </div>
                    <span>
                        <Localize translate_text="_t_Affiliates and IBs_t_" />
                    </span>
                </StyledLink>
                {is_row && (
                    <StyledLink to="/partners/payment-agent/" onClick={handleArrowClick}>
                        <div>
                            <img
                                src={PaymentAgent}
                                alt={localize('_t_payment agents_t_')}
                                width="32"
                                height="32"
                            />
                        </div>
                        <span>
                            <Localize translate_text="_t_Payment agents_t_" />
                        </span>
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
                        <img src={API} alt={localize('_t_API_t_')} width="32" height="32" />
                    </div>
                    <span>
                        <Localize translate_text="_t_API_t_" />
                    </span>
                </StyledLink>
                <StyledLink to="/bug-bounty/" onClick={handleArrowClick}>
                    <div>
                        <img
                            src={BugBounty}
                            alt={localize('_t_bug bounty_t_')}
                            width="32"
                            height="32"
                        />
                    </div>
                    <span>
                        <Localize translate_text="_t_Bug bounty_t_" />
                    </span>
                </StyledLink>
            </OffCanvasMenuContainer>
        </OffCanvasMenuSecondary>
    )
}

export const useMoveOffCanvasMenu = (initState = false): [boolean, () => void, () => void] => {
    const [is_canvas_menu_open, setOffCanvasMenuPosition] = useState(initState)
    const openOffCanvasMenu = () => setOffCanvasMenuPosition(true)
    const closeOffCanvasMenu = () => setOffCanvasMenuPosition(false)

    return [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu]
}
