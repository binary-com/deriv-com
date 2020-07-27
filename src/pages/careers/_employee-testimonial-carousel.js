import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { Helmet } from 'react-helmet'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import Chevron from 'images/svg/carousel-chevron.svg'
import QuoteMark from 'images/svg/quotemark.svg'
import NegarImage from 'images/common/careers/negar.jpg'
import KelcentImage from 'images/common/careers/kelcent.jpg'
import MahdiImage from 'images/common/careers/mahdi.jpg'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
    }
`
const StyledHeader = styled(Header)`
    font-size: var(--text-size-header-1);
    padding-bottom: 4.4rem;

    @media ${device.tabletL} {
        font-size: 4.5rem;
    }
`
const StyledChevron = styled(Chevron)`
    g {
        g {
            fill: var(--color-black);
        }
    }
`
const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
`
const ChevronLeft = StyledChevron

const EmployeeCard = styled.article`
    width: 99.6rem;
    min-height: 31.7rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 2rem;

    @media ${device.tabletL} {
        padding: 4rem;
    }
`

const QuoteText = styled(Text)`
    text-align: left;
    padding-bottom: 2.4rem;
    z-index: 10;
    position: relative;
    padding-top: 8.5rem;
    max-width: 38.4rem;

    @media ${device.tabletL} {
        padding-bottom: 1rem;
        font-size: 2rem;
        padding-top: 4rem;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    max-height: 31.7rem;
`

const SliderWrapper = styled.div`
    width: 100%;
    position: relative;

    @media ${device.laptopLC} {
        padding-bottom: 0;
    }
`
const SwiperWrapper = styled.div`
    .swiper-container {
        padding-bottom: 4rem;
    }
    .swiper-slide {
        width: 99.6rem;
    }
    .swiper-pagination {
        bottom: 0;
    }
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
    }
    .swiper-pagination-bullet-active {
        background-color: var(--color-black);
    }
`
const Next = styled.div``
const Prev = styled.div``

const ButtonWrapper = styled.div`
    position: relative;
    width: 99.6rem;
    margin: 0 auto;

    @media ${device.tablet} {
        display: none;
    }

    svg {
        height: 15px;
        width: 15px;
        opacity: 15px;
    }
    div {
        button {
            padding: 10px 12px;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.13);
            border: none;
            background: var(--color-white);
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }
            &:focus {
                outline: none;
            }
        }

        z-index: 10;
        position: absolute;
    }
    ${Next} {
        right: -2%;
        bottom: -20rem;
    }
    ${Prev} {
        left: -2%;
        bottom: -20rem;
    }
`
const QuoteWrapper = styled(Flex)`
    position: relative;

    svg {
        position: absolute;
        right: 15px;
        top: 16px;
    }
`
const EmployeeSlide = ({ quote, img_path, img_alt, name }) => {
    return (
        <Flex ai="center" height="unset">
            <EmployeeCard>
                <Flex tablet_direction="column">
                    <Flex>
                        <ImageWrapper>
                            <img
                                loading="lazy"
                                width="100%"
                                height="100%"
                                src={img_path}
                                alt={img_alt}
                            />
                        </ImageWrapper>
                    </Flex>
                    <QuoteWrapper direction="column">
                        <QuoteMark />
                        <QuoteText as="blockquote">{quote}</QuoteText>
                        <Text weight="bold">{name}</Text>
                    </QuoteWrapper>
                </Flex>
            </EmployeeCard>
        </Flex>
    )
}

EmployeeSlide.propTypes = {
    img_alt: PropTypes.string,
    img_path: PropTypes.string,
    name: PropTypes.string,
    quote: PropTypes.string,
    title: PropTypes.string,
}

const kelcent = {
    name: 'Kelcent Tan, Principal and Compliance Officer',
    img_alt: localize('Kelcent - Principal and Compliance Officer'),
    img_path: KelcentImage,
    quote:
        'We have a working culture where everyone is open and willing to share their  knowledge and expertise. This gives me invaluable insights into how other departments operate and helps me understand how my role impacts business operations as a whole.',
    index: 1,
}
const negar = {
    name: 'Negar Naghshbandi, Front-end Developer & Team Lead',
    img_alt: localize('Negar - Front-end Developer & Team Lead'),
    img_path: NegarImage,
    quote:
        'The most exciting thing for me is the culture of the company and the people I work with. I learn something new everyday and I can pair-program with anyone when needed because everyone is approachable and eager to help.',
    index: 2,
}
const mahdi = {
    name: 'Mahdi Pourziaei, Front-end Developer',
    img_alt: localize('Mahdi - Front-end Developer'),
    img_path: MahdiImage,
    quote: `Two words: 'autonomy' and 'friendly'. Working at Deriv has been full of growth as I get to pick my own challenges and see them through, and it really wouldn’t feel as empowering without the friendly culture. I’m happy to be amongst all the brilliant people here.`,
    index: 3,
}

const employee_testimonials = [kelcent, negar, mahdi]

const EmployeeTestimonialCarousel = () => {
    const ref = React.useRef(null)

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev()
        }
    }

    const params = {
        lazy: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }

    return (
        <>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/swiper.css" />
            </Helmet>
            <StyledSection padding="12rem 0">
                <StyledHeader align="center" as="h2">
                    In the words of our employees
                </StyledHeader>
                <ButtonWrapper>
                    <Next>
                        <button onClick={goNext}>
                            <ChevronRight />
                        </button>
                    </Next>
                    <Prev>
                        <button onClick={goPrev}>
                            <ChevronLeft />
                        </button>
                    </Prev>
                </ButtonWrapper>
                <SliderWrapper>
                    <SwiperWrapper>
                        <Swiper {...params} ref={ref}>
                            {employee_testimonials.map((employee_slide) => (
                                <div className="swiper-slide" key={employee_slide.name}>
                                    <EmployeeSlide
                                        quote={employee_slide.quote}
                                        name={employee_slide.name}
                                        img_path={employee_slide.img_path}
                                        img_alt={employee_slide.img_alt}
                                    />
                                </div>
                            ))}
                        </Swiper>
                    </SwiperWrapper>
                </SliderWrapper>
            </StyledSection>
        </>
    )
}

export default EmployeeTestimonialCarousel
