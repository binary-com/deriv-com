import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { MarketPageType, other_markets_items } from './data'
import useDynamicVisibleContent from 'components/hooks/use-dynamic-visible-content'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Card from 'features/components/atoms/card'
import './other-markets-slider.scss'
import Container from 'features/components/atoms/container'
import useRegion from 'components/hooks/use-region'

export type OtherMarketSliderProps = {
    current_market: MarketPageType
}

const OtherMarketsSlider = ({ current_market }: OtherMarketSliderProps) => {
    const { is_eu } = useRegion()
    const slider_items = useDynamicVisibleContent({
        content: other_markets_items,
        config: {
            current_market: (market_page) => market_page !== current_market,
            is_eu: (item_is_eu) => item_is_eu === undefined || is_eu === item_is_eu,
        },
    })

    return (
        <Container.Fixed padding_block="20x" md={{ padding_block: '40x' }}>
            <Flex.Box direction="col" gap="12x">
                <Typography.Heading
                    as="h3"
                    size="small"
                    align="center"
                    padding_inline="8x"
                    pb="10x"
                    lg={{ padding_block: '20x', padding_inline: '40x' }}
                >
                    <Localize translate_text="_t_Other markets you might be interested in_t_" />
                </Typography.Heading>
            </Flex.Box>
            <Flex.Box justify="center" align="center">
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        enabled: true,
                        type: 'bullets',
                        horizontalClass: 'markets_slider_pagination',
                        clickable: true,
                    }}
                    rewind
                    className={'markets_swiper'}
                    slidesPerView={'auto'}
                >
                    {slider_items.map(({ id, data }) => {
                        return (
                            <SwiperSlide key={id} className={'market_slide'}>
                                <Card.Primary
                                    className="other_market_item"
                                    header={data.header}
                                    description={data.description}
                                    icon={data.icon}
                                    link={data.link}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default OtherMarketsSlider
