import React from 'react'
import styled from 'styled-components'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import MinimalRisk from 'images/svg/trade-types/minimal-risk.svg'
import Seven from 'images/svg/trade-types/seven.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import { localize, Localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

const card_content = [
    {
        header: <Localize translate_text="Quick demo account sign-up" />,
        text: (
            <Localize translate_text="Practise with a demo account preloaded with unlimited virtual funds." />
        ),
        image: InstantAccess,
        key: 0,
    },
    {
        header: <Localize translate_text="Multiple assets on a single platform" />,
        text: (
            <Localize translate_text="Trade forex, synthetic indices, stocks, stock indices, and cryptocurrencies in one place." />
        ),
        image: SyntheticIndices,
        key: 1,
    },
    {
        header: <Localize translate_text="24/7 trading" />,
        text: (
            <Localize translate_text="Trade round-the-clock, even on weekends, with our proprietary synthetic indices." />
        ),
        image: Seven,
        key: 2,
    },
    {
        header: <Localize translate_text="Licensed and regulated" />,
        text: (
            <Localize translate_text="Trade with a regulated industry pioneer trusted by traders for more than 20 years." />
        ),
        image: MinimalRisk,
        key: 3,
    },
]

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 #f2f3f4;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const CardContainer = styled(Flex)`
    @media ${device.laptopM} {
        max-width: 58rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    min-width: 28.2rem;
    max-width: 28.2rem;
    height: auto;
    padding: 2.4rem 2.4rem 4rem;
    border-radius: 8px;
    border: solid 1px var(--color-grey-21);
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 0;
    }
    @media ${device.tablet} {
        margin-bottom: 24px;
        max-width: 100%;
    }
    @media ${device.mobileL} {
        padding: 24px;
        height: auto;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        margin-bottom: 24px;
    }
`
const StyledCardHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 20px;
        margin-bottom: 8px;
        margin-top: 8px;
        line-height: 1.2;
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`
const WhyTrader = () => {
    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                {localize('Why trade with Deriv MT5')}
            </StyledHeader>
            <CardContainer>
                {card_content.map((card) => {
                    return (
                        <Card key={card.key}>
                            <div>
                                <img src={card.image} alt="" />
                            </div>
                            <StyledCardHeader
                                mt="0.8rem"
                                mb="0.8rem"
                                as="h4"
                                type="sub-section-title"
                            >
                                {card.header}
                            </StyledCardHeader>
                            <StyledText>{card.text}</StyledText>
                        </Card>
                    )
                })}
            </CardContainer>
        </Section>
    )
}

export default WhyTrader
