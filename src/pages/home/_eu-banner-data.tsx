import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import InfiniteSlideshow from './_infinite-slide-show'
import BannerInnerContent from './_banner-inner-content'

const query = graphql`
    query {
        image_1: file(relativePath: { eq: "home/banners/eu/image-1.jpg" }) {
            ...homePageHeroFadeIn
        }
        image_2: file(relativePath: { eq: "home/banners/eu/image-2.jpg" }) {
            ...homePageHeroFadeIn
        }
        image_3: file(relativePath: { eq: "home/banners/eu/image-3.jpg" }) {
            ...homePageHeroFadeIn
        }
        image_4: file(relativePath: { eq: "home/banners/eu/image-4.jpg" }) {
            ...homePageHeroFadeIn
        }
    }
`
type THeroProps = {
    is_ppc?: boolean
}

const EuBannerData = ({ is_ppc = false }: THeroProps) => {
    const data = useStaticQuery(query)

    return (
        <InfiniteSlideshow images={data}>
            <BannerInnerContent is_ppc={is_ppc} />
        </InfiniteSlideshow>
    )
}

export default EuBannerData
