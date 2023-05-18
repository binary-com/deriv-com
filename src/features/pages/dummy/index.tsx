import React from 'react'
import loadable from '@loadable/component'
import DummyHero from './hero'
import Layout from 'features/components/templates/layout'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'
const Footer = loadable(() => import('features/components/templates/footer'))

export const Dummy = () => {
    return (
        <Layout>
            <MainNav />
            <DummyHero />
            <Footer />
        </Layout>
    )
}
