import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import { ReactComponent as Checklist } from 'images/svg/trade-types/checklist-red.svg'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

const ContentWrapper = styled(Flex)`
    margin: 8rem auto;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column;
        margin: 40px auto 0 auto;
    }
`

const CardWrapper = styled(Flex)`
    flex-direction: column;
    margin-right: 10rem;

    @media ${device.tabletL} {
        align-items: center;
        margin-right: 0;
    }
`

const StyledText = styled(Text)`
    padding: 8rem 0 0 0;
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: center;

    @media ${device.tabletL} {
        font-size: 2rem;
        padding: 0 0;
    }
`

const StyledHeader = styled(Header)`
    font-size: 4.8rem;
    line-height: 1.25;
    max-width: 37.8rem;
    margin-right: 2.4rem;

    @media ${device.tabletL} {
        margin: 0 0 24px 0;
        max-width: 375px;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
    }
    @media ${device.mobileL} {
        max-width: 275px;
    }
`

const StyledSection = styled(SectionContainer)`
    padding: 0;

    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`

const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.6rem;
    width: 48.6rem;
    height: unset;
    border-radius: 5.1px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    margin-bottom: 1.6rem;

    &:last-child {
        margin-bottom: 0;
    }
    @media ${device.tabletL} {
        width: 328px;
        padding: 16px;
    }
`

const CardText = styled(Text)`
    font-size: 1.6rem;
    line-height: 1.5;
    width: 90%;

    @media ${device.tabletL} {
        width: 86%;
        font-size: 16px;
        line-height: 24px;
    }
`

const StyledChecklist = styled(Checklist)`
    margin-right: 1.6rem;

    @media ${device.tabletL} {
        margin-right: 16px;
    }
`

export type SignalContent = {
    header: {
        text: TString
        components?: ReactElement[]
    }
    text: TString
    list: TString[]
}

type SignalProps = {
    content: SignalContent
}

export const Signal = ({ content }: SignalProps) => {
    const { header, text, list }: SignalContent = content

    return (
        <StyledSection background="var(--color-white)">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledText>
                    <Localize translate_text={text} />
                </StyledText>
                <ContentWrapper>
                    <StyledHeader>
                        <Localize translate_text={header.text} components={header.components} />
                    </StyledHeader>
                    <CardWrapper>
                        {list.map((text, idx) => {
                            return (
                                <Card key={idx}>
                                    <StyledChecklist />
                                    <CardText>
                                        <Localize translate_text={text} key={idx} />
                                    </CardText>
                                </Card>
                            )
                        })}
                    </CardWrapper>
                </ContentWrapper>
            </Flex>
        </StyledSection>
    )
}
