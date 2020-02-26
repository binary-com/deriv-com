import React from 'react'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Teams = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Teams')} />
        <h1>Teams</h1>
    </Layout>
)

export default WithIntl()(Teams)
