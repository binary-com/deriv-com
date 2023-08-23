import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, FlexGridContainer, SectionContainer } from 'components/containers'
import { Card, CardLink, Header, LocalizedLinkText, NavCard, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'
import { binary_bot_url } from 'common/constants'
import device from 'themes/device'
// icons
import Blog from 'images/svg/custom/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DerivedFX from 'images/svg/custom/derived-fx.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import { DerivEzLogoRed } from 'images/svg/deriv-ez'
import { DbotIcon } from 'images/svg/dbot'
import DMT5 from 'images/svg/dmt5/dmt5-icon.svg'
import BinaryBot from 'images/svg/binarybot-icon.svg'
import DTrader from 'images/svg/dtrader/dtrader-icon.svg'
import DerivGo from 'images/svg/deriv-go/deriv-go-icon.svg'
import DerivLife from 'images/svg/menu/deriv-life.svg'
import Forex from 'images/svg/custom/forex-nav.svg'
import Help from 'images/svg/menu/help-center.svg'
import CFD from 'images/svg/custom/margin-trading-nav.svg'
import Multipliers from 'images/svg/custom/multipliers-nav.svg'
import Options from 'images/svg/custom/options-nav.svg'
import Partner from 'images/svg/menu/partner.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import RegulatoryInfo from 'images/svg/menu/regulatory.svg'
import Signals from 'images/svg/menu/signals.svg'
import Smarttrader from 'images/svg/custom/smarttrader.svg'
import StockIndices from 'images/svg/custom/stock-indices-nav.svg'
import Story from 'images/svg/menu/story.svg'
import TraderTool from 'images/svg/custom/trader-tool-nav.svg'

type CardProps = {
    is_selected?: boolean
    word_break_cover?: boolean
}

type DMT5CardProps = CardProps & {
    is_ppc_redirect?: boolean
}

type OtherPlatformProps = {
    exclude?: string
    header?: TString
    is_nav?: boolean
    is_ppc_redirect?: boolean
    subHeader?: string
}

type NavPlatformProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    onClick?: () => void
}

type NavMarketProps = {
    is_ppc?: boolean
    onClick?: () => void
}

type NavCompanyProps = {
    onClick?: () => void
}

type NavResourcesProps = {
    onClick?: () => void
}

const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    color: var(--color-grey-5);
    margin-bottom: 0.8rem;
    margin-left: 1.6rem;
`
const EmptySpace = styled.div`
    margin-bottom: 2.9rem;
    margin-left: 1.6rem;
`
const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
    @media ${device.tabletL} {
        padding: 0 7rem;
        margin-bottom: 1rem;
    }
`
const icon72 = css`
    width: 72px;
    height: 72px;
`
const StyledDerivX = styled.img`
    ${icon72}
`
const StyledDbot = styled.img`
    ${icon72}
`
const StyledDmt5 = styled.img`
    ${icon72}
`
const StyledDTrader = styled.img`
    ${icon72}
`
const StyledSmarttrader = styled.img`
    width: 72px;
    height: 72px;
`
const StyledLink = styled(LocalizedLink)<{ ariaLabel?: string }>`
    text-decoration: none;

    @media ${device.tabletL} {
        margin: 1rem 0;
    }
`
const StyledFlexGridContainer = styled(FlexGridContainer)`
    @media ${device.tabletL} {
        width: 100%;

        a {
            width: 100%;
            max-width: 50rem;
        }
    }
`
const NavFlex = styled(Flex)`
    border-right: 1px solid var(--color-grey-8);
`

export const TraderCard = ({ is_selected, word_break_cover }: CardProps) => (
    <StyledLink aria_label="DTrader" to="/dtrader/">
        <Card
            cover_background="var(--color-red)"
            cover_content="_t_Discover DTrader now_t_"
            title="_t_DTrader_t_"
            Icon={() => (
                <StyledDTrader
                    src={DTrader}
                    width="72"
                    height="72"
                    alt={localize('_t_Dtrader trading platform_t_')}
                />
            )}
            content="_t_The platform to start with. It’s powerful yet easy to use._t_"
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const BotCard = ({ is_selected, word_break_cover }: CardProps) => (
    <StyledLink aria_label="DBot" to="/dbot/">
        <Card
            cover_background="var(--color-orange)"
            cover_content="_t_Discover DBot now_t_"
            title="_t_DBot_t_"
            Icon={() => (
                <StyledDbot
                    src={DbotIcon}
                    width="72"
                    height="72"
                    alt={localize('_t_Dbot for auto trading_t_')}
                />
            )}
            content="_t_Automated trading at your fingertips. No coding needed._t_"
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DMT5Card = ({ is_selected, is_ppc_redirect, word_break_cover }: DMT5CardProps) => (
    <StyledLink aria_label="DMT5" to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
        <Card
            cover_background="var(--color-green)"
            cover_content="_t_Discover Deriv MT5 now_t_"
            title="_t_Deriv MT5_t_"
            Icon={() => (
                <StyledDmt5
                    src={DMT5}
                    alt={localize('_t_Deriv MT5 trading platform_t_')}
                    width="72"
                    height="72"
                />
            )}
            content="_t_Trade on the Deriv MT5 platform, the choice of professionals._t_"
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DerivXCard = ({ is_selected, word_break_cover }: CardProps) => (
    <StyledLink ariaLabel="Deriv X" to="/derivx/">
        <Card
            Icon={() => (
                <StyledDerivX
                    src={DerivX}
                    alt={localize('_t_Deriv X trading paltform_t_')}
                    width="72"
                    height="72"
                />
            )}
            content="_t_Trade FX and CFDs on a customisable, easy-to-use trading platform._t_"
            cover_background="var(--color-black)"
            cover_content="_t_Discover Deriv X now_t_"
            title="_t_Deriv X_t_"
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const SmarttraderCard = ({ is_selected, word_break_cover }: CardProps) => (
    <StyledLink
        aria_label="SmartTrader"
        to="trading"
        type="smart_trader"
        external
        target="_blank"
        rel="noopener noreferrer"
    >
        <Card
            cover_background="var(--color-blue-3)"
            cover_content="_t_Discover SmartTrader now_t_"
            title="_t_SmartTrader_t_"
            Icon={() => (
                <StyledSmarttrader
                    src={Smarttrader}
                    alt={localize('_t_SmartTrader trading platform_t_')}
                    height="72"
                    width="72"
                />
            )}
            content="_t_Trade the world’s markets on <0>Binary.com</0>’s classic platform._t_"
            content_component={[<LocalizedLinkText key={0} to="home" external type="binary" />]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const OtherPlatform = ({
    header,
    subHeader,
    exclude,
    is_nav,
    is_ppc_redirect,
}: OtherPlatformProps) => {
    const excludetoLowerCase = exclude.toLowerCase()
    const { is_row, is_eu } = useRegion()

    const getHeaderText = () => (
        <>
            {is_eu && <Localize translate_text="_t_Check out our other platform_t_" />}
            {is_row && <Localize translate_text="_t_Check out our other platforms_t_" />}
        </>
    )

    return (
        <SectionContainer padding="0">
            {is_nav ? null : (
                <HeaderWrapper>
                    <Header as="h3" type="section-title" align="center">
                        {header ? <Localize translate_text={header} /> : getHeaderText()}
                    </Header>
                    {subHeader && (
                        <Header
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="500"
                            max_width="67.6rem"
                            m="0.8rem auto"
                        >
                            <Localize translate_text="_t_Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love._t_" />
                        </Header>
                    )}
                </HeaderWrapper>
            )}
            <StyledFlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
                {excludetoLowerCase !== 'dtrader' && <TraderCard />}
                {is_row && <>{excludetoLowerCase !== 'dbot' && <BotCard />}</>}
                {excludetoLowerCase !== 'dmt5' && <DMT5Card is_ppc_redirect={is_ppc_redirect} />}
                {is_row && <>{excludetoLowerCase !== 'derivx' && <DerivXCard />}</>}
            </StyledFlexGridContainer>
        </SectionContainer>
    )
}

export const NavPlatform = ({ onClick, is_ppc, is_ppc_redirect }: NavPlatformProps) => {
    const { is_row, is_eu } = useRegion()

    const getDtraderText = () => (
        <NavCard
            aria_label="Dtrader"
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
            onClick={onClick}
            to="/dtrader/"
        />
    )

    return (
        <Flex>
            {!is_ppc && (
                <>
                    <NavFlex direction="column" wrap="wrap" jc="flex-start">
                        <StyledText>
                            <Localize translate_text="_t_Trade types_t_" />
                        </StyledText>
                        <NavCard
                            aria_label="CFDs"
                            Icon={() => (
                                <img
                                    src={CFD}
                                    alt={localize('_t_Dtrader trading platform_t_')}
                                    width="32"
                                    height="32"
                                />
                            )}
                            content="_t_Trade with leverage and tight spreads for better returns on successful trades._t_"
                            title="_t_CFDs_t_"
                            onClick={onClick}
                            to="/trade-types/cfds/"
                        />
                        {is_row && (
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
                                onClick={onClick}
                                to="/trade-types/options/digital-options/up-and-down/"
                            />
                        )}
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
                            onClick={onClick}
                            to="/trade-types/multiplier/"
                        />
                    </NavFlex>
                </>
            )}
            <Flex direction="column" wrap="wrap" jc="flex-start">
                <StyledText>
                    <Localize translate_text="_t_Trading platforms_t_" />
                </StyledText>
                <NavCard
                    aria_label="Deriv MT5"
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
                    onClick={onClick}
                    to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}
                />
                {is_row && (
                    <>
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
                            onClick={onClick}
                            to="/derivx/"
                        />
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
                            onClick={onClick}
                            to="/deriv-ez/"
                        />
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
                            type="smart_trader"
                            external
                            target="_blank"
                            onClick={onClick}
                            otherlinkprops={{ rel: 'noopener noreferrer' }}
                        />
                    </>
                )}
                {is_eu && <>{getDtraderText()}</>}
            </Flex>
            {is_row && (
                <>
                    <Flex direction="column" wrap="wrap" jc="flex-start">
                        <EmptySpace />
                        {getDtraderText()}
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
                            onClick={onClick}
                            to="/deriv-go/"
                        />
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
                            onClick={onClick}
                            to="/dbot/"
                        />
                        <NavCard
                            aria_label="Binary Bot"
                            Icon={() => (
                                <img
                                    src={BinaryBot}
                                    alt={localize('_t_Binary bot for creating trading bot_t_')}
                                    width="32"
                                    height="32"
                                />
                            )}
                            content='_t_Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users._t_'
                            title="_t_Binary Bot_t_"
                            to={binary_bot_url}
                            external
                            target="_blank"
                            onClick={onClick}
                            otherlinkprops={{ rel: 'noopener noreferrer' }}
                        />
                    </Flex>
                </>
            )}
        </Flex>
    )
}

const derived_text_eu: TString = '_t_Enjoy trading asset prices derived from simulated markets._t_'
const derived_text_row: TString =
    '_t_Enjoy trading asset prices derived from real-world or simulated markets._t_'

export const NavMarket = ({ onClick }: NavMarketProps) => {
    const { is_eu } = useRegion()
    return (
        <Flex direction="column" wrap="wrap" jc="flex-start">
            <NavCard
                aria_label="Forex"
                Icon={() => (
                    <img src={Forex} alt={localize('_t_Forex_t_')} width="32" height="32" />
                )}
                content="_t_Trade the world’s largest financial market with popular forex pairs._t_"
                title="_t_Forex_t_"
                onClick={onClick}
                to="/markets/forex/"
            />
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
                content={is_eu ? derived_text_eu : derived_text_row}
                title="_t_Derived_t_"
                onClick={onClick}
                to="/markets/synthetic/"
            />
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
                onClick={onClick}
                to="/markets/stock/"
            />
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
                onClick={onClick}
                to="/markets/cryptocurrencies/"
            />
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
                onClick={onClick}
                to="/markets/commodities/"
            />
        </Flex>
    )
}

export const NavCompany = ({ onClick }: NavCompanyProps) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            Icon={() => (
                <img src={Story} alt={localize('_t_who we are_t_')} width="24" height="24" />
            )}
            title="_t_Who we are_t_"
            onClick={onClick}
            to="/who-we-are/"
        />
        <CardLink
            Icon={() => (
                <img
                    src={RegulatoryInfo}
                    alt={localize('_t_regulatory information_t_')}
                    width="24"
                    height="24"
                />
            )}
            title="_t_Regulatory information_t_"
            onClick={onClick}
            to="/regulatory/"
        />
        <CardLink
            Icon={() => (
                <img src={Choose} alt={localize('_t_why choose us_t_')} width="24" height="24" />
            )}
            title="_t_Why choose us_t_"
            onClick={onClick}
            to="/why-choose-us/"
        />
        <CardLink
            Icon={() => (
                <img
                    src={Partner}
                    alt={localize('_t_partnership programmes_t_')}
                    width="24"
                    height="24"
                />
            )}
            title="_t_Partnership programmes_t_"
            onClick={onClick}
            to="/partners/"
        />
        <CardLink
            Icon={() => (
                <img src={Contact} alt={localize('_t_contact us_t_')} width="24" height="24" />
            )}
            title="_t_Contact us_t_"
            onClick={onClick}
            to="/contact_us/"
        />
        <CardLink
            Icon={() => <img src={Career} alt={localize('_t_careers_t_')} width="24" height="24" />}
            title="_t_Careers_t_"
            onClick={onClick}
            to="/careers/"
        />
        <CardLink
            Icon={() => (
                <img src={DerivLife} alt={localize('_t_Deriv life_t_')} width="24" height="24" />
            )}
            title="_t_Deriv life_t_"
            to=""
            type="derivlife"
            external={true}
            target="_blank"
            rel="noopener noreferrer"
        />
    </Flex>
)

export const NavResources = ({ onClick }: NavResourcesProps) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            Icon={() => (
                <img src={Help} alt={localize('_t_help centre_t_')} width="24" height="24" />
            )}
            title="_t_Help centre_t_"
            onClick={onClick}
            to="/help-centre/"
        />
        <CardLink
            Icon={() => (
                <img src={Community} alt={localize('_t_community_t_')} width="24" height="24" />
            )}
            title="_t_Community_t_"
            onClick={onClick}
            to=""
            type="community"
            external
            target="_blank"
            rel="noopener noreferrer"
        />
        <CardLink
            Icon={() => (
                <img
                    src={TraderTool}
                    alt={localize('_t_traders’ tools_t_')}
                    width="24"
                    height="24"
                />
            )}
            title="_t_Traders’ tools_t_"
            onClick={onClick}
            to="/trader-tools/"
        />
        <CardLink
            Icon={() => (
                <img src={Payment} alt={localize('_t_payment methods_t_')} width="24" height="24" />
            )}
            title="_t_Payment methods_t_"
            onClick={onClick}
            to="/payment-methods/"
        />
        <CardLink
            Icon={() => (
                <img
                    src={Signals}
                    alt={localize('_t_Deriv MT5 signals_t_')}
                    width="24"
                    height="24"
                />
            )}
            title="_t_Deriv MT5 Signals_t_"
            onClick={onClick}
            to="/dmt5-trading-signals/#signal-subscriber/"
        />
        <CardLink
            Icon={() => <img src={Blog} alt={localize('_t_blog_t_')} width="24" height="24" />}
            title="_t_Blog_t_"
            to=""
            type="blog"
            external
            target="_blank"
            rel="noopener noreferrer"
        />
    </Flex>
)

export default OtherPlatform
