import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ipoh } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        ipoh: file(relativePath: { eq: "careers/ipoh.jpg" }) {
            ...heroImage
        }
        living_in_ipoh: file(relativePath: { eq: "careers/living_in_ipoh.png" }) {
            ...fadeIn
        }
        ipoh_grid_1: file(relativePath: { eq: "careers/ipoh_grid_1.png" }) {
            ...fadeIn
        }
        ipoh_grid_2: file(relativePath: { eq: "careers/ipoh_grid_2.png" }) {
            ...fadeIn
        }
        ipoh_grid_3: file(relativePath: { eq: "careers/ipoh_grid_3.png" }) {
            ...fadeIn
        }
        ipoh_grid_4: file(relativePath: { eq: "careers/ipoh_grid_4.png" }) {
            ...fadeIn
        }
        map_ipoh: file(relativePath: { eq: "careers/maps/map-ipoh.png" }) {
            ...fadeIn
        }
        malaysia_great_place_to_work_badge: file(
            relativePath: { eq: "careers/malaysia_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Ipoh = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Ipoh | Our office – Malaysia | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Ipoh, Malaysia.',
                )}
            />
            <LocationLayout location={ipoh} images={images} />
        </Layout>
    )
}

export default WithIntl()(Ipoh)
