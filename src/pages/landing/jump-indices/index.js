import React from 'react'
import { DBanner, DHero, JumpSection } from './_lazy-load.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const JumpIndices = () => {
    return (
        <Layout type="ebook">
            <SEO
                title={localize('Jump Indices')}
                description={localize('Trade jump indices, the new synthetics with a twist')}
                no_index
            />
            <DHero />
            <DBanner />
            <JumpSection />
        </Layout>
    )
}

export default WithIntl()(JumpIndices)
