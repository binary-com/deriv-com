import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { roadtown } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
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
                    title={localize('_t_Road Town, British Virgin Islands – Our team | Deriv_t_')}
                    description={localize(
                        '_t_Be part of the Deriv team at British Virgin Islands that provides compliance guidance to develop the company’s growth strategy and trading policies._t_',
                    )}
                />
            }

            <NewLocationLayout location={roadtown} images={images} />
        </Layout>
    )
}

export default WithIntl()(Roadtown)
