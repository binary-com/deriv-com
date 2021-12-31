import React, { ReactElement, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import { Carousel, Header, QueryImage, Text } from 'components/elements'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device.js'

const FoldWrapper = styled(SectionContainer)`
    max-width: 100%;
    padding: 120px 20px;

    @media ${device.tablet} {
        padding: 40px 16px 12px;
    }
`

const FoldContainer = styled(Flex)`
    margin: 0 auto;
`

const ItemWrapper = styled.div`
    z-index: 4;
    height: 320px;
`

const CarouselItemContainer = styled(Flex)`
    position: relative;
    border-radius: 8px;
    color: white;
    overflow: hidden;
    background: linear-gradient(
        233.94deg,
        ${(props) => props.gradient_start} 2.4%,
        ${(props) => props.gradient_end} 81.78%
    );
    z-index: 1;
`

const CarouselItemImage = styled(QueryImage)<{ $hovered: boolean }>`
    position: absolute;
    width: 220px;
    top: ${(props) => (props.$hovered ? '220px' : '92px')};
    right: 31px;
    transition: ease-in 0.3s;
    z-index: 3;
`

const StyledDescription = styled(Text)<{ $hovered: boolean }>`
    visibility: ${(props) => (props.$hovered ? 'visible' : 'hidden')};
    z-index: 2;
`

const market_data = [
    {
        header: localize('Forex'),
        description: localize(
            'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
        ),
        img_name: 'market_forex',
        gradient_start: '#661B20',
        gradient_end: '#190708',
    },
    {
        header: localize('Synthetic indices'),
        description: localize(
            'Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.',
        ),
        img_name: 'market_synthetic_indices',
        gradient_start: '#20403A',
        gradient_end: '#08100E',
    },
    {
        header: localize(`Stocks & indices`),
        description: localize(
            'Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market.',
        ),
        img_name: 'market_stocks_indices',
        gradient_start: '#2A2040',
        gradient_end: '#0A0810',
    },
    {
        header: localize('Cryptocurrencies'),
        description: localize(
            'Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet.',
        ),
        img_name: 'market_crypto',
        gradient_start: '#664407',
        gradient_end: '#191102',
    },
    {
        header: localize('Commodities'),
        description: localize(
            'Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action.',
        ),
        img_name: 'market_commodities',
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
    gradient_start: string
    gradient_end: string
}

const CarouselItem = ({
    header,
    description,
    image,
    gradient_start,
    gradient_end,
}: CarouselItemProps) => {
    const [is_hovered, setHovered] = useState(false)
    const [is_mobile] = useBrowserResize()

    return (
        <ItemWrapper
            onMouseOver={() => !is_mobile && setHovered(true)}
            onMouseOut={() => !is_mobile && setHovered(false)}
            onClick={() => is_mobile && setHovered(!is_hovered)}
        >
            <CarouselItemContainer
                direction="column"
                jc="flex-start"
                width="282px"
                gradient_start={gradient_start}
                gradient_end={gradient_end}
                p="32px 32px 0"
            >
                <Header color="white" type="subtitle-1" mb="8px">
                    {header}
                </Header>
                <StyledDescription lh="24px" color="white" type="paragraph-1" $hovered={is_hovered}>
                    {description}
                </StyledDescription>
                <CarouselItemImage
                    data={image}
                    alt={header}
                    $hovered={is_hovered}
                    onMouseOver={() => !is_mobile && setHovered(true)}
                    onMouseOut={() => !is_mobile && setHovered(false)}
                    onClick={() => is_mobile && setHovered(!is_hovered)}
                />
            </CarouselItemContainer>
        </ItemWrapper>
    )
}

const MarketsFold = (): ReactElement => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()

    const settings = {
        options: {
            loop: false,
            align: 'start',
            containScroll: 'trimSnaps',
        },
        view_port: {
            padding: is_mobile ? '0 16px' : '0 120px',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            width: '282px',
            height: 'auto',
            marginRight: is_mobile ? '16px' : '24px',
            position: 'relative',
        },
        navigation_style: {
            bottom_offset: '-10px',
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
                <Carousel {...settings}>
                    {market_data.map((market, index) => {
                        const { header, description, img_name, gradient_start, gradient_end } =
                            market

                        return (
                            <CarouselItem
                                key={index}
                                header={header}
                                description={description}
                                image={data[img_name]}
                                gradient_start={gradient_start}
                                gradient_end={gradient_end}
                            />
                        )
                    })}
                </Carousel>
            </FoldContainer>
        </FoldWrapper>
    )
}

export default MarketsFold
