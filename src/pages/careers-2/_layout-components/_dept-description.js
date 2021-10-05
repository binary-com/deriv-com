import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage, Header } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        operations_1: file(relativePath: { eq: "careers-2/operations-1.png" }) {
            ...fadeIn
        }
        marketing_1: file(relativePath: { eq: "careers-2/marketing-1.png" }) {
            ...fadeIn
        }
        recruitment_1: file(relativePath: { eq: "careers-2/recruitment-1.png" }) {
            ...fadeIn
        }
        accounts_1: file(relativePath: { eq: "careers-2/accounts-1.png" }) {
            ...fadeIn
        }
        payments_1: file(relativePath: { eq: "careers-2/payments-1.png" }) {
            ...fadeIn
        }
        tech_1: file(relativePath: { eq: "careers-2/tech-1.png" }) {
            ...fadeIn
        }
        product_1: file(relativePath: { eq: "careers-2/product-1.png" }) {
            ...fadeIn
        }
        cs_1: file(relativePath: { eq: "careers-2/cs-1.png" }) {
            ...fadeIn
        }
        compliance_1: file(relativePath: { eq: "careers-2/compliance-1.png" }) {
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

const DeptDescription = (dept_data) => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <Flex fd="row" ai="center" max_width="990px" tablet_direction="column">
                    <Flex max_width="384px">
                        <StyledQueryImage data={data[dept_data.data.image]} />
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
