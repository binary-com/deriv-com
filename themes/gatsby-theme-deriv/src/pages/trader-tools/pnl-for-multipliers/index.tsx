import React from 'react'
import { Hero, StyledHeader } from '../common/_style'
import PnLMultipliersCalculatorSection from './_pnl_multipliers_calculator'
import { Container, SEO } from 'components/containers'
import { Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { TGatsbyHead } from 'features/types'

const PnLMultipliersCalculator = () => {
    return (
        <Layout>
            <Hero jc="center" ai="center">
                <Container>
                    <StyledHeader as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Stop loss and take profit calculator for multipliers_t_" />
                    </StyledHeader>
                </Container>
            </Hero>
            <PnLMultipliersCalculatorSection />
        </Layout>
    )
}

export default WithIntl()(PnLMultipliersCalculator)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_PnL Multipliers Calculator_t_"
        description="_t_PnL Multipliers Calculator_t_"
        pageContext={pageContext}
    />
)
