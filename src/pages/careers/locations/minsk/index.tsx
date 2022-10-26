import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { minsk } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        minsk: file(relativePath: { eq: "careers/minsk.png" }) {
            ...heroImage
        }
        living_in_minsk: file(relativePath: { eq: "careers/living_in_minsk.jpg" }) {
            ...fadeIn
        }
        minsk_grid_1: file(relativePath: { eq: "careers/minsk_grid_1.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_grid_2: file(relativePath: { eq: "careers/minsk_grid_2.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_grid_3: file(relativePath: { eq: "careers/minsk_grid_3.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_grid_4: file(relativePath: { eq: "careers/minsk_grid_4.png" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_map: file(relativePath: { eq: "maps/map-minsk-career.png" }) {
            ...fadeIn
        }
        minsk_great_place_to_work_badge: file(
            relativePath: { eq: "careers/minsk_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Minsk = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Minsk | Our office – Belarus | Deriv')}
                description={localize(
                    'Find your role with us by browsing Deriv job opportunities in Minsk, Belarus.',
                )}
            />
            <LocationLayout location={minsk} images={images} />
        </Layout>
    )
}

export default WithIntl()(Minsk)
