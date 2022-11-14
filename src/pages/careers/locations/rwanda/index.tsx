import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { rwanda } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        rwanda: file(relativePath: { eq: "careers/rwanda.jpg" }) {
            ...heroImage
        }
        living_in_rwanda: file(relativePath: { eq: "careers/living_in_rwanda.jpg" }) {
            ...fadeIn
        }
        rwanda_grid_1: file(relativePath: { eq: "careers/rwanda_grid_1.jpg" }) {
            ...fadeIn
        }
        rwanda_grid_2: file(relativePath: { eq: "careers/rwanda_grid_2.jpg" }) {
            ...fadeIn
        }
        rwanda_grid_3: file(relativePath: { eq: "careers/rwanda_grid_3.jpg" }) {
            ...fadeIn
        }
        rwanda_grid_4: file(relativePath: { eq: "careers/rwanda_grid_4.png" }) {
            ...fadeIn
        }
        rwanda_map: file(relativePath: { eq: "maps/map-rwanda-career.png" }) {
            ...fadeIn
        }
        rwanda_great_place_to_work_badge: file(
            relativePath: { eq: "careers/rwanda_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Rwanda = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Kigali | Our office – Rwanda | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Kigali, Rwanda.',
                )}
            />
            <LocationLayout location={rwanda} images={images} />
        </Layout>
    )
}

export default WithIntl()(Rwanda)
