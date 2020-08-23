import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { dubai } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        dubai: file(relativePath: { eq: "careers/dubai.jpg" }) {
            ...backGroundBlur
        }
        living_in_dubai: file(relativePath: { eq: "careers/living_in_dubai.jpg" }) {
            ...fadeIn
        }
        dubai_grid_1: file(relativePath: { eq: "careers/dubai_grid_1.png" }) {
            ...fadeIn
        }
        dubai_grid_2: file(relativePath: { eq: "careers/dubai_grid_2.png" }) {
            ...fadeIn
        }
        dubai_grid_3: file(relativePath: { eq: "careers/dubai_grid_3.png" }) {
            ...fadeIn
        }
        dubai_grid_4: file(relativePath: { eq: "careers/dubai_grid_4.png" }) {
            ...fadeIn
        }
        map_dubai: file(relativePath: { eq: "maps/map-dubai.png" }) {
            ...fadeIn
        }
    }
`

const Dubai = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO
                title={localize('Dubai | Our office – UAE | Deriv')}
                description={localize(
                    'Browse job opportunities available at our Dubai office. Find your role in IT, marketing, and human resources.',
                )}
            />
            <LocationLayout location={dubai} images={images} />
        </Layout>
    )
}

export default WithIntl()(Dubai)
