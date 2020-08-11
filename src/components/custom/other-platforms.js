import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import { Card, Header, NavCard, CardLink, LocalizedLinkText } from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'
import { community_url } from 'common/utility'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`
const icon72 = css`
    width: 72px;
    height: 72px;
`
const StyledDbot = styled(DBot)`
    ${icon72}
`
const StyledDmt5 = styled(DMT5)`
    ${icon72}
`
const StyledDTrader = styled(DTrader)`
    ${icon72}
`

const StyledSmarttrader = styled(Smarttrader)`
    width: 72px;
    height: 72px;
`

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: var(--text-size-header-1);
    }
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
    <StyledLink ariaLabel={localize('DTrader')} to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={StyledDTrader}
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
    <StyledLink ariaLabel={localize('DBot')} to="/dbot">
        <Card
            cover_background="var(--color-orange)"
            cover_content={localize('Discover DBot now')}
            title={localize('DBot')}
            Icon={StyledDbot}
            content={[localize('Automated trading at your fingertips. No coding needed.')]}
            is_inline_icon
            min_height="12.4rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DMT5Card = ({ is_selected, word_break_cover }) => (
    <StyledLink ariaLabel={localize('DMT5')} to="/dmt5">
        <Card
            cover_background="var(--color-green)"
            cover_content={localize('Discover DMT5 now')}
            title={localize('DMT5')}
            Icon={StyledDmt5}
            content={[
                localize(
                    'Trade on the Deriv MetaTrader 5 (DMT5) platform, the choice of professionals worldwide.',
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
            Icon={StyledSmarttrader}
            content={[
                <Localize
                    key={0}
                    translate_text="Trade the world’s markets on <0>Binary.com</0>’s classic platform."
                    components={[<LocalizedLinkText key={0} to="home" external is_binary_link />]}
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

export const OtherPlatform = ({ header, subHeader, exclude, is_nav }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <StyledHeader size="var(--text-size-l)" align="center" lh="5rem">
                    {header ? header : localize('Check out our other platforms')}
                </StyledHeader>
                {subHeader && (
                    <Header as="h4" align="center" weight="500" max_width="67.6rem" m="0.8rem auto">
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
            {exclude.toLowerCase() !== 'dmt5' && <DMT5Card />}
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
    subHeader: PropTypes.string,
}

const DMT5NavCard = styled(NavCard)`
    @media (max-width: 1250px) {
        margin-top: 3.2rem;
    }
`

export const NavPlatform = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={DTrader}
            content={
                <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
            }
            title={<Localize translate_text="DTrader" />}
            style={{ marginRight: '5.6rem' }}
            to="/dtrader"
        />

        <DMT5NavCard
            icon={DMT5}
            content={
                <Localize translate_text="Trade on the Deriv MetaTrader 5 (DMT5) platform, the choice of professionals worldwide." />
            }
            title={<Localize translate_text="DMT5" />}
            to="/dmt5"
        />
        <NavCard
            icon={DBot}
            content={
                <Localize translate_text="Automated trading at your fingertips. No coding needed." />
            }
            title={<Localize translate_text="DBot" />}
            to="/dbot"
            style={{ marginTop: '3.2rem', marginRight: '5.6rem' }}
        />
        <NavCard
            icon={Smarttrader}
            content={
                <Localize translate_text="Trade the world’s markets on Binary.com’s classic platform." />
            }
            title={<Localize translate_text="SmartTrader" />}
            to="trading"
            is_smarttrader_link
            style={{ marginTop: '3.2rem' }}
            external="true"
            target="_blank"
            otherLinkProps={{ rel: 'noopener noreferrer' }}
        />
    </Flex>
)

export const NavMarket = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={Forex}
            content={
                <Localize translate_text="Trade the world’s largest financial market with popular forex pairs." />
            }
            title={<Localize translate_text="Forex" />}
            style={{ marginRight: '5.6rem' }}
            to="/markets#forex"
        />
        <NavCard
            icon={StockIndices}
            content={
                <Localize translate_text="Predict broader market trends and diversify your risk with stock indices." />
            }
            title={<Localize translate_text="Stock indices" />}
            to="/markets#stock"
        />
        <NavCard
            icon={Commodities}
            content={
                <Localize translate_text="Trade natural resources that are central to the world's economy." />
            }
            title={<Localize translate_text="Commodities" />}
            to="/markets#commodities"
            style={{ marginTop: '3.2rem', marginRight: '5.6rem' }}
        />
        <NavCard
            icon={SyntheticIndices}
            content={
                <Localize translate_text="Enjoy synthetic markets that emulate real-world market movements." />
            }
            title={<Localize translate_text="Synthetic indices" />}
            to="/markets#synthetic"
            style={{ marginTop: '3.2rem' }}
        />
    </Flex>
)

export const NavCompany = () => (
    <Flex wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink title={localize('Our story')} to="/about/#story" />
        <CardLink title={localize('Contact us')} to="/contact-us/" />
        <CardLink title={localize('Our leadership')} to="/about/#leadership" />
        <CardLink title={localize('Careers')} to="/careers/" />
        <CardLink title={localize('Why choose us?')} to="/why-choose-us/" />
    </Flex>
)

export const NavResources = () => (
    <Flex wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink title={localize('Help centre')} to="/help-centre/" />
        <CardLink title={localize('Payment methods')} to="/payment-methods/" />
        <CardLink title={localize('Community')} to={community_url} target="_blank" />
        {/* TODO: add this when blog is ready */}
        {/* <CardLink title={localize('Blog')} to="/blog/" /> */}
    </Flex>
)
