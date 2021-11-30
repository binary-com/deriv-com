import React, { ReactElement, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { QueryImage, Text } from 'components/elements'

const FoldWrapper = styled.div`
    padding: 120px 0;
`

const FoldContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    overflow-x: hidden;
`

const Carousel = styled.div`
    display: inline-flex;
    gap: 24px;
    height: 320px;
    overflow: hidden;
`

const ItemWrapper = styled.div`
    z-index: 4;
`

const CarouselItemContainer = styled(Flex)`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    width: 282px;
    padding: 32px 32px 0;
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

const CarouselBody = styled(Text)<{ $hovered: boolean }>`
    visibility: ${(props) => (props.hovered ? 'visible' : 'hidden')};
    z-index: 2;
`

const market_data = [
    {
        header: 'Forex',
        description: (
            <Localize translate_text="Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day." />
        ),
        img_name: 'market_forex',
        gradient_start: '#661B20',
        gradient_end: '#190708',
    },
    {
        header: 'Synthetic indices',
        description: (
            <Localize translate_text="Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions." />
        ),
        img_name: 'market_synthetic_indices',
        gradient_start: '#20403A',
        gradient_end: '#08100E',
    },
    {
        header: 'Stocks & indices',
        description: (
            <Localize translate_text="Trade share price movements of big brands and predict broader market trends with indices that measure the overall performance of a market." />
        ),
        img_name: 'market_stocks_indices',
        gradient_start: '#2A2040',
        gradient_end: '#0A0810',
    },
    {
        header: 'Cryptocurrencies',
        description: (
            <Localize translate_text="Trade on the rising and falling prices of the most popular cryptocurrencies without the need to own a digital wallet." />
        ),
        img_name: 'market_crypto',
        gradient_start: '#664407',
        gradient_end: '#191102',
    },
    {
        header: 'Commodities',
        description: (
            <Localize translate_text="Trade the price movements of natural resources that are central to the world’s economy and make the most of the market action." />
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
    description: any
    image: any
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
    const [is_hovered, setHovered] = useState<boolean>(false)

    return (
        <ItemWrapper onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <CarouselItemContainer gradient_start={gradient_start} gradient_end={gradient_end}>
                <Text color="white" size="var(--text-size-m)" weight="bold">
                    {header}
                </Text>
                <CarouselBody color="white" size="var(--text-size-s)" hovered={is_hovered}>
                    {description}
                </CarouselBody>
                <CarouselItemImage data={image} alt={header} $hovered={is_hovered} />
            </CarouselItemContainer>
        </ItemWrapper>
    )
}

const MarketsFold = (): ReactElement => {
    const data = useStaticQuery(query)

    return (
        <FoldWrapper>
            <FoldContainer>
                <Flex width="100%" jc="center" mb="40px">
                    <Text size="var(--text-size-xl)" weight="bold">
                        Markets
                    </Text>
                </Flex>
                <Carousel>
                    {market_data.map((market) => {
                        const { header, description, img_name, gradient_start, gradient_end } =
                            market

                        return (
                            <CarouselItem
                                key={header}
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
