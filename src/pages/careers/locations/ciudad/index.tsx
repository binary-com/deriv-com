import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ciudad } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { PageDirection, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHeadApi } from 'features/types'

const query = graphql`
    query {
        living_in_ciudad: file(relativePath: { eq: "careers/living_in_ciudad.png" }) {
            ...fadeIn
        }
    }
`

const CiudadDelEste = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <PageDirection />
            <NewLocationLayout location={ciudad} images={images} />
        </Layout>
    )
}

export default WithIntl()(CiudadDelEste)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Ciudad del Este – Our office | Deriv_t_"
        description="_t_Join great marketing minds at Deriv’s office in Ciudad del Este, Paraguay. Be part of a vibrant team that develops the company’s growth in the region._t_"
        pageContext={pageContext}
    />
)
