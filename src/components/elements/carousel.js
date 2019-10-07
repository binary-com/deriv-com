import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'components/containers/container'
import { Text, Header } from 'components/elements/typography.js'
import Image from 'components/elements/image'
import ChecklistLogo from 'images/svg/checklist.svg'
import Chevron from 'images/svg/carousel-chevron.svg'

const Bullet = styled.div`
    div {
        display: inline-flex;
        align-items: center;
        margin-top: 3rem;
        width: 100%;
        position: relative;

        p {
            margin-left: 1.6rem;
            font-size: var(--text-size-m);
        }
    }
    div:first-child {
        margin-top: 0;
    }
`

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
`

const CarouselContent = styled.div`
    display: flex;
    position: relative;
`

const LeftContent = styled.div``

const CarouselWrapper = styled.div`
    display: flex;
    position: relative;
`
const AnimatedContainer = styled(Container)`
    @keyframes slide {
        0% {
            margin-left: 12.6rem;
            opacity: 0;
        }
        70% {
            opacity: 0.2;
        }
        100% {
            margin-left: 0;
            opacity: 1;
        }
    }

    animation-name: slide;
    animation-duration: 0.4s;
    animation-timing-function: linear;
`

const ChevronContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => (props.left ? '0 0 0 4rem' : '0 4rem 0 0')};

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

const HeaderWrapper = styled.div`
    padding-bottom: 4rem;
`

const Bullets = ({ carousel_text }) => (
    <Bullet>
        {carousel_text.map(content => (
            <div key={content}>
                <ChecklistLogo />
                <Text color="white" weight="500">
                    {content}
                </Text>
            </div>
        ))}
    </Bullet>
)

Bullets.propTypes = {
    carousel_text: PropTypes.array,
}

const Carousel = ({ slides, header, children }) => {
    const [active_slide, setActiveSlide] = useState(0)
    const last_slide = slides.length - 1
    const { text, img_name, img_alt } = slides[active_slide]

    const next = () => {
        if (active_slide === last_slide) return setActiveSlide(0)
        return setActiveSlide(active_slide + 1)
    }

    const previous = () => {
        if (active_slide === 0) return setActiveSlide(last_slide)
        return setActiveSlide(active_slide - 1)
    }

    return (
        <CarouselWrapper>
            <ChevronContainer onClick={previous} left>
                <Chevron />
            </ChevronContainer>
            <AnimatedContainer justify="flex-start" align="start">
                <LeftContent>
                    {header && (
                        <HeaderWrapper>
                            <Header as="h2" color="white">
                                {header}
                            </Header>
                        </HeaderWrapper>
                    )}
                    <CarouselContent>
                        <Bullets carousel_text={text} />
                    </CarouselContent>
                    {children && children}
                </LeftContent>
                <div>
                    <Image
                        img_name={img_name}
                        alt={img_alt}
                        width="43rem"
                        height="29.1rem"
                    />
                </div>
            </AnimatedContainer>
            <ChevronContainer onClick={next}>
                <ChevronRight />
            </ChevronContainer>
        </CarouselWrapper>
    )
}

Carousel.propTypes = {
    background: PropTypes.array,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    header: PropTypes.string,
    slides: PropTypes.array,
}
export default Carousel
