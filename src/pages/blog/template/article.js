import React from 'react'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const ArticleTemplate = () => {
    return (
        <Layout>
            <SEO
                description={localize('Single Article Post | Deriv')}
                title={localize('Single Post Here.')}
                no_index
            />
        </Layout>
    )
}

export default WithIntl()(ArticleTemplate)
