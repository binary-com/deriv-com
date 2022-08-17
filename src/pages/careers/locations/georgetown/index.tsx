import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { georgetown } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        georgetown: file(relativePath: { eq: "careers/georgetown.png" }) {
            ...heroImage
        }
        living_in_georgetown: file(relativePath: { eq: "careers/living_in_georgetown.png" }) {
            ...fadeIn
        }
        georgetown_grid_3: file(relativePath: { eq: "careers/georgetown_grid_3.png" }) {
            ...fadeIn
        }
    }
`

const Georgetown = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {/* <SEO
                title={localize('George Town - Our office | Deriv')}
                description={localize(
                    '',
                )}
            /> */}
            <NewLocationLayout location={georgetown} images={images} />
        </Layout>
    )
}

export default WithIntl()(Georgetown)
