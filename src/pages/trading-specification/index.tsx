import React from 'react'
import styled from 'styled-components'
// import { Signup } from '../home/_lazy-load'
// import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, localize, WithIntl } from 'components/localization'
import { TString } from 'types/generics'
import SignupPublic from 'features/components/templates/signup/with-banner'

const StyledHeader = styled(Header)`
    padding: 0 10px;
    font-family: 'Ubuntu';
`
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
            <SectionContainer padding={'8rem 0 0 0'}>
                <StyledHeader type="heading-2" as="p" align="center">
                    <Localize translate_text={main_title} />
                </StyledHeader>
                <MarketTab />
            </SectionContainer>
            {/* <Signup appearance={Appearances.public} /> */}
            <SignupPublic />
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
