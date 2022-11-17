import React, { Children, useState, useEffect, useRef, ReactNode } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import ArrowLeft from 'images/svg/testimonials/arrow-left.svg'
import ArrowRight from 'images/svg/testimonials/arrow-right.svg'
import ArrowLeftFade from 'images/svg/testimonials/arrow-left-fade.svg'
import ArrowRightFade from 'images/svg/testimonials/arrow-right-fade.svg'
import device from 'themes/device'

const CarouselItem = styled(Flex)`
    overflow: hidden;
    transition: height 0.1s ease-in, opacity 0.05s ease-in;
`

const FlexiItem = styled(Flex)`
    transition: opacity 0.4s ease-in;

    /* 
     class from a children passed to this component 
     this class is essential to achieve the transition effect
    */

    .flexi-item {
        margin-bottom: 40px;

        @media ${device.tabletL} {
            margin-bottom: 24px;
        }
    }
`

const Molder = styled(Flex)`
    opacity: 0;
`

const Navigation = styled(Flex)`
    @media ${device.tablet} {
        position: relative;
    }
`

const Arrows = styled.img`
    width: 32px;
    height: 32px;
    transition: opacity 0.4s ease-in;
    cursor: pointer;

    @media ${device.tablet} {
        &:nth-child(1) {
            margin-right: 16px;
        }
        &:nth-child(2) {
            margin-left: 16px;
        }
    }
`

const renderNavigations = (
    count: number,
    active: number,
    setActive: Dispatch<SetStateAction<number>>,
    animate: (action) => void,
) => {
    const is_carousel = count > 1
    const has_prev = active !== 0
    const has_next = active < count - 1

    const validSlide = (n) => {
        // values that are out of slide range will return it's respective boundaries
        if (n >= count) {
            return count - 1
        }

        if (n < 0) {
            return 0
        }

        return n
    }

    const previous = () => {
        if (has_prev) {
            animate(() => {
                setActive((current_active) => validSlide(current_active - 1))
            })
        }
    }
    const next = () => {
        if (has_next) {
            animate(() => {
                setActive((current_active) => validSlide(current_active + 1))
            })
        }
    }

    if (is_carousel) {
        return (
            <Navigation
                width="100%"
                jc="space-between"
                position="absolute"
                height="fit-content"
                tablet_jc="center"
                tabletL={{
                    mt: '50px',
                }}
            >
                <Arrows
                    src={has_prev ? ArrowLeft : ArrowLeftFade}
                    onClick={previous}
                    alt="previous arrow"
                />
                <Arrows
                    src={has_next ? ArrowRight : ArrowRightFade}
                    onClick={next}
                    alt="next arrow"
                />
            </Navigation>
        )
    }

    return <React.Fragment />
}

type TestimonialCarouselProps = {
    children?: ReactNode
    default_active?: number
    height?: string
}

const TestimonialCarousel = ({
    children,
    default_active = 0,
    height = 'fit-content',
}: TestimonialCarouselProps) => {
    const [active, setActive] = useState(default_active)
    const children_array = Children.toArray(children)
    const container_ref = useRef(null)
    const molder_ref = useRef(null)
    const flexible_ref = useRef(null)
    const has_active = active !== null

    const animate = (action) => {
        container_ref.current.style.opacity = 0

        setTimeout(() => {
            action()
        }, 100)
    }

    const navigations = renderNavigations(children_array.length, active, setActive, animate)

    useEffect(() => {
        setActive(default_active)
    }, [default_active])

    useEffect(() => {
        if (molder_ref) {
            const molder_element = molder_ref.current
            const flex_height = molder_element.offsetHeight

            // Safari browser issue fallback - offset height is undetectable
            if (flex_height == 0) {
                container_ref.current.querySelector('.flexi-item').style.marginBottom = '40px'
            }

            container_ref.current.style.height = 'fit-content'
            container_ref.current.style.opacity = 1
        }
    }, [active])

    return (
        <Flex
            position="relative"
            direction="column"
            height={height}
            tablet={{
                height: '100% !important',
            }}
        >
            <CarouselItem
                ref={container_ref}
                position="relative"
                ai="center"
                tablet={{
                    direction: 'column',
                }}
            >
                <FlexiItem
                    ref={flexible_ref}
                    p="0 50px"
                    height="100%"
                    position="relative"
                    tablet={{
                        p: '0px',
                    }}
                >
                    {has_active && children_array[active]}
                </FlexiItem>
            </CarouselItem>
            <Molder
                ref={molder_ref}
                position="absolute"
                p="0 50px"
                height="fit-content"
                tablet={{
                    p: '0px',
                }}
            >
                {has_active && children_array[active]}
            </Molder>
            {navigations}
        </Flex>
    )
}

export default TestimonialCarousel
