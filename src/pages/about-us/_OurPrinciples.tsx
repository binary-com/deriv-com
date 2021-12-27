import React from 'react'
import styled from 'styled-components'
import { our_principles } from './_data'
import { localize } from 'components/localization'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Divider } from 'components/elements'
import device from 'themes/device'
import { LinkButton } from 'components/form'

const StyledSection = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 16px 120px;
    background-color: var(--color-white);

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const StyledHeader = styled(Header)`
    margin: 0 0 40px 0;
    padding: 0;
    @media ${device.laptop} {
        font-size: 28px;
        margin-bottom: 24px;
    }
`
const StyledDivider = styled(Divider)`
    margin: 0;
    @media (min-width: 824px) {
        width: 792px;
    }
`

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
    max-width: 792px;
    @media (max-width: 930px) {
        flex-direction: column;
        width: unset;
        align-items: left;
        margin-bottom: 24px;
    }
`

const InsideFlex = styled(Flex)`
    @media ${device.tablet} {
        display: block;
        margin-top: 18px;
    }
`

const StyledText = styled(Header)`
    max-width: 551px;
    margin: 16px 0;
    font-size: 16px;
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
`

const ColoredBox = styled(Box)`
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
`

const OurPrinciples = () => {
    return (
        <StyledSection>
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our principles are the framework for our decisions')}
            </StyledHeader>
            <StyledFlex wrap="wrap" jc="left" ai="center">
                {our_principles.map((principle) => (
                    <React.Fragment key={principle.title}>
                        <StyledDivider
                            align="center"
                            height="2px"
                            width="100% - 32px"
                            size="2"
                            color="grey-8"
                        />
                        <InsideFlex
                            direction="inline-flex"
                            ai="center"
                            jc="left"
                            fw="nowrap"
                            tablet_direction="column"
                            tablet_ai="left"
                        >
                            <StyledDiv>
                                <ColoredBox bgcolor={principle.color}>{principle.title}</ColoredBox>
                            </StyledDiv>
                            <StyledText as="p" type="sub-paragraph" weight="400">
                                {principle.text}
                            </StyledText>
                        </InsideFlex>
                    </React.Fragment>
                ))}
                <StyledDivider
                    align="center"
                    height="2px"
                    width="100% - 32px"
                    size="2"
                    color="grey-8"
                />
            </StyledFlex>
            <StyledLinkButton to="/our-principles/" secondary="true">
                {localize('Learn more about our principles')}
            </StyledLinkButton>
        </StyledSection>
    )
}

export default OurPrinciples
