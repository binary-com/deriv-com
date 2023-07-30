import React from 'react'
import DHero from './_dHero'
import DBanner from './_dBanner'
import JumpSection from './_jumpSection'
import Leverages from './_leverages'
import { PageDirection, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHeadApi } from 'features/types'

const JumpIndices = () => {
    return (
        <Layout type="static">
            <PageDirection />
            <DHero />
            <DBanner />
            <JumpSection />
            <Leverages />
        </Layout>
    )
}

export default WithIntl()(JumpIndices)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Jump Indices_t_"
        description="_t_Trade jump indices, the new synthetics with a twist_t_"
        no_index
        pageContext={pageContext}
    />
)
