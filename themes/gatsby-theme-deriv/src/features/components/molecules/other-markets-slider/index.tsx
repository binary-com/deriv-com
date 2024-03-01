import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { MarketPageType, SmartOtherMarketsItem, other_markets_items } from './data'
import useDynamicVisibleContent from 'components/hooks/use-dynamic-visible-content'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Card from 'features/components/atoms/card'
import './other-markets-slider.scss'
import Container from 'features/components/atoms/container'
import { TString } from 'types/generics'
import dclsx from 'features/utils/dclsx'
import useBuildVariant from 'features/hooks/use-build-variant'

export type OtherMarketSliderProps = {
    current_market?: MarketPageType
    title?: TString
    available_markets?: SmartOtherMarketsItem[] | null
}

const OtherMarketsSlider = ({
    current_market,
    title,
    available_markets = null,
}: OtherMarketSliderProps) => {
    const { region } = useBuildVariant()
    const slider_items = useDynamicVisibleContent({
        content: available_markets || other_markets_items,
        config: {
            current_market: (market_page) => market_page !== current_market,
            is_eu: (item_is_eu) => item_is_eu === undefined || (region === "eu") === item_is_eu,
        },
    })
    const is_no_linkAvailable = !!available_markets?.length

    return (
        <Container.Fixed padding_block="20x" md={{ padding_block: '40x' }}>
            <Flex.Box direction="col" gap="12x">
                <Typography.Heading
                    as="h2"
                    size={is_no_linkAvailable ? 'medium' : 'small'}
                    align="center"
                    padding_inline="8x"
                    pb="10x"
                    lg={{ padding_block: '20x', padding_inline: '40x' }}
                >
                    <Localize
                        translate_text={title || '_t_Other markets you might be interested in_t_'}
                    />
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
                    className={dclsx('markets_swiper', is_no_linkAvailable && 'no_link')}
                    slidesPerView={'auto'}
                >
                    {slider_items.map(({ id, data }) => {
                        return (
                            <SwiperSlide key={id} className={'market_slide'}>
                                <Card.Primary
                                    className={dclsx(
                                        'other_market_item',
                                        is_no_linkAvailable && 'no_link',
                                    )}
                                    header={data.header}
                                    description={data.description}
                                    icon={data.icon}
                                    link={data?.link || null}
                                    is_coming_soon={data?.is_coming_soon}
                                    alt_icon={data?.alt_icon}
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
