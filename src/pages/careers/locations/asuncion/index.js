import React from 'react'
import { asuncion } from '../_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Asuncion = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={asuncion.display_name} />
        <LocationLayout location={asuncion} />
    </Layout>
)

export default WithIntl()(Asuncion)
