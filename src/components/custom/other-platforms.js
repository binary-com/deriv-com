import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import {
    Text,
    Card,
    Header,
    NavCard,
    CardLink,
    LocalizedLinkText,
    Divider,
} from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
import device from 'themes/device'
import { DerivStore } from 'store'
// icons
import Blog from 'images/svg/blog-nav.svg'
import Career from 'images/svg/menu/careers.svg'
import Choose from 'images/svg/menu/choose.svg'
import Commodities from 'images/svg/commodities-nav.svg'
import Community from 'images/svg/menu/community.svg'
import Contact from 'images/svg/menu/contact.svg'
import DBot from 'images/svg/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import Forex from 'images/svg/forex-nav.svg'
import Help from 'images/svg/menu/help-center.svg'
import Leadership from 'images/svg/menu/leadership.svg'
import Margin from 'images/svg/margin-trading-nav.svg'
import Multipliers from 'images/svg/multipliers-nav.svg'
import Options from 'images/svg/options-nav.svg'
import Partner from 'images/svg/menu/partner.svg'
import Payment from 'images/svg/menu/payment-methods.svg'
import RegulatoryInfo from 'images/svg/menu/regulatory.svg'
import Signals from 'components/svgs/signals'
import Smarttrader from 'images/svg/smarttrader.svg'
import StockIndices from 'images/svg/stock-indices-nav.svg'
import Story from 'images/svg/menu/story.svg'
import SyntheticIndices from 'images/svg/synthetic-indices-nav.svg'
import TraderTool from 'images/svg/trader-tool-nav.svg'

const MarginDivider = styled(Divider)`
    margin: 0 0.8rem;
`

const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    color: var(--color-grey-5);
    margin-bottom: 0.8rem;
    margin-left: 1.6rem;
`

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`
const icon72 = css`
    width: 72px;
    height: 72px;
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
    <StyledLink ariaLabel="DTrader" to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={() => <StyledDTrader src={DTrader} width="72" height="72" alt="Dtrader" />}
            content={[localize('The platform to start with. It’s powerful yet easy to use.')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const BotCard = ({ is_selected, word_break_cover }) => (
    <StyledLink ariaLabel="DBot" to="/dbot">
        <Card
            cover_background="var(--color-orange)"
            cover_content={localize('Discover DBot now')}
            title={localize('DBot')}
            Icon={() => <StyledDbot src={DBot} width="72" height="72" alt="DBot" />}
            content={[localize('Automated trading at your fingertips. No coding needed.')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DMT5Card = ({ is_selected, is_ppc_redirect, word_break_cover }) => (
    <StyledLink ariaLabel="DMT5" to={is_ppc_redirect ? '/landing/dmt5' : '/dmt5'}>
        <Card
            cover_background="var(--color-green)"
            cover_content={localize('Discover DMT5 now')}
            title={localize('DMT5')}
            Icon={() => <StyledDmt5 src={DMT5} alt="DMT5" width="72" height="72" />}
            content={[
                localize(
                    'Trade on Deriv MetaTrader 5 (DMT5), the all-in-one FX and CFD trading platform.',
                ),
            ]}
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
        ariaLabel="SmartTrader"
        to="trading"
        is_smarttrader_link
        external="true"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Card
            cover_background="var(--color-blue-3)"
            cover_content={localize('Discover SmartTrader now')}
            title={localize('SmartTrader')}
            Icon={() => (
                <StyledSmarttrader src={Smarttrader} alt="Smarttrader" height="72" width="72" />
            )}
            content={[
                <Localize
                    key={0}
                    translate_text="Trade the world’s markets on <0>Binary.com</0>’s classic platform."
                    components={[
                        <LocalizedLinkText key={0} to="home" external="true" is_binary_link />,
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

export const OtherPlatform = ({ header, subHeader, exclude, is_nav, is_ppc_redirect }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <Header type="section-title" align="center">
                    {header ? header : localize('Check out our other platforms')}
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
            {exclude.toLowerCase() !== 'dtrader' && <TraderCard />}
            {exclude.toLowerCase() !== 'dbot' && <BotCard />}
            {exclude.toLowerCase() !== 'dmt5' && <DMT5Card is_ppc_redirect={is_ppc_redirect} />}
        </StyledFlexGridContainer>
    </SectionContainer>
)

const cardProptypes = {
    is_selected: PropTypes.bool,
    word_break_cover: PropTypes.bool,
}
BotCard.propTypes = { ...cardProptypes }
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
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <Flex>
            <Flex direction="column" wrap="wrap" jc="flex-start">
                <StyledText>{localize('Trading platforms')}</StyledText>
                <NavCard
                    aria_label="Dtrader"
                    icon={() => <img src={DTrader} alt="Dtrader" width="32" height="32" />}
                    content={
                        <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
                    }
                    title={<Localize translate_text="DTrader" />}
                    onClick={onClick}
                    to="/dtrader/"
                />
                <NavCard
                    aria_label="DBot"
                    icon={() => <img src={DBot} alt="DBot" width="32" height="32" />}
                    content={
                        <Localize translate_text="Automated trading at your fingertips. No coding needed." />
                    }
                    title={<Localize translate_text="DBot" />}
                    onClick={onClick}
                    to="/dbot/"
                />
                <NavCard
                    aria_label="DMT5"
                    icon={() => <img src={DMT5} alt="DMT5" width="32" height="32" />}
                    content={
                        <Localize translate_text="Trade on Deriv MetaTrader 5 (DMT5), the all-in-one FX and CFD trading platform." />
                    }
                    title={<Localize translate_text="DMT5" />}
                    onClick={onClick}
                    to={is_ppc_redirect ? '/landing/dmt5/' : '/dmt5/'}
                />
                <NavCard
                    aria_label="SmartTrader"
                    icon={() => <img src={Smarttrader} alt="Smarttrader" width="32" height="32" />}
                    content={
                        <Localize translate_text="Trade the world’s markets with our popular user-friendly platform." />
                    }
                    title={<Localize translate_text="SmartTrader" />}
                    to="trading"
                    is_smarttrader_link
                    external="true"
                    target="_blank"
                    onClick={onClick}
                    otherLinkProps={{ rel: 'noopener noreferrer' }}
                />
            </Flex>
            {!is_ppc && (
                <>
                    <MarginDivider width="2px" height="100%" color="grey-8" />
                    <Flex direction="column" wrap="wrap" jc="flex-start">
                        <StyledText>{localize('Trade types')}</StyledText>
                        <NavCard
                            aria_label="Margin trading"
                            icon={() => <img src={Margin} alt="Margin" width="32" height="32" />}
                            content={
                                <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
                            }
                            title={<Localize translate_text="Margin trading" />}
                            onClick={onClick}
                            to="/trade-types/margin/"
                        />
                        {!is_eu_country && (
                            <NavCard
                                aria_label="Options"
                                icon={() => (
                                    <img src={Options} alt="Options" width="32" height="32" />
                                )}
                                content={
                                    <Localize translate_text="Earn fixed payouts by predicting an asset's price movement." />
                                }
                                title={<Localize translate_text="Options" />}
                                onClick={onClick}
                                to="/trade-types/options/"
                            />
                        )}
                        <NavCard
                            aria_label="Multipliers"
                            icon={() => (
                                <img src={Multipliers} alt="Multipliers" width="32" height="32" />
                            )}
                            content={
                                <Localize translate_text="Combine the upside of margin trading with the simplicity of options." />
                            }
                            title={<Localize translate_text="Multipliers" />}
                            onClick={onClick}
                            to="/trade-types/multiplier/"
                        />
                    </Flex>
                </>
            )}
        </Flex>
    )
}

NavPlatform.propTypes = {
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NavMarket = ({ onClick, is_ppc }) => (
    <Flex direction="column" wrap="wrap" jc="flex-start">
        <NavCard
            aria_label="Forex"
            icon={() => <img src={Forex} alt="Forex" width="32" height="32" />}
            content={
                <Localize translate_text="Trade the world’s largest financial market with popular forex pairs." />
            }
            title={<Localize translate_text="Forex" />}
            onClick={onClick}
            to="/markets#forex"
        />
        {!is_ppc && (
            <NavCard
                aria_label="Synthetic indices"
                icon={() => (
                    <img src={SyntheticIndices} alt="SyntheticIndices" width="32" height="32" />
                )}
                content={
                    <Localize translate_text="Enjoy synthetic markets that emulate real-world market movements." />
                }
                title={<Localize translate_text="Synthetic indices" />}
                onClick={onClick}
                to="/markets#synthetic"
            />
        )}
        <NavCard
            aria_label="Stocks & indices"
            icon={() => <img src={StockIndices} alt="StockIndices" width="32" height="32" />}
            content={
                <Localize translate_text="Predict broader market trends and diversify your risk with stock indices." />
            }
            title={<Localize translate_text="Stocks & indices" />}
            onClick={onClick}
            to="/markets#stock"
        />
        <NavCard
            aria_label="Commodities"
            icon={() => <img src={Commodities} alt="Commodities" width="32" height="32" />}
            content={
                <Localize translate_text="Trade natural resources that are central to the world's economy." />
            }
            title={<Localize translate_text="Commodities" />}
            onClick={onClick}
            to="/markets#commodities"
        />
    </Flex>
)

NavMarket.propTypes = {
    is_ppc: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NavCompany = ({ onClick }) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            icon={() => <img src={Story} alt="story" width="24" height="24" />}
            title={localize('Our story')}
            onClick={onClick}
            to="/about/story/"
        />
        <CardLink
            icon={() => <img src={Leadership} alt="leadership" width="24" height="24" />}
            title={localize('Our leadership')}
            onClick={onClick}
            to="/about/leadership"
        />
        <CardLink
            icon={() => <img src={RegulatoryInfo} alt="regulatory" width="24" height="24" />}
            title={localize('Regulatory information')}
            onClick={onClick}
            to="/regulatory/"
        />
        <CardLink
            icon={() => <img src={Choose} alt="choose" width="24" height="24" />}
            title={localize('Why choose us?')}
            onClick={onClick}
            to="/why-choose-us/"
        />
        <CardLink
            icon={() => <img src={Partner} alt="partner" width="24" height="24" />}
            title={localize('Partnership programmes')}
            onClick={onClick}
            to="/partners/"
        />

        <CardLink
            icon={() => <img src={Contact} alt="contact" width="24" height="24" />}
            title={localize('Contact us')}
            onClick={onClick}
            to="/contact_us/"
        />
        <CardLink
            icon={() => <img src={Career} alt="career" width="24" height="24" />}
            title={localize('Careers')}
            onClick={onClick}
            to="/careers/"
        />
    </Flex>
)

NavCompany.propTypes = {
    onClick: PropTypes.func,
}

export const NavResources = ({ onClick }) => (
    <Flex direction="column" wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink
            icon={() => <img src={Help} alt="help" width="24" height="24" />}
            title={localize('Help centre')}
            onClick={onClick}
            to="/help-centre/"
        />
        <CardLink
            icon={() => <img src={Community} alt="community" width="24" height="24" />}
            title={localize('Community')}
            onClick={onClick}
            to=""
            is_community_link
            external="true"
            target="_blank"
            rel="noopener noreferrer"
        />
        <CardLink
            icon={() => <img src={TraderTool} alt="traders tools" width="24" height="24" />}
            title={localize('Traders’ tools')}
            onClick={onClick}
            to="/trader-tools/"
        />
        <CardLink
            icon={() => <img src={Payment} alt="payment" width="24" height="24" />}
            title={localize('Payment methods')}
            onClick={onClick}
            to="/payment-methods/"
        />
        <CardLink
            icon={() => <Signals dynamic_id="dmt5-signals" />}
            title={localize('DMT5 Signals')}
            onClick={onClick}
            to="/dmt5-trading-signals/#signal-subscriber/"
        />
        <CardLink
            icon={() => <img src={Blog} alt="blog" width="24" height="24" />}
            title={localize('Blog')}
            onClick={onClick}
            to=""
            is_blog_link
            external="true"
            target="_blank"
            rel="noopener noreferrer"
        />
    </Flex>
)

NavResources.propTypes = {
    onClick: PropTypes.func,
}

export default OtherPlatform
