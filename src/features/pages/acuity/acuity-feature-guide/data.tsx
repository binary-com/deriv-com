import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TAcuityFeatures } from '../types'
import { Localize } from 'components/localization'
import LinkButton from 'features/components/atoms/link-button'
import { deriv_acuity_eu_download, deriv_acuity_row_download } from 'common/constants'

export const acuity_feature_guide_data: TAcuityFeatures[] = [
    {
        id: 0,
        description:
            '_t_Download the Acuity suite of trading tools to your MT5 desktop terminal and get access to an array of valuable market insights and trading opportunities._t_',
        image: (
            <StaticImage
                src="../../../../images/common/acuity/acuity-feature-guide-image-1.png"
                alt="Download the Acuity suite"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
        button: ({ is_eu }) =>
            is_eu ? (
                <LinkButton.Primary
                    size="medium"
                    url={{ type: 'non-company', href: deriv_acuity_eu_download }}
                >
                    <Localize translate_text="_t_Download for free_t_" />
                </LinkButton.Primary>
            ) : (
                <LinkButton.Primary
                    size="medium"
                    url={{ type: 'non-company', href: deriv_acuity_row_download }}
                >
                    <Localize translate_text="_t_Download for free_t_" />
                </LinkButton.Primary>
            ),
        direction: 'row',
        info_title: '_t_Only available on Windows_t_',
    },
    {
        id: 1,
        description:
            '_t_Want to know how the Acuity tools work? Check out the Acuity tools user guide for more information._t_',
        image: (
            <StaticImage
                src="../../../../images/common/acuity/acuity-feature-guide-image-2.png"
                alt="Want to know how the Acuity tools work?"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
        button: (
            <LinkButton.Primary
                size="medium"
                url={{ type: 'non-company', href: '/acuity/acuity-tool-user-guide.pdf' }}
            >
                <Localize translate_text="_t_Show me the user guide_t_" />
            </LinkButton.Primary>
        ),
        direction: 'row-reverse',
    },
]
