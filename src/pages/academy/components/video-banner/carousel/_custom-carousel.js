import React, { useState, useEffect, useCallback } from 'react'
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

export const PrevButton = ({ color, enabled, is_reviews, onClick, style }) => (
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
        ) : color === 'custom' ? (
            <ChevronLeft custom="true" />
        ) : (
            <ChevronLeft />
        )}
    </StyledButtonWrapper>
)

PrevButton.propTypes = {
    chevron_style: PropTypes.object,
    enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

// TODO: will remove later,not using this for now
export const NavigationButton = ({ color, is_enabled, onClick }) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

NavigationButton.propTypes = {
    color: PropTypes.string,
    is_enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NextButton = ({ color, enabled, is_reviews, onClick, style }) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        style={style}
        is_reviews={is_reviews}
    >
        {color === 'black' ? (
            <ChevronRight black="true" />
        ) : color === 'red' ? (
            <ChevronRight red="true" />
        ) : color === 'custom' ? (
            <ChevronRight custom="true" />
        ) : (
            <ChevronRight />
        )}
    </StyledButtonWrapper>
)

NextButton.propTypes = PrevButton.propTypes

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
}) => {
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

CustomCarousel.propTypes = {
    autoplay_interval: PropTypes.number,
    chevron_style: PropTypes.object,
    children: PropTypes.array,
    container_style: PropTypes.object,
    custom_blog_video_nav: PropTypes.bool,
    custom_blog_video_nav_style: PropTypes.object,
    has_autoplay: PropTypes.bool,
    navigation_style: PropTypes.object,
    options: PropTypes.object,
    slide_mobile_style: PropTypes.object,
    slide_style: PropTypes.object,
    vertical_container: PropTypes.object,
    view_port: PropTypes.object,
}
