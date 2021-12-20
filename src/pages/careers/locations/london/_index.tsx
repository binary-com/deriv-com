import React, { ReactElement } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { london } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        london: file(relativePath: { eq: "careers/london.jpg" }) {
            ...heroImage
        }
        living_in_london: file(relativePath: { eq: "careers/living_in_london.jpg" }) {
            ...fadeIn
        }
        london_grid_1: file(relativePath: { eq: "careers/london_grid_1.jpg" }) {
            ...fadeIn
        }
        london_grid_2: file(relativePath: { eq: "careers/london_grid_2.jpg" }) {
            ...fadeIn
        }
        london_grid_3: file(relativePath: { eq: "careers/london_grid_3.jpg" }) {
            ...fadeIn
        }
        london_grid_4: file(relativePath: { eq: "careers/london_grid_4.jpg" }) {
            ...fadeIn
        }
        london_map: file(relativePath: { eq: "maps/map-london-career.png" }) {
            ...fadeIn
        }
    }
`

const London = (): ReactElement => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('London | Our office – United Kingdom (UK) | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in London, UK.',
                )}
            />
            <LocationLayout location={london} images={images} />
        </Layout>
    )
}

export default WithIntl()(London)
