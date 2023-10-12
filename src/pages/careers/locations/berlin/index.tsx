import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { berlin } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_berlin: file(relativePath: { eq: "careers/living_in_berlin.png" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_3: file(relativePath: { eq: "careers/guernsey_grid_3.png" }) {
            ...fadeIn
        }
        guernsey_grid_4: file(relativePath: { eq: "careers/guernsey_grid_4.jpg" }) {
            ...fadeIn
        }
        guernsey_map: file(relativePath: { eq: "maps/map-guernsey-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Berlin = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <NewLocationLayout location={berlin} images={images} />
        </Layout>
    )
}

export default WithIntl()(Berlin)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Berlin - Our office | Deriv_t_"
        description="_t_Join Deriv’s team in Germany and work on next-gen fintech products. View our current openings for a chance to build a fulfilling career._t_"
        pageContext={pageContext}
    />
)
