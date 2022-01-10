import React from 'react'
import { Hero, StyledHeader } from '../common/_style'
import PnLMarginCalculatorSection from './_pnl-margin-calculator'
import { Container, SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const PnLMarginCalculator = () => {
    return (
        <Layout>
            <SEO
                title={localize('PnL Margin Calculator')}
                description={localize('PnL Margin Calculator')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <StyledHeader as="h1" type="display-title" color="white" align="center">
                        {localize('Stop loss and/or take profit calculator for margin')}
                    </StyledHeader>
                </Container>
            </Hero>
            <PnLMarginCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(PnLMarginCalculator)
