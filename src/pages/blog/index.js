import React from 'react'
import MarketNews from './_markets-news'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const DerivBlog = () => {
    return (
        <Layout>
            <MarketNews />
        </Layout>
    )
}

export default WithIntl()(DerivBlog)