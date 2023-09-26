import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { vanuatu } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_vanuatu: file(relativePath: { eq: "careers/living_in_vanuatu.png" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        vanuatu_grid_3: file(relativePath: { eq: "careers/vanuatu_grid_3.png" }) {
            ...fadeIn
        }
        guernsey_map: file(relativePath: { eq: "maps/map-guernsey-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Vanuatu = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <NewLocationLayout location={vanuatu} images={images} />
        </Layout>
    )
}

export default WithIntl()(Vanuatu)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Vanuatu – Our office | Deriv_t_"
        description="_t_View current job openings at Deriv’s new office in Port Vila, Vanuatu, and get a chance to have a rewarding career ahead._t_"
        pageContext={pageContext}
    />
)
