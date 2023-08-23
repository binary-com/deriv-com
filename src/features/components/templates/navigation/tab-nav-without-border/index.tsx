import React, { useEffect, useState, useRef } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import NavigationTabMenu from '../../tabs/navigation-menu'
import {
    swiper_wrapper,
    swiper_button_next,
    swiper_button_disabled,
    swiper_height,
    swiper_slide,
} from './styles.module.scss'
import { OptionNavigationType } from './types'
import Container from 'features/components/atoms/container'
import Image from 'features/components/atoms/image'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import ArrowNext from 'images/svg/arrow-next.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import dclsx from 'features/utils/dclsx'

// Import the required Swiper modules
SwiperCore.use([Navigation])

interface NavigationTabWithoutBorderType {
    tab_data: OptionNavigationType[]
}

const NavigationTabWithoutBorder = ({ tab_data }: NavigationTabWithoutBorderType) => {
    const pathname = getLocationPathname()
    const swiper_ref = useRef(null)
    const { is_mobile } = useBreakpoints()
    const [selected_tab_name, setSelectedTabName] = useState<string | null>(null)

    useEffect(() => {
        const selected_tab_item: OptionNavigationType = tab_data.find((option) =>
            pathname?.includes(option.active_path),
        )
        setSelectedTabName(selected_tab_item?.option_name || null)
        if (swiper_ref.current && is_mobile) {
            const active_slide_index = tab_data.findIndex(
                (tab) => tab.option_name === selected_tab_item?.option_name,
            )
            swiper_ref.current.swiper.slideTo(active_slide_index)
        }
    }, [pathname])

    return (
        <Container.Fluid pt={'20x'}>
            <Flex.Box padding_block="10x" visible="phone-only" className={swiper_wrapper}>
                <Swiper
                    ref={swiper_ref}
                    speed={1000}
                    slidesPerView={3}
                    direction="horizontal"
                    navigation={{ nextEl: '.swiper-button-next' }}
                    className={swiper_height}
                >
                    {tab_data.map((tab_item) => {
                        return (
                            <SwiperSlide key={tab_item.option_name} className={swiper_slide}>
                                <NavigationTabMenu
                                    tab_items={tab_item}
                                    selected={tab_item.option_name === selected_tab_name}
                                    is_no_border_bottom
                                    icon={
                                        tab_item.option_name === selected_tab_name
                                            ? `${tab_item.selected_src}#${tab_item.option_name}`
                                            : `${tab_item.src}#${tab_item.option_name}`
                                    }
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={dclsx(
                        'swiper-button-next',
                        swiper_button_next,
                        tab_data.length <= 3 && swiper_button_disabled,
                    )}
                >
                    <Image src={ArrowNext} width="24px" height="24px" />
                </div>
            </Flex.Box>
            <Flex.Box
                padding_block="10x"
                justify="around"
                gap="5x"
                md={{ justify: 'center', padding: '10x' }}
                visible="larger-than-phone"
                className="wrapper_navigation"
            >
                {tab_data.map((tab_item) => {
                    return (
                        <NavigationTabMenu
                            key={tab_item.option_name}
                            tab_items={tab_item}
                            selected={tab_item.option_name === selected_tab_name}
                            is_no_border_bottom
                            icon={
                                tab_item.option_name === selected_tab_name
                                    ? `${tab_item.selected_src}#${tab_item.option_name}`
                                    : `${tab_item.src}#${tab_item.option_name}`
                            }
                        />
                    )
                })}
            </Flex.Box>
        </Container.Fluid>
    )
}

export default NavigationTabWithoutBorder
