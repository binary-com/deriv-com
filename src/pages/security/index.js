import React from 'react'
import Rewards from './rewards'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const Security = () => {
    return (
        <Layout type="security" margin_top={10} no_login_signup>
            <SEO title={localize('Some title')} description={localize('Some description')} />
            Hello World!
            <Rewards />
        </Layout>
    )
}

export default WithIntl()(Security)
