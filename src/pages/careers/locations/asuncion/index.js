import React from 'react'
import { asuncion } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Asuncion = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Asuncion')} />
        <LocationLayout location={asuncion} />
    </Layout>
)

export default WithIntl()(Asuncion)
