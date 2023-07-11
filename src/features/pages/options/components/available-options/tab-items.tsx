import React, { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
    tab_container,
    scroll_container,
    scroll_button_left,
    scroll_button_right,
    is_show_left,
    is_show_right,
    options_available_tab_item,
} from './styles.module.scss'
import LeftArrow from 'images/svg/arrow-previous.svg'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import Tab from 'features/components/atoms/tab'
import Flex from 'features/components/atoms/flex-box'
import { OptionNavigationType } from 'features/components/templates/navigation/tab-nav-without-border/types'
import { isActiveLink } from 'features/components/atoms/link/internal'
import dclsx from 'features/utils/dclsx'
import ArrowNext from 'images/svg/arrow-next.svg'

interface OptionsTabType {
    options_tabs: OptionNavigationType[]
}

const OptionsTab = ({ options_tabs }: OptionsTabType) => {
    const content_wrapper = useRef<HTMLDivElement>(null)
    const [is_initial_load, setIsInitialLoad] = useState(true)

    const [first_element_ref, firstInView] = useInView({
        threshold: 0.8,
    })

    const [last_element_ref, lastInView] = useInView({
        threshold: 0.8,
    })

    const side_scroll = (
        element: HTMLDivElement,
        speed: number,
        distance: number,
        step: number,
    ) => {
        setIsInitialLoad(false)
        let scroll_amount = 0
        const slide_timer = setInterval(() => {
            element.scrollLeft += step
            scroll_amount += Math.abs(step)
            if (scroll_amount >= distance) {
                clearInterval(slide_timer)
            }
        }, speed)
    }

    return (
        <Flex.Box direction="col" padding_block="10x" md={{ padding_block: '20x' }}>
            <Flex.Box className={tab_container} justify="center" md={{ padding_inline: '15x' }}>
                <div className={dclsx(scroll_container, 'flex')} ref={content_wrapper}>
                    {options_tabs.map((option_item, index) => (
                        <div
                            className={dclsx('flex', 'flex-dir-col')}
                            key={option_item.option_name}
                            ref={
                                index === 0
                                    ? first_element_ref
                                    : index === options_tabs?.length - 1
                                    ? last_element_ref
                                    : null
                            }
                        >
                            <Flex.Box
                                direction={'row'}
                                justify={'start'}
                                md={{ justify: 'center' }}
                            >
                                <Link
                                    url={{ type: 'internal', to: option_item.to }}
                                    no_hover
                                    key={option_item.button_text}
                                >
                                    <Tab.MenuItem
                                        key={option_item.option_name}
                                        selected={isActiveLink(option_item.to)}
                                        className={options_available_tab_item}
                                    >
                                        <Typography.Paragraph
                                            size="medium"
                                            font_family="UBUNTU"
                                            textcolor={
                                                isActiveLink(option_item.to)
                                                    ? 'brand'
                                                    : 'light-black'
                                            }
                                        >
                                            <Localize translate_text={option_item.button_text} />
                                        </Typography.Paragraph>
                                    </Tab.MenuItem>
                                </Link>
                            </Flex.Box>
                        </div>
                    ))}
                </div>
                <div
                    className={dclsx(
                        scroll_button_left,
                        'visible-larger-than-phone',
                        (is_initial_load || firstInView) && is_show_left,
                    )}
                    onClick={() => side_scroll(content_wrapper.current!, 25, 100, -10)}
                >
                    <Image src={LeftArrow} width="36px" height="36px" />
                </div>
                <div
                    className={dclsx(
                        scroll_button_right,
                        'visible-larger-than-phone',
                        lastInView && is_show_right,
                    )}
                    onClick={() => side_scroll(content_wrapper.current!, 25, 100, 10)}
                >
                    <Image src={ArrowNext} width="36px" height="36px" />
                </div>
            </Flex.Box>
        </Flex.Box>
    )
}

export default OptionsTab
