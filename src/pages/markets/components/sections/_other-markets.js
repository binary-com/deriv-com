import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, SectionContainer, Show } from 'components/containers'
import Box from 'components/containers/box'
import { Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
//TODO: using temp svg as a function for having dynamic id
import Arrow from 'images/svg/arrow-right.svg'
import Commodities from 'images/svg/markets/commodities.svg'
import Cryptocurrencies from 'images/svg/markets/cryptocurrencies.svg'
import Forex from 'images/svg/markets/forex.svg'
import StockIndices from 'images/svg/markets/stock.svg'
import SyntheticIndices from 'images/svg/markets/synthetic.svg'
import device from 'themes/device'

const markets_type = {
    forex: {
        // eslint-disable-next-line react/display-name
        icon: () => <img src={Forex} alt="forex" width="64" height="64" />,
        title: <Localize translate_text="Forex" />,
        content: (
            <Localize translate_text="Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market." />
        ),
        to: '/markets/forex/',
        id: 'marketforexothermarkets',
    },
    Synthetic_Indices: {
        // eslint-disable-next-line react/display-name
        icon: () => <img src={SyntheticIndices} alt="synthetic" width="64" height="64" />,
        title: <Localize translate_text="Synthetic indices" />,
        content: (
            <Localize translate_text="Synthetic indices trading lets you benefit from correctly predicting the price movements of our proprietary indices that simulate real-world market movements." />
        ),
        to: '/markets/synthetic/',
        id: 'marketsyntheticothermarkets',
    },
    stock_indices: {
        // eslint-disable-next-line react/display-name
        icon: () => <img src={StockIndices} alt="stock" width="64" height="64" />,
        title: <Localize translate_text="Stocks & indices" />,
        content: (
            <Localize translate_text="Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets." />
        ),
        to: '/markets/stock/',
        id: 'marketstockothermarkets',
    },

    commodities: {
        // eslint-disable-next-line react/display-name
        icon: () => <img src={Commodities} alt="commodities" width="64" height="64" />,
        title: <Localize translate_text="Commodities" />,
        content: (
            <Localize translate_text="Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil." />
        ),
        to: '/markets/commodities/',
        id: 'marketcommoditiesothermarket',
    },

    cryptocurrencies: {
        // eslint-disable-next-line react/display-name
        icon: () => <img src={Cryptocurrencies} alt="cryptocurrencies" width="64" height="64" />,
        title: <Localize translate_text="Cryptocurrencies" />,
        content: (
            <Localize translate_text="Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them." />
        ),
        to: '/markets/cryptocurrencies/',
        id: 'marketcryptocurrenciesothermarket',
    },
}
const LearnMore = styled(LocalizedLink)`
    opacity: ${(props) => (props.visibility === 'true' ? '1' : '0')};
    width: 142px;
    height: 40px;
    border-radius: 23px;
    background-color: var(--color-grey-18);
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

    img {
        width: 48px;
        height: 48px;
    }
    ${LearnMore} {
        img {
            width: 16px;
            height: 16px;
        }
    }
`
const StyledFlex = styled(Flex)`
    height: auto;
    border-radius: 1.6rem;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    top: 0;
    min-height: 29.6rem;

    ${LearnMore} {
        img {
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
                {localize(markets_type[name].title)}
            </Text>
            <Text mt="0.8rem">{markets_type[name].content}</Text>
            <LearnMore to={markets_type[name].to} visibility={button_visibility}>
                <Text mr="1rem">{localize('Learn more')}</Text>
                <img src={Arrow} alt="arrow right" />
            </LearnMore>
        </StyledFlex>
    )
}
const MobileCard = ({ name }) => {
    const Icon = markets_type[name].icon
    return (
        <MobileCardWrapper m="5.5rem auto 0 auto" jc="flex-start">
            <Flex width="100%" jc="space-between" mb="2.4rem" ai="center">
                <Text size="18px" weight="bold">
                    {localize(markets_type[name].title)}
                </Text>
                <Icon dynamic_id={markets_type[name].id + '_mobile'} />
            </Flex>
            <Text size="2rem">{markets_type[name].content}</Text>
            <LearnMore to={markets_type[name].to} visibility="true">
                <Text>{localize('Learn more')}</Text>
                <img src={Arrow} alt="arrow right" />
            </LearnMore>
        </MobileCardWrapper>
    )
}
const MarketsWrapper = styled(Flex)`
    flex-direction: column;
    margin: auto;
    max-width: 120rem;
`
const Wrapper = styled(Box)`
    width: 100%;
    height: 19.2rem;
    border-radius: 16px;
`
const CardWrapper = styled(Flex)`
    left: 2.4rem;
    top: 4rem;
`
const StyledHeader = styled(Header)`
    margin-left: 2rem;

    @media ${device.laptopM} {
        margin: auto;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media ${device.laptop} {
        max-width: 300px;
    }
`
const MobileCardContainer = styled(Flex)`
    div:first-child {
        margin-top: 0;
    }
`
const OtherMarkets = ({ except }) => {
    const markets = [
        'forex',
        'Synthetic_Indices',
        'stock_indices',
        'commodities',
        'cryptocurrencies',
    ]
    return (
        <SectionContainer margin="auto" background="white">
            <Show.Desktop max_width="laptopM">
                <MarketsWrapper tablet_jc="center">
                    <StyledHeader as="h3" type="section-title" align="left">
                        {localize('Other markets you might be interested in')}
                    </StyledHeader>
                    <Box position="relative" width="100%" max_width="120rem" height="32rem">
                        <Wrapper>
                            <CardWrapper
                                max_width="120rem"
                                jc="space-around"
                                position="absolute"
                                max_height="320rem"
                            >
                                {markets.map((market) =>
                                    market !== except ? <Card name={market} key={market} /> : null,
                                )}
                            </CardWrapper>
                        </Wrapper>
                    </Box>
                </MarketsWrapper>
            </Show.Desktop>
            <Show.Mobile min_width="laptopM">
                <StyledHeader as="h3" type="section-title" align="left">
                    {localize('Other markets you might be interested in')}
                </StyledHeader>
                <MobileCardContainer direction="column">
                    {markets.map((market) =>
                        market !== except ? <MobileCard name={market} key={market} /> : null,
                    )}
                </MobileCardContainer>
            </Show.Mobile>
        </SectionContainer>
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
