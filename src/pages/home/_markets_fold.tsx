import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Carousel, Header, QueryImage, Text } from 'components/elements'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device.js'

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

const CarouselItemContainer = styled(Flex)`
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

const CarouselItemImage = styled(QueryImage)<{ $hovered: boolean }>`
    position: absolute;
    width: 220px;
    top: ${(props) => (props.$hovered ? '220px' : '91px')};
    right: 31px;
    transition: ease-in 0.3s;
    z-index: 3;
`

const StyledDescription = styled(Text)<{ $hovered: boolean }>`
    visibility: ${(props) => (props.$hovered ? 'visible' : 'hidden')};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
    z-index: 2;
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index: 40;
`

const market_data = [
    {
        header: localize('Forex'),
        description: localize(
            'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
        ),
        img_name: 'market_forex',
        to: '/markets/forex/',
        gradient_start: '#661B20',
        gradient_end: '#190708',
    },
    {
        header: localize('Synthetic indices'),
        description: localize(
            'Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.',
        ),
        img_name: 'market_synthetic_indices',
        to: '/markets/synthetic/',
        gradient_start: '#20403A',
        gradient_end: '#08100E',
    },
    {
        header: localize(`Stocks & indices`),
        description: localize(
            'Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market.',
        ),
        img_name: 'market_stocks_indices',
        to: '/markets/stock/',
        gradient_start: '#2A2040',
        gradient_end: '#0A0810',
    },
    {
        header: localize('Cryptocurrencies'),
        description: localize(
            'Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet.',
        ),
        img_name: 'market_crypto',
        to: '/markets/cryptocurrencies/',
        gradient_start: '#664407',
        gradient_end: '#191102',
    },
    {
        header: localize('Commodities'),
        description: localize(
            'Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action.',
        ),
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
        market_commodities: file(relativePath: { eq: "home/market_commodities.png" }) {
            ...fadeIn
        }
    }
`

type CarouselItemProps = {
    header: string
    description: string
    image: ImageDataLike
    is_mobile: boolean
    gradient_start: string
    gradient_end: string
    url: string
}

const CarouselItem = ({
    header,
    description,
    image,
    is_mobile,
    gradient_start,
    gradient_end,
    url,
}: CarouselItemProps) => {
    const [is_hovered, setHovered] = useState(false)
    const handleHover = (hover_state: boolean) => {
        return !is_mobile && setHovered(hover_state)
    }

    return (
        <ItemWrapper
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            onClick={(e) => !is_mobile && e.preventDefault()}
        >
            <StyledLink to={url}>
                <CarouselItemContainer
                    direction="column"
                    jc="flex-start"
                    width="282px"
                    gradient_start={gradient_start}
                    gradient_end={gradient_end}
                >
                    <Header color="white" type="subtitle-1" mb="8px">
                        {header}
                    </Header>
                    <StyledDescription
                        lh="24px"
                        color="white"
                        type="paragraph-1"
                        $hovered={is_hovered}
                    >
                        {description}
                    </StyledDescription>
                    <CarouselItemImage
                        data={image}
                        alt={header}
                        loading="eager"
                        $hovered={is_hovered}
                        onClick={(e) => {
                            !is_mobile && e.preventDefault()
                        }}
                    />
                </CarouselItemContainer>
            </StyledLink>
        </ItemWrapper>
    )
}

const MarketsFold = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const settings = {
        options: {
            loop: true,
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: is_mobile ? 0.04 : 'center',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        embla_style: {
            minHeight: is_mobile ? '364px' : 'auto',
        },
        slide_style: {
            width: '282px',
            height: 'auto',
            marginRight: is_mobile ? '16px' : '24px',
            position: 'relative',
        },
        navigation_style: {
            bottom_offset: '-24px',
            nav_color: '--color-red',
        },
    }

    return (
        <FoldWrapper>
            <FoldContainer direction="column">
                <Flex width="100%" jc="center">
                    <Header type="heading-1" align="center" mb="40px" tablet={{ mb: '24px' }}>
                        Markets
                    </Header>
                </Flex>
                <Carousel
                    has_autoplay={true}
                    autoplay_interval={is_mobile ? 3200 : 4000}
                    {...settings}
                >
                    {market_data.map((market) => {
                        const { header, description, img_name, gradient_start, gradient_end, to } =
                            market

                        return (
                            <CarouselItem
                                key={description}
                                header={header}
                                description={description}
                                is_mobile={is_mobile}
                                image={data[img_name]}
                                gradient_start={gradient_start}
                                gradient_end={gradient_end}
                                url={to}
                            />
                        )
                    })}
                </Carousel>
            </FoldContainer>
        </FoldWrapper>
    )
}

export default MarketsFold
