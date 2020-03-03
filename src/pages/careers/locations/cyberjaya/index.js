import React from 'react'
import { cyberjaya } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Cyberjaya = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={cyberjaya.display_name} />
        <LocationLayout location={cyberjaya} />
    </Layout>
)

export default WithIntl()(Cyberjaya)
