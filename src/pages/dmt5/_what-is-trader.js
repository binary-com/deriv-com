import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 8rem 22.2rem;
    align-items: center;
    justify-content: center;
`

const WhatIsTrader = () => {
    return (
        <Section>
            <Header align="center" mb="1.2rem" as="h2">
                {localize('What is Deriv MetaTrader 5 (DMT5)')}
            </Header>
            <Text max_width="79.2rem" align="center">
                {localize(
                    'MetaTrader 5 (MT5), developed by MetaQuotes Software, gives you access to multiple asset classes — forex, stocks, and commodities — on a single platform. Deriv brings the MT5 experience to a superior level for both new and experienced traders on our platform, with exclusive access to innovative trade types.',
                )}
            </Text>
        </Section>
    )
}

export default WhatIsTrader
