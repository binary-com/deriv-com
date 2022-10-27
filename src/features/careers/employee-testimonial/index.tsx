import React from 'react'
import styled from 'styled-components'
import TestimonialCarousel from './carousel'
import { Header } from 'components/elements'
import device from 'themes/device'
import { SectionContainer } from 'components/containers'

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

const EmployeeTestimonial = () => {
    return (
        <StyledSection padding="5rem 0 12rem 0">
            <StyledHeader align="center" as="h3" type="section-title">
                In the words of our employees
            </StyledHeader>
            <TestimonialCarousel />
        </StyledSection>
    )
}

export default EmployeeTestimonial
