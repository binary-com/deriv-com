import React from 'react'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import { PageLayout } from '@deriv-com/components'
import MarketTab from '../market-tab'
import Layout from 'features/components/templates/layout'
import MainRowNavigation from 'features/pages/home/navigation'

const DerivedMarket = () => {
    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <Layout>
                    <MainRowNavigation />
                    <PageLayout>
                        <MarketTab />
                    </PageLayout>
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}
export default DerivedMarket
