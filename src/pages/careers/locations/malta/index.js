import React from 'react'
import { malta } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Malta = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={malta.display_name} />
        <LocationLayout location={malta} />
    </Layout>
)

export default WithIntl()(Malta)
