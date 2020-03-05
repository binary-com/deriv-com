import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { cyberjaya } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        cyberjaya: file(relativePath: { eq: "careers/cyberjaya.jpg" }) {
            ...backGroundBlur
        }
        living_in_cyberjaya: file(relativePath: { eq: "careers/living_in_cyberjaya.png" }) {
            ...fadeIn
        }
        cyberjaya_grid_1: file(relativePath: { eq: "careers/cyberjaya_grid_1.png" }) {
            ...fadeIn
        }
        cyberjaya_grid_2: file(relativePath: { eq: "careers/cyberjaya_grid_2.png" }) {
            ...fadeIn
        }
        cyberjaya_grid_3: file(relativePath: { eq: "careers/cyberjaya_grid_3.png" }) {
            ...fadeIn
        }
        cyberjaya_grid_4: file(relativePath: { eq: "careers/cyberjaya_grid_4.png" }) {
            ...fadeIn
        }
        map_cyberjaya: file(relativePath: { eq: "careers/map_cyberjaya.png" }) {
            ...fadeIn
        }
    }
`

const Cyberjaya = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={cyberjaya.display_name} />
            <LocationLayout location={cyberjaya} images={images} />
        </Layout>
    )
}

export default WithIntl()(Cyberjaya)
