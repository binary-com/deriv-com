import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled, { css } from 'styled-components'
import { platform_details, PlatformContent, PlatformIcon } from './utils'
import { Box, Flex } from 'components/containers'
import { Header } from 'components/elements'

const SliderViewport = styled(Flex)`
    overflow: hidden;
    height: 100%;
    user-select: none;
`

const SlideCard = styled(Flex)<{ is_selected: boolean }>`
    ${({ is_selected }) => {
        if (is_selected) {
            return css`
                width: fit-content;
                max-width: 384px;
                height: 199px;
                padding: 16px;
                background: white;
                box-shadow: 0px 16px 20px rgba(131, 131, 131, 0.15),
                    0px 0px 20px rgba(131, 131, 131, 0.15);
                border-radius: 6px;
                backface-visibility: hidden;
                margin: 40px 0;
                left: 16px;
            `
        }
        return css`
            opacity: 0.32;
            height: fit-content;
            padding: 16px;
        `
    }}
`

type WheelSliderProps = {
    selected_slide: number
    onSelectSlide: Dispatch<SetStateAction<number>>
}

const PlatformSlider = ({ selected_slide, onSelectSlide }: WheelSliderProps) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        axis: 'y',
        draggable: true,
        startIndex: selected_slide,
        skipSnaps: false,
    })

    const clickHandler = (index: number) => {
        embla.scrollTo(index)
        setTimeout(() => onSelectSlide(index), 500)
    }

    return (
        <Box position="relative" width="40%" m="0 2.4rem 0 12rem">
            <Flex position="relative" m="0 auto">
                <SliderViewport ref={viewportRef} position="relative">
                    <Flex fd="column">
                        {platform_details.map(
                            ({ title, icon, description, learn_more_link }, index) => {
                                const is_selected = selected_slide === index
                                return (
                                    <SlideCard
                                        key={index}
                                        is_selected={is_selected}
                                        onClick={() => {
                                            if (!is_selected) {
                                                clickHandler(index)
                                            }
                                        }}
                                    >
                                        <PlatformIcon
                                            width="40px"
                                            height="40px"
                                            src={icon}
                                            alt="platform"
                                        />
                                        <Flex fd="column" jc="start" ml="8px">
                                            <PlatformContent
                                                title={title}
                                                description={description}
                                                learn_more_link={learn_more_link}
                                                is_from_slider
                                            />
                                        </Flex>
                                    </SlideCard>
                                )
                            },
                        )}
                    </Flex>
                </SliderViewport>
            </Flex>
        </Box>
    )
}

export default PlatformSlider
