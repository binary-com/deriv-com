import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { Localize } from 'components/localization'
import device from 'themes/device'

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
    color: var(--color-black-9);
    @media ${device.tablet} {
        font-size: 28px;
        line-height: 30px;
    }
`
const StyledText = styled(Header)`
    font-size: 16px;
    color: var(--color-black-9);
    font-weight: normal;

    @media ${device.tablet} {
        font-size: 16px;
    }
`

const WhatIsTrader = () => {
    return (
        <Section>
            <StyledHeader align="center" mb="1.2rem" as="h2" type="page-title">
                <Localize translate_text="_t_What is Deriv MT5_t_" />
            </StyledHeader>
            <StyledText max_width="80.2rem" align="center" as="p" type="paragraph-1">
                <Localize
                    translate_text={
                        '_t_Deriv MT5 gives you access to multiple asset classes – forex, stocks & indices, cryptocurrencies, commodities, exchange-traded funds, and derived indices — on a single platform. With exclusive access to innovative trade types, Deriv brings the MT5 experience to a superior level for both new and experienced traders._t_'
                    }
                />
            </StyledText>
        </Section>
    )
}

export default WhatIsTrader
