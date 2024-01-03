import React from 'react'
import { BreakpointProvider, ThemeProvider, FluidContainer, Section } from '@deriv/quill-design'
import { PageLayout, Breadcrumbs } from '@deriv-com/components'
import Layout from 'features/components/templates/layout'
import HeroBanner from './hero-banner'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'

const OurPrincipalsComponent = () => {
    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <Layout>
                    <MainRowNavigation />
                    <PageLayout>
                        <Section className="!bg-background-secondary-container">
                            <FluidContainer>
                                <Breadcrumbs
                                    className="py-general-md"
                                    links={[
                                        {
                                            content: 'Home',
                                            href: '/',
                                        },
                                        {
                                            content: 'Our principles',
                                            href: '/our-principles/',
                                        },
                                    ]}
                                />
                            </FluidContainer>
                        </Section>

                        <HeroBanner />
                    </PageLayout>
                    <MainFooter />
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default OurPrincipalsComponent
