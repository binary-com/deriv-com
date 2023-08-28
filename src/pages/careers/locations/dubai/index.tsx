import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { dubai } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_dubai: file(relativePath: { eq: "careers/living_in_dubai.jpg" }) {
            ...fadeIn
        }
        dubai_grid_1: file(relativePath: { eq: "careers/dubai_grid_1.png" }) {
            ...fadeIn
        }
        dubai_grid_2: file(relativePath: { eq: "careers/dubai_grid_2.png" }) {
            ...fadeIn
        }
        dubai_grid_3: file(relativePath: { eq: "careers/dubai_grid_3.png" }) {
            ...fadeIn
        }
        dubai_grid_4: file(relativePath: { eq: "careers/dubai_grid_4.png" }) {
            ...fadeIn
        }
        map_dubai: file(relativePath: { eq: "careers/maps/map-dubai.png" }) {
            ...fadeIn
        }
        dubai_great_place_to_work_badge: file(
            relativePath: { eq: "careers/dubai_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Dubai = () => {
    const images = useStaticQuery<ImageDataLike>(query)

    return (
        <Layout type="careers">
            <LocationLayout location={dubai} images={images} />
        </Layout>
    )
}

export default WithIntl()(Dubai)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Dubai | Our office – UAE | Deriv_t_"
        description="_t_Browse job opportunities available at our Dubai office. Find your role in IT, marketing, and human resources._t_"
        pageContext={pageContext}
    />
)
