import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { IntroSectionProps } from './_dept-layout.types'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage, Header } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        back_end_desc: file(relativePath: { eq: "careers-2/back-end-desc.png" }) {
            ...fadeIn
        }
        business_excellence_desc: file(
            relativePath: { eq: "careers-2/business-excellence-desc.png" }
        ) {
            ...fadeIn
        }
        compliance_desc: file(relativePath: { eq: "careers-2/compliance-desc.png" }) {
            ...fadeIn
        }
        cs_desc: file(relativePath: { eq: "careers-2/cs-desc.png" }) {
            ...fadeIn
        }
        security_desc: file(relativePath: { eq: "careers-2/security-desc.png" }) {
            ...fadeIn
        }
        finance_desc: file(relativePath: { eq: "careers-2/finance-desc.png" }) {
            ...fadeIn
        }
        front_end_desc: file(relativePath: { eq: "careers-2/front-end-desc.png" }) {
            ...fadeIn
        }
        internal_audit_desc: file(relativePath: { eq: "careers-2/internal-audit-desc.png" }) {
            ...fadeIn
        }
        marketing_desc: file(relativePath: { eq: "careers-2/marketing-desc.png" }) {
            ...fadeIn
        }
        payments_desc: file(relativePath: { eq: "careers-2/payments-desc.png" }) {
            ...fadeIn
        }
        people_management_desc: file(relativePath: { eq: "careers-2/people-management-desc.png" }) {
            ...fadeIn
        }
        product_desc: file(relativePath: { eq: "careers-2/product-desc.png" }) {
            ...fadeIn
        }
        pm_desc: file(relativePath: { eq: "careers-2/pm-desc.png" }) {
            ...fadeIn
        }
        software_testing_desc: file(relativePath: { eq: "careers-2/software-testing-desc.png" }) {
            ...fadeIn
        }
        trading_operations_desc: file(
            relativePath: { eq: "careers-2/trading-operations-desc.png" }
        ) {
            ...fadeIn
        }
    }
`

const Description = styled(Flex)`
    align-items: flex-end;
    margin-left: 50px;

    @media ${device.tablet} {
        align-items: center;
        margin-left: unset;
        margin-top: 50px;
    }
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 384px;
`

type DeptDataProps = {
    data: IntroSectionProps
}

const DeptDescription = (dept_data: DeptDataProps) => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <Flex fd="row" ai="center" max_width="990px" tablet_direction="column">
                    <Flex>
                        <StyledQueryImage
                            data={data[dept_data.data.image]}
                            alt={dept_data.data.img_alt}
                        />
                    </Flex>
                    <Description fd="column" jc="right" tablet_jc="center">
                        {dept_data.data.paragraph.map((item, idx) => {
                            return (
                                <Header
                                    mb="15px"
                                    key={idx}
                                    max_width="510px"
                                    type="subtitle-2"
                                    as="p"
                                    weight="400"
                                >
                                    {item.text}
                                </Header>
                            )
                        })}
                    </Description>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default DeptDescription
