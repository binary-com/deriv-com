import React from 'react'
import DHero from './_dHero'
import DBanner from './_dBanner'
import JumpSection from './_jumpSection'
import Leverages from './_leverages'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const JumpIndices = () => {
    return (
        <Layout type="jump-indices">
            <SEO
                title={localize('Jump Indices')}
                description={localize('Trade jump indices, the new synthetics with a twist')}
                no_index
            />
            <DHero />
            <DBanner />
            <JumpSection />
            <Leverages />
        </Layout>
    )
}

export default WithIntl()(JumpIndices)
