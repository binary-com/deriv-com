import React, { useState, useEffect, useCallback, CSSProperties } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    Embla,
    EmblaContainer,
    EmblaSlideInner,
    ViewPort,
    StyledButtonWrapper,
    ChevronRight,
    ChevronLeft,
    NavigationContainer,
    StyledDot,
} from './carousel-style'
import { useRecursiveTimeout } from 'components/hooks/use-recursive-timeout'

type PrevNextButtonProps = {
    color: string
    enabled?: boolean
    onClick: () => void
    is_reviews?: boolean
    style?: CSSProperties
}
type NavigationButtonProps = {
    color: string
    is_enabled?: boolean
    onClick: () => void
}

type CarouselProps = {
    autoplay_delay?: number
    autoplay_interval?: number
    chevron_style?: {
        chevron_color?: string
        chevron_left?: CSSProperties
        chevron_right?: CSSProperties
        is_displayed_on_mobile?: boolean
    }
    children?: Element[]
    container_style?: object
    embla_style?: object
    has_autoplay?: boolean
    last_slide_no_spacing?: boolean
    navigation_css?: [string]
    navigation_style?: {
        nav_color?: string
        bottom_offset?: number
        chevron_right?: CSSProperties
        height?: number
    }
    options: object
    slide_inner_width: number
    slide_style: object
    vertical_container: object
    view_port: object
    left: boolean
    black: boolean | string
    red: boolean | string
}

export const PrevButton = ({ color, enabled, is_reviews, onClick, style }: PrevNextButtonProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        left
        style={style}
        is_reviews={is_reviews}
    >
        {color === 'black' ? (
            <ChevronLeft black="true" />
        ) : color === 'red' ? (
            <ChevronLeft red="true" />
        ) : (
            <ChevronLeft />
        )}
    </StyledButtonWrapper>
)

export const NavigationButton = ({ color, is_enabled, onClick }: NavigationButtonProps) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

export const NextButton = ({ color, enabled, is_reviews, onClick, style }: PrevNextButtonProps) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        left={false}
        style={style}
        is_reviews={is_reviews}
    >
        {color === 'black' ? (
            <ChevronRight black="true" />
        ) : color === 'red' ? (
            <ChevronRight red="true" />
        ) : (
            <ChevronRight />
        )}
    </StyledButtonWrapper>
)

export const Carousel = ({
    autoplay_delay,
    autoplay_interval,
    chevron_style,
    children,
    container_style,
    embla_style,
    has_autoplay,
    navigation_style,
    options,
    slide_style,
    slide_inner_width,
    vertical_container,
    view_port,
    navigation_css,
    last_slide_no_spacing,
}: CarouselProps) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

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

    const { play, stop } = useRecursiveTimeout(autoplay, autoplay_interval, autoplay_delay)

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
    const { nav_color, bottom_offset, height } = navigation_style || {}

    return (
        <div style={container_style}>
            <Embla style={embla_style}>
                <ViewPort style={view_port} ref={emblaRef}>
                    <EmblaContainer style={vertical_container ? vertical_container : null}>
                        {children.map((child, idx) => {
                            const new_style =
                                last_slide_no_spacing && idx === children.length - 1
                                    ? { ...slide_style, marginRight: 0, paddingRight: 0 }
                                    : slide_style
                            return (
                                <div key={idx} style={new_style}>
                                    <EmblaSlideInner width={slide_inner_width}>
                                        {child}
                                    </EmblaSlideInner>
                                </div>
                            )
                        })}
                    </EmblaContainer>
                </ViewPort>
                {chevron_color && is_arrow && (
                    <PrevButton
                        color={chevron_color}
                        onClick={scrollPrev}
                        enabled={prevBtnEnabled}
                        style={chevron_left}
                        is_reviews={is_displayed_on_mobile}
                    />
                )}
                {chevron_color && is_arrow && (
                    <NextButton
                        color={chevron_color}
                        onClick={scrollNext}
                        enabled={nextBtnEnabled}
                        style={chevron_right}
                        is_reviews={is_displayed_on_mobile}
                    />
                )}
                {nav_color && (
                    <NavigationContainer
                        navigation_css={navigation_css}
                        bottom_offset={bottom_offset}
                        height={height}
                    >
                        {/* We need the `child` below as an argument for embla-carousel to
                        correctly render the navigation buttons */}
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
        </div>
    )
}
