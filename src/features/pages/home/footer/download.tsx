import React from 'react'
import {
    LabelPairedAppleIcon,
    LabelPairedGooglePlayIcon,
    LabelPairedHuaweiAppGalleryIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/LabelPaired'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { CustomLink } from '@deriv-com/components'
import { localize } from 'components/localization'

const sharedClasses =
    'flex items-center justify-center gap-gap-md p-general-sm rounded-[4px] border-solid border-xs border-opacity-black-100'

const DownloadBadges = () => {
    return (
        <div className="flex flex-col gap-gap-md max-lg:flex-1">
            <CustomLink
                href="https://play.google.com/store/apps/details?id=com.deriv.app"
                target="_blank"
                className={clsx(sharedClasses)}
            >
                <LabelPairedGooglePlayIcon iconSize="md" />
                <StaticImage
                    src="../../../../images/common/migration/footer/get-googleplay.png"
                    alt={localize('_t_get it on google play_t_')}
                    formats={['webp', 'auto']}
                    width={90}
                    placeholder="none"
                />
            </CustomLink>
            <CustomLink
                href="https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298"
                target="_blank"
                className={clsx(sharedClasses)}
            >
                <LabelPairedAppleIcon iconSize="md" />
                <StaticImage
                    src="../../../../images/common/migration/footer/download-appstore.png"
                    alt={localize('_t_download on the app store_t_')}
                    formats={['webp', 'auto']}
                    width={90}
                    placeholder="none"
                />
            </CustomLink>
            <div className={clsx(sharedClasses)}>
                <LabelPairedHuaweiAppGalleryIcon iconSize="md" />
                <StaticImage
                    src="../../../../images/common/migration/footer/explore-appgallery.png"
                    alt={localize('_t_explore it on appgallery_t_')}
                    formats={['webp', 'auto']}
                    width={90}
                    placeholder="none"
                />
            </div>
        </div>
    )
}

export default DownloadBadges
