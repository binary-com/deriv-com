import React from 'react'
import Layout from 'components/layout/layout'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, WithIntl } from 'components/localization'

const TradingSpecification = () => {
    return (
        <Layout>
            <SectionContainer>
                <Header type="page-title" align="center">
                    <Localize translate_text="Trading specifications for CFDs on Deriv" />
                </Header>
                <MarketTab is_home={false} />
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
