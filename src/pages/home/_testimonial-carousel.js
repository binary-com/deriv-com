import React, { Children, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import ArrowLeft from 'images/svg/testimonials/arrow-left.svg'
import ArrowRight from 'images/svg/testimonials/arrow-right.svg'
import ArrowLeftFade from 'images/svg/testimonials/arrow-left-fade.svg'
import ArrowRightFade from 'images/svg/testimonials/arrow-right-fade.svg'
import device from 'themes/device'

const CarouselContainer = styled(Flex)`
    position: relative;

    .carousel-item {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease-in;
        align-items: center;

        .flexible-height {
            position: relative;
            transition: opacity 0.3s ease-in;

            .flexi-item {
                margin-bottom: 0;
            }
        }
    }
    .height-scanner {
        opacity: 0;
    }
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
        margin-right: 32px;
    }
`

const renderNavigations = (count, active, setActive, animate) => {
    const is_carousel = count > 1
    const has_prev = active !== 0
    const has_next = active < count - 1

    const validSlide = (n) => {
        return n >= 0 && n < count ? n : 0
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
                tablet={{
                    mt: '24px',
                }}
            >
                <Arrows src={has_prev ? ArrowLeft : ArrowLeftFade} onClick={previous} />
                <Arrows src={has_next ? ArrowRight : ArrowRightFade} onClick={next} />
            </Navigation>
        )
    }

    return <React.Fragment />
}

const TestimonialCarousel = ({ children, default_active = 0, height = '295px' }) => {
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
        }, 300)
    }

    const navigations = renderNavigations(children_array.length, active, setActive, animate)

    useEffect(() => {
        setActive(default_active)
    }, [default_active])

    useEffect(() => {
        if (molder_ref) {
            const scanner_element = molder_ref.current
            const flex_height = scanner_element.offsetHeight

            container_ref.current.style.height = flex_height + 'px'
            container_ref.current.style.opacity = 1
        }
    }, [active])
    return (
        <CarouselContainer
            direction="column"
            height={height}
            tablet={{
                height: '100% !important',
            }}
        >
            <Flex
                className="carousel-item"
                ref={container_ref}
                tablet={{
                    direction: 'column',
                }}
            >
                <Flex
                    className="flexible-height"
                    ref={flexible_ref}
                    p={'0 50px'}
                    height="100%"
                    tablet={{
                        p: '0px',
                    }}
                >
                    {has_active && children_array[active]}
                </Flex>
            </Flex>
            <Flex
                className="height-scanner"
                ref={molder_ref}
                position="absolute"
                p="0 50px"
                opacity="0"
                height="fit-content"
                tablet={{
                    p: '0px',
                }}
            >
                {has_active && children_array[active]}
            </Flex>
            {navigations}
        </CarouselContainer>
    )
}

TestimonialCarousel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    default_active: PropTypes.number,
    height: PropTypes.string,
}

export default TestimonialCarousel
