import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { cyprus } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_cyprus: file(relativePath: { eq: "careers/living_in_cyprus.png" }) {
            ...fadeIn
        }
        cyprus_grid_1: file(relativePath: { eq: "careers/cyprus_grid_1.png" }) {
            ...fadeIn
        }
        cyprus_grid_2: file(relativePath: { eq: "careers/cyprus_grid_2.png" }) {
            ...fadeIn
        }
        cyprus_grid_3: file(relativePath: { eq: "careers/cyprus_grid_3.png" }) {
            ...fadeIn
        }
        cyprus_grid_4: file(relativePath: { eq: "careers/cyprus_grid_4.png" }) {
            ...fadeIn
        }
        map_cyprus: file(relativePath: { eq: "careers/maps/map-cyprus.png" }) {
            ...fadeIn
        }
        cyprus_great_place_to_work_badge: file(
            relativePath: { eq: "careers/cyprus_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Cyprus = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <LocationLayout location={cyprus} images={images} />
        </Layout>
    )
}

export default WithIntl()(Cyprus)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Limassol | Our office – Cyprus | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Limassol, Cyprus._t_"
        pageContext={pageContext}
    />
)
