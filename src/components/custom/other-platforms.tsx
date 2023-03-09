import React from 'react'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import { Text, Card, Header, NavCard, CardLink, LocalizedLinkText } from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
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
    header?: string
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
                    alt="Dtrader trading platform"
                />
            )}
            content={['_t_The platform to start with. It’s powerful yet easy to use._t_']}
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
                <StyledDbot src={DBot} width="72" height="72" alt="Dbot for auto trading" />
            )}
            content={['_t_Automated trading at your fingertips. No coding needed._t_']}
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
                <StyledDmt5 src={DMT5} alt="Deriv MT5 trading platform" width="72" height="72" />
            )}
            content={['_t_Trade on the Deriv MT5 platform, the choice of professionals._t_']}
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
                <StyledDerivX src={DerivX} alt="Deriv X trading paltform" width="72" height="72" />
            )}
            content={['_t_Trade FX and CFDs on a customisable, easy-to-use trading platform._t_']}
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
                    alt="SmartTrader trading platform"
                    height="72"
                    width="72"
                />
            )}
            content={[
                {
                    text: '_t_Trade the world’s markets on <0>Binary.com</0>’s classic platform._t_',
                    components: [<LocalizedLinkText key={0} to="home" external type="binary" />],
                },
            ]}
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
            {is_eu && <Localize translate_text="Check out our other platform" />}
            {is_row && <Localize translate_text="Check out our other platforms" />}
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
                                'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                            )}
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
            icon={() => <img src={DTrader} alt="Dtrader trading platform" width="32" height="32" />}
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
                        <StyledText>{<Localize translate_text="Trade types" />}</StyledText>
                        <NavCard
                            aria_label="CFDs"
                            icon={() => (
                                <img src={CFD} alt="CFDs trade type" width="32" height="32" />
                            )}
                            content="_t_Trade with leverage and tight spreads for better returns on successful trades._t_"
                            title="_t_CFDs_t_"
                            onClick={onClick}
                            to="/trade-types/cfds/"
                        />
                        {is_row && (
                            <NavCard
                                aria_label="Options"
                                icon={() => (
                                    <img
                                        src={Options}
                                        alt="Options trade type"
                                        width="32"
                                        height="32"
                                    />
                                )}
                                content="_t_Earn a range of payouts without risking more than your initial stake._t_"
                                title="_t_Options_t_"
                                onClick={onClick}
                                to="/trade-types/options/"
                            />
                        )}
                        <NavCard
                            aria_label="Multipliers"
                            icon={() => (
                                <img
                                    src={Multipliers}
                                    alt="Multipliers trade type"
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
                <StyledText>{<Localize translate_text="Trading platforms" />}</StyledText>
                <NavCard
                    aria_label="Deriv MT5"
                    icon={() => (
                        <img src={DMT5} alt="Deriv MT5 trading platform" width="32" height="32" />
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
                            icon={() => (
                                <img
                                    src={DerivX}
                                    alt="Deriv X trading paltform"
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
                            aria_label="SmartTrader"
                            icon={() => (
                                <img
                                    src={Smarttrader}
                                    alt="SmartTrader trading platform"
                                    width="32"
                                    height="32"
                                />
                            )}
                            content="_t_Trade the world’s markets with our popular user-friendly platform._t_"
                            title="_t_SmartTrader_t_"
                            to="trading"
                            type="smart_trader"
                            external
                            target="_blank"
                            onClick={onClick}
                            otherLinkProps={{ rel: 'noopener noreferrer' }}
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
                            icon={() => (
                                <img
                                    src={DerivGo}
                                    alt="Deriv GO mobile trading app"
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
                            icon={() => (
                                <img
                                    src={DBot}
                                    alt="Dbot for auto trading"
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
                            icon={() => (
                                <img
                                    src={BinaryBot}
                                    alt="Binary bot for creating trading bot"
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
                            otherLinkProps={{ rel: 'noopener noreferrer' }}
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
                icon={() => <img src={Forex} alt="Forex" width="32" height="32" />}
                content="_t_Trade the world’s largest financial market with popular forex pairs._t_"
                title="_t_Forex_t_"
                onClick={onClick}
                to="/markets/forex/"
            />
            <NavCard
                aria_label="Derived"
                icon={() => <img src={DerivedFX} alt="Synthetic indices" width="32" height="32" />}
                content={is_eu ? derived_text_eu : derived_text_row}
                title="_t_Derived_t_"
                onClick={onClick}
                to="/markets/synthetic/"
            />
            <NavCard
                aria_label="Stocks & indices"
                icon={() => (
                    <img src={StockIndices} alt="Stocks & indices" width="32" height="32" />
                )}
                content="_t_Predict broader market trends and diversify your risk with stocks & indices._t_"
                title="_t_Stocks & indices_t_"
                onClick={onClick}
                to="/markets/stock/"
            />
            <NavCard
                aria_label="Cryptocurrencies"
                icon={() => (
                    <img src={Cryptocurrencies} alt="Cryptocurrencies" width="32" height="32" />
                )}
                content="_t_Trade with leverage on the price movement of popular crypto-fiat pairs._t_"
                title="_t_Cryptocurrencies_t_"
                onClick={onClick}
                to="/markets/cryptocurrencies/"
            />
            <NavCard
                aria_label="Commodities"
                icon={() => <img src={Commodities} alt="Commodities" width="32" height="32" />}
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
            icon={() => <img src={Story} alt="who we are" width="24" height="24" />}
            title="_t_Who we are_t_"
            onClick={onClick}
            to="/who-we-are/"
        />
        <CardLink
            icon={() => (
                <img src={RegulatoryInfo} alt="regulatory information" width="24" height="24" />
            )}
            title="_t_Regulatory information_t_"
            onClick={onClick}
            to="/regulatory/"
        />
        <CardLink
            icon={() => <img src={Choose} alt="why choose us" width="24" height="24" />}
            title="_t_Why choose us_t_"
            onClick={onClick}
            to="/why-choose-us/"
        />
        <CardLink
            icon={() => <img src={Partner} alt="partnership programmes" width="24" height="24" />}
            title="_t_Partnership programmes_t_"
            onClick={onClick}
            to="/partners/"
        />

        <CardLink
            icon={() => <img src={Contact} alt="contact us" width="24" height="24" />}
            title="_t_Contact us_t_"
            onClick={onClick}
            to="/contact_us/"
        />
        <CardLink
            icon={() => <img src={Career} alt="careers" width="24" height="24" />}
            title="_t_Careers_t_"
            onClick={onClick}
            to="/careers/"
        />
        <CardLink
            icon={() => <img src={DerivLife} alt="Deriv life" width="24" height="24" />}
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
            icon={() => <img src={Help} alt="help centre" width="24" height="24" />}
            title="_t_Help centre_t_"
            onClick={onClick}
            to="/help-centre/"
        />
        <CardLink
            icon={() => <img src={Community} alt="community" width="24" height="24" />}
            title="_t_Community_t_"
            onClick={onClick}
            to=""
            type="community"
            external
            target="_blank"
            rel="noopener noreferrer"
        />
        <CardLink
            icon={() => <img src={TraderTool} alt="traders’ tools" width="24" height="24" />}
            title="_t_Traders’ tools_t_"
            onClick={onClick}
            to="/trader-tools/"
        />
        <CardLink
            icon={() => <img src={Payment} alt="payment methods" width="24" height="24" />}
            title="_t_Payment methods_t_"
            onClick={onClick}
            to="/payment-methods/"
        />
        <CardLink
            icon={() => <img src={Signals} alt="Deriv MT5 signals" width="24" height="24" />}
            title="_t_Deriv MT5 Signals_t_"
            onClick={onClick}
            to="/dmt5-trading-signals/#signal-subscriber/"
        />
        <CardLink
            icon={() => <img src={Blog} alt="academy" width="24" height="24" />}
            title="_t_Academy_t_"
            to=""
            type="academy"
            external={true}
            target="_blank"
            rel="noopener noreferrer"
        />
    </Flex>
)

export default OtherPlatform
