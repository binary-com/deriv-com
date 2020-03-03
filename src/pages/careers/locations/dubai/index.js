import React from 'react'
import { dubai } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Dubai = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={dubai.display_name} />
        <LocationLayout location={dubai} />
    </Layout>
)

export default WithIntl()(Dubai)
