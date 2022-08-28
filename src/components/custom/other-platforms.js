import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer, UKEU, ROW } from 'components/containers'
import { Text, Card, Header, NavCard, CardLink, LocalizedLinkText } from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { binary_bot_url } from 'common/constants'
import device from 'themes/device'
// icons
import Basket from 'images/svg/custom/basket-nav.svg'
import Blog from 'images/svg/custom/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Cryptocurrencies from 'images/svg/custom/cryptocurrencies-nav.svg'
import Commodities from 'images/svg/custom/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DerivX from 'images/svg/custom/deriv-x.svg'
import DBot from 'images/svg/dbot/dbot-icon.svg'
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
import SyntheticIndices from 'images/svg/custom/synthetic-indices-nav.svg'
import TraderTool from 'images/svg/custom/trader-tool-nav.svg'

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

const StyledLink = styled(LocalizedLink)`
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

export const TraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink aria_label="DTrader" to="/dtrader/">
        <Card
            cover_background="var(--color-red)"
            cover_content={<Localize translate_text="_t_Discover DTrader now_t_" />}
            title={<Localize translate_text="_t_DTrader_t_" />}
            Icon={() => <StyledDTrader src={DTrader} width="72" height="72" alt="" />}
            content={[localize('_t_The platform to start with. It’s powerful yet easy to use._t_')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const BotCard = ({ is_selected, word_break_cover }) => (
    <StyledLink aria_label="DBot" to="/dbot/">
        <Card
            cover_background="var(--color-orange)"
            cover_content={<Localize translate_text="_t_Discover DBot now_t_" />}
            title={<Localize translate_text="_t_DBot_t_" />}
            Icon={() => <StyledDbot src={DBot} width="72" height="72" alt="" />}
            content={[localize('_t_Automated trading at your fingertips. No coding needed._t_')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DMT5Card = ({ is_selected, is_ppc_redirect, word_break_cover }) => (
    <StyledLink aria_label="DMT5" to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}>
        <Card
            cover_background="var(--color-green)"
            cover_content={<Localize translate_text="_t_Discover Deriv MT5 now_t_" />}
            title={<Localize translate_text="_t_Deriv MT5_t_" />}
            Icon={() => <StyledDmt5 src={DMT5} alt="" width="72" height="72" />}
            content={[localize('_t_Trade on the Deriv MT5 platform, the choice of professionals._t_')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DerivXCard = ({ is_selected, word_break_cover }) => (
    <StyledLink ariaLabel="Deriv X" to="/derivx/">
        <Card
            Icon={() => <StyledDerivX src={DerivX} alt="Deriv X" width="72" height="72" />}
            content={[
                localize('_t_Trade FX and CFDs on a customisable, easy-to-use trading platform._t_'),
            ]}
            cover_background="var(--color-black)"
            cover_content={<Localize translate_text="_t_Discover Deriv X now_t_" />}
            title={<Localize translate_text="_t_Deriv X_t_" />}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const SmarttraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink
        aria_label="SmartTrader"
        to="trading"
        type="smart_trader"
        external="true"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Card
            cover_background="var(--color-blue-3)"
            cover_content={<Localize translate_text="_t_Discover SmartTrader now_t_" />}
            title={<Localize translate_text="_t_SmartTrader_t_" />}
            Icon={() => <StyledSmarttrader src={Smarttrader} alt="" height="72" width="72" />}
            content={[
                <Localize
                    key={0}
                    translate_text="_t_Trade the world’s markets on <0>Binary.com</0>’s classic platform._t_"
                    components={[
                        <LocalizedLinkText key={0} to="home" external="true" type="binary" />,
                    ]}
                />,
            ]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const OtherPlatform = ({ header, subHeader, exclude, is_nav, is_ppc_redirect }) => {
    const excludetoLowerCase = exclude.toLowerCase()
    const getHeaderText = () => (
        <>
            <UKEU>
                <Localize translate_text="_t_Check out our other platform_t_" />
            </UKEU>
            <ROW>
                <Localize translate_text="_t_Check out our other platforms_t_" />
            </ROW>
        </>
    )
    return (
        <SectionContainer padding="0">
            {is_nav ? null : (
                <HeaderWrapper>
                    <Header as="h3" type="section-title" align="center">
                        {header ? header : getHeaderText()}
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
                            {localize(
                                '_t_Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love._t_',
                            )}
                        </Header>
                    )}
                </HeaderWrapper>
            )}
            <StyledFlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
                {}
                {excludetoLowerCase !== 'dtrader' && <TraderCard />}
                <ROW>{excludetoLowerCase !== 'dbot' && <BotCard />}</ROW>
                {excludetoLowerCase !== 'dmt5' && <DMT5Card is_ppc_redirect={is_ppc_redirect} />}
                <ROW>{excludetoLowerCase !== 'derivx' && <DerivXCard />}</ROW>
            </StyledFlexGridContainer>
        </SectionContainer>
    )
}

const cardProptypes = {
    is_selected: PropTypes.bool,
    word_break_cover: PropTypes.bool,
}
BotCard.propTypes = { ...cardProptypes }
DerivXCard.propTypes = { ...cardProptypes }
DMT5Card.propTypes = { ...cardProptypes }
SmarttraderCard.propTypes = { ...cardProptypes }
TraderCard.propTypes = { ...cardProptypes }

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    is_nav: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    subHeader: PropTypes.string,
}

export const NavPlatform = ({ onClick, is_ppc, is_ppc_redirect }) => {
    const getDtraderText = () => (
        <NavCard
            aria_label="Dtrader"
            icon={() => <img src={DTrader} alt="" width="32" height="32" />}
            content={
                <Localize translate_text="_t_A whole new trading experience on a powerful yet easy to use platform._t_" />
            }
            title={<Localize translate_text="_t_DTrader_t_" />}
            onClick={onClick}
            to="/dtrader/"
        />
    )
    return (
        <Flex>
            {!is_ppc && (
                <>
                    <Flex
                        direction="column"
                        wrap="wrap"
                        jc="flex-start"
                        style={{ boxShadow: 'inset -1px 0px 0px var(--color-grey-8)' }}
                    >
                        <StyledText>{<Localize translate_text="_t_Trade types_t_" />}</StyledText>
                        <NavCard
                            aria_label="CFDs"
                            icon={() => <img src={CFD} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="_t_Trade with leverage and tight spreads for better returns on successful trades._t_" />
                            }
                            title={<Localize translate_text="_t_CFDs_t_" />}
                            onClick={onClick}
                            to="/trade-types/cfds/"
                        />
                        <ROW>
                            <NavCard
                                aria_label="Options"
                                icon={() => <img src={Options} alt="" width="32" height="32" />}
                                content={
                                    <Localize translate_text="_t_Earn fixed payouts by predicting an asset's price movement._t_" />
                                }
                                title={<Localize translate_text="_t_Options_t_" />}
                                onClick={onClick}
                                to="/trade-types/options/"
                            />
                        </ROW>
                        <NavCard
                            aria_label="Multipliers"
                            icon={() => <img src={Multipliers} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="_t_Combine the upside of CFDs with the simplicity of options._t_" />
                            }
                            title={<Localize translate_text="_t_Multipliers_t_" />}
                            onClick={onClick}
                            to="/trade-types/multiplier/"
                        />
                    </Flex>
                </>
            )}
            <Flex direction="column" wrap="wrap" jc="flex-start">
                <StyledText>{<Localize translate_text="_t_Trading platforms_t_" />}</StyledText>
                <NavCard
                    aria_label="Deriv MT5"
                    icon={() => <img src={DMT5} alt="" width="32" height="32" />}
                    content={
                        <Localize translate_text="_t_Trade on Deriv MT5, the all-in-one CFD trading platform._t_" />
                    }
                    title={<Localize translate_text="_t_Deriv MT5_t_" />}
                    onClick={onClick}
                    to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}
                />
                <ROW>
                    <>
                        <NavCard
                            aria_label="Derivx"
                            icon={() => <img src={DerivX} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="_t_A highly customisable and easy-to-use CFD trading platform._t_" />
                            }
                            title={<Localize translate_text="_t_Deriv X_t_" />}
                            onClick={onClick}
                            to="/derivx/"
                        />
                        <NavCard
                            aria_label="SmartTrader"
                            icon={() => <img src={Smarttrader} alt="" width="32" height="32" />}
                            content={
                                <Localize translate_text="_t_Trade the world’s markets with our popular user-friendly platform._t_" />
                            }
                            title={<Localize translate_text="_t_SmartTrader_t_" />}
                            to="trading"
                            type="smart_trader"
                            external="true"
                            target="_blank"
                            onClick={onClick}
                            otherLinkProps={{ rel: 'noopener noreferrer' }}
                        />
                    </>
                </ROW>
                <UKEU>{getDtraderText()}</UKEU>
            </Flex>
            <ROW>
                <Flex direction="column" wrap="wrap" jc="flex-start">
                    <EmptySpace />

                    {getDtraderText()}
                    <NavCard
                        aria_label="Deriv GO"
                        icon={() => <img src={DerivGo} alt="" width="32" height="32" />}
                        content={
                            <Localize translate_text="_t_Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app._t_" />
                        }
                        title={<Localize translate_text="_t_Deriv GO_t_" />}
                        onClick={onClick}
                        to="/deriv-go/"
                    />
                    <NavCard
                        aria_label="DBot"
                        icon={() => <img src={DBot} alt="" width="32" height="32" />}
                        content={
                            <Localize translate_text="_t_Automated trading at your fingertips. No coding needed._t_" />
                        }
                        title={<Localize translate_text="_t_DBot_t_" />}
                        onClick={onClick}
                        to="/dbot/"
                    />
                    <NavCard
                        aria_label="Binary Bot"
                        icon={() => <img src={BinaryBot} alt="" width="32" height="32" />}
                        content={
                            <Localize translate_text='_t_Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users._t_' />
                        }
                        title={<Localize translate_text="_t_Binary Bot_t_" />}
                        to={binary_bot_url}
                        external="true"
                        target="_blank"
                        onClick={onClick}
                        otherLinkProps={{ rel: 'noopener noreferrer' }}
                    />
                </Flex>
            </ROW>
        </Flex>
    )
}

NavPlatform.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NavMarket = ({ onClick, is_ppc }) => {
    const { is_non_eu, is_non_uk } = useCountryRule()

    return (
        <Flex direction="column" wrap="wrap" jc="flex-start">
            <NavCard
                aria_label="Forex"
                icon={() => <img src={Forex} alt="" width="32" height="32" />}
                content={
                    <Localize translate_text="_t_Trade the world’s largest financial market with popular forex pairs._t_" />
                }
                title={<Localize translate_text="_t_Forex_t_" />}
                onClick={onClick}
                to="/markets/forex/"
            />
            {!is_ppc && is_non_uk && (
                <NavCard
                    aria_label="Synthetic indices"
                    icon={() => <img src={SyntheticIndices} alt="" width="32" height="32" />}
                    content={
                        <Localize translate_text="_t_Enjoy synthetic markets that emulate real-world market movements._t_" />
                    }
                    title={<Localize translate_text="_t_Synthetic indices_t_" />}
                    onClick={onClick}
                    to="/markets/synthetic/"
                />
            )}
            <NavCard
                aria_label="Stocks & indices"
                icon={() => <img src={StockIndices} alt="" width="32" height="32" />}
                content={
                    <Localize translate_text="_t_Predict broader market trends and diversify your risk with stocks & indices._t_" />
                }
                title={<Localize translate_text="_t_Stocks & indices_t_" />}
                onClick={onClick}
                to="/markets/stock/"
            />
            {is_non_uk && (
                <NavCard
                    aria_label="Cryptocurrencies"
                    icon={() => <img src={Cryptocurrencies} alt="" width="32" height="32" />}
                    content={
                        <Localize translate_text="_t_Trade with leverage on the price movement of popular crypto-fiat pairs._t_" />
                    }
                    title={<Localize translate_text="_t_Cryptocurrencies_t_" />}
                    onClick={onClick}
                    to="/markets/cryptocurrencies/"
                />
            )}
            {is_non_eu && is_non_uk && (
                <NavCard
                    aria_label="Basket indices"
                    icon={() => <img src={Basket} alt="" width="32" height="32" />}
                    content={
                        <Localize translate_text="_t_Trade weighted indices that measure the value of a currency against a basket of major currencies._t_" />
                    }
                    title={<Localize translate_text="_t_Basket indices_t_" />}
                    onClick={onClick}
                    to="/markets/basket-indices/"
                />
            )}
            <NavCard
                aria_label="Commodities"
                icon={() => <img src={Commodities} alt="" width="32" height="32" />}
                content={
                    <Localize translate_text="_t_Trade natural resources that are central to the world's economy._t_" />
                }
                title={<Localize translate_text="_t_Commodities_t_" />}
                onClick={onClick}
                to="/markets/commodities/"
            />
        </Flex>
    )
}

NavMarket.propTypes = {
    is_ppc: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NavCompany = ({ onClick }) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            icon={() => <img src={Story} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Who we are_t_" />}
            onClick={onClick}
            to="/who-we-are/"
        />
        <CardLink
            icon={() => <img src={RegulatoryInfo} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Regulatory information_t_" />}
            onClick={onClick}
            to="/regulatory/"
        />
        <CardLink
            icon={() => <img src={Choose} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Why choose us_t_" />}
            onClick={onClick}
            to="/why-choose-us/"
        />
        <CardLink
            icon={() => <img src={Partner} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Partnership programmes_t_" />}
            onClick={onClick}
            to="/partners/"
        />

        <CardLink
            icon={() => <img src={Contact} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Contact us_t_" />}
            onClick={onClick}
            to="/contact_us/"
        />
        <CardLink
            icon={() => <img src={Career} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Careers_t_" />}
            onClick={onClick}
            to="/careers/"
        />
        <CardLink
            icon={() => <img src={DerivLife} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Deriv life_t_" />}
            to=""
            type="derivlife"
            external={true}
            target="_blank"
            rel="noopener noreferrer"
        />
    </Flex>
)

NavCompany.propTypes = {
    onClick: PropTypes.func,
}

export const NavResources = ({ onClick }) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            icon={() => <img src={Help} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Help centre_t_" />}
            onClick={onClick}
            to="/help-centre/"
        />
        <CardLink
            icon={() => <img src={Community} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Community_t_" />}
            onClick={onClick}
            to=""
            type="community"
            external="true"
            target="_blank"
            rel="noopener noreferrer"
        />
        <CardLink
            icon={() => <img src={TraderTool} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Traders’ tools_t_" />}
            onClick={onClick}
            to="/trader-tools/"
        />
        <CardLink
            icon={() => <img src={Payment} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Payment methods_t_" />}
            onClick={onClick}
            to="/payment-methods/"
        />
        <CardLink
            icon={() => <img src={Signals} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_DMT5 Signals_t_" />}
            onClick={onClick}
            to="/dmt5-trading-signals/#signal-subscriber/"
        />
        <CardLink
            icon={() => <img src={Blog} alt="" width="24" height="24" />}
            title={<Localize translate_text="_t_Academy_t_" />}
            onClick={onClick}
            to="/academy/"
        />
    </Flex>
)

NavResources.propTypes = {
    onClick: PropTypes.func,
}

export default OtherPlatform
