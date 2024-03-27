import React from 'react'
import { Footer } from '@deriv-com/blocks'
import { Heading } from '@deriv/quill-design'
import { StaticImage } from 'gatsby-plugin-image'
import { Localize, localize } from 'components/localization'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import useBuildVariant from 'features/hooks/use-build-variant'

const RowImage = (
    <StaticImage
        src="../../../../images/migration/home/cta_bg.png"
        alt={localize('_t_call to action background_t_')}
        loading="eager"
        objectPosition="78% 0"
        className="w-full h-full"
        formats={['webp', 'auto']}
        placeholder="none"
    />
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
    const { region } = useBuildVariant()

    return (
        <Footer.CTABlock padding image={region === "eu" ? EUImage : RowImage}>
            <div className="flex h-full flex-col items-start gap-gap-3xl lg:justify-center justify-end">
                <Heading.H2 className="text-solid-slate-50 sm:max-w-[320px] max-w-[260px] xl:max-w-[480px]">
                    <Localize translate_text="_t_Join over 2.5 million online traders_t_" />
                </Heading.H2>
                <div className="hidden lg:block">
                    <TradersHubCtaButton className="flex" />
                </div>
            </div>
        </Footer.CTABlock>
    )
}

export default CTA
