import React from 'react'
import Layout from 'features/components/templates/layout'
import NotFoundContainer from './content/not-found.container'
import Footer from 'features/components/templates/footer'
import MainRowNavigation from 'features/components/templates/navigation-new/main-nav'

const PageNotFound = () => {
    return (
        <Layout>
            <MainRowNavigation />
            <NotFoundContainer />
            <Footer />
        </Layout>
    )
}

export default PageNotFound
