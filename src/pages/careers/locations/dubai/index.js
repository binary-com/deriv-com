import React from 'react'
import { dubai } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Dubai = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Dubai')} />
        <LocationLayout location={dubai} />
    </Layout>
)

export default WithIntl()(Dubai)
