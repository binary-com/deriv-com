import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ipoh } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
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
            <LocationLayout location={ipoh} images={images} />
        </Layout>
    )
}

export default WithIntl()(Ipoh)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Ipoh | Our office – Malaysia | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Ipoh, Malaysia._t_"
        pageContext={pageContext}
    />
)
