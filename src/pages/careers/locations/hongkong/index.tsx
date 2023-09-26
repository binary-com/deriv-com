import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { hongkong } from '../../_model/_locations/_locations'
import { LocationLayout } from '../_location-layout'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const query = graphql`
    query {
        living_in_hongkong: file(relativePath: { eq: "careers/living_in_hongkong.png" }) {
            ...fadeIn
        }
    }
`

const HongKong = () => {
    const images = useStaticQuery(query)

    return (
        <Layout type="careers">
            <LocationLayout location={hongkong} images={images} />
        </Layout>
    )
}

export default WithIntl()(HongKong)
