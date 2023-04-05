import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 24px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);

    @media ${device.tablet} {
        border-bottom: unset;
    }
`

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text="_t_Sign in to your Deriv account. If you don’t have one, sign up for free; then create a Deriv real account._t_" />
                        <Localize translate_text="_t_Fund your Deriv real account with your preferred payment method._t_" />
                        <Localize translate_text="_t_Scan to download_t_" />
                        <Localize translate_text="_t_The all-in-one CFD trading platform_t_" />
                        <Localize translate_text="_t_Deriv MT5 gives you access to multiple asset classes — forex, stocks & indices, cryptocurrencies, commodities, and derived indices — on a single platform. With exclusive access to innovative assets, Deriv brings the MT5 experience to a superior level for both new and experienced traders._t_" />
                        <Localize translate_text="_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_" />
                        <Localize translate_text="_t_Trade round-the-clock, even on weekends, with our proprietary derived indices._t_" />
                        <Localize translate_text="_t_Sign up for a free <0>Deriv demo account</0>._t_" />
                        <Localize translate_text="_t_Focus on your preferred markets_t_" />
                        <Localize translate_text="_t_Trade CFDs on our synthetics, baskets, and derived FX with asset prices derived from simulated and real-world markets._t_" />
                        <Localize translate_text="_t_Trade CFDs on forex, stocks & indices, cryptocurrencies, and commodities on high leverage._t_" />
                        <Localize translate_text="_t_Get trading with Deriv MT5_t_" />
                        <Localize translate_text="_t_For mobile app sign-ups, set the broker code to Deriv limited._t_" />
                        <Localize translate_text="_t_Set the purchase conditions_t_" />
                        <Localize translate_text="_t_Set the restart conditions_t_" />
                        <Localize translate_text="_t_Run the bot_t_" />
                        <Localize translate_text="_t_Check the profit_t_" />
                        <Localize translate_text="_t_Martingale, D'Alembert, and Oscar's Grind — load and customise proven strategies or create your own from scratch._t_" />
                        <Localize translate_text="_t_Use analysis tools, indicators, and smart logic such as take profit and stop loss to maximise your profits and limit losses._t_" />
                        <Localize translate_text="_t_Get into the Deriv Bot experience_t_" />
                        <Localize translate_text="_t__t_" />
                        <Localize translate_text="_t__t_" />
                        <Localize translate_text="_t__t_" />
                        <Localize translate_text="_t__t_" />
                    </StyledHeader>
                    <Text size="16px" align="center" mt="12px">
                        <Localize translate_text="Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, stocks & indices, cryptocurrencies, and derived, Deriv X gives you a versatile trading experience that lets you customise your trading environment." />
                    </Text>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
