import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { minsk } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        living_in_minsk: file(relativePath: { eq: "careers/living_in_minsk.jpg" }) {
            ...fadeIn
        }
        minsk_grid_1: file(relativePath: { eq: "careers/minsk_grid_1.png" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_grid_2: file(relativePath: { eq: "careers/minsk_grid_2.png" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 70
                    placeholder: NONE
                )
            }
        }
        minsk_grid_3: file(relativePath: { eq: "careers/minsk_grid_3.png" }) {
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
                title={localize('_t_Minsk | Our office – Belarus | Deriv_t_')}
                description={localize(
                    '_t_Find your role with us by browsing Deriv job opportunities in Minsk, Belarus._t_',
                )}
            />
            <LocationLayout location={minsk} images={images} />
        </Layout>
    )
}

export default WithIntl()(Minsk)
