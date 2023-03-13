import React from 'react'
import DHero from './_dHero'
import DBanner from './_dBanner'
import JumpSection from './_jumpSection'
import Leverages from './_leverages'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const JumpIndices = () => {
    return (
        <Layout type="jump-indices">
            <SEO
                title="_t_Jump Indices_t_"
                description="_t_Trade jump indices, the new synthetics with a twist_t_"
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
