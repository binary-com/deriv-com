import React from 'react'
import styled from 'styled-components'
import DemoSignUP from 'images/svg/dmt5/demo-signup.svg'
import LicensedAndRegulated from 'images/svg/dmt5/licensed-and-regulated.svg'
import MultipleAssets from 'images/svg/dmt5/multiple-assets.svg'
import TwentyFourSeven from 'images/svg/dmt5/twenty-four-seven.svg'
import SwapFree from 'images/svg/dmt5/swap-free-icon.svg'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'
import BoxStyledFlex, { TItem } from 'components/custom/_box-styled-flex'
import useBuildVariant from 'features/hooks/use-build-variant'

const card_data: TItem[] = [
    {
        icon: DemoSignUP,
        title: '_t_Quick demo account sign-up_t_',
        subtitle: '_t_Practise with a demo account preloaded with unlimited virtual funds._t_',
        image_alt: '_t_Quick demo account sign-up_t_',
    },
    {
        icon: MultipleAssets,
        title: '_t_Multiple assets on a single platform_t_',
        subtitle:
            '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_',
        image_alt: '_t_synthetic indices_t_',
    },
    {
        icon: TwentyFourSeven,
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade round-the-clock, even on weekends, with our proprietary derived indices._t_',
        image_alt: '_t_Trade any time of the day and week_t_',
    },
    {
        icon: LicensedAndRegulated,
        title: '_t_Licensed and regulated_t_',
        subtitle:
            '_t_Trade with a regulated industry pioneer trusted by traders for more than 20 years._t_',
        image_alt: '_t_licensed and regulated_t_',
    },
]

const non_eu_card_data: TItem[] = [
    {
        icon: SwapFree,
        title: '_t_No overnight charges on swap-free accounts_t_',
        subtitle: '_t_Leave your positions open overnight without worrying about extra charges._t_',
        image_alt: '_t_licensed and regulated_t_',
    },
]

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const CardContainer = styled(Flex)`
    @media ${device.laptopM} {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    @media ${device.tablet} {
        max-width: 250px;
        font-size: 28px;
        margin-bottom: 24px;
    }
`

const WhyTrader = () => {
    const { region } = useBuildVariant()

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                <Localize translate_text="_t_Why trade with Deriv MT5_t_" />
            </StyledHeader>
            <CardContainer>
                <BoxStyledFlex
                    items={region === "eu" ? card_data : card_data.concat(non_eu_card_data)}
                    containerWidth={region === "eu" ? '1200px' : '900px'}
                />
            </CardContainer>
        </Section>
    )
}

export default WhyTrader
