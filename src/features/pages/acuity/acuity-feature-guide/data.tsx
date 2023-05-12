import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TAcuityFeatures } from '../../../components/molecules/image-text-boxes/types'
import { deriv_acuity_eu_download, deriv_acuity_row_download } from 'common/constants'

export const contentData: TAcuityFeatures = {
    mobileFlexDirection: 'col-reverse',
    data: [
        {
            id: 0,
            subtitle:
                '_t_Download the Acuity suite of trading tools to your MT5 desktop terminal and get access to an array of valuable market insights and trading opportunities._t_',
            image: (
                <StaticImage
                    src="../../../../images/common/acuity/acuity-feature-guide-image-1.png"
                    alt="Acuity trading tools for MT5 desktop terminal"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    quality={100}
                    objectFit="contain"
                    placeholder="none"
                />
            ),
            button_text: '_t_Download for free_t_',
            system_url: ({ is_eu }) =>
                is_eu ? deriv_acuity_eu_download : deriv_acuity_row_download,
            direction: 'row',
            info_title: '_t_Only available on Windows_t_',
        },
        {
            id: 1,
            subtitle:
                '_t_Want to know how the Acuity tools work? Check out the Acuity tools user guide for more information._t_',
            image: (
                <StaticImage
                    src="../../../../images/common/acuity/acuity-feature-guide-image-2.png"
                    alt="Acuity research terminal"
                    loading="eager"
                    formats={['avif', 'webp', 'auto']}
                    quality={100}
                    objectFit="contain"
                    placeholder="none"
                />
            ),
            system_url: '/acuity/acuity-tool-user-guide.pdf',
            button_text: '_t_Show me the user guide_t_',
            direction: 'row-reverse',
        },
    ],
}
