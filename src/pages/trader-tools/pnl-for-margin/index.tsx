import React from 'react'
import { Hero, StyledHeader } from '../common/_style'
import PnLMarginCalculatorSection from './_pnl-margin-calculator'
import { Container, SEO } from 'components/containers'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const PnLMarginCalculator = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_PnL Margin Calculator_t_')}
                description={localize('_t_PnL Margin Calculator_t_')}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <StyledHeader as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Stop loss and/or take profit calculator for margin_t_" />
                    </StyledHeader>
                </Container>
            </Hero>
            <PnLMarginCalculatorSection />
        </Layout>
    )
}
export default WithIntl()(PnLMarginCalculator)
