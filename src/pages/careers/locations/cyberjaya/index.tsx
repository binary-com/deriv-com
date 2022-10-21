import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { cyberjaya } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        cyberjaya: file(relativePath: { eq: "careers/cyberjaya.png" }) {
            ...heroImage
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
        malaysia_great_place_to_work_badge: file(
            relativePath: { eq: "careers/malaysia_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Cyberjaya = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Cyberjaya | Our office – Malaysia | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Cyberjaya, Malaysia.',
                )}
            />
            <LocationLayout location={cyberjaya} images={images} />
        </Layout>
    )
}

export default WithIntl()(Cyberjaya)
