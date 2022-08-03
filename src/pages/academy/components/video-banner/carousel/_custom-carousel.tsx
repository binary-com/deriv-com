import React, { useState, useEffect, useCallback, HTMLAttributes, ReactElement } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import {
    Embla,
    EmblaContainer,
    EmblaSlideInner,
    ViewPort,
    StyledButtonWrapper,
    ChevronRight,
    ChevronLeft,
    LastChildWrapper,
    NavigationContainer,
    PlayerIconWrapper,
    PlayerIcon,
    StyledDot,
    NavigationWrapper,
    Divider,
    NavIconWrapper,
    IconWrapper,
} from './_carousel-style'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { useRecursiveTimeout } from 'components/hooks/use-recursive-timeout'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'

const StyledDiv = styled.div<{ style?: string; onClick?: () => void }>``

export type ButtonsProps = HTMLAttributes<HTMLDivElement> & {
    color?: string
    enabled?: boolean
    is_enabled?: boolean
    left?: boolean
    is_reviews?: boolean
    disabled?: boolean
    style?: CustomBlogVideoNavStyleType | string
}

type PrevAndNextButtonsProps = Pick<
    ButtonsProps,
    'color' | 'enabled' | 'is_reviews' | 'onClick' | 'style'
>

export const PrevButton = ({
    color,
    enabled,
    is_reviews,
    onClick,
    style,
}: PrevAndNextButtonsProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        left
        style={style}
        is_reviews={is_reviews}
    >
        {color ? <ChevronLeft color={color} /> : <ChevronLeft />}
    </StyledButtonWrapper>
)

type NavigationButtonProps = Pick<ButtonsProps, 'color' | 'is_enabled' | 'onClick'>

// TODO: will remove later,not using this for now
export const NavigationButton = ({ color, is_enabled, onClick }: NavigationButtonProps) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

export const NextButton = ({
    color,
    enabled,
    is_reviews,
    onClick,
    style,
}: PrevAndNextButtonsProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        style={style}
        is_reviews={is_reviews}
    >
        {color ? <ChevronRight color={color} /> : <ChevronRight />}
    </StyledButtonWrapper>
)

type ChevronStyleType = {
    chevron_color?: string
    chevron_left?: string
    chevron_right?: string
    is_displayed_on_mobile?: boolean
}
type CustomBlogVideoNavStyleType = {
    custom_chevron_color?: string
    custom_is_displayed_on_mobile?: boolean
}
type NavigationStyleType = {
    nav_color?: string
    bottom_offset?: string
}

type CustomCarouselProps = {
    autoplay_interval?: number
    chevron_style?: ChevronStyleType
    children?: ReactElement[]
    container_style?: string
    custom_blog_video_nav?: boolean
    custom_blog_video_nav_style?: CustomBlogVideoNavStyleType
    has_autoplay?: boolean
    navigation_style?: NavigationStyleType
    options?: object
    slide_mobile_style?: string
    slide_style?: string
    vertical_container?: object
    view_port?: object
    chevron_color?: string
}

export const CustomCarousel = ({
    autoplay_interval,
    chevron_style,
    children,
    container_style,
    has_autoplay,
    navigation_style,
    options,
    slide_style,
    slide_mobile_style,
    vertical_container,
    view_port,
    custom_blog_video_nav,
    custom_blog_video_nav_style,
}: CustomCarouselProps) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [is_mobile] = useBrowserResize()

    const autoplay = useCallback(() => {
        if (has_autoplay) {
            if (!embla) return
            if (embla.canScrollNext()) {
                embla.scrollNext()
            } else {
                embla.scrollTo(0)
            }
        }
    }, [embla])

    const { play, stop } = useRecursiveTimeout(autoplay, autoplay_interval)

    const scrollPrev = useCallback(() => {
        if (!embla) return
        embla && embla.scrollPrev()
        stop()
    }, [embla, stop])

    const scrollNext = useCallback(() => {
        if (!embla) return
        embla && embla.scrollNext()
        stop()
    }, [embla, stop])

    const scrollTo = useCallback(
        (index) => {
            if (!embla) return
            embla.scrollTo(index)
            stop()
        },
        [embla, stop],
    )
    const onSlideClick = useCallback(
        (index, event) => {
            if (!embla || !embla.clickAllowed()) return
            event.preventDefault()
        },
        [embla],
    )

    const onSelect = useCallback(() => {
        if (!embla) return
        setSelectedIndex(embla.selectedScrollSnap())
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
    }, [embla, setSelectedIndex])

    useEffect(() => {
        if (!embla) return
        onSelect()
        embla.on('select', onSelect)
        embla.on('pointerDown', stop)
    }, [embla, onSelect, stop])

    useEffect(() => {
        play()
    }, [play])

    const { chevron_color, chevron_left, chevron_right, is_displayed_on_mobile } =
        chevron_style || {}
    const is_arrow = prevBtnEnabled || nextBtnEnabled
    const { nav_color, bottom_offset } = navigation_style || {}

    const { custom_chevron_color, custom_is_displayed_on_mobile } =
        custom_blog_video_nav_style || {}
    const is_custom_arrow = prevBtnEnabled || nextBtnEnabled

    return (
        <StyledDiv style={container_style}>
            {custom_blog_video_nav && custom_chevron_color && is_custom_arrow && (
                <NavigationWrapper>
                    <Divider />
                    <NavIconWrapper>
                        <IconWrapper disabled={!prevBtnEnabled} onClick={scrollPrev}>
                            <PrevButton
                                color={custom_chevron_color}
                                enabled={prevBtnEnabled}
                                is_reviews={custom_is_displayed_on_mobile}
                                style={custom_blog_video_nav_style}
                            />
                        </IconWrapper>
                        <IconWrapper disabled={!nextBtnEnabled} onClick={scrollNext}>
                            <NextButton
                                color={custom_chevron_color}
                                enabled={nextBtnEnabled}
                                is_reviews={custom_is_displayed_on_mobile}
                                style={custom_blog_video_nav_style}
                            />
                        </IconWrapper>
                    </NavIconWrapper>
                </NavigationWrapper>
            )}
            <Embla>
                <ViewPort style={view_port} ref={emblaRef}>
                    <EmblaContainer style={vertical_container ? vertical_container : null}>
                        {children.map((child, idx) => (
                            <StyledDiv
                                key={idx}
                                style={is_mobile ? slide_mobile_style : slide_style}
                                onClick={() => onSlideClick.bind(idx, this)}
                            >
                                <EmblaSlideInner>{child}</EmblaSlideInner>
                            </StyledDiv>
                        ))}
                        {!is_mobile && (
                            <Flex m="auto 0" height="100%" key="lastchild of carousel">
                                <LastChildWrapper to="/academy/videos/">
                                    <PlayerIconWrapper>
                                        <PlayerIcon src={PlayIcon} />
                                    </PlayerIconWrapper>
                                    <Header
                                        as="p"
                                        type="paragraph-2"
                                        color="white"
                                        mt="8px"
                                        mb="0"
                                        align="center"
                                    >
                                        See all videos
                                    </Header>
                                </LastChildWrapper>
                            </Flex>
                        )}
                    </EmblaContainer>
                </ViewPort>
                {chevron_color && is_arrow && (
                    <>
                        <PrevButton
                            color={chevron_color}
                            onClick={scrollPrev}
                            enabled={prevBtnEnabled}
                            style={chevron_left}
                            is_reviews={is_displayed_on_mobile}
                        />
                        <NextButton
                            color={chevron_color}
                            onClick={scrollNext}
                            enabled={nextBtnEnabled}
                            style={chevron_right}
                            is_reviews={is_displayed_on_mobile}
                        />
                    </>
                )}
                {/*  TODO: will remove later,not using this for now */}
                {nav_color && (
                    <NavigationContainer bottom_offset={bottom_offset}>
                        {children.map((child, idx) => (
                            <NavigationButton
                                key={idx}
                                color={nav_color}
                                is_enabled={idx === selectedIndex}
                                onClick={() => scrollTo(idx)}
                            />
                        ))}
                    </NavigationContainer>
                )}
            </Embla>
        </StyledDiv>
    )
}
