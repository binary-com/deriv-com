import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ciudad } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        ciudad: file(relativePath: { eq: "careers/ciudad.png" }) {
            ...heroImage
        }
        living_in_ciudad_del_este: file(
            relativePath: { eq: "careers/living_in_ciudad_del_este.png" }
        ) {
            ...fadeIn
        }
        ciudad_map: file(relativePath: { eq: "maps/ciudad_map.png" }) {
            ...fadeIn
        }
    }
`

const CiudadDelEste = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {/* <SEO
                title={localize('Ciudad del Este | Our office | Deriv')}
                description={localize(
                    '',
                )}
            /> */}
            <NewLocationLayout location={ciudad} images={images} />
        </Layout>
    )
}

export default WithIntl()(CiudadDelEste)
