import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { guernsey } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        guernsey: file(relativePath: { eq: "careers/guernsey.jpg" }) {
            ...heroImage
        }
        living_in_guernsey: file(relativePath: { eq: "careers/living_in_guernsey.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_3: file(relativePath: { eq: "careers/guernsey_grid_3.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_4: file(relativePath: { eq: "careers/guernsey_grid_4.jpg" }) {
            ...fadeIn
        }
        guernsey_map: file(relativePath: { eq: "maps/map-guernsey.jpg" }) {
            ...fadeIn
        }
    }
`

const Guernsey = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Guernsey | Our office – Channel Islands | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Guernsey, Channel Islands.',
                )}
            />
            <NewLocationLayout location={guernsey} images={images} />
        </Layout>
    )
}

export default WithIntl()(Guernsey)
