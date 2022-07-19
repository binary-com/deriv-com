import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { vanuatu } from '../../_model/_locations/_locations'
import { NewLocationLayout } from '../_location-layout-new-offices'
// import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        vanuatu: file(relativePath: { eq: "careers/vanuatu.jpg" }) {
            ...heroImage
        }
        living_in_vanuatu: file(relativePath: { eq: "careers/living_in_vanuatu.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_1: file(relativePath: { eq: "careers/guernsey_grid_1.jpg" }) {
            ...fadeIn
        }
        guernsey_grid_2: file(relativePath: { eq: "careers/guernsey_grid_2.jpg" }) {
            ...fadeIn
        }
        vanuatu_grid_3: file(relativePath: { eq: "careers/vanuatu_grid_3.png" }) {
            ...fadeIn
        }
        guernsey_map: file(relativePath: { eq: "maps/map-guernsey-career.jpg" }) {
            ...fadeIn
        }
    }
`

const Vanuatu = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            {/* <SEO
                title={localize('vanuatu – Our office | Deriv')}
                description={localize(
                    'Check out the current open job positions at Deriv and get a chance to work with our team in vanuatu for a thriving tech career.',
                )}
            /> */}
            <NewLocationLayout location={vanuatu} images={images} />
        </Layout>
    )
}

export default WithIntl()(Vanuatu)
