import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { Heading, Button } from '@deriv/quill-design'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

const image = (
    <>
        <StaticImage
            src="../../../../images/migration/home/desktop_cta_bg.jpeg"
            alt={localize('_t_call to action background_t_')}
            loading="eager"
            className="hidden w-full flex-1 md:flex"
            width={1232}
            height={496}
            formats={['webp', 'auto']}
        />
        <StaticImage
            src="../../../../images/migration/home/mobile_cta_bg.png"
            alt={localize('_t_call to action background_t_')}
            loading="eager"
            className="flex w-full flex-1 md:hidden"
            formats={['webp', 'auto']}
        />
    </>
)

const FooterCTA = () => {
    return (
        <Footer.CTABlock padding image={image} className="">
            <div className="flex h-full flex-col items-start justify-center gap-gap-3xl">
                <Heading.H2 className="text-solid-slate-50">
                    Join over 2.5 million online traders
                </Heading.H2>
                <Button size="lg">Create demo account</Button>
            </div>
        </Footer.CTABlock>
    )
}

export default FooterCTA
