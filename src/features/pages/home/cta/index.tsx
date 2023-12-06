import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { Heading, LinkButton } from '@deriv/quill-design'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const RowImage = (
    <>
        <StaticImage
            src="../../../../images/migration/home/cta_bg.png"
            alt={localize('_t_call to action background_t_')}
            loading="eager"
            objectPosition="78% 0"
            className="w-full h-full hidden md:block"
            formats={['webp', 'auto']}
            placeholder="none"
        />
        <StaticImage
            src="../../../../images/migration/home/mobile_cta_bg.png"
            alt={localize('_t_call to action background_t_')}
            loading="eager"
            className="w-full h-full md:hidden"
            objectPosition="top"
            formats={['webp', 'auto']}
            placeholder="none"
        />
    </>
)

const EUImage = (
    <StaticImage
        src="../../../../images/migration/home/cta_bg_eu.png"
        alt={localize('_t_call to action background_t_')}
        loading="eager"
        objectPosition="65% 0"
        className="w-full h-full"
        formats={['webp', 'auto']}
        placeholder="none"
    />
)

const CTA = () => {
    const { is_eu } = useRegion()
    return (
        <Footer.CTABlock padding image={is_eu ? EUImage : RowImage}>
            <div className="flex h-full flex-col items-start justify-center gap-gap-3xl max-w-[328px] lg:max-w-none">
                <Heading.H2 className="text-solid-slate-50">
                    Join over 2.5 million online traders
                </Heading.H2>
                <LinkButton size="lg" className="hidden lg:block" href="/signup">
                    Create demo account
                </LinkButton>
            </div>
        </Footer.CTABlock>
    )
}

export default CTA
