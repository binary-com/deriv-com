import React from 'react'
import { CaptionText, Heading, Text } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { DerivProductDerivGoBrandLightLogoHorizontalIcon } from '@deriv/quill-icons/Logo'
import clsx from 'clsx'
import DownloadBadges from './download'
import { footer_qr_box } from './styles.module.scss'
import derivGoQR from 'images/common/migration/footer/deriv-go-qr.svg'
import { Localize, localize } from 'components/localization'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import useBuildVariant from 'features/hooks/use-build-variant'

export const DerivGoBanner = () => {
    const { region } = useBuildVariant()

    const deriv_go_apps_app_gallery = useThirdPartyFlags('deriv_go_apps.app_gallery')
    const deriv_go_apps_android = useThirdPartyFlags('deriv_go_apps.android')
    const deriv_go_apps_app_store = useThirdPartyFlags('deriv_go_apps.app_store')

    const showQR = deriv_go_apps_app_gallery && deriv_go_apps_android && deriv_go_apps_app_store

    const deriv_go = 'Deriv GO'
    return (
        <div className="flex flex-col gap-gap-lg">
            {region === "row" && (
                <div className="flex lg:flex-col gap-gap-lg rounded-[16px] border-solid border-xs border-opacity-black-100 p-general-md">
                    <div className="flex flex-col gap-gap-md max-lg:flex-1 max-lg:justify-center">
                        <div className="flex flex-col gap-gap-md">
                            <div className="flex items-center gap-gap-md">
                                <DerivProductDerivGoBrandLightLogoHorizontalIcon
                                    width={24}
                                    height={24}
                                />
                                <Heading.H5 aria-level={3}>{deriv_go}</Heading.H5>
                            </div>
                            <Text size="sm">
                                <Localize translate_text="_t_Trade multipliers on our mobile app._t_" />
                            </Text>
                        </div>
                        {showQR && (
                            <div className="block max-sm:hidden">
                                <div
                                    className={clsx(
                                        footer_qr_box,
                                        'flex items-center gap-gap-md rounded-[8px] border-solid border-xs border-opacity-black-100 p-general-sm',
                                    )}
                                >
                                    <img
                                        src={derivGoQR}
                                        height={64}
                                        width={64}
                                        alt={localize('_t_download deriv-go_t_')}
                                    />
                                    <CaptionText className="text-typography-default text-center">
                                        <Localize translate_text="_t_Scan to download_t_" />
                                    </CaptionText>
                                </div>
                            </div>
                        )}
                    </div>
                    <DownloadBadges />
                </div>
            )}
        </div>
    )
}
