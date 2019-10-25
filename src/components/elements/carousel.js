import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { Text, Header, Image } from 'components/elements'
// Icons
import ChecklistLogo from 'images/svg/checklist.svg'
import Chevron from 'images/svg/carousel-chevron.svg'
import device from 'themes/device'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
`

const CarouselContent = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        margin-top: 3rem;
        width: 100%;

        p {
            margin-left: 1.6rem;
            font-size: var(--text-size-m);
            white-space: normal;
        }
    }
    div:first-child {
        margin-top: 0;
    }
`

const LeftContent = styled.div`
    margin-left: 5%;

    /* TODO: handle carousels with non overflow images  */
    @media (min-width: 1024px) {
        margin-left: 0;
    }
    @media screen and (min-width: 1300px) and (max-width: 1420px) {
        margin-left: 3%;
    }
    @media (min-width: 1420px) {
        margin-left: 5%;
    }
`

const CarouselWrapper = styled.div`
    display: flex;
`
const SliderWrapper = styled(Container)`
    /* TODO: handle carousels with non overflow images  */
    @media ${device.desktop} {
        max-width: 1150px;
    }
    @media ${device.desktopL} {
        max-width: 1550px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }

    display: flex;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
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

const ImageContainer = styled.div`
    width: 100%;
    margin-top: 2.3rem;

    @media (max-width: 1150px) {
        display: none;
    }
`

const SlideWrapper = styled.div`
    width: 100%;
    display: inline-block;
    padding: 0 1px;

    /* stylelint-disable-next-line */
    > div {
        display: flex;
    }
`

const Slide = ({ slides, translate_width, children }) => (
    <div
        style={{
            transform: `translateX(${translate_width}px)`,
            transition: 'transform ease-out 0.45s',
            width: '100%',
            whiteSpace: 'nowrap',
        }}
    >
        {slides.map((slide, idx) => (
            <SlideWrapper key={idx}>
                <div>
                    <LeftContent>
                        <HeaderWrapper>
                            <Header as="h2" color="white">
                                {slide.header}
                            </Header>
                        </HeaderWrapper>
                        <CarouselContent>
                            {slide.text.map(content => (
                                <div key={content}>
                                    <ChecklistLogo />
                                    <Text color="white" weight="500">
                                        {content}
                                    </Text>
                                </div>
                            ))}
                        </CarouselContent>
                        {children && children}
                    </LeftContent>
                    <ImageContainer>
                        <Image
                            img_name={slide.img_name}
                            alt={slide.img_alt}
                            width="100%"
                        />
                    </ImageContainer>
                </div>
            </SlideWrapper>
        ))}
    </div>
)

Slide.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    slides: PropTypes.array,
    translate_width: PropTypes.number,
}

const Carousel = ({ slides, children }) => {
    const ref = React.useRef(null)
    const last_slide = slides.length - 1
    const first_slide = 0

    const [active_slide, setActiveSlide] = useState(0)
    const [translate_width, setTranslateWidth] = useState(0)
    const [slide_width, setSlideWidth] = useState(0)

    const setWidth = () => {
        const width = ref.current ? ref.current.offsetWidth : 0
        setSlideWidth(width)
    }

    React.useEffect(() => {
        setWidth()
        window.addEventListener('resize', setWidth)
        return () => window.removeEventListener('resize', setWidth)
    }, [ref.current])

    const next = () => {
        if (active_slide === last_slide) {
            setActiveSlide(first_slide)
            setTranslateWidth(0)
            return
        }
        setActiveSlide(active_slide + 1)
        setTranslateWidth(translate_width - slide_width)
    }

    const previous = () => {
        if (active_slide === first_slide) {
            setActiveSlide(last_slide)
            setTranslateWidth(-(slide_width * (slides.length - 1)))
            return
        }
        setActiveSlide(active_slide - 1)
        setTranslateWidth(translate_width + slide_width)
    }

    return (
        <CarouselWrapper>
            <ChevronContainer onClick={previous} left>
                <Chevron />
            </ChevronContainer>
            <SliderWrapper ref={ref}>
                <Slide
                    translate_width={translate_width}
                    slide_width={slide_width}
                    slides={slides}
                >
                    {children}
                </Slide>
            </SliderWrapper>
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
    slides: PropTypes.array,
}
export default Carousel
