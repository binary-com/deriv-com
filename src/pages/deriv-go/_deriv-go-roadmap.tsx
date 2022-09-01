import React from 'react'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
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
const StyledButton = styled(LinkButton)`
    margin-top: 40px;
    position: relative;
    max-width: 120px;
    z-index: 3;
`

const DerivGoRoadmap = () => {
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
                    height="100%"
                    width="100%"
                ></iframe>
                <StyledButton
                    tertiary
                    external
                    to={'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {localize('Go to portal')}
                </StyledButton>
            </StyledFrame>
        </StyledSectionContainer>
    )
}

export default DerivGoRoadmap
