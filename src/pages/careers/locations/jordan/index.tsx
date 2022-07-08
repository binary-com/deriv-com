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
        jordan_grid_1: file(relativePath: { eq: "careers/jordan_grid_1.jpg" }) {
            ...fadeIn
        }
        jordan_grid_2: file(relativePath: { eq: "careers/jordan_grid_2.jpg" }) {
            ...fadeIn
        }
        jordan_grid_3: file(relativePath: { eq: "careers/jordan_grid_3.jpg" }) {
            ...fadeIn
        }
        jordan_grid_4: file(relativePath: { eq: "careers/jordan_grid_4.jpg" }) {
            ...fadeIn
        }
        jordan_map: file(relativePath: { eq: "maps/map-jordan-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Jordan = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {/* <SEO
                title={localize('Amman | Our office – Jordan | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Amman, Jordan.',
                )}
            /> */}
            <NewLocationLayout location={jordan} images={images} />
        </Layout>
    )
}

export default WithIntl()(Jordan)
