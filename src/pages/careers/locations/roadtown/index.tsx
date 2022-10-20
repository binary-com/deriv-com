import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { roadtown } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        roadtown: file(relativePath: { eq: "careers/roadtown.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 100
                    placeholder: NONE
                )
            }
        }
        living_in_roadtown: file(relativePath: { eq: "careers/living_in_roadtown.jpg" }) {
            ...fadeIn
        }
        bvi_grid_3: file(relativePath: { eq: "careers/bvi_grid_3.jpg" }) {
            ...fadeIn
        }
        thumbnail_georgetown: file(relativePath: { eq: "careers/thumbnail_georgetown.jpg" }) {
            ...fadeIn
        }
    }
`

const Roadtown = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {/* ---------WILL FILL THIS SECTION ONCE SEO IS DONE------
                <SEO
                    title={localize('British Virgin Islands – Our office | Deriv')}
                    description={localize(
                        'View current openings at Deriv’s office in the British Virgin Islands. Join us and be part of a talented team that analyses compliance and trading strategies. ',
                    )}
                />
            */}

            <NewLocationLayout location={roadtown} images={images} />
        </Layout>
    )
}

export default WithIntl()(Roadtown)
