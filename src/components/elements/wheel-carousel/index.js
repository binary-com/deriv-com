import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { WHEEL_ITEM_RADIUS, getSlidesCss } from './wheel-utils'
import { Flex } from 'components/containers'

const WheelWrapper = styled.div`
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
    position: ${({ is_ready }) => (is_ready ? 'absolute' : 'static')};
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
    ${({ is_ready }) => {
        if (is_ready) {
            return css`
                transform: none;
            `
        }
    }}
`

const Label = styled.p`
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

const WheelSlider = ({ label, perspective, loop, slide_count }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop,
        axis: 'y',
        dragFree: true,
        draggingClass: '',
        selectedClass: '',
    })
    const [is_wheel_ready, setWheelReady] = useState(false)
    const [wheelRotation, setWheelRotation] = useState(0)
    const totalRadius = slide_count * WHEEL_ITEM_RADIUS
    const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS
    const slideStyles = getSlidesCss(embla, loop, slide_count, totalRadius, wheelRotation)

    const rotateWheel = useCallback(() => {
        if (!embla) return
        const rotation = slide_count * WHEEL_ITEM_RADIUS - rotationOffset
        setWheelRotation(rotation * embla.scrollProgress())
    }, [setWheelRotation, slide_count, rotationOffset, embla])

    useEffect(() => {
        if (!embla) return

        embla.dangerouslyGetEngine().translate.toggleActive(false)
        setWheelReady(true)

        embla.on('pointerUp', () => {
            const { scrollTo, target, location } = embla.dangerouslyGetEngine()
            scrollTo.distance((target.get() - location.get()) * 0.1, true)
        })

        embla.on('scroll', rotateWheel)
        rotateWheel()
    }, [embla, rotateWheel, setWheelReady])

    return (
        <WheelWrapper perspective={perspective}>
            <WheelScene>
                <WheelViewport ref={viewportRef} height="100%" ai="center">
                    <WheelContainer>
                        {slideStyles.map((slideStyle, index) => (
                            <Slider key={index} is_ready={is_wheel_ready}>
                                {index}
                            </Slider>
                        ))}
                    </WheelContainer>
                </WheelViewport>
            </WheelScene>
            <Label>{label}</Label>
        </WheelWrapper>
    )
}

WheelSlider.propTypes = {
    label: PropTypes.string,
    loop: PropTypes.bool,
    perspective: PropTypes.string,
    slide_count: PropTypes.number,
}

export default WheelSlider
