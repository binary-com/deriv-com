import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    border-top: solid 1px var(--color-grey-2);
    padding-top: 80px;
    padding-bottom: 0;

    @media ${device.tabletL} {
        padding-top: 0;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 32px;
    }
`
const StyledText = styled(Text)`
    padding-top: 8px;
    font-size: 32px;

    @media ${device.tabletL} {
        font-size: 24px;
    }
`
const StyledFrame = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    bottom: -165px;
    z-index: 1;

    & iframe {
        max-width: 1040px;
    }
`

const StyledRoadmap = styled.div`
    position: relative;
`

const query = graphql`
    query {
        roadmap: file(relativePath: { eq: "deriv-go/roadmap.png" }) {
            ...fadeIn
        }
    }
`

const RoadmapDerivGO = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="1202px" fd="column" ai="center" jc="center">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        <Localize translate_text="What’s next?" />
                    </StyledHeader>
                    <StyledText mt="16px" align="center">
                        <Localize translate_text="Take a look at Deriv GO’s product roadmap, give us your feedback on what we’re building, and suggestions on what to build next." />
                    </StyledText>
                </Flex>
            </Container>
            <StyledFrame>
                <iframe
                    src="https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn?hide_header=1"
                    frameBorder="0"
                    height="1000px"
                    width="100%"
                ></iframe>
            </StyledFrame>
            <StyledRoadmap>
                <QueryImage
                    data={data['roadmap']}
                    alt={'roadmap'}
                    width="100%"
                    className="content-wrapper"
                />
            </StyledRoadmap>
        </StyledSectionContainer>
    )
}

export default RoadmapDerivGO
