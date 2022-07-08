import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize, localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { Header, Text } from 'components/elements/typography'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    border-top: solid 1px var(--color-grey-2);
    padding-top: 80px;
    padding-bottom: 0;

    @media ${device.tabletL} {
        padding-top: 40px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 32px;
    }
`
const StyledText = styled(Text)`
    max-width: 1044px;
    padding-top: 8px;
    font-size: 32px;

    @media ${device.tabletL} {
        font-size: 24px;
    }
`
const StyledFrame = styled.div`
    padding: 40px 40px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    top: 310px;
    margin-top: -310px;

    @media ${device.laptopM} {
        top: 55px;
        margin-top: -55px;
    }
    @media ${device.tabletS} {
        padding: 40px 16px 0 16px;
    }

    & iframe {
        border-radius: 8px;
        max-width: 1040px;
        min-height: 594px;

        @media ${device.mobileM} {
            max-width: 328px;
        }
    }
`

const StyledRoadmap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledButton = styled(LinkButton)`
    margin-top: 40px;
    position: relative;
    max-width: 120px;
    z-index: 3;
`

const query = graphql`
    query {
        roadmap: file(relativePath: { eq: "deriv-go/roadmap.png" }) {
            ...fadeIn
        }
    }
`

const Roadmap = ({ portal }) => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="1202px" fd="column" ai="center" jc="center">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        <Localize translate_text="What’s next?" />
                    </StyledHeader>
                    <StyledText mt="16px" align="center">
                        {portal.paragraph}
                    </StyledText>
                </Flex>
            </Container>
            <>
                <StyledFrame>
                    <iframe src={portal.frame} frameBorder="0" height="100%" width="100%"></iframe>
                    <StyledButton
                        tertiary="true"
                        to={portal.link}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Go to portal')}
                    </StyledButton>
                </StyledFrame>
                <StyledRoadmap>
                    <QueryImage
                        data={data['roadmap']}
                        alt={'roadmap'}
                        width="100%"
                        className="content-wrapper"
                    />
                </StyledRoadmap>
            </>
        </StyledSectionContainer>
    )
}

Roadmap.propTypes = {
    portal: PropTypes.object,
}

export default Roadmap
