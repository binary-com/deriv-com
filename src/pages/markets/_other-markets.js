import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, SectionContainer, Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import Box from 'components/containers/box'
import Commodities from 'components/svgs/_market-commodities.js'
//TODO: using temp svg as a function for having dynamic id
import Forex from 'components/svgs/_market-forex.js'
import StockIndices from 'components/svgs/_market-stock.js'
import SyntheticIndices from 'components/svgs/_market-synthetic.js'
import Arrow from 'images/svg/arrow-right.svg'
import device from 'themes/device'

const markets_type = {
    forex: {
        icon: Forex,
        title: <Localize translate_text="Forex" />,
        content: (
            <Localize translate_text="Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market." />
        ),
        to: '/markets#forex',
        id: 'marketforexothermarkets',
    },
    Synthetic_Indices: {
        icon: SyntheticIndices,
        title: <Localize translate_text="Synthetic indices" />,
        content: (
            <Localize translate_text="Synthetic indices are our proprietary indices that simulate real-world market movements while being free of market and liquidity risks." />
        ),
        to: '/markets#synthetic',
        id: 'marketsyntheticothermarkets',
    },
    stock_indices: {
        icon: StockIndices,
        title: <Localize translate_text="Stock indices" />,
        content: (
            <Localize translate_text="Stock indices trading allows you to profit from the price movements in a market without buying the underlying assets." />
        ),
        to: '/markets#stock',
        id: 'marketstockothermarkets',
    },

    commodities: {
        icon: Commodities,
        title: <Localize translate_text="Commodities" />,
        content: (
            <Localize translate_text="Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil." />
        ),
        to: '/markets#commodities',
        id: 'marketcommoditiesothermarket',
    },
}
const LearnMore = styled(LocalizedLink)`
    opacity: ${(props) => (props.visibility === 'true' ? '1' : '0')};
    width: 142px;
    height: 40px;
    border-radius: 23px;
    background-color: #f4f4f6;
    position: absolute;
    bottom: -20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.1s linear;

    ${Text} {
        font-weight: bold;
        color: var(--color-red);
    }

    @media ${device.tabletL} {
        ${Text} {
            font-size: var(--text-size-sm);
            margin-right: 1rem;
        }
    }
`
const MobileCardWrapper = styled(Flex)`
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    min-height: 32.5rem;
    position: relative;
    width: 100%;
    max-width: 35.25rem;
    height: 100%;
    padding: 3rem;
    align-items: center;
    flex-direction: column;

    svg {
        width: 48px;
        height: 48px;
    }
    ${LearnMore} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`
const Section = styled(SectionContainer)`
    padding: 8rem 0 12rem 12rem;

    @media ${device.laptopM} {
        padding: 8rem 0 8.8rem 0;
    }
    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`
const StyledFlex = styled(Flex)`
    height: fit-content;
    border-radius: 1.6rem;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    top: 0;
    min-height: 29.6rem;

    ${LearnMore} {
        svg {
            transform: rotate(0);
            width: 16px;
            height: 16px;
        }
    }
`
const Card = ({ name }) => {
    const [button_visibility, setButtonVisibility] = React.useState('false')
    const Icon = markets_type[name].icon

    return (
        <StyledFlex
            direction="column"
            height="auto"
            max_width="28.2rem"
            width="100%"
            p="2.4rem 2.4rem 4rem"
            jc="flex-start"
            position="relative"
            onMouseEnter={() => setButtonVisibility('true')}
            onMouseLeave={() => setButtonVisibility('false')}
        >
            <div>
                <Icon dynamic_id={markets_type[name].id} width="64px" height="64px" />
            </div>

            <Text weight="bold" mt="1.6rem">
                {markets_type[name].title}
            </Text>
            <Text mt="0.8rem">{markets_type[name].content}</Text>
            <LearnMore to={markets_type[name].to} visibility={button_visibility}>
                <Text mr="1rem">{localize('Learn more')}</Text>
                <Arrow />
            </LearnMore>
        </StyledFlex>
    )
}
const MobileCard = ({ name }) => {
    const Icon = markets_type[name].icon
    return (
        <MobileCardWrapper m="5.5rem auto 0 auto" jc="flex-start">
            <Flex width="100%" jc="space-between" mb="3rem" ai="center">
                <Text size="2rem" weight="bold">
                    {localize(markets_type[name].title)}
                </Text>
                <Icon dynamic_id={markets_type[name].id + '_mobile'} />
            </Flex>
            <Text size="2rem">{markets_type[name].content}</Text>
            <LearnMore to={markets_type[name].to} visibility="true">
                <Text>{localize('Learn more')}</Text>
                <Arrow />
            </LearnMore>
        </MobileCardWrapper>
    )
}
const MarketsWrapper = styled(Flex)`
    @media ${device.laptopM} {
        flex-direction: column;
        margin: auto;
    }
`
const Wrapper = styled(Box)`
    position: relative;
    max-width: 103.8rem;
    width: 100%;
    height: 19.2rem;
    background: rgba(133, 172, 176, 0.24);
    border-radius: 16px;
`
const CardWrapper = styled(Flex)`
    left: 2.4rem;
    top: 4rem;
`
const StyledHeader = styled(Header)`
    max-width: 25.8rem;

    @media ${device.laptopM} {
        text-align: center;
        max-width: unset;
    }
    @media ${device.tabletL} {
        max-width: 28.2rem;
        margin: 0 auto;
        font-size: 4rem;
        margin-bottom: 2rem;
    }
`
const MobileCardContainer = styled(Flex)`
    div:first-child {
        margin-top: 0;
    }
`
const OtherMarkets = ({ except }) => {
    const markets = ['forex', 'Synthetic_Indices', 'stock_indices', 'commodities']
    return (
        <Section>
            <Show.Desktop>
                <MarketsWrapper tablet_jc="center">
                    <StyledHeader as="h3" align="left">
                        {localize('Other markets you might be interested in')}
                    </StyledHeader>
                    <Box position="relative" width="100%" max_width="103.8rem" height="32rem">
                        <Wrapper>
                            <CardWrapper
                                max_width="93rem"
                                jc="space-around"
                                position="absolute"
                                height="100%"
                            >
                                {markets.map((market) =>
                                    market !== except ? <Card name={market} key={market} /> : null,
                                )}
                            </CardWrapper>
                        </Wrapper>
                    </Box>
                </MarketsWrapper>
            </Show.Desktop>
            <Show.Mobile>
                <StyledHeader as="h3" align="left">
                    {localize('Other markets you might be interested in')}
                </StyledHeader>
                <MobileCardContainer direction="column">
                    {markets.map((market) =>
                        market !== except ? <MobileCard name={market} key={market} /> : null,
                    )}
                </MobileCardContainer>
            </Show.Mobile>
        </Section>
    )
}
OtherMarkets.propTypes = {
    except: PropTypes.string,
}
Card.propTypes = {
    name: PropTypes.string,
}
MobileCard.propTypes = {
    name: PropTypes.string,
}
export default OtherMarkets
