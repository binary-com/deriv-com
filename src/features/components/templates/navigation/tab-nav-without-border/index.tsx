import React, { useEffect, useState, useRef } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import NavigationTabMenu from '../../tabs/navigation-menu'
import { OptionNavigationType } from './types'
import Container from 'features/components/atoms/container'
import Image from 'features/components/atoms/image'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import { TString } from 'types/generics'
import ArrowNext from 'images/svg/arrow-next.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

// Import the required Swiper modules
SwiperCore.use([Navigation])

interface NavigationTabWithoutBorderType {
    tab_data: OptionNavigationType[]
}

const NavigationTabWithoutBorder = ({ tab_data }: NavigationTabWithoutBorderType) => {
    const [selected_tab_name, setSelectedTabName] = useState<string | null>(null)
    const [selected_tab_text, selectedTabText] = useState<TString | null>(null)
    const pathname = getLocationPathname()
    const [swiper_loading, setSwiperLoading] = useState(true)
    const swiperRef = useRef(null)
    const { is_mobile } = useBreakpoints()

    useEffect(() => {
        const selected_tab_item: OptionNavigationType = tab_data.find((option) =>
            pathname.includes(option.to),
        )
        setSelectedTabName(selected_tab_item?.option_name || null)
        selectedTabText(selected_tab_item?.button_text || null)

        if (swiperRef.current && is_mobile) {
            const active_slide_index = tab_data.findIndex(
                (tab) => tab.option_name === selected_tab_item?.option_name,
            )
            swiperRef.current.swiper.slideTo(active_slide_index)
        }
        setSwiperLoading(false)
    }, [pathname])

    return (
        <Container.Fluid>
            <Flex.Box
                padding_block="10x"
                md={{ justify: 'center', padding: '10x' }}
                visible="phone-only"
            >
                <Swiper
                    ref={swiperRef}
                    speed={1000}
                    slidesPerView={2}
                    direction="horizontal"
                    navigation={{ nextEl: '.swiper-button-next' }}
                >
                    {!swiper_loading &&
                        selected_tab_name &&
                        tab_data.map((tab_item) => (
                            <SwiperSlide key={tab_item.option_name}>
                                <Flex.Box direction="col">
                                    <NavigationTabMenu
                                        key={tab_item.option_name}
                                        tab_items={tab_item}
                                        current_tab={selected_tab_text}
                                        is_no_border_bottom
                                        icon={
                                            tab_item.option_name === selected_tab_name
                                                ? `${tab_item.selected_src}#${tab_item.option_name}`
                                                : `${tab_item.src}#${tab_item.option_name}`
                                        }
                                    />
                                </Flex.Box>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="swiper-button-next">
                    <style>
                        {`
            .swiper-button-next::after { 
              display: none !important;
            }
          `}
                    </style>
                    <Image src={ArrowNext} width="24px" height="24px" />
                </div>
            </Flex.Box>

            <Flex.Box
                padding_block="10x"
                md={{ justify: 'center', padding: '10x' }}
                visible="larger-than-phone"
            >
                {tab_data.map((tab_item) => (
                    <Flex.Box direction="col" key={tab_item.option_name}>
                        <NavigationTabMenu
                            key={tab_item.option_name}
                            tab_items={tab_item}
                            current_tab={selected_tab_text}
                            is_no_border_bottom
                            icon={
                                tab_item.option_name === selected_tab_name
                                    ? `${tab_item.selected_src}#${tab_item.option_name}`
                                    : `${tab_item.src}#${tab_item.option_name}`
                            }
                        />
                    </Flex.Box>
                ))}
            </Flex.Box>
        </Container.Fluid>
    )
}

export default NavigationTabWithoutBorder
