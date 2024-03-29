import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { reading } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_reading: file(relativePath: { eq: "careers/living_in_reading.jpg" }) {
            ...fadeIn
        }
        reading_grid_3: file(relativePath: { eq: "careers/reading_grid_3.jpg" }) {
            ...fadeIn
        }
        reading_great_place_to_work_badge: file(
            relativePath: { eq: "careers/reading_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Reading = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    const images = useStaticQuery(query)

    return (
        <Layout region={region} type="careers">
            <NewLocationLayout location={reading} images={images} />
        </Layout>
    )
}

export default WithIntl()(Reading)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_UK | Our office – UK | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Reading, UK._t_"
        pageContext={pageContext}
    />
)
