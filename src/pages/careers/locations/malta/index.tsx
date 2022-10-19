import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { malta } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const query = graphql`
    query {
        malta: file(relativePath: { eq: "careers/malta.jpg" }) {
            ...heroImage
        }
        living_in_malta: file(relativePath: { eq: "careers/living_in_malta.png" }) {
            ...fadeIn
        }
        malta_grid_1: file(relativePath: { eq: "careers/malta_grid_1.png" }) {
            ...fadeIn
        }
        malta_grid_2: file(relativePath: { eq: "careers/malta_grid_2.png" }) {
            ...fadeIn
        }
        malta_grid_3: file(relativePath: { eq: "careers/malta_grid_3.png" }) {
            ...fadeIn
        }
        malta_grid_4: file(relativePath: { eq: "careers/malta_grid_4.png" }) {
            ...fadeIn
        }
        malta_great_place_to_work_badge: file(
            relativePath: { eq: "careers/malta_great_place_to_work_badge.png" }
        ) {
            ...fadeIn
        }
    }
`

const Malta = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <SEO
                title={localize('Malta – Our office | Deriv')}
                description={localize(
                    "Checkout the open job positions at our Malta office. Don't see the job you want? Send us your CV and we will contact you when your role becomes available.",
                )}
            />
            <LocationLayout location={malta} images={images} />
        </Layout>
    )
}

export default WithIntl()(Malta)
