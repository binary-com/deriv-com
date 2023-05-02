import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { melaka } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        living_in_melaka: file(relativePath: { eq: "careers/living_in_melaka.png" }) {
            ...fadeIn
        }
        melaka_grid_1: file(relativePath: { eq: "careers/melaka_grid_1.png" }) {
            ...fadeIn
        }
        melaka_grid_2: file(relativePath: { eq: "careers/melaka_grid_2.png" }) {
            ...fadeIn
        }
        melaka_grid_3: file(relativePath: { eq: "careers/melaka_grid_3.png" }) {
            ...fadeIn
        }
        melaka_grid_4: file(relativePath: { eq: "careers/melaka_grid_4.png" }) {
            ...fadeIn
        }
        map_melaka: file(relativePath: { eq: "careers/maps/map-melaka.png" }) {
            ...fadeIn
        }
        malaysia_great_place_to_work_badge: file(
            relativePath: { eq: "careers/malaysia_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Melaka = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('_t_Melaka | Our office – Malaysia | Deriv_t_')}
                description={localize(
                    '_t_Find your role with us by browsing Deriv job opportunities in Melaka, Malaysia._t_',
                )}
            />
            <LocationLayout location={melaka} images={images} />
        </Layout>
    )
}

export default WithIntl()(Melaka)
