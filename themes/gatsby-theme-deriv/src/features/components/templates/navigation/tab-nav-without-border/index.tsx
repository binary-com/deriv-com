import React, { useEffect, useState, useRef } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import NavigationTabMenu from '../../tabs/navigation-menu'
import {
    swiper_wrapper,
    swiper_slide,
} from './styles.module.scss'
import { OptionNavigationType } from './types'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import useBreakpoints from 'components/hooks/use-breakpoints'

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
        <Container.Fluid pt="25x">
            <Flex.Box
                padding_block="10x"
                gap="6x"
                visible="phone-only"
                className={swiper_wrapper}
                justify="center"
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
