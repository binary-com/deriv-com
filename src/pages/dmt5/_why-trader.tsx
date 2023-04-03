import React from 'react'
import styled from 'styled-components'
import DemoSignUP from 'images/svg/dmt5/demo-signup.svg'
import LicensedAndRegulated from 'images/svg/dmt5/licensed-and-regulated.svg'
import MultipleAssets from 'images/svg/dmt5/multiple-assets.svg'
import TwentyFourSeven from 'images/svg/dmt5/twenty-four-seven.svg'
import { localize, Localize } from 'components/localization'
import { Header } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'
import BoxStyledGrid from 'components/custom/_box-styled-grid'

const card_data = [
    {
        icon: DemoSignUP,
        title: <Localize translate_text="Quick demo account sign-up" />,
        subtitle: (
            <Localize translate_text="Practise with a demo account preloaded with unlimited virtual funds." />
        ),
        image_alt: 'Quick demo account sign-up',
    },
    {
        icon: MultipleAssets,
        title: <Localize translate_text="Multiple assets on a single platform" />,
        subtitle: (
            <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place." />
        ),
        image_alt: 'synthetic indices',
    },
    {
        icon: TwentyFourSeven,
        title: <Localize translate_text="24/7 trading" />,
        subtitle: (
            <Localize translate_text="Trade round-the-clock, even on weekends, with our proprietary derived indices.." />
        ),
        image_alt: 'Trade any time of the day and week',
    },
    {
        icon: LicensedAndRegulated,
        title: <Localize translate_text="Licensed and regulated" />,
        subtitle: (
            <Localize translate_text="Trade with a regulated industry pioneer trusted by traders for more than 20 years." />
        ),
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
const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    @media ${device.mobileL} {
        font-size: 32px;
        margin-bottom: 24px;
    }
`
const WhyTrader = () => {
    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                {localize('Why trade with Deriv MT5')}
            </StyledHeader>
            <CardContainer>
                <BoxStyledGrid items={card_data} containerWidth="1200px" boxsPerRow="4" />
            </CardContainer>
        </Section>
    )
}

export default WhyTrader
