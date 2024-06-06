import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { dakar } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const query = graphql`
    query {
        living_in_dakar: file(relativePath: { eq: "careers/living_in_senegal.png" }) {
            ...fadeIn
        }
        senegal_map: file(relativePath: { eq: "careers/maps/map-senegal-career.png" }) {
            ...fadeIn
        }
    }
`

const Dakar = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    const images = useStaticQuery(query)

    return (
        <Layout region={region} type="careers">
            <NewLocationLayout location={dakar} images = {images} />
        </Layout>
    )
}

export default WithIntl()(Dakar)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Dakar | Our office – Senegal | Deriv_t_"
        description="_t_Find your role with us by browsing Deriv job opportunities in Dakar, Senegal._t_"
        pageContext={pageContext}
    />
)
