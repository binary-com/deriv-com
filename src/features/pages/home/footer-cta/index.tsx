import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { Heading, Button } from '@deriv/quill-design'
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
    return (
        <Footer.CTABlock padding image={image} className="">
            <div className="flex h-full flex-col items-start justify-center gap-gap-3xl">
                <Heading.H2>Join over 2.5 million online traders</Heading.H2>
                <Button size="lg">Create demo account</Button>
            </div>
        </Footer.CTABlock>
    )
}

export default FooterCTA
