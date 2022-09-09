import React, {
    useState,
    useEffect,
    useCallback,
    ReactNode,
    CSSProperties,
    MouseEventHandler,
} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel-react'
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

type ChevronStyleProps = {
    chevron_color: string
    chevron_left: CSSProperties
    chevron_right: CSSProperties
    is_displayed_on_mobile: boolean
}

type CustomCarouselProps = {
    autoplay_interval?: number
    chevron_style?: ChevronStyleProps
    children: ReactNode[]
    container_style?: CSSProperties
    custom_blog_video_nav?: boolean
    custom_blog_video_nav_style?: CSSProperties & {
        custom_chevron_color?: string
        custom_is_displayed_on_mobile?: boolean
    }
    has_autoplay?: boolean
    navigation_style?: {
        nav_color?: string
        bottom_offset?: string
    }
    options?: EmblaOptionsType
    slide_mobile_style?: CSSProperties
    slide_style?: CSSProperties
    vertical_container?: CSSProperties
    view_port?: CSSProperties
}

type ButtonProps = {
    chevron_style?: ChevronStyleProps
    enabled: boolean
    onClick?: MouseEventHandler<HTMLDivElement>
    color: string
    is_reviews: boolean
    style: CSSProperties
}

type NavigationButtonProps = {
    color: string
    is_enabled: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export const PrevButton = ({ color, enabled, is_reviews, onClick, style }: ButtonProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        left
        style={style}
        is_reviews={is_reviews}
    >
        {(color === 'black' && <ChevronLeft black />) ||
            (color === 'red' && <ChevronLeft red />) ||
            (color === 'custom' && <ChevronLeft custom />) || <ChevronLeft />}
    </StyledButtonWrapper>
)

// TODO: will remove later,not using this for now
export const NavigationButton = ({ color, is_enabled, onClick }: NavigationButtonProps) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

export const NextButton = ({ color, enabled, is_reviews, onClick, style }: ButtonProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        style={style}
        is_reviews={is_reviews}
    >
        {(color === 'black' && <ChevronRight black />) ||
            (color === 'red' && <ChevronRight red />) ||
            (color === 'custom' && <ChevronRight custom />) || <ChevronRight />}
    </StyledButtonWrapper>
)

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
        (_index, event) => {
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
        <div style={container_style}>
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
                            <div
                                key={idx}
                                style={is_mobile ? slide_mobile_style : slide_style}
                                onClick={() => onSlideClick.bind(idx, this)}
                            >
                                <EmblaSlideInner>{child}</EmblaSlideInner>
                            </div>
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
                        {children.map((_child, idx) => (
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
        </div>
    )
}
