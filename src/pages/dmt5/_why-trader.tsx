import React from 'react'
import styled from 'styled-components'
import DemoSignUP from 'images/svg/dmt5/demo-signup.svg'
import LicensedAndRegulated from 'images/svg/dmt5/licensed-and-regulated.svg'
import MultipleAssets from 'images/svg/dmt5/multiple-assets.svg'
import TwentyFourSeven from 'images/svg/dmt5/twenty-four-seven.svg'
import { localize, Localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

type CardContentType = {
    header: React.ReactElement
    text: React.ReactElement
    image: string
    key: number
}

const card_content: CardContentType[] = [
    {
        header: <Localize translate_text="Quick demo account sign-up" />,
        text: (
            <Localize translate_text="Practise with a demo account preloaded with unlimited virtual funds." />
        ),
        image: DemoSignUP,
        key: 0,
    },
    {
        header: <Localize translate_text="Multiple assets on a single platform" />,
        text: (
            <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived in one place." />
        ),
        image: MultipleAssets,
        key: 1,
    },
    {
        header: <Localize translate_text="24/7 trading" />,
        text: (
            <Localize translate_text="Trade round-the-clock, even on weekends, with our proprietary derived." />
        ),
        image: TwentyFourSeven,
        key: 2,
    },
    {
        header: <Localize translate_text="Licensed and regulated" />,
        text: (
            <Localize translate_text="Trade with a regulated industry pioneer trusted by traders for more than 20 years." />
        ),
        image: LicensedAndRegulated,
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

const Image = styled.img`
    width: 64px;
    height: 64px;

    @media ${device.mobileL} {
        width: 48px;
        height: 48px;
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
    const { is_eu, is_uk } = useCountryRule()

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
                                <Image src={card.image} alt={card.header.props.translate_text} />
                            </div>
                            <StyledCardHeader
                                mt="0.8rem"
                                mb="0.8rem"
                                as="h4"
                                type="sub-section-title"
                            >
                                {card.header}
                            </StyledCardHeader>
                            {card.key == 1 && is_uk ? (
                                <StyledText>
                                    <Localize translate_text="Trade forex, stocks, stock indices, and commodities in one place." />
                                </StyledText>
                            ) : (
                                <StyledText>{card.text}</StyledText>
                            )}
                        </Card>
                    )
                })}
            </CardContainer>
        </Section>
    )
}

export default WhyTrader
