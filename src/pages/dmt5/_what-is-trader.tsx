import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
import { UK, EU, ROW } from 'components/containers/visibility'

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 8rem 22.2rem;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 24px;
        line-height: 30px;
    }
`
const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
    }
`

const WhatIsTrader = () => {
    return (
        <Section>
            <StyledHeader align="center" mb="1.2rem" as="h2" type="page-title">
                {localize('What is Deriv MT5')}
            </StyledHeader>
            <StyledText max_width="79.2rem" align="center">
                <ROW>
                    {localize(
                        'Deriv MT5 (DMT5) gives you access to multiple asset classes — forex, synthetic indices, stocks, stock indices, cryptocurrencies, basket indices, and commodities — on a single platform. With exclusive access to innovative trade types, Deriv brings the MT5 experience to a superior level for both new and experienced traders on our platform.',
                    )}
                </ROW>
                <EU>
                    {localize(
                        'Deriv MT5 (DMT5) gives you access to multiple asset classes — forex, synthetic indices, stocks, stock indices, cryptocurrencies, and commodities — on a single platform. With exclusive access to innovative trade types, Deriv brings the MT5 experience to a superior level for both new and experienced traders on our platform.',
                    )}
                </EU>
                <UK>
                    {localize(
                        `Deriv MT5 (DMT5) gives you access to multiple asset classes — forex, stocks, stock indices, and commodities — on a single platform. With exclusive access to innovative trade types, Deriv brings the MT5 experience to a superior level for both new and experienced traders on our platform.`,
                    )}
                </UK>
            </StyledText>
        </Section>
    )
}

export default WhatIsTrader
