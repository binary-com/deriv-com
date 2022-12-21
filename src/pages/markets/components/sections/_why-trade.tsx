import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

type WhyTradeProps = {
    children?: ReactElement[]
    header?: ReactElement
    description?: ReactElement
}

const Item = styled(Flex)`
    max-width: 19rem;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }

    @media ${device.tabletL} {
        max-width: 18rem;
        gap: 6px;

        ${Text} {
            font-size: 14px;
        }
    }
`

const ItemContainer = styled(Box)`
    display: flex;
    margin: 40px 0 32px;
    flex-direction: row;
    justify-content: space-between;
    max-width: 140.4rem;

    @media ${device.tabletL} {
        flex-wrap: wrap;
        margin: 20px 0 32px 0;
        gap: 22px;
        max-width: 40.6rem;
    }
    @media (max-width: 336px) {
        justify-content: center;
    }
`
const StyledHeader = styled(Header)`
    font-size: 48px;

    @media ${device.tablet} {
        text-align: center;
        max-width: 80vw;
        font-size: 28px;
        line-height: 1.5;
        margin-bottom: 8px;
    }
`
const StyledText = styled(Text)`
    margin-bottom: 80px;
    text-align: center;

    @media ${device.tabletL} {
        width: 88vw;
        font-size: 16px;
        margin: 30px 0;
    }
    @media ${device.mobileM} {
        width: 88vw;
        font-size: 14px;
    }
`
const StyledSection = styled(SectionContainer)`
    padding: 6rem 0;

    @media ${device.tabletL} {
        padding: 0 16px;
    }
`
const StyledTextContent = styled(Text)`
    text-align: center;
    margin-top: 1.6rem;
    font-size: 16px;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

export const WhyTrade = ({ children, header, description }: WhyTradeProps) => {
    return (
        <StyledSection>
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledText>{description}</StyledText>
                <div>
                    <StyledHeader as="h2" type="section-title" align="center" mb="1.2rem" lh="1.25">
                        {header}
                    </StyledHeader>
                </div>
                <ItemContainer max_width="48.6rem" width="100%">
                    {children.map((child, idx) => {
                        {
                            const { text, icon } = child.props
                            return (
                                <Item key={idx} ai="center" direction="column">
                                    {icon}
                                    {<StyledTextContent>{text}</StyledTextContent>}
                                </Item>
                            )
                        }
                    })}
                </ItemContainer>
            </Flex>
        </StyledSection>
    )
}
