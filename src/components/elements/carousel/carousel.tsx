import React, { useState, useEffect, useCallback, CSSProperties, ReactNode, Children } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { FlattenSimpleInterpolation } from 'styled-components'
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel-react'
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

export type ButtonsProps = React.HTMLAttributes<HTMLDivElement> & {
    color?: string
    enabled?: boolean
    is_enabled?: boolean
    left?: boolean
    is_reviews?: boolean
    disabled?: boolean
    style?: ChevronStyleType
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
    chevron_left?: CSSProperties
    chevron_right?: CSSProperties
    is_displayed_on_mobile?: boolean
}
type NavigationStyleType = {
    nav_color?: string
    bottom_offset?: number | string
    chevron_right?: CSSProperties
    height?: number
}

type CarouselProps = {
    autoplay_delay?: number
    autoplay_interval?: number
    chevron_style?: ChevronStyleType
    children?: ReactNode[]
    container_style?: CSSProperties
    embla_style?: CSSProperties
    has_autoplay?: boolean
    navigation_style?: NavigationStyleType
    options?: EmblaOptionsType
    plugins?: EmblaPluginType[]
    slide_style?: CSSProperties
    slide_inner_width?: string
    vertical_container?: CSSProperties
    view_port?: CSSProperties
    last_slide_no_spacing?: boolean
    navigation_css?: FlattenSimpleInterpolation
    is_reinit_enabled?: boolean // if you need to re-initialize the carousel on children change, pass true
}

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
    plugins,
    slide_style,
    slide_inner_width,
    vertical_container,
    view_port,
    last_slide_no_spacing = false,
    navigation_css,
    is_reinit_enabled = false,
}: CarouselProps) => {
    const [emblaRef, embla] = useEmblaCarousel(options, plugins)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // we have to reInit the carousel on children count change
    // to make it aware of the change.
    useEffect(() => {
        if (is_reinit_enabled && embla && Children.count(children)) {
            embla.reInit(options, plugins)
        }
    }, [children, embla, options, plugins, is_reinit_enabled])

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
            play()
        },
        [embla, play],
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
    }, [embla, onSelect])

    useEffect(() => {
        play()
    }, [play])

    const { chevron_color, chevron_left, chevron_right, is_displayed_on_mobile } =
        chevron_style || {}
    const is_arrow = prevBtnEnabled || nextBtnEnabled
    const { nav_color, bottom_offset, height } = navigation_style || {}

    if (children)
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
                            {children?.map((child, idx) => (
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

    return <></>
}
