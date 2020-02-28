import React from 'react'
import { labuan } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Labuan = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Labuan')} />
        <LocationLayout location={labuan} />
    </Layout>
)

export default WithIntl()(Labuan)
