import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { paris } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_paris: file(relativePath: { eq: "careers/living_in_paris.jpg" }) {
            ...fadeIn
        }
        paris_grid_1: file(relativePath: { eq: "careers/paris_grid_1.jpg" }) {
            ...fadeIn
        }
        paris_grid_2: file(relativePath: { eq: "careers/paris_grid_2.jpg" }) {
            ...fadeIn
        }
        paris_grid_3: file(relativePath: { eq: "careers/paris_grid_3.jpg" }) {
            ...fadeIn
        }
        paris_grid_4: file(relativePath: { eq: "careers/paris_grid_4.jpg" }) {
            ...fadeIn
        }
        paris_map: file(relativePath: { eq: "maps/map-paris-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Paris = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <NewLocationLayout location={paris} images={images} />
        </Layout>
    )
}

export default WithIntl()(Paris)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Paris | Our office – France | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Paris, France._t_"
        pageContext={pageContext}
    />
)
