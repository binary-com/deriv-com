import React from 'react'
import Layout from 'features/components/templates/layout'
import NotFoundContainer from './content/not-found.container'
import MainFooter from 'features/components/templates/footer'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import { BuildVariantType } from 'features/types'

const PageNotFound = ({region}: BuildVariantType) => {
    return (
        <Layout region={region}>
            <MainRowNavigation />
            <NotFoundContainer />
            <MainFooter />
        </Layout>
    )
}

export default PageNotFound
