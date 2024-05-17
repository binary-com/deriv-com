import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { senegal } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_senegal: file(relativePath: { eq: "careers/living_in_senegal.png" }) {
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
        senegal_map: file(relativePath: { eq: "careers/maps/map-senegal-career.png" }) {
            ...fadeIn
        }
        rwanda_great_place_to_work_badge: file(
            relativePath: { eq: "careers/rwanda_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Senegal = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    const images = useStaticQuery(query)

    return (
        <Layout region={region} type="careers">
            <LocationLayout location={senegal} images={images} />
        </Layout>
    )
}

export default WithIntl()(Senegal)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Dakar | Our office – Senegal | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Kigali, Rwanda._t_"
        pageContext={pageContext}
    />
)
