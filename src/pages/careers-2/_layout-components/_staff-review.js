import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { QueryImage, Header } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import device from 'themes/device'

const query = graphql`
    {
        teamfocus: file(relativePath: { eq: "careers/team-focus.jpg" }) {
            ...fadeIn
        }
    }
`

const Description = styled(Flex)`
    padding: 32px;

    @media ${device.tablet} {
        margin-left: unset;
        margin-top: 50px;
    }
`

const ReviewCard = styled(Flex)`
    border-radius: 8px;
`

const TextWrapper = styled.div`
    max-width: 696px;
`

const StaffReview = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer>
            <Container>
                <ReviewCard
                    fd="row"
                    ai="center"
                    tablet_direction="column"
                    bg="var(--color-grey-40)"
                >
                    <Flex jc="left" max_width="432px" tablet_direction="column">
                        <QueryImage b_radius="8px 0 0 8px" data={data.teamfocus} />
                    </Flex>
                    <Description fd="column" jc="right" tablet_jc="center">
                        <TextWrapper>
                            <Header mb="16px" type="subtitle-1" as="p">
                                “I joined Deriv in November 2020, in the middle of a global
                                pandemic! I relocated from Wales to join the company as its Content
                                marketing lead which is part of the Marketing team.
                            </Header>
                            <Header mb="16px" type="paragraph-1" as="p" weight="400">
                                The marketing team collaborates with the other teams daily across
                                multiple offices using communication tools such as Slack and Zoom.
                            </Header>
                            <Header mb="16px" type="paragraph-1" as="p" weight="400">
                                We&apos;re a close-knit department working together to keep all the
                                marketing aligned across the different regions we operate in.
                                Everyone helps each other out no matter which team they&apos;re on,
                                and we have a fast-paced and fun work culture. I&apos;m proud to say
                                that we face our team&apos;s challenges together, building each
                                other up to create something incredible.
                            </Header>
                            <Header type="paragraph-1" as="p" weight="400">
                                The best thing about working at Deriv is that colleagues are more
                                like friends, we&apos;re honest and open with one another, and we
                                bounce off each other&apos;s strengths and weaknesses.”
                            </Header>
                        </TextWrapper>
                    </Description>
                </ReviewCard>
            </Container>
        </SectionContainer>
    )
}

export default StaffReview
