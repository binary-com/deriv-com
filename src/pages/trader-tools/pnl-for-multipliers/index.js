import React from 'react'
import { Hero } from '../common/_style'
import PnLMultipliersCalculatorSection from './_pnl-for-multipliers'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const PnLMultipliersCalculator = () => {
    return (
        <Layout>
            <SEO
                title={localize('PnL Multipliers Calculator')}
                description={localize('PnL Multipliers Calculator')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Stop loss and/or take profit calculator for multipliers')}
                    </Header>
                </Container>
            </Hero>
            <PnLMultipliersCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(PnLMultipliersCalculator)
