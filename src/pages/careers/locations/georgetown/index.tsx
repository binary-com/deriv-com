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
            childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP]
                    layout: CONSTRAINED
                    quality: 100
                    placeholder: NONE
                )
            }
        }
        living_in_georgetown: file(relativePath: { eq: "careers/living_in_georgetown.png" }) {
            ...fadeIn
        }
    }
`

const Georgetown = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {
                <SEO
                    title={localize('Cayman Islands – Our office | Deriv')}
                    description={localize(
                        'View current openings at Deriv’s office in the Cayman Islands. Join us and be part of a talented team that analyses compliance and trading strategies. ',
                    )}
                />
            }
            <NewLocationLayout location={georgetown} images={images} />
        </Layout>
    )
}

export default WithIntl()(Georgetown)
