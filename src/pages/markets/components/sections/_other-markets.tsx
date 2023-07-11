import React from 'react'
import styled from 'styled-components'
import { Flex, Desktop, Mobile } from 'components/containers'
import { Carousel, CarouselProps, Header, ImageWithDireciton, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
//TODO: using temp svg as a function for having dynamic id
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import Commodities from 'images/svg/markets/commodities-new.svg'
import Cryptocurrencies from 'images/svg/markets/cryptocurrencies-new.svg'
import Forex from 'images/svg/markets/forex-new.svg'
import StockIndices from 'images/svg/markets/stock-new.svg'
import DerivedFX from 'images/svg/markets/derived-fx.svg'
import useRegion from 'components/hooks/use-region'
import device from 'themes/device'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { TString } from 'types/generics'

type MarketType = {
    id: string
    to: string
    title: TString
    content: TString
    content_eu?: TString
    icon: () => React.ReactElement
}

type MarketsType = Record<
    'derived' | 'forex' | 'stock_indices' | 'commodities' | 'cryptocurrencies',
    MarketType
>

type CardProps = {
    market: string
}

type OtherMarketsProps = {
    except: string
}

type LearnMoreProps = {
    visibility: string
}

const markets_type: MarketsType = {
    forex: {
        icon: () => <img src={Forex} alt={localize('_t_Forex_t_')} width="44" height="44" />,
        title: '_t_Forex_t_',
        content:
            '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
        content_eu:
            '_t_Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market._t_',
        to: '/markets/forex/',
        id: 'marketforexothermarkets',
    },
    derived: {
        icon: () => <img src={DerivedFX} alt={localize('_t_Derived_t_')} width="44" height="44" />,
        title: '_t_Derived_t_',
        content:
            '_t_Derived trading gives you a chance to make a profit from correctly predicting the price movement of instruments that mimic characteristics of financial markets or are derived from them._t_',
        content_eu:
            '_t_Derived trading gives you a chance to make a profit from correctly predicting the price movement of instruments that mimic characteristics of financial markets._t_',
        to: '/markets/derived-fx/',
        id: 'marketderivedothermarkets',
    },
    stock_indices: {
        icon: () => (
            <img
                src={StockIndices}
                alt={localize('_t_Stocks & indices_t_')}
                width="44"
                height="44"
            />
        ),
        title: '_t_Stocks & indices_t_',
        content:
            '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
        content_eu:
            '_t_Stocks & indices trading allows you to profit from the price movements in a market without buying the underlying assets._t_',
        to: '/markets/stock/',
        id: 'marketstockothermarkets',
    },
    commodities: {
        icon: () => (
            <img src={Commodities} alt={localize('_t_Commodities_t_')} width="44" height="44" />
        ),
        title: '_t_Commodities_t_',
        content:
            '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
        content_eu:
            '_t_Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil._t_',
        to: '/markets/commodities/',
        id: 'marketcommoditiesothermarket',
    },
    cryptocurrencies: {
        icon: () => (
            <img
                src={Cryptocurrencies}
                alt={localize('_t_Cryptocurrencies_t_')}
                width="44"
                height="44"
            />
        ),
        title: '_t_Cryptocurrencies_t_',
        content:
            '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
        content_eu:
            '_t_Crypto trading gives you an opportunity to benefit from correctly predicting the price movements of cryptocurrencies without buying them._t_',
        to: '/markets/cryptocurrencies/',
        id: 'marketcryptocurrenciesothermarket',
    },
}

const LearnMore = styled(LocalizedLink)<LearnMoreProps>`
    opacity: 1;
    width: 150px;
    height: 40px;
    position: absolute;
    bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    left: -13rem;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.1s linear;

    ${Text} {
        font-weight: normal;
        color: var(--color-red);
        font-size: 1.4rem;
    }

    @media ${device.tabletL} {
        left: -23rem;
        bottom: 0;
        margin-bottom: 1rem;

        ${Text} {
            font-size: var(--text-size-xs);
            margin-right: 1rem;
        }
    }
    @media ${device.mobileL} {
        left: -65%;

        ${Text} {
            font-size: var(--text-size-xxs);
        }
    }

    @media ${device.mobileM} {
        left: -60%;
    }
`
const MobileCardWrapper = styled(Flex)`
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    position: relative;
    width: 100%;
    max-width: 38.25rem;
    padding: 24px 24px 44px;
    align-items: center;
    border-radius: 16px;
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
        @media ${device.mobileL} {
            img {
                width: 6.5px;
                height: 12px;
            }
        }
    }
`
const StyledFlex = styled(Flex)`
    min-width: 282px;
    border-radius: 16px;
    height: 99%;
    background-color: var(--color-white);
    top: 0;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);

    ${LearnMore} {
        img {
            width: 16px;
            height: 16px;
        }
    }

    @media ${device.mobileL} {
        height: 42rem;
    }
`

const MarketsWrapper = styled(Flex)`
    flex-direction: column;
    padding: 0 0 80px 0;
    max-width: 100%;
`
const StyledHeader = styled(Header)`
    padding: auto;
    text-align: center;
    margin: 12rem 0 2.4rem;

    @media ${device.tabletL} {
        padding-left: 0;
        text-align: center;
        width: 300px;
        margin: 4rem auto;
    }
`
const MobileCardContainer = styled(Flex)`
    div:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        height: unset;
    }
    @media ${device.mobileL} {
        width: 90%;
        margin-inline: auto;
    }
`
const StyledCarousel = styled.div`
    height: 40rem;
    @media ${device.tabletL} {
        height: 100%;
    }
`

const Card = ({ market }: CardProps) => {
    const [button_visibility, setButtonVisibility] = React.useState('false')
    const Icon = markets_type[market].icon
    const { is_eu } = useRegion()

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
                <Icon dynamic_id={markets_type[market].id} width="44px" height="44px" />
            </div>

            <Text size="16px" weight="bold" mt="1.6rem">
                <Localize translate_text={markets_type[market].title} />
            </Text>
            <Text size="16px" mt="0.8rem">
                <Localize
                    translate_text={
                        is_eu ? markets_type[market].content_eu : markets_type[market].content
                    }
                />
            </Text>
            <LearnMore to={markets_type[market].to} visibility={button_visibility}>
                <Text mr="1rem">
                    <Localize translate_text="_t_Learn more_t_" />
                </Text>
                <ImageWithDireciton src={Arrow} alt={localize('_t_Arrow_t_')} />
            </LearnMore>
        </StyledFlex>
    )
}

const MobileCard = ({ market }: CardProps) => {
    const Icon = markets_type[market].icon

    return (
        <MobileCardWrapper m="5.5rem auto 0 auto" jc="flex-start">
            <Flex width="100%" ai="start" direction="column">
                <Icon dynamic_id={markets_type[market].id + '_mobile'} />
                <Text size="18px" mt="2rem" mb="1rem" weight="bold">
                    <Localize translate_text={markets_type[market].title} />
                </Text>
            </Flex>
            <Text size="14px" mb="3rem">
                <Localize translate_text={markets_type[market].content} />
            </Text>
            <LearnMore to={markets_type[market].to} visibility="true">
                <Text>
                    <Localize translate_text="_t_Learn more_t_" />
                </Text>
                <ImageWithDireciton src={Arrow} alt={localize('_t_Arrow_t_')} />
            </LearnMore>
        </MobileCardWrapper>
    )
}

const OtherMarkets = ({ except }: OtherMarketsProps) => {
    const { is_eu } = useRegion()
    const markets = ['', 'forex', 'derived', 'stock_indices', 'cryptocurrencies', 'commodities', '']
    const eu_markets = [
        '',
        'forex',
        'derived',
        'stock_indices',
        'cryptocurrencies',
        'commodities',
        '',
    ]

    const filteredMarkets = (is_eu ? eu_markets : markets).filter((market) => market !== except)
    const lang_direction = useLangDirection()

    const settings: CarouselProps = {
        options: {
            draggable: true,
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: 1,
            direction: lang_direction,
        },
        container_style: {
            maxInlineSize: '100%',
            marginBlock: '0',
            marginInline: 'auto',
            overflow: 'hidden',
        },
        slide_style: {
            inlineSize: '282px',
            blockSize: '380px',
            marginInlineEnd: '24px',
            paddingInlineEnd: '50px',
            paddingInlineStart: '25px',
            position: 'relative',
        },
        last_slide_no_spacing: false,
    }

    return (
        <>
            <StyledHeader as="h2" type="section-title" align="start">
                <Localize translate_text="_t_Other markets you might be interested in_t_" />
            </StyledHeader>
            <Desktop>
                <MarketsWrapper tablet_jc="center">
                    <StyledCarousel>
                        <Carousel has_autoplay autoplay_interval={4000} {...settings}>
                            {filteredMarkets.map((market, index) =>
                                market === '' ? (
                                    <div key={market + index}></div>
                                ) : (
                                    <Card market={market} key={market} />
                                ),
                            )}
                        </Carousel>
                    </StyledCarousel>
                </MarketsWrapper>
            </Desktop>
            <Mobile>
                <StyledCarousel>
                    <MobileCardContainer direction="column">
                        {filteredMarkets.map((market, index) =>
                            except === market || market === '' ? null : (
                                <MobileCard market={market} key={market + index} />
                            ),
                        )}
                    </MobileCardContainer>
                </StyledCarousel>
            </Mobile>
        </>
    )
}

export default OtherMarkets
