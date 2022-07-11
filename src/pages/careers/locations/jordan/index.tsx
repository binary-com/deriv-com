import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { jordan } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        jordan: file(relativePath: { eq: "careers/jordan.jpg" }) {
            ...heroImage
        }
        living_in_jordan: file(relativePath: { eq: "careers/living_in_jordan.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        jordan_grid_3: file(relativePath: { eq: "careers/jordan_grid_3.png" }) {
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

const Jordan = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Jordan – Our office | Deriv')}
                description={localize(
                    'Check out the current open job positions at Deriv and get a chance to work with our team in Jordan for a thriving tech career.',
                )}
            />
            <NewLocationLayout location={jordan} images={images} />
        </Layout>
    )
}

export default WithIntl()(Jordan)
