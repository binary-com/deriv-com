import React from 'react'
import { Hero, StyledHeader } from '../common/_style'
import PnLMultipliersCalculatorSection from './_pnl_multipliers_calculator'
import { Container, SEO } from 'components/containers'
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
                    <StyledHeader as="h1" type="display-title" color="white" align="center">
                        {localize('Stop loss and take profit calculator for multipliers')}
                    </StyledHeader>
                </Container>
            </Hero>
            <PnLMultipliersCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(PnLMultipliersCalculator)
