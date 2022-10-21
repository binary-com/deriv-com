import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ciudad } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        ciudad: file(relativePath: { eq: "careers/ciudad.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 100
                    placeholder: NONE
                )
            }
        }
        living_in_ciudad: file(relativePath: { eq: "careers/living_in_ciudad.png" }) {
            ...fadeIn
        }
    }
`

const CiudadDelEste = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {
                <SEO
                    title={localize('Ciudad del Este – Our office | Deriv')}
                    description={localize(
                        'Join great marketing minds at Deriv’s office in Ciudad del Este, Paraguay. Be part of a vibrant team that develops the company’s growth in the region. ',
                    )}
                />
            }
            <NewLocationLayout location={ciudad} images={images} />
        </Layout>
    )
}

export default WithIntl()(CiudadDelEste)
