import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Carousel, Header, Text } from 'components/elements'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import QuoteMark from 'images/svg/careers/quotemark.svg'
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
    padding-bottom: 4.4rem;
    font-size: 48px;

    @media ${device.tabletS} {
        line-height: 34px;
        font-size: 28px;
        padding: 0 3rem;
    }
    @media ${device.mobileL} {
        padding: 0 3.5rem;
        line-height: 34px;
        font-size: 28px;
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
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

const EmployeeSlide = ({ quote, img_path, img_alt, name }) => {
    return (
        <Flex ai="center" height="unset">
            <EmployeeCard>
                <Flex tablet_direction="column">
                    <Flex>
                        <ImageWrapper>
                            <StyledImg loading="lazy" src={img_path} alt={img_alt} />
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

const ahmad = {
    name: 'Ahmad Aizuddin, Disaster Recovery Analyst',
    img_alt: 'Ahmad Aizuddin Disaster Recovery Analyst at Deriv',
    img_path: AhmadImage,
    quote: `One of the things I like best about working here is how we’re encouraged to take ownership of our tasks and goals. The autonomy and trust by the leadership team motivate me to excel in my role.`,
    index: 2,
}
const aditya = {
    name: 'Lalitaditya Addanki, DevOps Engineer',
    img_alt: 'Lalitaditya Addanki DevOps Engineer at Deriv',
    img_path: AdityaImage,
    quote: `The best thing about my peers is that they are highly talented and skilled. Problem-solving and brainstorming with my team is fun, and they provide a great support structure. I’m able to produce higher quality work than what I would have achieved on my own.`,
    index: 3,
}
const mei_theng = {
    name: 'Wong Mei Theng, Accounting Operations Lead',
    img_alt: 'Wong Mei Theng, Accounting Operations Lead',
    img_path: MeiThengImage,
    quote: `I love the people I work with, and the company culture that we share. Everyone contributes to a positive working environment by having fun together during the ups and shouldering the burden together during the downs.`,
    index: 4,
}
const gary = {
    name: 'Gary Ross Vytialingam, Chief Risk Officer',
    img_alt: 'Gary Ross Vytialingam Chief Risk Officer at Deriv',
    img_path: GaryImage,
    quote: `We encourage knowledge sharing at all levels, so I learn from the people I work with every day. Our company is enriched by the diversity of talented individuals from over 55 countries. It’s inspiring to be a leader of these motivated team players at Deriv.`,
    index: 5,
}

const employee_testimonials = [ahmad, aditya, mei_theng, gary]

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
        navigation_style: {
            bottom_offset: '0px',
            nav_color: 'red',
        },
        view_port: {
            height: 'auto',
        },
        chevron_style: {
            chevron_color: 'black',
            chevron_left: {
                width: '40px',
                height: '40px',
                background: '#FFFFFF',
                boxShadow: '0px 7px 20px rgba(0, 0, 0, 0.12877)',
                borderRadius: '20px',
                padding: '8px',
                left: '80px',
            },
            chevron_right: {
                width: '40px',
                height: '40px',
                background: '#FFFFFF',
                boxShadow: '0px 7px 20px rgba(0, 0, 0, 0.12877)',
                borderRadius: '20px',
                right: '80px',
                padding: '8px',
            },
        },
    }

    return (
        <>
            <StyledSection padding="5rem 0 12rem 0">
                <StyledHeader align="center" as="h3" type="section-title">
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
