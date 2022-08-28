import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer, Desktop, Mobile } from 'components/containers'
import { Carousel, Header, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
//TODO: using temp svg as a function for having dynamic id
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import Basket from 'images/svg/custom/basket-nav.svg'
import Commodities from 'images/svg/markets/commodities-new.svg'
import Cryptocurrencies from 'images/svg/markets/cryptocurrencies-new.svg'
import Forex from 'images/svg/markets/forex-new.svg'
import StockIndices from 'images/svg/markets/stock-new.svg'
import SyntheticIndices from 'images/svg/markets/synthetic-new.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'
import { Tstring } from 'types/generics'

type MarketType = {
    icon: string
    title: Tstring
    content: Tstring
    to: string
    id: string
}
type MarketsType = {
    forex: MarketType
    synthetic_indices: MarketType
    stock_indices: MarketType
    commodities: MarketType
    cryptocurrencies: MarketType
    basket_indices: MarketType
}
type CardProps = {
    market: string
}
type OtherMarketsProps = {
    except: string
}
const markets_type: MarketsType = {
    forex: {
        icon: Forex,
        title: '_t_Forex_t_',
        content:
            '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
        to: '/markets/forex/',
        id: 'marketforexothermarkets',
    },
    synthetic_indices: {
        icon: SyntheticIndices,
        title: '_t_Synthetic indices_t_',
        content:
            '_t_Synthetic indices trading lets you benefit from correctly predicting the price movements of our proprietary indices that simulate real-world market movements._t_',
        to: '/markets/synthetic/',
        id: 'marketsyntheticothermarkets',
    },
    stock_indices: {
        icon: StockIndices,
        title: '_t_Stocks & indices_t_',
        content:
            '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
        to: '/markets/stock/',
        id: 'marketstockothermarkets',
    },

    commodities: {
        icon: Commodities,
        title: '_t_Commodities_t_',
        content:
            '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
        to: '/markets/commodities/',
        id: 'marketcommoditiesothermarket',
    },

    cryptocurrencies: {
        icon: Cryptocurrencies,
        title: '_t_Cryptocurrencies_t_',
        content:
            '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
        to: '/markets/cryptocurrencies/',
        id: 'marketcryptocurrenciesothermarket',
    },
    basket_indices: {
        icon: Basket,
        title: '_t_Basket indices_t_',
        content:
            '_t_In trading basket indices, the change in the value of one currency is measured against a basket of the most liquid currencies in the world._t_',
        to: '/markets/basket-indices/',
        id: 'marketbasket_indicesothermarket',
    },
}

const LearnMore = styled(LocalizedLink)`
    opacity: ${(props) => (props.visibility === 'true' ? '1' : '0')};
    width: 142px;
    height: 40px;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    bottom: -33px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.1s linear;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);

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
    position: relative;
    width: 100%;
    max-width: 35.25rem;
    height: 100%;
    padding: 24px 24px 44px;
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
    min-width: 282px;
    border-radius: 8px;
    background-color: var(--color-white);
    top: 0;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
        height: 340px;
        border-radius: 0 0 8px 8px;
    }
    ${LearnMore} {
        img {
            transform: rotate(0);
            width: 16px;
            height: 16px;
        }
    }
`
const settings = {
    options: {
        draggable: true,
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        align: 1,
    },
    container_style: {
        maxWidth: '100%',
        margin: '0 auto',
        overflow: 'hidden',
    },
    slide_style: {
        width: '282px',
        height: '380px',
        marginRight: '24px',
        paddingRight: '50px',
        paddingLeft: '25px',
        position: 'relative',
    },
    last_slide_no_spacing: false,
}

const Card = ({ market }: CardProps) => {
    const [button_visibility, setButtonVisibility] = React.useState('false')
    const Icon = markets_type[market].icon

    return (
        <StyledFlex
            direction="column"
            max_width="28.2rem"
            height="340px"
            width="282px"
            p="2.4rem 2.4rem 4rem"
            jc="flex-start"
            position="relative"
            onMouseEnter={() => setButtonVisibility('true')}
            onMouseLeave={() => setButtonVisibility('false')}
        >
            <div>
                <img src={Icon} alt="" width="64" height="64" />
            </div>

            <Text size="16px" weight="bold" mt="1.6rem">
                <Localize translate_text={markets_type[market].title} />
            </Text>
            <Text size="16px" mt="0.8rem">
                <Localize translate_text={markets_type[market].content} />
            </Text>
            <LearnMore to={markets_type[market].to} visibility={button_visibility}>
                <Text mr="1rem">{localize('_t_Learn more_t_')}</Text>
                <img src={Arrow} alt="" />
            </LearnMore>
        </StyledFlex>
    )
}

const MobileCard = ({ market }: CardProps) => {
    const Icon = markets_type[market].icon
    return (
        <MobileCardWrapper m="5.5rem auto 0 auto" jc="flex-start">
            <Flex width="100%" jc="space-between" mb="2.4rem" ai="center">
                <Text size="18px" weight="bold">
                    <Localize translate_text={markets_type[market].title} />
                </Text>
                <img src={Icon} alt="" width="64" height="64" />
            </Flex>
            <Text size="14px">
                <Localize translate_text={markets_type[market].content} />
            </Text>
            <LearnMore to={markets_type[market].to} visibility="true">
                <Text>{localize('_t_Learn more_t_')}</Text>
                <img src={Arrow} alt="" />
            </LearnMore>
        </MobileCardWrapper>
    )
}
const MarketsWrapper = styled(Flex)`
    flex-direction: column;
    padding: 0 0 80px 0;
    max-width: 100%;
`

const StyledHeader = styled(Header)`
    padding-left: 120px;
    margin-bottom: 4rem;
    @media (min-width: 1440px) {
        padding: auto;
        text-align: center;
    }
    @media ${device.laptopM} {
        padding-left: 0;
        margin: auto;
        text-align: center;
        margin-bottom: 2rem;
    }
`
const MobileCardContainer = styled(Flex)`
    div:first-child {
        margin-top: 0;
    }
`

const OtherMarkets = ({ except }: OtherMarketsProps) => {
    const { is_uk, is_eu } = useCountryRule()

    const markets = [
        '',
        'forex',
        'synthetic_indices',
        'stock_indices',
        'cryptocurrencies',
        'basket_indices',
        'commodities',
        '',
    ]

    const eu_markets = [
        '',
        'forex',
        'synthetic_indices',
        'stock_indices',
        'cryptocurrencies',
        'commodities',
        '',
    ]

    const uk_markets = ['', 'forex', 'stock_indices', 'commodities', '']

    const filteredMarkets = (is_eu ? eu_markets : is_uk ? uk_markets : markets).filter(
        (market) => market !== except,
    )

    return (
        <SectionContainer padding="100px 0" margin="auto" background="#f9fbff">
            <Desktop>
                <MarketsWrapper tablet_jc="center">
                    <StyledHeader as="h3" type="section-title" align="left">
                        {localize('_t_Other markets you might be interested in_t_')}
                    </StyledHeader>
                    <Carousel has_autoplay autoplay_interval={4000} {...settings}>
                        {filteredMarkets.map((market) =>
                            market === '' ? <div></div> : <Card market={market} key={market} />,
                        )}
                    </Carousel>
                </MarketsWrapper>
            </Desktop>
            <Mobile>
                <StyledHeader as="h3" type="section-title" align="left">
                    {localize('_t_Other markets you might be interested in_t_')}
                </StyledHeader>
                <MobileCardContainer direction="column">
                    {filteredMarkets.map((market) =>
                        except === market || market === '' ? null : (
                            <MobileCard market={market} key={market} />
                        ),
                    )}
                </MobileCardContainer>
            </Mobile>
        </SectionContainer>
    )
}

export default OtherMarkets
