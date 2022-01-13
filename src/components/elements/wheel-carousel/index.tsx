import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styled, { css } from 'styled-components'
import { WHEEL_ITEM_RADIUS, getSlideStyles } from './wheel-utils'
import { Flex } from 'components/containers'

const WheelWrapper = styled.div<{ perspective: 'left' | 'right' }>`
    ${({ perspective }) => {
        if (perspective === 'left') {
            return css`
                perspective-origin: 150%;
                transform: translateX(-8px);
            `
        } else if (perspective === 'right') {
            return css`
                perspective-origin: -50%;
                transform: translateX(-32px);
            `
        }
    }}
`

const WheelScene = styled.div`
    min-width: 100%;
    height: 100%;
    overflow: hidden;
`

const WheelViewport = styled(Flex)`
    position: relative;
    user-select: none;
`

const WheelContainer = styled.div`
    height: 32px;
    width: 100%;
    perspective: 1000px;
`

const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 19px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    opacity: 0;
`

const Label = styled.p<{ perspective: 'left' | 'right' }>`
    ${({ perspective }) => {
        if (perspective === 'left') {
            return css`
                transform: translateX(-76px);
            `
        } else if (perspective === 'right') {
            return css`
                transform: translateX(-70px);
            `
        }
    }}
`

type WheelSliderProps = {
    label: string
    perspective: 'right' | 'left'
    loop: boolean
    slide_count: number
}

const WheelSlider = ({ label, perspective, loop, slide_count }: WheelSliderProps) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop,
        axis: 'y',
        dragFree: true,
    })
    const [is_wheel_ready, setWheelReady] = useState(false)
    const [wheel_rotation, setWheelRotation] = useState(0)
    const total_radius = slide_count * WHEEL_ITEM_RADIUS
    const rotation_offset = loop ? 0 : WHEEL_ITEM_RADIUS
    const slide_styles = getSlideStyles(embla, loop, slide_count, total_radius, wheel_rotation)

    const rotateWheel = useCallback(() => {
        if (!embla) return
        const rotation = slide_count * WHEEL_ITEM_RADIUS - rotation_offset
        setWheelRotation(rotation * embla.scrollProgress())
    }, [setWheelRotation, slide_count, rotation_offset, embla])

    useEffect(() => {
        if (!embla) return

        const engine = embla.internalEngine()
        engine.translate.toggleActive(false)
        setWheelReady(true)

        embla.on('pointerUp', () => {
            engine.scrollTo.distance(engine.target.get() - engine.location.get() * 0.1, true)
        })

        embla.on('scroll', rotateWheel)
        rotateWheel()
    }, [embla, rotateWheel, setWheelReady])

    return (
        <div>
            <WheelWrapper perspective={perspective}>
                <WheelScene>
                    <WheelViewport ref={viewportRef} height="100%" ai="center">
                        <WheelContainer>
                            {slide_styles.map((style, index) => {
                                return (
                                    <Slider
                                        key={index}
                                        style={
                                            is_wheel_ready
                                                ? style
                                                : { transform: 'none', position: 'static' }
                                        }
                                    >
                                        {index}
                                    </Slider>
                                )
                            })}
                        </WheelContainer>
                    </WheelViewport>
                </WheelScene>
                <Label perspective={perspective}>{label}</Label>
            </WheelWrapper>
        </div>
    )
}

export default WheelSlider
