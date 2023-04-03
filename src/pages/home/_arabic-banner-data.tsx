import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import InfiniteSlideshow from './_infinite-slide-show'
import BannerInnerContent from './_banner-inner-content'

const query = graphql`
    query {
        image_1: file(relativePath: { eq: "home/banners/arabic/image-1.jpg" }) {
            ...homePageHeroFadeIn
        }
    }
`
type HeroProps = {
    is_ppc?: boolean
}

const ArabicBannerData = ({ is_ppc }: HeroProps) => {
    const data = useStaticQuery(query)

    return (
        <InfiniteSlideshow images={data}>
            <BannerInnerContent is_ppc={is_ppc} />
        </InfiniteSlideshow>
    )
}

export default ArabicBannerData
