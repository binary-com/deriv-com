import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { SectionContainer, SEO } from 'components/containers'
import { Header } from 'components/elements'
import MarketTab from 'components/elements/market-tab'
import { Localize, WithIntl } from 'components/localization'
import SignupPublic from 'features/components/templates/signup/with-banner'
import { TGatsbyHead } from 'features/types'

const StyledHeader = styled(Header)`
    padding: 0 10px;
    font-family: 'Ubuntu';
`

const TradingSpecification = () => {
    return (
        <Layout>
            <SectionContainer padding={'8rem 0 0 0'}>
                <StyledHeader type="heading-2" as="p" align="center">
                    <Localize translate_text="_t_Trading specifications for CFDs on Deriv_t_" />
                </StyledHeader>
                <MarketTab />
            </SectionContainer>
            <SignupPublic />
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Trading specifications | CFD trading | Trading with Deriv_t_"
        description="_t_Find Deriv’s CFD trading specifications for multiple assets in forex, derived indices, stocks and indices, cryptocurrencies, and commodities._t_"
        pageContext={pageContext}
    />
)
