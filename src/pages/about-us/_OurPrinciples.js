import React from 'react'
import styled from 'styled-components'
import { our_principles } from './_data'
import { localize } from 'components/localization'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 16px 120px;
    background-color: var(--color-white);

    @media ${device.tablet} {
        padding: 40px 16px;
    }

    h2 {
        margin: 0;
        padding: 0;
        @media ${device.laptop} {
            font-size: 28px;
            margin-bottom: 24px;
        }
    }
`
const StyledHr = styled.hr`
    margin: 0;
    @media (min-width: 824px) {
        width: 792px;
    }
`

const StyledBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    max-width: 792px;
    @media (max-width: 930px) {
        flex-direction: column;
        width: unset;
        justify-content: left;
        align-items: left;
    }
`
const InsideBox = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: inline-flex;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;

    @media ${device.tablet} {
        display: block;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        margin-top: 18px;
    }

    ${Text} {
        max-width: 551px;
        margin: 16px 0;
        font-size: 16px;

        @media ${device.tablet} {
            font-size: 14px;
        }
    }
`
const LinkButtonWrapper = styled(Flex)`
    margin-top: 40px;
    text-align: center;
    justify-content: center;
    @media ${device.tablet} {
        margin-top: 24px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    height: 40px;
    width: auto;
    border-radius: 4px;
    position: relative;
    white-space: nowrap;
`
const StyledDiv = styled.div`
    width: 241px;

    ${Box} {
        align-self: left;
        width: fit-content;
        padding: 8px 16px;
        background-color: ${(props) => props.bgcolor};
        border-radius: 8px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;

        @media ${device.tabletL} {
            font-size: 18px;
        }
    }
`

const OurPrinciples = () => {
    return (
        <StyledSection>
            <Header as="h2" size="48px" align="center" type="page-title">
                {localize('Our principles are the framework for our decisions')}
            </Header>
            <StyledBox>
                {our_principles.map((principle) => (
                    <React.Fragment key={principle.title}>
                        <StyledHr align="center" width="100% - 32px" size="2" color="F2F3F4" />

                        <InsideBox>
                            <StyledDiv bgcolor={principle.color}>
                                <Box>{principle.title}</Box>
                            </StyledDiv>
                            <Text>{principle.text}</Text>
                        </InsideBox>
                    </React.Fragment>
                ))}
            </StyledBox>
            <StyledHr align="center" width="100% - 32px" size="2" color="F2F3F4" />
            <LinkButtonWrapper>
                <StyledLinkButton to="/our-principles/" secondary="true">
                    {localize('Learn more about our principles')}
                </StyledLinkButton>
            </LinkButtonWrapper>
        </StyledSection>
    )
}

export default OurPrinciples
