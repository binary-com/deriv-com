import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage, Header } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        teamfocus: file(relativePath: { eq: "careers-2/operation-1.png" }) {
            ...fadeIn
        }
    }
`

const Description = styled(Flex)`
    margin-left: 50px;

    @media ${device.tablet} {
        margin-left: unset;
        margin-top: 50px;
    }
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 330px;
    min-width: 300px;
`

const DeptDescription = (dept_data) => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <Flex fd="row" ai="center" max_width="990px" tablet_direction="column">
                    <StyledQueryImage data={data.teamfocus} />
                    <Description fd="column" jc="right" tablet_jc="center">
                        {dept_data.data.paragraph.map((data, idx) => {
                            return (
                                <Header
                                    mb="15px"
                                    key={idx}
                                    max_width="510px"
                                    type="subtitle-2"
                                    as="p"
                                    weight="400"
                                >
                                    {data.text}
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
