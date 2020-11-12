import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Carousel, Header, Text } from 'components/elements'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import QuoteMark from 'images/svg/quotemark.svg'
import NegarImage from 'images/common/careers/negar.jpg'
import AhmadImage from 'images/common/careers/ahmad.jpg'
import AdityaImage from 'images/common/careers/aditya.jpg'
import GaryImage from 'images/common/careers/gary.jpg'
import MeiThengImage from 'images/common/careers/mei_theng.jpg'

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
    @media ${device.tabletS} {
        padding: 0 3rem;
    }
    @media ${device.mobileL} {
        font-size: 3.2rem;
        padding: 0 3.5rem;
    }
`

const EmployeeCard = styled.article`
    width: 99.6rem;
    min-height: 31.7rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 2rem;

    @media ${device.tablet} {
        padding: 4rem;
    }

    @media ${device.tablet} {
        width: 49.8rem;
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

const QuoteWrapper = styled(Flex)`
    position: relative;

    img {
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
                        <img src={QuoteMark} alt="quotemark" />
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

const negar = {
    name: 'Negar Naghshbandi, Front-end Developer & Team Lead',
    img_alt: 'Negar - Front-end Developer & Team Lead',
    img_path: NegarImage,
    quote:
        'The most exciting thing for me is the culture of the company and the people I work with. I learn something new everyday and I can pair-program with anyone when needed because everyone is approachable and eager to help.',
    index: 1,
}
const ahmad = {
    name: 'Ahmad Aizuddin, Disaster Recovery Analyst',
    img_alt: 'Ahmad - Recovery Analyst',
    img_path: AhmadImage,
    quote: `One of the things I like best about working here is how we’re encouraged to take ownership of our tasks and goals. The autonomy and trust by the leadership team motivate me to excel in my role.`,
    index: 2,
}
const aditya = {
    name: 'Lalitaditya Addanki, DevOps Engineer',
    img_alt: 'Lalitaditya - DevOps Engineer',
    img_path: AdityaImage,
    quote: `The best thing about my peers is that they are highly talented and skilled. Problem-solving and brainstorming with my team is fun, and they provide a great support structure. I’m able to produce higher quality work than what I would have achieved on my own.`,
    index: 3,
}
const mei_theng = {
    name: 'Wong Mei Theng, Accounting Operations Lead',
    img_alt: 'Mei Theng - Accounting Operations Lead',
    img_path: MeiThengImage,
    quote: `I love the people I work with, and the company culture that we share. Everyone contributes to a positive working environment by having fun together during the ups and shouldering the burden together during the downs.`,
    index: 4,
}
const gary = {
    name: 'Gary Ross Vytialingam, Chief Risk Officer',
    img_alt: 'Gary - Chief Risk Officer',
    img_path: GaryImage,
    quote: `We encourage knowledge sharing at all levels, so I learn from the people I work with every day. Our company is enriched by the diversity of talented individuals from over 40 countries. It’s inspiring to be a leader of these motivated team players at Deriv.`,
    index: 5,
}

const employee_testimonials = [negar, ahmad, aditya, mei_theng, gary]

const EmployeeTestimonialCarousel = () => {
    const settings = {
        options: {
            loop: true,
        },
        container_style: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
        chevron_style: {
            chevron_color: 'black',
            chevron_left: {
                left: '2px',
            },
            chevron_right: {
                right: '2px',
            },
        },
    }

    return (
        <>
            <StyledSection padding="12rem 0">
                <StyledHeader align="center" as="h2">
                    In the words of our employees
                </StyledHeader>
                <Carousel has_autoplay autoplay_interval={4000} {...settings}>
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
                </Carousel>
            </StyledSection>
        </>
    )
}

export default EmployeeTestimonialCarousel
