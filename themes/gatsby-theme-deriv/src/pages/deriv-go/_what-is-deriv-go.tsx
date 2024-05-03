import React from 'react'
import styled from 'styled-components'
import { ContentType } from 'pages/landing/_types'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import flex from 'components/containers/flex'
import { TString } from 'types/generics'

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);
    padding-top: 40px;

    @media ${device.tabletL} {
        padding-top: 0;
    }
`
const NumberStyledContainer = styled(flex)`
    direction: ltr;
    padding: 40px 0 104px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    color: var(--color-black-9);

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
    font-size: 48px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        padding-top: 24px;
        font-size: 24px;
    }
`
const StyledSubTitle = styled(Header)`
    padding-top: 8px;
    font-weight: normal;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 32px;
    }
`
const StyledText = styled(Header)`
    padding-top: 8px;
    font-weight: normal;
    color: var(--color-black-9);
    max-width: 792px;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`

const items: ContentType[] = [
    {
        title: '_t_Up to x1000_t_',
        subtitle: '_t_potential profit_t_',
    },
    { title: 'USD 1', subtitle: '_t_minimum stake_t_' },
    { title: '24/7', subtitle: '_t_trading_t_' },
]

const WhatIsDerivGo = () => {
    return (
        <StyledSectionContainer>
            <NumberStyledContainer>
                {items.map(({ title, subtitle }) => (
                    <NumberWrapper key={title}>
                        <StyledTitle as="h3" type="heading-3" align="center">
                            {title.includes('_t_') ? (
                                <Localize translate_text={title as TString} />
                            ) : (
                                title
                            )}
                        </StyledTitle>
                        <StyledSubTitle align="center" as="span" type="paragraph-1">
                            <Localize translate_text={subtitle} />
                        </StyledSubTitle>
                    </NumberWrapper>
                ))}
            </NumberStyledContainer>
            <Container>
                <Flex width="1202px" fd="column" ai="center" jc="center">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        <Localize translate_text="_t_What is Deriv GO_t_" />
                    </StyledHeader>
                    <StyledText mt="16px" align="center" as="p" type="paragraph-1">
                        <Localize translate_text="_t_Deriv GO is our mobile app optimised for trading multipliers and accumulator options on the go. Trade on forex, derived indices, and cryptocurrencies, and maximise your potential profit without risking more than your stake._t_" />
                    </StyledText>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDerivGo
