import React from 'react'
import styled from 'styled-components'
import { TOurPrinciples } from '../_types'
import { Box, Flex, SectionContainer } from 'components/containers'
import { Divider, Header } from 'components/elements'
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

    @media ${device.tablet} {
        font-size: 14px;
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
`
const ColoredBox = styled(Box)<{ bgcolor: string }>`
    align-self: left;
    width: fit-content;
    padding: 8px 16px;
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 8px;
    font-weight: bold;
    color: #333333;
    font-size: 24px;
    line-height: 36px;
    margin-right: 20px;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`

const OurPrinciples = ({ our_principles }: TOurPrinciples) => {
    // depends on our_principles.principles by index
    const colors = [
        'rgba(133, 189, 177, 0.25)',
        'rgba(255, 195, 89, 0.25)',
        'rgba(150, 133, 189, 0.25)',
        'rgba(119, 160, 198, 0.25)',
    ]

    return (
        <StyledSection>
            <Header as="h2" align="center" type="heading-2" mb="40px" laptop={{ mb: '24px' }}>
                {our_principles?.header}
            </Header>
            <StyledFlex wrap="wrap" jc="left" ai="center">
                {our_principles?.principles.map(({ header, sub_header }, idx) => (
                    <div key={idx}>
                        <StyledDivider height="2px" width="100% - 32px" color="grey-8" />
                        <InsideFlex
                            direction="inline-flex"
                            ai="center"
                            jc="left"
                            fw="nowrap"
                            tablet_direction="column"
                            tablet_ai="left"
                        >
                            <StyledDiv>
                                <ColoredBox bgcolor={colors[idx]}>{header}</ColoredBox>
                            </StyledDiv>
                            <StyledText as="p" type="sub-paragraph" weight="400">
                                {sub_header}
                            </StyledText>
                        </InsideFlex>
                    </div>
                ))}
                <StyledDivider height="2px" width="100% - 32px" color="grey-8" />
            </StyledFlex>
            <StyledLinkButton to={our_principles?.button.link_url} secondary>
                {our_principles?.button.link_name}
            </StyledLinkButton>
        </StyledSection>
    )
}

export default OurPrinciples
