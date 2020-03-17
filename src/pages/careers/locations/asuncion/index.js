import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { asuncion } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        asuncion: file(relativePath: { eq: "careers/asuncion.jpg" }) {
            ...backGroundBlur
        }
        living_in_asuncion: file(relativePath: { eq: "careers/living_in_asuncion.png" }) {
            ...fadeIn
        }
        asuncion_grid_1: file(relativePath: { eq: "careers/asuncion_grid_1.png" }) {
            ...fadeIn
        }
        asuncion_grid_2: file(relativePath: { eq: "careers/asuncion_grid_2.png" }) {
            ...fadeIn
        }
        asuncion_grid_3: file(relativePath: { eq: "careers/asuncion_grid_3.png" }) {
            ...fadeIn
        }
        asuncion_grid_4: file(relativePath: { eq: "careers/asuncion_grid_4.png" }) {
            ...fadeIn
        }
        map_asuncion: file(relativePath: { eq: "careers/map_asuncion.png" }) {
            ...fadeIn
        }
    }
`

const Asuncion = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={asuncion.display_name} />
            <LocationLayout location={asuncion} images={images} />
        </Layout>
    )
}

export default WithIntl()(Asuncion)
