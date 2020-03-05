import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { malta } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        malta: file(relativePath: { eq: "careers/malta.jpg" }) {
            ...backGroundBlur
        }
        living_in_malta: file(relativePath: { eq: "careers/living_in_malta.png" }) {
            ...fadeIn
        }
        malta_grid_1: file(relativePath: { eq: "careers/malta_grid_1.png" }) {
            ...fadeIn
        }
        malta_grid_2: file(relativePath: { eq: "careers/malta_grid_2.png" }) {
            ...fadeIn
        }
        malta_grid_3: file(relativePath: { eq: "careers/malta_grid_3.png" }) {
            ...fadeIn
        }
        malta_grid_4: file(relativePath: { eq: "careers/malta_grid_4.png" }) {
            ...fadeIn
        }
        map_malta: file(relativePath: { eq: "careers/map_malta.png" }) {
            ...fadeIn
        }
    }
`

const Malta = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={malta.display_name} />
            <LocationLayout location={malta} images={images} />
        </Layout>
    )
}

export default WithIntl()(Malta)
