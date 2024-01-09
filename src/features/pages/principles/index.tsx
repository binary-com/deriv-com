import React from 'react'
import { BreakpointProvider, ThemeProvider, FluidContainer, Section } from '@deriv/quill-design'
import { PageLayout, Breadcrumbs } from '@deriv-com/components'
import Layout from 'features/components/templates/layout'
import DetailsCardLeft from './details-card-left'
import HeroBanner from './hero-banner'
import DetailsBoxes from './feature-box'
import DetailsCardRight from './details-card-right'
import { ContentImage, FairSteps, ReliableSteps, ResponsibleSteps, TransparentSteps } from './data'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'
import { Localize } from 'components/localization'

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
                                            content: <Localize translate_text="_t_Home_t_" />,
                                            href: '/',
                                        },
                                        {
                                            content: (
                                                <Localize translate_text="_t_Our principles_t_" />
                                            ),
                                            href: '/our-principles/',
                                        },
                                    ]}
                                />
                            </FluidContainer>
                        </Section>
                        <HeroBanner />
                        <DetailsCardRight content={ContentImage[0]} />
                        <DetailsBoxes content={ReliableSteps} />
                        <DetailsCardLeft content={ContentImage[1]} />
                        <DetailsBoxes content={FairSteps} />
                        <DetailsCardRight content={ContentImage[2]} />
                        <DetailsBoxes content={TransparentSteps} />
                        <DetailsCardLeft content={ContentImage[3]} />
                        <DetailsBoxes content={ResponsibleSteps} />
                    </PageLayout>
                    <MainFooter />
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default OurPrincipalsComponent
