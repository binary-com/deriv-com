import React from 'react'
import styled from 'styled-components'
import { Background } from './components/_elements'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, localize, WithIntl } from 'components/localization'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 48px;

    @media ${device.tablet} {
        font-size: 28px;
        padding: 0 41px;
    }
`
const TradingSpecification = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trading specifications | CFD trading | Trading with Deriv')}
                description={localize(
                    'Find Deriv’s CFD trading specifications for multiple assets in forex, derived indices, stocks and indices, cryptocurrencies, and commodities.',
                )}
            />
            <SectionContainer>
                <StyledHeader as="p">
                    <Localize translate_text="Trading specifications for CFDs on Deriv" />
                </StyledHeader>
                <MarketTab />
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
