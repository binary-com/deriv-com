import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PropTypes from 'prop-types'
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
import { useIsRtl } from 'components/hooks/use-isrtl'

export const PrevButton = ({ color, enabled, is_reviews, onClick, style }) => {
    const { is_black, is_red } = useMemo(() => {
        return {
            is_black: color === 'black',
            is_red: color === 'red',
        }
    }, [color])

    const is_rtl = useIsRtl()

    return (
        <StyledButtonWrapper
            onClick={onClick}
            disabled={!enabled}
            left
            style={style}
            is_reviews={is_reviews}
        >
            {is_rtl ? (
                <ChevronRight black={is_black} red={is_red} />
            ) : (
                <ChevronLeft black={is_black} red={is_red} />
            )}
        </StyledButtonWrapper>
    )
}

PrevButton.propTypes = {
    chevron_style: PropTypes.object,
    enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NavigationButton = ({ color, is_enabled, onClick }) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

NavigationButton.propTypes = {
    color: PropTypes.string,
    is_enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NextButton = ({ color, enabled, is_reviews, onClick, style }) => {
    const { is_black, is_red } = useMemo(() => {
        return {
            is_black: color === 'black',
            is_red: color === 'red',
        }
    }, [color])

    const is_rtl = useIsRtl()

    return (
        <StyledButtonWrapper
            onClick={onClick}
            disabled={!enabled}
            style={style}
            is_reviews={is_reviews}
        >
            {is_rtl ? (
                <ChevronLeft black={is_black} red={is_red} />
            ) : (
                <ChevronRight black={is_black} red={is_red} />
            )}
        </StyledButtonWrapper>
    )
}

NextButton.propTypes = PrevButton.propTypes

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
    last_slide_no_spacing = false,
    navigation_css,
}) => {
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

Carousel.propTypes = {
    autoplay_delay: PropTypes.number,
    autoplay_interval: PropTypes.number,
    chevron_style: PropTypes.object,
    children: PropTypes.array,
    container_style: PropTypes.object,
    embla_style: PropTypes.object,
    has_autoplay: PropTypes.bool,
    last_slide_no_spacing: PropTypes.bool,
    navigation_css: PropTypes.array,
    navigation_style: PropTypes.object,
    options: PropTypes.object,
    slide_inner_width: PropTypes.string,
    slide_style: PropTypes.object,
    vertical_container: PropTypes.object,
    view_port: PropTypes.object,
}
