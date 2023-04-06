import React from 'react'
import { Signup } from '../home/_lazy-load'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, localize, WithIntl } from 'components/localization'
import { TString } from 'types/generics'

const main_title: TString = '_t_Trading specifications for CFDs on Deriv_t_'

const TradingSpecification = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_Trading specifications | CFD trading | Trading with Deriv_t_')}
                description={localize(
                    '_t_Find Deriv’s CFD trading specifications for multiple assets in forex, derived indices, stocks and indices, cryptocurrencies, and commodities._t_',
                )}
            />
            <SectionContainer>
                <Header type="heading-2" as="p" align="center">
                    <Localize translate_text={main_title} />
                </Header>
                <MarketTab />
            </SectionContainer>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
