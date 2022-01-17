import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled, { css } from 'styled-components'
import { platform_details, PlatformContent, ImageTag } from './utils'
import { Box, Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const SliderViewport = styled(Flex)`
    overflow: hidden;
    height: 644px;
    max-height: 644px;
    user-select: none;
    cursor: grab;

    @media ${device.laptopM} {
        height: 540px;
        max-height: 540px;
    }
`

export const selectedCard = css`
    max-width: 384px;
    background: white;
    box-shadow: 0 16px 20px rgba(131, 131, 131, 0.15), 0 0 20px rgba(131, 131, 131, 0.15);
    border-radius: 6px;
    backface-visibility: hidden;
    left: 16px;

    @media ${device.laptopM} {
        max-width: 100%;
        left: 0;
        margin: 0 20px 30px;
    }

    @media (min-width: 1440px) {
        max-width: 90%;
    }
`

const UnSelectedCard = styled(Flex)`
    width: auto;
    cursor: pointer;
    opacity: ${(props) => (props.active ? '1' : '0.32')};
    ${(props) => props.active && selectedCard};
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

    const clickHandler = React.useCallback(
        (index: number, title: string) => {
            if (!embla || !embla.clickAllowed()) return

            // embla.scrollTo(0) <-- commented this line because it will break the carousel loop
            setTimeout(() => onSelectSlide(title), 300)
        },
        [embla],
    )

    return (
        <Box
            position="relative"
            width="40%"
            m="0 2.4rem 0 12rem"
            laptopM={{ width: '50%', m: '0 2.4rem' }}
        >
            <Flex position="relative" m="0 auto">
                <SliderViewport ref={viewportRef} position="relative">
                    <Flex jc="start" fd="column">
                        {platform_details.map(
                            ({ title, icon, description, learn_more_link }, index) => {
                                return (
                                    <UnSelectedCard
                                        key={`${title}${index}`}
                                        position="relative"
                                        height="fit-content"
                                        p="16px"
                                        mt="16px"
                                        mb="16px"
                                        onClick={() => clickHandler(index, title)}
                                        active={selected_slide == title}
                                    >
                                        <ImageTag src={icon} alt={title} />
                                        <>
                                            {selected_slide == title ? (
                                                <Flex fd="column" jc="start" ml="8px">
                                                    <PlatformContent
                                                        title={title}
                                                        description={description}
                                                        learn_more_link={learn_more_link}
                                                        is_from_slider
                                                    />
                                                </Flex>
                                            ) : (
                                                <Header type="subtitle-1">{title}</Header>
                                            )}
                                        </>
                                    </UnSelectedCard>
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
