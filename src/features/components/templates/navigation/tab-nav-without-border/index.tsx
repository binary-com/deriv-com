import React, { useEffect, useState, useRef } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import NavigationTabMenu from '../../tabs/navigation-menu'
import { OptionNavigationType } from './types'
import Container from 'features/components/atoms/container'
import Image from 'features/components/atoms/image'
import Flex from 'features/components/atoms/flex-box'
import { getLocationPathname } from 'common/utility'
import ArrowNext from 'images/svg/arrow-next.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'
import './styles.scss'
import { isActiveLink } from 'features/components/atoms/link/internal'

// Import the required Swiper modules
SwiperCore.use([Navigation])

interface NavigationTabWithoutBorderType {
    tab_data: OptionNavigationType[]
}

const NavigationTabWithoutBorder = ({ tab_data }: NavigationTabWithoutBorderType) => {
    const pathname = getLocationPathname()
    const [swiper_loading, setSwiperLoading] = useState(true)
    const swiper_ref = useRef(null)
    const { is_mobile } = useBreakpoints()

    useEffect(() => {
        const selected_tab_item: OptionNavigationType = tab_data.find((option) =>
            pathname?.includes(option.to),
        )
        if (swiper_ref.current && is_mobile) {
            const active_slide_index = tab_data.findIndex(
                (tab) => tab.option_name === selected_tab_item?.option_name,
            )
            swiper_ref.current.swiper.slideTo(active_slide_index)
        }
        setSwiperLoading(false)
    }, [pathname])

    return (
        <Container.Fluid mt={'20x'}>
            <Flex.Box
                padding_block="10x"
                md={{ justify: 'center', padding: '10x' }}
                visible="phone-only"
                className="swiper_wrapper_navigation"
            >
                <Swiper
                    ref={swiper_ref}
                    speed={1000}
                    slidesPerView={2}
                    direction="horizontal"
                    navigation={{ nextEl: '.swiper-button-next' }}
                >
                    {!swiper_loading &&
                        tab_data.map((tab_item) => (
                            <SwiperSlide key={tab_item.option_name}>
                                <NavigationTabMenu
                                    key={tab_item.option_name}
                                    tab_items={tab_item}
                                    selected={isActiveLink(tab_item.to, tab_item?.active_path)}
                                    is_no_border_bottom
                                    icon={
                                        isActiveLink(tab_item.to)
                                            ? `${tab_item.selected_src}#${tab_item.option_name}`
                                            : `${tab_item.src}#${tab_item.option_name}`
                                    }
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="swiper-button-next">
                    <Image src={ArrowNext} width="24px" height="24px" />
                </div>
            </Flex.Box>

            <Flex.Box
                padding_block="10x"
                justify="around"
                md={{ justify: 'center', padding: '10x' }}
                visible="larger-than-phone"
            >
                {tab_data.map((tab_item) => (
                    <Flex.Box direction="col" key={tab_item.option_name}>
                        <NavigationTabMenu
                            key={tab_item.option_name}
                            tab_items={tab_item}
                            selected={isActiveLink(tab_item.to, tab_item?.active_path)}
                            is_no_border_bottom
                            icon={
                                isActiveLink(tab_item.to, tab_item?.active_path)
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
