import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex, SectionContainer, Desktop, Mobile } from 'components/containers'
import { LocalizedLink, Localize, localize } from 'components/localization'
import { Carousel, CarouselProps, Header, QueryImage, Text } from 'components/elements'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { useWindowSize } from 'components/hooks/use-window-size'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { TString } from 'types/generics'

type CarouselItemContainerProps = {
    gradient_start: string
    gradient_end: string
}

type CarouselItemProps = {
    header: TString
    description: TString
    image: ImageDataLike
    is_mobile: boolean
    gradient_start: string
    gradient_end: string
    url: string
}

type TMarketData = {
    header: TString
    description: TString
    gradient_start: string
    gradient_end: string
    img_name: string
    to: string
}

const FoldWrapper = styled(SectionContainer)`
    max-width: 100%;
    padding: 120px 20px;

    @media ${device.tablet} {
        padding: 40px 0 12px;
    }
`

const FoldContainer = styled(Flex)`
    margin: 0 auto;
`

const ItemWrapper = styled.div`
    z-index: 4;
    height: 320px;
    position: relative;
`

const CarouselItemContainer = styled(Flex)<CarouselItemContainerProps>`
    position: relative;
    border-radius: 8px;
    color: white;
    overflow: hidden;
    padding: 32px 32px 0;
    background: linear-gradient(
        233.94deg,
        ${(props) => props.gradient_start} 2.4%,
        ${(props) => props.gradient_end} 81.78%
    );
    z-index: 1;

    @media (min-width: 1440px) {
        padding: 1.6rem 1.6rem 0;
    }
`

const CarouselItemImageDesktop = styled(QueryImage)<{ $hovered: boolean }>`
    position: absolute;
    width: 220px;
    top: ${(props) => (props.$hovered ? '220px' : '91px')};
    right: 31px;
    transition: ease-in 0.3s;
    z-index: 3;
`

const CarouselItemImageMobile = styled(QueryImage)`
    position: absolute;
    width: 220px;
    top: 91px;
    right: 31px;
    z-index: 3;
`

const StyledDescription = styled(Text)<{ $hovered: boolean }>`
    visibility: ${(props) => (props.$hovered ? 'visible' : 'hidden')};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
    z-index: 2;
    color: white;
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index: 40;
`

const market_data: TMarketData[] = [
    {
        header: '_t_Forex_t_',
        description:
            '_t_Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day._t_',
        img_name: 'market_forex',
        to: '/markets/forex/',
        gradient_start: '#661B20',
        gradient_end: '#190708',
    },
    {
        header: '_t_Derived_t_',
        description:
            '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
        img_name: 'market_derived',
        to: '/markets/synthetic/',
        gradient_start: '#20403A',
        gradient_end: '#08100E',
    },
    {
        header: '_t_Stocks & indices_t_',
        description:
            '_t_Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market._t_',
        img_name: 'market_stocks_indices',
        to: '/markets/stock/',
        gradient_start: '#2A2040',
        gradient_end: '#0A0810',
    },
    {
        header: '_t_Cryptocurrencies_t_',
        description:
            '_t_Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet._t_',
        img_name: 'market_crypto',
        to: '/markets/cryptocurrencies/',
        gradient_start: '#664407',
        gradient_end: '#191102',
    },
    {
        header: '_t_Commodities_t_',
        description:
            '_t_Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action._t_',
        img_name: 'market_commodities',
        to: '/markets/commodities/',
        gradient_start: '#183046',
        gradient_end: '#060C11',
    },
]

const market_data_eu: TMarketData[] = [
    {
        header: '_t_Forex_t_',
        description:
            '_t_Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day._t_',
        img_name: 'market_forex',
        to: '/markets/forex/',
        gradient_start: '#661B20',
        gradient_end: '#190708',
    },
    {
        header: '_t_Derived_t_',
        description:
            '_t_Enjoy trading markets and indices mimicking actual market movements, with little to no disruption from real-world events._t_',
        img_name: 'market_derived',
        to: '/markets/synthetic/',
        gradient_start: '#20403A',
        gradient_end: '#08100E',
    },
    {
        header: '_t_Stocks & indices_t_',
        description:
            '_t_Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market._t_',
        img_name: 'market_stocks_indices',
        to: '/markets/stock/',
        gradient_start: '#2A2040',
        gradient_end: '#0A0810',
    },
    {
        header: '_t_Cryptocurrencies_t_',
        description:
            '_t_Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet._t_',
        img_name: 'market_crypto',
        to: '/markets/cryptocurrencies/',
        gradient_start: '#664407',
        gradient_end: '#191102',
    },
    {
        header: '_t_Commodities_t_',
        description:
            '_t_Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action._t_',
        img_name: 'market_commodities',
        to: '/markets/commodities/',
        gradient_start: '#183046',
        gradient_end: '#060C11',
    },
]

const query = graphql`
    query {
        market_forex: file(relativePath: { eq: "home/market_forex.png" }) {
            ...fadeIn
        }
        market_synthetic_indices: file(relativePath: { eq: "home/market_synthetic_indices.png" }) {
            ...fadeIn
        }
        market_stocks_indices: file(relativePath: { eq: "home/market_stocks_indices.png" }) {
            ...fadeIn
        }
        market_crypto: file(relativePath: { eq: "home/market_crypto.png" }) {
            ...fadeIn
        }
        market_basket_indices: file(relativePath: { eq: "home/market_basket_indices.png" }) {
            ...fadeIn
        }
        market_commodities: file(relativePath: { eq: "home/market_commodities.png" }) {
            ...fadeIn
        }
        market_derived: file(relativePath: { eq: "home/market_derived.png" }) {
            ...fadeIn
        }
    }
`

const CarouselItem = ({
    header,
    description,
    image,
    is_mobile,
    gradient_start,
    gradient_end,
    url,
}: CarouselItemProps) => {
    const [is_not_big_screen] = useBrowserResize(1979)
    const [is_hovered, setHovered] = useState(false)
    const handleHover = (hover_state: boolean) => {
        return !is_mobile && setHovered(hover_state)
    }

    return (
        <ItemWrapper onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
            <StyledLink to={url}>
                <CarouselItemContainer
                    direction="column"
                    jc="flex-start"
                    width={is_not_big_screen ? '282px' : '400px'}
                    gradient_start={gradient_start}
                    gradient_end={gradient_end}
                >
                    <Header color="white" type="subtitle-1" mb="8px">
                        <Localize translate_text={header} />
                    </Header>
                    <Desktop>
                        <>
                            <StyledDescription
                                lh="24px"
                                color="white"
                                type="paragraph-1"
                                $hovered={is_hovered}
                            >
                                <Localize translate_text={description} />
                            </StyledDescription>
                            <CarouselItemImageDesktop
                                data={image}
                                alt={localize(header)}
                                loading="eager"
                                $hovered={is_hovered}
                            />
                        </>
                    </Desktop>
                    <Mobile>
                        <CarouselItemImageMobile data={image} alt={localize(header)} />
                    </Mobile>
                </CarouselItemContainer>
            </StyledLink>
        </ItemWrapper>
    )
}

const MarketsFold = () => {
    const data = useStaticQuery(query)
    const { is_region_loading, is_eu, is_row } = useRegion()
    const size = useWindowSize()
    const is_not_big_screen = size.width < 1980 && size.width >= 768
    const is_mobile = size.width < 768

    const lang_direction = useLangDirection()

    const getMaxWidth = () => {
        if (is_mobile) return '100%'
        if (is_not_big_screen) return '1210px'
        else return '1600px'
    }

    const settings: CarouselProps = {
        options: {
            loop: true,
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: is_mobile ? 0.04 : 'center',
            direction: lang_direction,
        },
        container_style: {
            maxInlineSize: '100%',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            marginInlineStart: 'auto',
            marginInlineEnd: 'auto',
        },
        embla_style: {
            minBlockSize: is_mobile ? '364px' : 'auto',
            maxInlineSize: getMaxWidth(),
        },
        slide_style: {
            inlineSize: is_not_big_screen ? '282px' : '400px',
            blockSize: 'auto',
            marginInlineEnd: is_mobile ? '16px' : '24px',
            position: 'relative',
        },
        navigation_style: {
            bottom_offset: '-24px',
            nav_color: '--color-red',
        },
    }

    return (
        <FoldWrapper id="market-fold">
            <FoldContainer direction="column">
                <Flex width="100%" jc="center">
                    <Header type="heading-1" align="center" mb="40px" tablet={{ mb: '24px' }}>
                        <Localize translate_text="_t_Markets_t_" />
                    </Header>
                </Flex>
                <Carousel has_autoplay autoplay_interval={is_mobile ? 3200 : 4000} {...settings}>
                    {!is_region_loading &&
                        ((is_eu && market_data_eu) || (is_row && market_data)).map(
                            (market, index) => {
                                const {
                                    header,
                                    description,
                                    img_name,
                                    gradient_start,
                                    gradient_end,
                                    to,
                                } = market

                                return (
                                    <CarouselItem
                                        key={index}
                                        header={header}
                                        description={description}
                                        is_mobile={is_mobile}
                                        image={data[img_name]}
                                        gradient_start={gradient_start}
                                        gradient_end={gradient_end}
                                        url={to}
                                    />
                                )
                            },
                        )}
                </Carousel>
            </FoldContainer>
        </FoldWrapper>
    )
}

export default MarketsFold
