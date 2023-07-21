import React, { useCallback, useEffect, useMemo } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel-react'
import styled, { css } from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import { PlatformContent, ImageTag, PLATFORMS_CAROUSEL_DELAY } from '../_utils'
import type { TPlatformDetails } from '../_utils'
import {
    selected_zone,
    view_port,
    slide,
    scene,
    WheelContainer,
    slider_wrapper,
    shadow,
    shadow_start,
    shadow_end,
    box_wrapper,
} from './platform-slider.module.scss'
import { Box } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import dclsx from 'features/utils/dclsx'
import Flex from 'features/components/atoms/flex-box'

// const SelectedZone = styled(Flex)`
//     left: 0;
//     right: 0;
//     box-shadow: rgba(131, 131, 131, 0.15) 0 16px 20px, rgba(131, 131, 131, 0.15) 0 0 20px;
//     top: calc(50% - 152px / 2);
//     z-index: 4;
// `

type SelectedSlideProps = {
    selected_slide: TPlatformDetails
}

const SelectedSlide = ({ selected_slide }: SelectedSlideProps) => {
    if (selected_slide) {
        const { title, icon, description, learn_more_link } = selected_slide
        return (
            <Flex.Box className={dclsx(selected_zone)}>
                <ImageTag src={icon} alt={title} />
                <Flex.Box direction="col" justify="start" ml="4x">
                    {/*ml="8px"*/}
                    <PlatformContent
                        title={title}
                        description={description}
                        learn_more_link={learn_more_link}
                        is_from_slider
                    />
                </Flex.Box>
            </Flex.Box>
        )
    }

    return <></>
}

const Shadow = styled.div<{ location: 'start' | 'end' }>`
    position: absolute;
    left: 0;
    right: 0;
    height: calc(50% - 152px / 2);
    z-index: 1;
    pointer-events: none;
    ${({ location }) => {
        if (location === 'start') {
            return css`
                top: -0.5px;
                background: linear-gradient(
                    to top,
                    rgba(249, 251, 255, 0) 0%,
                    rgba(249, 251, 255, 1) 100%
                );
            `
        } else {
            return css`
                bottom: -0.5px;
                background: linear-gradient(rgba(249, 251, 255, 0) 0%, rgba(249, 251, 255, 1) 100%);
            `
        }
    }}
`

// const Scene = styled.div`
//     min-width: 100%;
//     height: 100%;
//     overflow: hidden;
// `

// const Viewport = styled(Flex)`

// `

// const WheelContainer = styled.div`
//     height: 100px;
//     width: 96%;
//     perspective: 1000px;
//     perspective-origin: 150%;
// `

const Slide = styled(Flex)<{ distance_center: number }>`
    text-align: center;
    align-items: center;
    cursor: pointer;
    backface-visibility: hidden;
    margin-bottom: 40px;
`

const StyledFlex = styled(Flex)`
    width: 600px;

    @media ${device.desktop} {
        width: 384px;
    }
`

type PlatformSliderProps = {
    slide_index: number
    onSelectSlide: Dispatch<SetStateAction<number>>
    platform_details: TPlatformDetails[]
}

const carouselOptions: EmblaOptionsType = {
    startIndex: 0,
    loop: false,
    axis: 'y',
    skipSnaps: false,
    draggable: false,
}

const PlatformSlider = ({ slide_index, onSelectSlide, platform_details }: PlatformSliderProps) => {
    const { is_eu } = useRegion()
    const auto_play = useMemo(() => {
        return Autoplay({
            delay: PLATFORMS_CAROUSEL_DELAY,
            playOnInit: !is_eu,
        })
    }, [is_eu])

    const [viewportRef, embla] = useEmblaCarousel(carouselOptions, [auto_play])

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                onSelectSlide(embla.selectedScrollSnap())
            })
        }
    }, [embla, onSelectSlide])

    // Since the platform_details is changing based on useRegion hook data, we have to reInit the carousel
    // to make it aware of the change.
    useEffect(() => {
        if (embla) {
            embla.reInit(carouselOptions, [auto_play])
        }
    }, [embla, platform_details, auto_play])

    const scrollHandler = useCallback(
        (index) => {
            if (embla) {
                embla.scrollTo(index)
            }
        },
        [embla],
    )

    const clickHandler = (index) => {
        scrollHandler(index)
        onSelectSlide(index)
    }

    if (platform_details) {
        return (
            <div className={dclsx(box_wrapper)}>
                <Flex.Box className={dclsx(slider_wrapper)}>
                    <div className={dclsx(shadow, shadow_start)} />
                    <div className={dclsx(shadow, shadow_end)} />
                    <SelectedSlide
                        selected_slide={platform_details[slide_index] || platform_details[0]}
                    />
                    {/* <Flex.Box align="center" > */}
                    <div className={dclsx(scene)}>
                        <div
                            className={dclsx(view_port, 'flex', 'align-items-center')}
                            ref={viewportRef}
                        >
                            <div className={dclsx(WheelContainer)}>
                                {platform_details.map(({ title, icon, learn_more_link }, index) => {
                                    return (
                                        <Flex.Box
                                            align="center"
                                            justify="start"
                                            key={learn_more_link}
                                            onClick={() => clickHandler(index)}
                                            className={slide}
                                        >
                                            <ImageTag src={icon} />
                                            <Header type="subtitle-1">{title}</Header>
                                        </Flex.Box>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* </Flex.Box> */}
                </Flex.Box>
            </div>
        )
    }
    return <></>
}

export default PlatformSlider
