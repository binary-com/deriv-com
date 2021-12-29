import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { TestimonySectionProps } from './_dept-layout.types'
import { QueryImage, Header } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import device, { size } from 'themes/device'
import { isBrowser } from 'common/utility'

const query = graphql`
    {
        marketing_review: file(relativePath: { eq: "careers-2/marketing-review.png" }) {
            ...fadeIn
        }
        marketing_review_mobile: file(
            relativePath: { eq: "careers-2/marketing-review-mobile.png" }
        ) {
            ...fadeIn
        }
        people_management_review: file(
            relativePath: { eq: "careers-2/people-management-review.png" }
        ) {
            ...fadeIn
        }
        people_management_review_mobile: file(
            relativePath: { eq: "careers-2/people-management-review-mobile.png" }
        ) {
            ...fadeIn
        }
        finance_review: file(relativePath: { eq: "careers-2/finance-review.png" }) {
            ...fadeIn
        }
        finance_review_mobile: file(relativePath: { eq: "careers-2/finance-review-mobile.png" }) {
            ...fadeIn
        }
        payments_review: file(relativePath: { eq: "careers-2/payments-review.png" }) {
            ...fadeIn
        }
        payments_review_mobile: file(relativePath: { eq: "careers-2/payments-review-mobile.png" }) {
            ...fadeIn
        }
        fe_review: file(relativePath: { eq: "careers-2/fe-review.png" }) {
            ...fadeIn
        }
        fe_review_mobile: file(relativePath: { eq: "careers-2/fe-review-mobile.png" }) {
            ...fadeIn
        }
        product_review: file(relativePath: { eq: "careers-2/product-review.png" }) {
            ...fadeIn
        }
        product_review_mobile: file(relativePath: { eq: "careers-2/product-review-mobile.png" }) {
            ...fadeIn
        }
        trading_operations_review: file(
            relativePath: { eq: "careers-2/trading-operations-review.png" }
        ) {
            ...fadeIn
        }
        trading_operations_review_mobile: file(
            relativePath: { eq: "careers-2/trading-operations-review-mobile.png" }
        ) {
            ...fadeIn
        }
        cs_review: file(relativePath: { eq: "careers-2/cs-review.png" }) {
            ...fadeIn
        }
        cs_review_mobile: file(relativePath: { eq: "careers-2/cs-review-mobile.png" }) {
            ...fadeIn
        }
        compliance_review: file(relativePath: { eq: "careers-2/compliance-review.png" }) {
            ...fadeIn
        }
        compliance_review_mobile: file(
            relativePath: { eq: "careers-2/compliance-review-mobile.png" }
        ) {
            ...fadeIn
        }
        back_end_review: file(relativePath: { eq: "careers-2/back-end-review.png" }) {
            ...fadeIn
        }
        back_end_review_mobile: file(relativePath: { eq: "careers-2/back-end-review-mobile.png" }) {
            ...fadeIn
        }
        security_review: file(relativePath: { eq: "careers-2/security-review.png" }) {
            ...fadeIn
        }
        security_review_mobile: file(relativePath: { eq: "careers-2/security-review-mobile.png" }) {
            ...fadeIn
        }
        business_excellence_review: file(
            relativePath: { eq: "careers-2/business-excellence-review.png" }
        ) {
            ...fadeIn
        }
        business_excellence_review_mobile: file(
            relativePath: { eq: "careers-2/business-excellence-review-mobile.png" }
        ) {
            ...fadeIn
        }
        software_testing_review: file(
            relativePath: { eq: "careers-2/software-testing-review.png" }
        ) {
            ...fadeIn
        }
        software_testing_review_mobile: file(
            relativePath: { eq: "careers-2/software-testing-review-mobile.png" }
        ) {
            ...fadeIn
        }
        internal_audit_review: file(relativePath: { eq: "careers-2/internal-audit-review.png" }) {
            ...fadeIn
        }
        internal_audit_review_mobile: file(
            relativePath: { eq: "careers-2/internal-audit-review-mobile.png" }
        ) {
            ...fadeIn
        }
        pm_review: file(relativePath: { eq: "careers-2/pm-review.png" }) {
            ...fadeIn
        }
        pm_review_mobile: file(relativePath: { eq: "careers-2/pm-review-mobile.png" }) {
            ...fadeIn
        }
    }
`

const Description = styled(Flex)`
    padding: 32px;

    @media ${device.tablet} {
        margin-left: unset;
        margin-top: 20px;
        padding: 0 11.5px 24px;
    }
`

const ReviewCard = styled(Flex)`
    border-radius: 8px;
`

const TextWrapper = styled.div`
    max-width: 696px;
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 432px;
    @media ${device.tablet} {
        max-width: 339px;
    }
`

type ReviewDataProps = {
    data: TestimonySectionProps
}

const StaffReview = (review_data: ReviewDataProps) => {
    const [is_mobile, setMobile] = useState(false)

    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }, [setMobile])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <ReviewCard
                    fd="row"
                    ai="center"
                    tablet_direction="column"
                    bg="var(--color-grey-41)"
                >
                    <Flex max_width="432px" jc="left" tablet_direction="column" tablet_ai="center">
                        <StyledQueryImage
                            data={
                                is_mobile
                                    ? data[review_data.data.image_mobile]
                                    : data[review_data.data.image]
                            }
                            alt={review_data.data.img_alt}
                        />
                    </Flex>
                    <Description ai="center" fd="column" jc="right" tablet_jc="center">
                        <TextWrapper>
                            {review_data.data.testimony_headline.map((item, idx) => {
                                return (
                                    <Header key={idx} mb="16px" type="subtitle-1" as="p">
                                        {item.text}
                                    </Header>
                                )
                            })}
                        </TextWrapper>
                    </Description>
                </ReviewCard>
            </Container>
        </SectionContainer>
    )
}

export default StaffReview
