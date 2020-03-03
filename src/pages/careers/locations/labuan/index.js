import React from 'react'
import { labuan } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Labuan = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={labuan.display_name} />
        <LocationLayout location={labuan} />
    </Layout>
)

export default WithIntl()(Labuan)
