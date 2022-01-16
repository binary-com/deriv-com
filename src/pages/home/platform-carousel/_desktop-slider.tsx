import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import { platform_details, PlatformContent, PlatformIcon } from './utils'
import { Box, Flex } from 'components/containers'
import { Header } from 'components/elements'

const SliderViewport = styled(Flex)`
    overflow: hidden;
    max-height: 500px;
    user-select: none;

    @media (min-width: 1440px) {
        max-height: 90%;
    }
`

const SelectedCard = styled(Flex)`
    max-width: 384px;
    background: white;
    box-shadow: 0 16px 20px rgba(131, 131, 131, 0.15), 0 0 20px rgba(131, 131, 131, 0.15);
    border-radius: 6px;
    backface-visibility: hidden;
    left: 16px;

    @media (min-width: 1440px) {
        max-width: 90%;
    }
`

const UnSelectedCard = styled(Flex)`
    opacity: 0.32;
`

type WheelSliderProps = {
    selected_slide: string
    onSelectSlide: Dispatch<SetStateAction<string>>
}

const PlatformSlider = ({ selected_slide, onSelectSlide }: WheelSliderProps) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        axis: 'y',
        align: 'start',
    })

    const clickHandler = (index: number, title: string) => {
        embla.scrollTo(index - 2)
        setTimeout(() => onSelectSlide(title), 500)
    }

    return (
        <Box position="relative" width="40%" m="0 2.4rem 0 12rem">
            <Flex position="relative" m="0 auto">
                <SliderViewport ref={viewportRef} position="relative">
                    <Flex jc="start" fd="column">
                        {platform_details.map(
                            ({ title, icon, description, learn_more_link }, index) => {
                                if (selected_slide === title) {
                                    return (
                                        <SelectedCard
                                            key={index}
                                            position="relative"
                                            width="fit-content"
                                            height="199px"
                                            p="16px"
                                            m="40px 0"
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
                                        </SelectedCard>
                                    )
                                } else {
                                    return (
                                        <UnSelectedCard
                                            position="relative"
                                            height="fit-content"
                                            p="16px"
                                            onClick={() => clickHandler(index, title)}
                                        >
                                            <PlatformIcon
                                                width="40px"
                                                height="40px"
                                                src={icon}
                                                alt="platform"
                                            />
                                            <Header type="subtitle-1">{title}</Header>
                                        </UnSelectedCard>
                                    )
                                }
                            },
                        )}
                    </Flex>
                </SliderViewport>
            </Flex>
        </Box>
    )
}

export default PlatformSlider
