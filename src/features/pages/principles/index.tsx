import React from 'react'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import { PageLayout } from '@deriv-com/components'
import Layout from 'features/components/templates/layout'
import HeroBanner from './hero-banner'
import Reliable from './reliable'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'

const OurPrincipalsComponent = () => {
    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <Layout>
                    <MainRowNavigation />
                    <PageLayout>
                        <HeroBanner />
                        <Reliable />
                    </PageLayout>
                    <MainFooter />
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default OurPrincipalsComponent
