import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Text, Header, Divider, QueryImage } from 'components/elements'
import device from 'themes/device'

const StyledContainer = styled(Flex)`
    max-width: 79.2rem;
    margin: 12rem auto;
    @media ${device.tablet} {
        max-width: 80%;
        flex-direction: column;
    }
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-header-4);
    max-width: 20.5rem;

    @media ${device.tablet} {
        max-width: 100%;
    }
`

const StyledDivider = styled(Divider)`
    margin: 0 3.2rem;

    @media ${device.tablet} {
        width: 100%;
        height: 2px;
        margin: 3.2rem 0;
    }
`

const ParimaryText = styled(Text)`
    font-size: var(--text-size-sm);
`

const DescContainer = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
`

const ImageDescription = styled.div`
    ${(props) =>
        props.left
            ? css`
                  margin-right: 6.4rem;
              `
            : css`
                  margin-left: 6.4rem;
              `}
    @media ${device.tablet} {
        margin: 3.2rem 0;
    }
`

const DiffHeader = styled(Header)`
    margin-bottom: 6.4rem;
`

const BoldSpan = styled.span`
    font-weight: bold;
`

const DescText = styled(ParimaryText)`
    max-width: ${(props) => (props.max_width ? props.max_width : '38rem')};
    margin-bottom: 3.2rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 65rem;
`
const query = graphql`
    query {
        teamfocus: file(relativePath: { eq: "careers/team-focus.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 650) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        peopleeating: file(relativePath: { eq: "careers/people-eating.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 650) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
    }
`

const WhoWeLookFor = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <StyledContainer jc="center" ai="center">
                <StyledHeader>Who we&apos;re looking for</StyledHeader>
                <StyledDivider height="12.1rem" width="5px" />
                <ParimaryText>
                    The scale and complexity of our mission require smart, talented, and dedicated
                    people who are up for a challenge to make online trading accessible to anyone.
                </ParimaryText>
            </StyledContainer>
            <Container direction="column">
                <DiffHeader as="h3" type="section-title" align="center">
                    What’s different about working at Deriv?
                </DiffHeader>
                <DescContainer direction="row" mb="14.4rem" jc="flex-start">
                    <ImageWrapper>
                        <QueryImage data={data.teamfocus} alt={'Team Focus'} width="100%" />
                    </ImageWrapper>
                    <ImageDescription>
                        <DescText>
                            <BoldSpan>We’re growing fast</BoldSpan>. Our team is growing rapidly and
                            we&apos;re always on the lookout for the best talent to join us on our
                            mission. You&apos;ll be a part of an energetic team that moves quickly
                            to bring outstanding results.
                        </DescText>
                        <DescText>
                            <BoldSpan>Employees have a voice</BoldSpan> in what we do. We challenge
                            and support each other to find robust solutions that solve problems for
                            our customers and partners.
                        </DescText>
                        <DescText max_width="40.7rem">
                            <BoldSpan>We’re purpose-driven.</BoldSpan> Our customers are at the
                            heart of everything we do, and that drives us to succeed. We value
                            commitment over complacency and accept challenges rather than the status
                            quo.
                        </DescText>
                    </ImageDescription>
                </DescContainer>
                <DescContainer direction="row-reverse" jc="flex-start">
                    <ImageWrapper>
                        <QueryImage data={data.peopleeating} alt={'Team Lunch'} width="100%" />
                    </ImageWrapper>
                    <ImageDescription left>
                        <DescText>
                            <BoldSpan>We have fun</BoldSpan> along the way. We don’t have a dress
                            code, and our cosy offices have communal areas for mealtimes, exercise,
                            and games. We also enjoy spending time together at team outings and
                            company trips.
                        </DescText>
                        <DescText>
                            <BoldSpan>We’re global.</BoldSpan> As part of an international team,
                            you&apos;ll get to share your expertise and expand your knowledge with
                            colleagues from around the world. We encourage collaboration across
                            teams and locations because we know that&apos;s how we can bring forward
                            the best ideas.
                        </DescText>
                        <DescText>
                            <BoldSpan>We invest in our employees</BoldSpan> and give them consistent
                            opportunities to grow. In addition to learning and development on the
                            job, we provide education assistance and sponsor training courses an
                            employee is personally interested in.
                        </DescText>
                    </ImageDescription>
                </DescContainer>
            </Container>
        </>
    )
}

export default WhoWeLookFor
