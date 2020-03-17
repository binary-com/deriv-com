import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { labuan } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        labuan: file(relativePath: { eq: "careers/labuan.jpg" }) {
            ...backGroundBlur
        }
        living_in_labuan: file(relativePath: { eq: "careers/living_in_labuan.png" }) {
            ...fadeIn
        }
        labuan_grid_1: file(relativePath: { eq: "careers/labuan_grid_1.png" }) {
            ...fadeIn
        }
        labuan_grid_2: file(relativePath: { eq: "careers/labuan_grid_2.png" }) {
            ...fadeIn
        }
        labuan_grid_3: file(relativePath: { eq: "careers/labuan_grid_3.png" }) {
            ...fadeIn
        }
        labuan_grid_4: file(relativePath: { eq: "careers/labuan_grid_4.png" }) {
            ...fadeIn
        }
        map_labuan: file(relativePath: { eq: "careers/map_labuan.png" }) {
            ...fadeIn
        }
    }
`

const Labuan = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={labuan.display_name} />
            <LocationLayout location={labuan} images={images} />
        </Layout>
    )
}

export default WithIntl()(Labuan)
