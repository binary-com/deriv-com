import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import { Container, SectionContainer, Flex } from 'components/containers'
import Chevron from 'images/svg/carousel-chevron.svg'
import QuoteMark from 'images/svg/quotemark.svg'

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
    max-width: 41rem;

    @media ${device.tabletL} {
        padding-bottom: 1rem;
        font-size: 2rem;
        padding-top: 4rem;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
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
const EmployeeSlide = ({ quote, img_data, img_alt, name }) => {
    React.useEffect(() => {
        // duplicate slides from react-id-swiper are not considered within viewport and therefore opacity remains at 0
        // add classname to force opacity
        const duplicate_slides_el = document.getElementsByClassName('swiper-slide-duplicate')
        if (duplicate_slides_el) {
            const active_duplicates = Array.from(duplicate_slides_el)
            active_duplicates.forEach(el => {
                el.classList.add('force-opacity')
            })
        }
    })

    return (
        <Flex ai="center" height="unset">
            <EmployeeCard>
                <Flex tablet_direction="column">
                    <Flex>
                        <ImageWrapper>
                            <QueryImage data={img_data} alt={img_alt} />
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
    img_data: PropTypes.string,
    name: PropTypes.string,
    quote: PropTypes.string,
    title: PropTypes.string,
}

const kelcent = {
    name: localize('Kelcent Tan, Principal & Compliance Officer'),
    img_key: 'kelcent',
    quote: localize(
        'We have a working culture where everyone is open and willing to share their  knowledge and expertise. This gave me invaluable insights into how other departments operate and helped me understand how my role impacts business operations as a whole.',
    ),
    index: 1,
}
const negar = {
    name: localize('Negar Naghshbandi, Front-end Developer & Team Lead'),
    img_key: 'negar',
    quote: localize(
        'The most exciting thing for me is the culture of the company and the people I work with. I learn something new everyday and I can pair-program with anyone when needed because everyone is approachable and eager to help.',
    ),
    index: 2,
}
const mahdi = {
    name: localize('Mahdi Pourziaei, Front-end Developer'),
    img_key: 'mahdi',
    quote: localize(
        'Two words: “autonomy”, and “friendly”. Working at Deriv has been full of growth as I get to pick my own challenges and see them through, and it really wouldn’t feel as empowering without the friendly culture. I’m happy to be amongst all the brilliant people here.',
    ),
    index: 3,
}

const query = graphql`
    query {
        negar: file(relativePath: { eq: "careers/negar.jpg" }) {
            ...fadeIn
        }
        mahdi: file(relativePath: { eq: "careers/mahdi.jpg" }) {
            ...fadeIn
        }
        kelcent: file(relativePath: { eq: "careers/kelcent.jpg" }) {
            ...fadeIn
        }
    }
`

const employee_testimonials = [kelcent, negar, mahdi]

const EmployeeTestimonialCarousel = () => {
    const [swiper, updateSwiper] = useState(null)
    const images = useStaticQuery(query)

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext()
        }
    }

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev()
        }
    }

    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <>
            <StyledSection>
                <Container direction="column">
                    <StyledHeader align="center" as="h2">
                        {localize('In the words of our employees')}
                    </StyledHeader>
                </Container>
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
                        <Swiper {...params} getSwiper={updateSwiper}>
                            {employee_testimonials.map(employee_slide => (
                                <div className="swiper-slide" key={employee_slide.name}>
                                    <EmployeeSlide
                                        quote={employee_slide.quote}
                                        name={employee_slide.name}
                                        img_data={images[employee_slide.img_key]}
                                        img_alt={employee_slide.name}
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
