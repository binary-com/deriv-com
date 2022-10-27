import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TPlatformImageKeys, TPlatformsDetailImagesQuery } from '../types'
import { QueryImage } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'

const MobileImage = styled(QueryImage)`
    .gatsby-image-wrapper > picture > img {
        object-fit: contain !important;
    }
`

type ItemHeroImageProps = {
    image_key: TPlatformImageKeys
}

const ItemHeroImage = ({ image_key }: ItemHeroImageProps) => {
    const images_data = useStaticQuery<TPlatformsDetailImagesQuery>(query)
    const rules = useCountryRule()

    const platform_image_key = useMemo(() => {
        return typeof image_key === 'function' ? image_key(rules) : image_key
    }, [image_key, rules])

    return (
        <MobileImage
            data={images_data[platform_image_key]}
            alt={platform_image_key}
            height={'100%'}
        />
    )
}

const query = graphql`
    query {
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_mt5_eu: file(relativePath: { eq: "home/platforms_mt5_eu.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_mt5_uk: file(relativePath: { eq: "home/platforms_mt5_uk.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader_eu: file(relativePath: { eq: "home/platforms_dtrader_eu.png" }) {
            ...fadeIn
        }
        platforms_dtrader_uk: file(relativePath: { eq: "home/platforms_dtrader_uk.png" }) {
            ...fadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api.png" }) {
            ...fadeIn
        }
    }
`

export default ItemHeroImage
