import React from 'react'
import { CaptionText, Heading, Text } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '@deriv/quill-icons/Logo'
import { StaticImage } from 'gatsby-plugin-image'
import DownloadBadges from './download'
import { Localize, localize } from 'components/localization'

export const DerivGoBannerAndAwards = () => {
    return (
        <div className="flex flex-col gap-gap-lg">
            <div className="flex flex-col gap-gap-lg rounded-lg border-xs border-opacity-black-100 p-general-md max-lg:flex-row">
                <div className="flex flex-col gap-gap-md max-lg:flex-1 max-lg:justify-center">
                    <div className="flex flex-col gap-gap-md">
                        <div className="flex items-center gap-gap-md">
                            <DerivProductDerivGoBrandLightLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                            <Heading.H6>
                                <Localize translate_text="_t_Deriv GO_t_" />
                            </Heading.H6>
                        </div>
                        <Text size="sm">
                            <Localize translate_text="_t_Trade multipliers on our mobile app._t_" />
                        </Text>
                    </div>

                    <div className="flex items-center gap-gap-md rounded-md border-[0.5px] border-opacity-black-200 p-general-sm max-sm:hidden">
                        <StaticImage
                            src="../../../../images/common/migration/footer/deriv-go-qr.png"
                            alt={localize('_t_download deriv-go_t_')}
                        />
                        <CaptionText>
                            <Localize translate_text="_t_Scan to download_t_" />
                        </CaptionText>
                    </div>
                </div>
                <DownloadBadges />
            </div>
            <div className="rounded-lg border-xs border-opacity-black-100 p-general-md">
                <StaticImage
                    className="m-auto"
                    src="../../../../images/common/migration/footer/investors-in-people.png"
                    alt={localize('_t_investors in people - gold_t_')}
                />
            </div>
        </div>
    )
}
