import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ciudad } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        ciudad: file(relativePath: { eq: "careers/ciudad.jpg" }) {
            ...backgroundImage
        }
        living_in_ciudad: file(relativePath: { eq: "careers/living_in_ciudad.png" }) {
            ...fadeIn
        }
    }
`

const CiudadDelEste = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {
                <SEO
                    title="_t_Ciudad del Este – Our office | Deriv_t_"
                    description="_t_Join great marketing minds at Deriv’s office in Ciudad del Este, Paraguay. Be part of a vibrant team that develops the company’s growth in the region._t_"
                />
            }
            <NewLocationLayout location={ciudad} images={images} />
        </Layout>
    )
}

export default WithIntl()(CiudadDelEste)
