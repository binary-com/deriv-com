import React from 'react'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { SmallContainer } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Forex from 'images/svg/trade-types/forex.svg'
import Commodities from 'images/svg/trade-types/commodities.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import StockIndices from 'images/svg/trade-types/stock-indices.svg'
import Chevron from 'images/svg/carousel-chevron.svg'

const Card = styled.article`
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    height: 29.6rem;
    padding: 2.4rem;
    max-width: 28.2rem;

    @media ${device.tabletL} {
        padding: 4rem;
    }
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-top: 4rem;

    & .swiper-wrapper {
        align-items: center;
    }
`
const StyledChevron = styled(Chevron)`
    opacity: ${(props) => (props.is_disabled ? '0.32' : '1')};

    g {
        g {
            fill: var(--color-red);
        }
    }
`
const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
`
const ChevronLeft = StyledChevron

const Next = styled.div``
const Prev = styled.div``
const ButtonWrapper = styled.div`
    svg {
        height: 16px;
        width: 16px;
    }
    div {
        button {
            border: none;
            background: transparent;

            &:hover {
                cursor: pointer;
            }
            &:focus {
                outline: none;
            }
        }

        z-index: 10;
        position: absolute;
    }
    ${Next} {
        top: 50%;
        right: 38px;
        width: 31px;
    }
    ${Prev} {
        top: 50%;
        left: 38px;
        width: 31px;
    }
`

const Background = styled.div`
    width: 100%;
    background: var(--color-green-2);
    border-radius: 16px;
    max-height: 15.4rem;
    margin-bottom: 15.4rem;
`
const MarketsAvailable = () => {
    const [swiper, updateSwiper] = React.useState(null)
    const [is_beginning, setBeginning] = React.useState(true)
    const [is_end, setEnd] = React.useState(false)

    React.useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setBeginning(swiper.isBeginning)
                setEnd(swiper.isEnd)
            })
        }
    }, [swiper])

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev()
        }
    }
    const params = {
        lazy: true,
        slidesPerView: 2,
        spaceBetween: 24,
        loop: false,
        height: '100%',
    }
    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <SectionContainer background="white" padding="8rem 0">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="2.4rem">
                        {localize('Markets available for options trading')}
                    </Header>
                    <Background>
                        <SliderWrapper>
                            <ButtonWrapper>
                                <Next>
                                    <button onClick={goNext}>
                                        <ChevronRight is_disabled={is_end} />
                                    </button>
                                </Next>
                                <Prev>
                                    <button onClick={goPrev}>
                                        <ChevronLeft is_disabled={is_beginning} />
                                    </button>
                                </Prev>
                            </ButtonWrapper>
                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <Swiper {...params} getSwiper={updateSwiper}>
                                    <div className="swiper-slide">
                                        <Flex ai="center" height="unset" p="4px 0">
                                            <Card>
                                                <div>
                                                    <Forex />
                                                </div>
                                                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                                    {localize('Forex')}
                                                </Text>
                                                <Text>
                                                    {localize(
                                                        'Take part in the world’s largest financial market. Trade digital options on major, minor, and smart forex pairs.',
                                                    )}
                                                </Text>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className="swiper-slide">
                                        <Flex ai="center" height="unset">
                                            <Card>
                                                <div>
                                                    <SyntheticIndices />
                                                </div>
                                                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                                    {localize('Synthetic indices')}
                                                </Text>
                                                <Text>
                                                    {localize(
                                                        'Trade digital options, lookbacks, and Spread Up/Spread down 24/7 on our synthetic indices that are free from real-world disruptions.',
                                                    )}
                                                </Text>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className="swiper-slide">
                                        <Flex ai="center" height="unset">
                                            <Card>
                                                <div>
                                                    <Commodities />
                                                </div>
                                                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                                    {localize('Commodities')}
                                                </Text>
                                                <Text>
                                                    {localize(
                                                        "Speculate on the price movements of the world's major commodities – silver, gold, oil, and energy.",
                                                    )}
                                                </Text>
                                            </Card>
                                        </Flex>
                                    </div>
                                    <div className="swiper-slide">
                                        <Flex ai="center" height="unset">
                                            <Card>
                                                <div>
                                                    <StockIndices />
                                                </div>
                                                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                                                    {localize('Stock indices')}
                                                </Text>
                                                <Text>
                                                    {localize(
                                                        'Trade digital options on stock indices and profit from the price movements in our competitively priced asset baskets.',
                                                    )}
                                                </Text>
                                            </Card>
                                        </Flex>
                                    </div>
                                </Swiper>
                            </div>
                        </SliderWrapper>
                    </Background>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
