import React from 'react'
import styled from 'styled-components'
import DemoSignUP from 'images/svg/dmt5/demo-signup.svg'
import LicensedAndRegulated from 'images/svg/dmt5/licensed-and-regulated.svg'
import MultipleAssets from 'images/svg/dmt5/multiple-assets.svg'
import TwentyFourSeven from 'images/svg/dmt5/twenty-four-seven.svg'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'
import { TString } from 'types/generics'

type CardContentType = {
    header: TString
    text: TString
    image: string
    key: number
    image_alt: string
}

const card_content: CardContentType[] = [
    {
        header: '_t_Quick demo account sign-up_t_',
        text: '_t_Practise with a demo account preloaded with unlimited virtual funds._t_',
        image: DemoSignUP,
        key: 0,
        image_alt: 'quick demo account sign-up',
    },
    {
        header: '_t_Multiple assets on a single platform_t_',
        text: '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived in one place._t_',
        image: MultipleAssets,
        key: 1,
        image_alt: 'synthetic indices',
    },
    {
        header: '_t_24/7 trading_t_',
        text: '_t_Trade round-the-clock, even on weekends, with our proprietary derived._t_',
        image: TwentyFourSeven,
        key: 2,
        image_alt: '24/7 trading',
    },
    {
        header: '_t_Licensed and regulated_t_',
        text: '_t_Trade with a regulated industry pioneer trusted by traders for more than 20 years._t_',
        image: LicensedAndRegulated,
        key: 3,
        image_alt: 'licensed and regulated',
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
    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                <Localize translate_text="_t_Why trade with Deriv MT5_t_" />
            </StyledHeader>
            <CardContainer>
                {card_content.map(({ key, image, header, text }) => {
                    return (
                        <Card key={key}>
                            <div>
                                <Image src={image} alt={header} />
                            </div>
                            <StyledCardHeader
                                mt="0.8rem"
                                mb="0.8rem"
                                as="h4"
                                type="sub-section-title"
                            >
                                <Localize translate_text={header} />
                            </StyledCardHeader>
                            <StyledText>
                                <Localize translate_text={text} />
                            </StyledText>
                        </Card>
                    )
                })}
            </CardContainer>
        </Section>
    )
}

export default WhyTrader
