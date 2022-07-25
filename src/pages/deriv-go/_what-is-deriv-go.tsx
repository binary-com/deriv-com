import React from 'react'
import styled from 'styled-components'
import { ContentType } from './index'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);
    padding-top: 40px;

    @media ${device.tabletL} {
        padding-top: 0;
    }
`
const StyledContainer = styled(Container)`
    padding: 40px 0 104px;
    width: 100%;
    justify-content: space-around;

    @media ${device.tabletL} {
        flex-direction: column;
        padding: 16px 0 40px;
    }
`
const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledTitle = styled(Header)`
    @media ${device.tabletL} {
        padding-top: 24px;
    }
`
const StyledSubTitle = styled(Text)`
    padding-top: 8px;
    font-size: 24px;

    @media ${device.tabletL} {
        font-size: 18px;
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

const items: ContentType[] = [
    {
        id: 0,
        title: <Localize translate_text="Up to x1000" />,
        subtitle: <Localize translate_text="potential profit" />,
    },
    { id: 1, title: '24/7', subtitle: <Localize translate_text="trading" /> },
    { id: 3, title: 'USD 1', subtitle: <Localize translate_text="minimum stake" /> },
]

const WhatIsDerivGo = () => {
    return (
        <StyledSectionContainer>
            <StyledContainer>
                {items.map((item) => (
                    <NumberWrapper key={item.id}>
                        <StyledTitle as="h3" type="heading-3" align="center">
                            {item.title}
                        </StyledTitle>
                        <StyledSubTitle align="center">{item.subtitle}</StyledSubTitle>
                    </NumberWrapper>
                ))}
            </StyledContainer>
            <Container>
                <Flex width="1202px" fd="column" ai="center" jc="center">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        <Localize translate_text="What is Deriv GO" />
                    </StyledHeader>
                    <StyledText mt="16px" align="center">
                        <Localize translate_text="Deriv GO is our mobile app optimised for trading multipliers on the go. Trade on forex, synthetic indices, and cryptocurrencies, and maximise your potential profit without risking more than your stake." />
                    </StyledText>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDerivGo
