/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Text, Header, Divider, QueryImage } from 'components/elements'
import device from 'themes/device'

type ImageDescriptionProps = {
    left?: boolean
}

const StyledContainer = styled(Flex)`
    max-width: 79.2rem;
    margin: 10rem auto;
    @media ${device.tablet} {
        max-width: 80%;
        flex-direction: column;
    }
`
const StyledContainer2 = styled(Container)`
    width: 67%;

    @media ${device.desktop} {
        width: 70% !important;
    }

    @media ${device.tablet} {
        width: 90%;
    }
`

const StyledHeader = styled(Header)`
    font-size: 32px;
    max-width: 17.5rem;

    @media ${device.tablet} {
        text-align: center;
        max-width: 100%;
        font-size: 24px;
        line-height: 30px;
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
    font-size: var(--text-size-m);

    @media ${device.tablet} {
        text-align: center;
        font-size: var(--text-size-sm);
    }
`

const DescContainer = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
    }
`
const marginRight = css`
    margin-right: 2.4rem;
`
const marginLeft = css`
    margin-left: 2.4rem;
`
const ImageDescription = styled.div<ImageDescriptionProps>`
    ${(props) => (props.left ? marginRight : marginLeft)}
    @media ${device.tablet} {
        margin: 3.2rem 0;
    }
`

const DiffHeader = styled(Header)`
    margin-bottom: 3.4rem;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`

const BoldSpan = styled.span`
    font-weight: bold;
`

const DescText = styled(ParimaryText)`
    max-width: ${(props) => (props.max_width ? props.max_width : '38rem')};
    margin-bottom: 3.2rem;
    font-size: 16px;
    line-height: 24px;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        text-align: left;
        max-width: 100%;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 65rem;
`
const query = graphql`
    {
        teamfocus: file(relativePath: { eq: "careers/team-focus.png" }) {
            ...fadeIn
        }
        peopleeating: file(relativePath: { eq: "careers/people-eating.png" }) {
            ...fadeIn
        }
    }
`

const WhoWeLookFor = (): React.ReactNode => {
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
            <StyledContainer2 direction="column">
                <DiffHeader as="h3" type="section-title" align="center">
                    What’s different about working at Deriv?
                </DiffHeader>
                <DescContainer direction="row" mb="9.4rem" jc="flex-start" ai="center">
                    <ImageWrapper>
                        <QueryImage
                            data={data.teamfocus}
                            alt={'Team discussing ideas'}
                            width="100%"
                        />
                    </ImageWrapper>
                    <ImageDescription>
                        <DescText>
                            <BoldSpan>We’re global.</BoldSpan> As part of an international team,
                            you'll get to share your expertise and expand your knowledge with
                            colleagues from around the world. We encourage collaboration across
                            teams and locations because we know how we can bring forward the best
                            ideas.
                        </DescText>
                        <DescText>
                            <BoldSpan>We’re growing fast.</BoldSpan> Our team is growing rapidly,
                            and we're always looking for the best talent to join us on our mission.
                            You'll be a part of an energetic team that moves quickly to bring
                            outstanding results.
                        </DescText>
                        <DescText max_width="40.7rem">
                            <BoldSpan>We listen.</BoldSpan> Employees have a voice in what we do. We
                            challenge and support each other to find robust solutions that solve
                            problems for our clients and partners.
                        </DescText>
                    </ImageDescription>
                </DescContainer>
                <DescContainer direction="row-reverse" ai="center" jc="flex-start">
                    <ImageWrapper>
                        <QueryImage
                            data={data.peopleeating}
                            alt={'Fun chat during lunch'}
                            width="100%"
                        />
                    </ImageWrapper>
                    <ImageDescription left>
                        <DescText>
                            <BoldSpan>We’re purpose-driven.</BoldSpan> Our customers are at the
                            heart of everything we do, and that drives us to succeed. We value
                            commitment over complacency and accept challenges rather than the status
                            quo.
                        </DescText>
                        <DescText>
                            <BoldSpan>We have fun along the way.</BoldSpan> We don't have a dress
                            code, and our cosy offices have communal areas for mealtimes, exercise,
                            and games. We also enjoy spending time together at team outings and
                            company trips.
                        </DescText>
                        <DescText>
                            <BoldSpan>
                                We invest in our employees and give them consistent opportunities to
                                grow.{' '}
                            </BoldSpan>
                            In addition to learning and development on the job, we provide
                            educational assistance and sponsor training courses an employee is
                            personally interested in.
                        </DescText>
                    </ImageDescription>
                </DescContainer>
            </StyledContainer2>
        </>
    )
}

export default WhoWeLookFor
