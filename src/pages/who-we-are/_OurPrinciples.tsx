import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
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
const ColoredBox = styled(Box)`
    align-self: left;
    width: fit-content;
    padding: 8px 16px;
    background-color: ${(props) => props.bgcolor};
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
type PrincipleType = {
    title: ReactElement
    text: ReactElement
    color: string
}

const OurPrinciples = ({ query }: any) => {
    const our_principles: PrincipleType[] = [
        {
            title: <Localize translate_text={String(query?.description_1_1)} />,
            text: <Localize translate_text={String(query?.description_1_2)} />,
            color: 'rgba(133, 189, 177, 0.25)',
        },
        {
            title: <Localize translate_text={String(query?.description_2_1)} />,
            text: <Localize translate_text={String(query?.description_2_2)} />,
            color: 'rgba(255, 195, 89, 0.25)',
        },
        {
            title: <Localize translate_text={String(query?.description_3_1)} />,
            text: <Localize translate_text={String(query?.description_3_2)} />,
            color: 'rgba(150, 133, 189, 0.25)',
        },
        {
            title: <Localize translate_text={String(query?.description_4_1)} />,
            text: <Localize translate_text={String(query?.description_4_2)} />,
            color: 'rgba(119, 160, 198, 0.25)',
        },
    ]

    return (
        <StyledSection>
            <Header as="h2" align="center" type="heading-2" mb="40px" laptop={{ mb: '24px' }}>
                {localize(String(query?.header))}
            </Header>
            <StyledFlex wrap="wrap" jc="left" ai="center">
                {our_principles.map(({ color, title, text }, idx) => (
                    <div key={idx}>
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
                                <ColoredBox bgcolor={color}>{title}</ColoredBox>
                            </StyledDiv>
                            <StyledText as="p" type="sub-paragraph" weight="400">
                                {text}
                            </StyledText>
                        </InsideFlex>
                    </div>
                ))}
                <StyledDivider
                    align="center"
                    height="2px"
                    width="100% - 32px"
                    size="2"
                    color="grey-8"
                />
            </StyledFlex>
            <StyledLinkButton to={query?.link_url} secondary>
                {localize(String(query?.link_name))}
            </StyledLinkButton>
        </StyledSection>
    )
}

export default OurPrinciples
