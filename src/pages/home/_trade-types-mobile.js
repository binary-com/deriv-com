import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { Helmet } from 'react-helmet'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import MarginLogo from 'images/svg/margin_2.svg'
import OptionsLogo from 'images/svg/options_2.svg'
import MultipliersLogo from 'images/svg/multipliers_2.svg'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        height: unset;
        padding: 5rem 0;
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

    @media ${device.tabletL} {
        padding: 4rem;
    }
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

const EmployeeSlide = ({ icon, title, description }) => {
    return (
        <Flex ai="center" height="unset">
            <EmployeeCard>
                <Flex tablet_direction="column">
                    {icon}
                    <Header>{title}</Header>
                    <Text>{description}</Text>
                </Flex>
            </EmployeeCard>
        </Flex>
    )
}

EmployeeSlide.propTypes = {
    description: PropTypes.any,
    icon: PropTypes.any,
    title: PropTypes.any,
}

const margin = {
    icon: <MarginLogo />,
    title: localize('Margin Trading'),
    description: localize(
        'Trade with leverage and low spreads for better returns on successful trades.',
    ),
}
const options = {
    icon: <OptionsLogo />,
    title: localize('Options'),
    description: localize(
        'Earn fixed payouts by predicting an assets price movement within a fixed time.',
    ),
}
const multipliers = {
    icon: <MultipliersLogo />,
    title: localize('Multipliers'),
    description: localize(
        'Get the best of both - the upside of margin trading with the simplicity of options.',
    ),
}

const employee_testimonials = [margin, options, multipliers]

const EmployeeTestimonialCarousel = () => {
    const ref = React.useRef(null)

    const params = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 12,
        loop: true,
        lazy: true,
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
                <SliderWrapper>
                    <SwiperWrapper>
                        <Swiper {...params} ref={ref}>
                            {employee_testimonials.map((employee_slide) => (
                                <div className="swiper-slide" key={employee_slide.title}>
                                    <EmployeeSlide
                                        icon={employee_slide.icon}
                                        title={employee_slide.title}
                                        description={employee_slide.description}
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
