import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TString } from 'types/generics'

type BannerContentType = {
    logo_mobile: React.ReactElement
    logo_desktop: React.ReactElement
    heading: TString
    description: TString
}

export const banner_image = (
    <StaticImage
        src="../../../../images/common/p2p/p2p_hero_banner.png"
        alt="p2p banner"
        loading="eager"
        formats={['avif', 'webp', 'auto']}
        placeholder="none"
    />
)

export const banner_content: BannerContentType = {
    logo_mobile: (
        <StaticImage
            src="../../../../images/common/p2p/p2p_logo.png"
            alt="p2p logo"
            width={125}
            height={32}
            layout="fixed"
        />
    ),
    logo_desktop: (
        <StaticImage
            src="../../../../images/common/p2p/p2p_logo.png"
            alt="p2p logo"
            width={250}
            height={64}
            layout="fixed"
        />
    ),
    heading: '_t_Hassle-free deposits and withdrawals_t_',
    description:
        '_t_Use your local currency to make deposits into and withdrawals from your Deriv account._t_',
}
