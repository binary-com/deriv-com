import React from 'react'
import { malta } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Malta = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Malta')} />
        <LocationLayout location={malta} />
    </Layout>
)

export default WithIntl()(Malta)
