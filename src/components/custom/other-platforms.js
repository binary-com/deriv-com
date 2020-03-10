import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import { Card, Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`

const StyledDbot = styled(DBot)`
    width: 72px;
    height: 72px;
`

const StyledDmt5 = styled(DMT5)`
    width: 72px;
    height: 72px;
`

const StyledDTrader = styled(DTrader)`
    width: 72px;
    height: 72px;
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

const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
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

const NavContainer = styled(Flex)`
    & div:first-child h4::first-line {
        word-spacing: 11rem;
    }
    & article {
        width: 33.2rem;
        box-shadow: none;
    }
    & p {
        font-size: 1.3rem;
    }
`
export const TraderCard = ({ is_selected }) => (
    <StyledLink to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={StyledDTrader}
            content={[localize('The platform to start with. It’s powerful yet easy to use.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
        />
    </StyledLink>
)
const cardProptypes = {
    is_selected: PropTypes.bool,
}
TraderCard.propTypes = { ...cardProptypes }

export const BotCard = ({ is_selected }) => (
    <StyledLink to="/dbot">
        <Card
            cover_background="var(--color-orange)"
            cover_content={localize('Discover DBot now')}
            title={localize('DBot')}
            Icon={StyledDbot}
            content={[localize('Automated trading at your fingertips. No coding needed.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
        />
    </StyledLink>
)
BotCard.propTypes = { ...cardProptypes }

export const DMT5Card = ({ is_selected }) => (
    <StyledLink to="/dmt5">
        <Card
            cover_background="var(--color-green)"
            cover_content={localize('Discover DMT5 now')}
            title={localize('DMT5')}
            Icon={StyledDmt5}
            content={[localize('The platform of choice for professionals worldwide.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
        />
    </StyledLink>
)
DMT5Card.propTypes = { ...cardProptypes }

export const SmarttraderCard = ({ is_selected }) => (
    <StyledLink to="https://smarttrader.deriv.app" external>
        <Card
            cover_background="var(--color-blue-3)"
            cover_content={localize('Discover SmartTrader now')}
            title={localize('SmartTrader')}
            Icon={StyledSmarttrader}
            content={[localize('Trade the world’s markets with a simple and familiar platform.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
        />
    </StyledLink>
)
SmarttraderCard.propTypes = { ...cardProptypes }

export const NavPlatform = () => (
    <NavContainer wrap="wrap">
        <TraderCard />
        <BotCard />
        <DMT5Card />
        <SmarttraderCard />
    </NavContainer>
)

export const OtherPlatform = ({ header, subHeader, exclude, is_nav }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                    {header ? header : localize('Check out our other platforms')}
                </StyledHeader>
                {subHeader && (
                    <StyledSubHeader as="h4" align="center" weight="500" maxWidth="67.6rem">
                        {localize(
                            'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                        )}
                    </StyledSubHeader>
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

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    is_nav: PropTypes.bool,
    subHeader: PropTypes.string,
}
