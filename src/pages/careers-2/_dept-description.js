import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage, Header } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    {
        teamfocus: file(relativePath: { eq: "careers/team-focus.jpg" }) {
            ...fadeIn
        }
        peopleeating: file(relativePath: { eq: "careers/people-eating.jpg" }) {
            ...fadeIn
        }
    }
`

const Description = styled(Flex)`
    margin-left: 50px;

    @media ${device.tablet} {
        margin-top: 50px;
    }
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 330px;
    min-width: 300px;
`

const DeptDescription = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <Flex fd="row" ai="center" max_width="990px" tablet_direction="column">
                    <StyledQueryImage data={data.teamfocus} />
                    <Description jc="right" tablet_jc="center">
                        <Header max_width="510px" type="subtitle-2" as="p" weight="400">
                            Our department provides a fast-paced environment where you’ll always
                            find new challenges. We’re a friendly bunch, and every team is aligned
                            to work together towards a common goal. A normal day could mean
                            distributing a full scope marketing campaign to clients after our
                            morning coffee, working on a webinar for affiliates after lunch, and
                            finishing the day onboarding a brand new affiliate. There are so many
                            opportunities to get involved in and with so many different aspects of
                            marketing to learn, the career opportunities are endless.
                        </Header>
                    </Description>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default DeptDescription
