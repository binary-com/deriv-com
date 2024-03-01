import React, { useRef, useState, useEffect } from 'react'
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
import { Localize, get_lang_direction } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import Tab from 'features/components/atoms/tab'
import Flex from 'features/components/atoms/flex-box'
import { OptionNavigationType } from 'features/components/templates/navigation/tab-nav-without-border/types'
import dclsx from 'features/utils/dclsx'
import ArrowNext from 'images/svg/arrow-next.svg'
import { getLocationPathname } from 'common/utility'
import useScrollToActiveTab from 'features/hooks/use-scroll-to-active-tab'

interface OptionsTabType {
    options_tabs: OptionNavigationType[]
}

const OptionsTab = ({ options_tabs }: OptionsTabType) => {
    const pathname = getLocationPathname()
    const direction = get_lang_direction()
    const content_wrapper = useRef<HTMLDivElement>(null)
    const [is_initial_load, setIsInitialLoad] = useState(true)
    const [selected_tab_name, setSelectedTabName] = useState<string | null>(null)

    const [first_element_ref, firstInView] = useInView({
        threshold: 0.8,
    })

    const [last_element_ref, lastInView] = useInView({
        threshold: 0.8,
    })

    const { active_element_ref, clickOnActiveElement } = useScrollToActiveTab<
        HTMLDivElement,
        HTMLDivElement
    >(content_wrapper.current)

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

    useEffect(() => {
        const selected_tab_item: OptionNavigationType = options_tabs.find((option) =>
            pathname?.includes(option.to),
        )
        setSelectedTabName(selected_tab_item?.option_name || null)
    }, [pathname])

    return (
        <Flex.Box direction="col" padding_block="10x" md={{ padding_block: '20x' }}>
            <Flex.Box className={tab_container} justify="center">
                <div className={dclsx(scroll_container, 'at-flex')} ref={content_wrapper}>
                    {options_tabs.map((option_item, index) => (
                        <div
                            className={dclsx('at-flex', 'at-flex-dir-col')}
                            key={option_item.option_name}
                            ref={
                                index === 0
                                    ? first_element_ref
                                    : index === options_tabs?.length - 1
                                    ? last_element_ref
                                    : null
                            }
                        >
                            <div
                                className={dclsx(
                                    'at-flex',
                                    'at-row',
                                    'at-justify-start',
                                    'md-at-justify-start',
                                )}
                                ref={
                                    selected_tab_name === option_item.option_name
                                        ? active_element_ref
                                        : null
                                }
                                onClick={clickOnActiveElement}
                            >
                                <Link
                                    url={{ type: 'internal', to: option_item.to }}
                                    no_hover
                                    key={option_item.button_text}
                                >
                                    <Tab.MenuItem
                                        key={option_item.option_name}
                                        selected={selected_tab_name === option_item.option_name}
                                        className={options_available_tab_item}
                                    >
                                        <Typography.Paragraph
                                            size="medium"
                                            font_family="UBUNTU"
                                            textcolor={
                                                selected_tab_name === option_item.option_name
                                                    ? 'brand'
                                                    : 'light-black'
                                            }
                                        >
                                            <Localize translate_text={option_item.button_text} />
                                        </Typography.Paragraph>
                                    </Tab.MenuItem>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={dclsx(
                        scroll_button_left,
                        'at-visible-larger-than-phone',
                        (is_initial_load || firstInView) && is_show_left,
                    )}
                    onClick={() => side_scroll(content_wrapper.current!, 25, 100, -10)}
                    dir={get_lang_direction()}
                >
                    <Image src={LeftArrow} width="36px" height="36px" />
                </div>
                <div
                    className={dclsx(
                        scroll_button_right,
                        'at-visible-larger-than-phone',
                        lastInView && is_show_right,
                    )}
                    onClick={() => side_scroll(content_wrapper.current!, 25, 100, 10)}
                    dir={get_lang_direction()}
                >
                    <Image src={ArrowNext} width="36px" height="36px" />
                </div>
            </Flex.Box>
        </Flex.Box>
    )
}

export default OptionsTab
