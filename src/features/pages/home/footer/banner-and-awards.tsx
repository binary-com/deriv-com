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
            <div className="flex lg:flex-col gap-gap-lg rounded-lg border-solid border-xs border-opacity-black-100 p-general-md">
                <div className="flex flex-col gap-gap-md max-lg:flex-1 max-lg:justify-center">
                    <div className="flex flex-col gap-gap-md">
                        <div className="flex items-center gap-gap-md">
                            <DerivProductDerivGoBrandLightLogoHorizontalIcon
                                width={24}
                                height={24}
                            />
                            <Heading.H5>
                                <Localize translate_text="_t_Deriv GO_t_" />
                            </Heading.H5>
                        </div>
                        <Text size="sm">
                            <Localize translate_text="_t_Trade multipliers on our mobile app._t_" />
                        </Text>
                    </div>

                    <div className="flex items-center gap-gap-md rounded-md border-solid border-[0.5px] border-opacity-black-200 p-general-sm max-sm:hidden">
                        <StaticImage
                            src="../../../../images/common/migration/footer/deriv-go-qr.png"
                            alt={localize('_t_download deriv-go_t_')}
                            height={64}
                            width={64}
                            placeholder="none"
                        />
                        <CaptionText className="text-typography-default">
                            <Localize translate_text="_t_Scan to download_t_" />
                        </CaptionText>
                    </div>
                </div>
                <DownloadBadges />
            </div>
            <div className="rounded-lg border-solid border-xs border-opacity-black-100 p-general-md">
                <div className="flex justify-center">
                    <StaticImage
                        src="../../../../images/common/migration/footer/investors-in-people.png"
                        alt={localize('_t_investors in people - gold_t_')}
                        width={155}
                        placeholder="none"
                    />
                </div>
            </div>
        </div>
    )
}
