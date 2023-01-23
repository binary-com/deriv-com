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
            ...backgroundImage
        }
        living_in_roadtown: file(relativePath: { eq: "careers/living_in_roadtown.jpg" }) {
            ...fadeIn
        }
        bvi_grid_3: file(relativePath: { eq: "careers/bvi_grid_3.jpg" }) {
            ...fadeIn
        }
    }
`

const Roadtown = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {
                <SEO
                    title={localize('Road Town, British Virgin Islands – Our team | Deriv')}
                    description={localize(
                        'Be part of the Deriv team at British Virgin Islands that provides compliance guidance to develop the company’s growth strategy and trading policies.',
                    )}
                />
            }

            <NewLocationLayout location={roadtown} images={images} />
        </Layout>
    )
}

export default WithIntl()(Roadtown)
