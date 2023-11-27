import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

const image = (
    <StaticImage
        src="../../../../images/migration/home/desktop_cta_bg.jpeg"
        alt={localize('_t_explore it on appgallery_t_')}
        loading="eager"
        formats={['webp', 'auto']}
    />
)

const FooterCTA = () => {
    return <Footer.CTABlock padding image={image} className=""></Footer.CTABlock>
}

export default FooterCTA
