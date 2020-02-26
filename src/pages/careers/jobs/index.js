import React from 'react'
import { Banner } from '../_layout-components/_banner'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Jobs = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Jobs')} />
        <h1>Jobs</h1>
        <Banner />
    </Layout>
)

export default WithIntl()(Jobs)
