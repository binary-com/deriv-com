import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, WithIntl } from 'components/localization'
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
            <SectionContainer>
                <StyledHeader as="p">
                    <Localize translate_text="Trading specifications for CFDs on Deriv" />
                </StyledHeader>
                <MarketTab is_home={false} />
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
