import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { Heading, Button } from '@deriv/quill-design'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

const image = (
    <StaticImage
        src="../../../../images/migration/home/cta_bg.png"
        alt={localize('_t_call to action background_t_')}
        loading="eager"
        objectPosition="78% 0"
        className="w-full h-full"
        width={4096}
        height={1972}
        formats={['webp', 'auto']}
        placeholder="none"
    />
)

const CTA = () => {
    return (
        <Footer.CTABlock padding image={image}>
            <div className="flex h-full flex-col items-start justify-center gap-gap-3xl max-w-[328px] lg:max-w-none">
                <Heading.H2 className="text-solid-slate-50">
                    Join over 2.5 million online traders
                </Heading.H2>
                <Button size="lg" className="hidden lg:block">
                    Create demo account
                </Button>
            </div>
        </Footer.CTABlock>
    )
}

export default CTA
