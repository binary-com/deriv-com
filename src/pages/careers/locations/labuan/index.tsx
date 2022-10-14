import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { labuan } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        labuan: file(relativePath: { eq: "careers/labuan.jpg" }) {
            ...heroImage
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
        map_labuan: file(relativePath: { eq: "careers/maps/map-labuan.png" }) {
            ...fadeIn
        }
        malaysia_great_place_to_work_badge: file(
            relativePath: { eq: "careers/malaysia_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Labuan = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Labuan | Our office – Malaysia | Deriv')}
                description={localize(
                    'Browse, find, and apply for jobs in IT, compliance, and accounts at our Labuan office.',
                )}
            />
            <LocationLayout location={labuan} images={images} />
        </Layout>
    )
}

export default WithIntl()(Labuan)
