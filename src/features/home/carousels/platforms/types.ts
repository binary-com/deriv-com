import type { ImageDataLike } from 'gatsby-plugin-image'
import { TObjectKeys, TRegion, TRegionSmartContent, TString } from 'types/generics'

export type TOSPlatforms =
    | 'browser'
    | 'app_store'
    | 'google_play'
    | 'linux'
    | 'apk'
    | 'windows'
    | 'mac_app_store'
    | 'app_gallery'

export type TDownloadLink = {
    type: TOSPlatforms
    url?: string
    link_type?: string
}

export type TPlatformsDetailImagesQuery = {
    platforms_deriv_go: ImageDataLike
    platforms_mt5: ImageDataLike
    platforms_mt5_eu: ImageDataLike
    platforms_mt5_uk: ImageDataLike
    platforms_dtrader: ImageDataLike
    platforms_dtrader_eu: ImageDataLike
    platforms_dtrader_uk: ImageDataLike
    platforms_derivx: ImageDataLike
    platforms_dbot: ImageDataLike
    platforms_smarttrader: ImageDataLike
    platforms_binary_bot: ImageDataLike
    platforms_api: ImageDataLike
}

export type TPlatformImageKeys =
    | TObjectKeys<TPlatformsDetailImagesQuery>
    | ((region: TRegion) => TObjectKeys<TPlatformsDetailImagesQuery>)

export type TPlatformModel = {
    title: TString
    icon: string
    image_key: TPlatformImageKeys
    description: TString
    learn_more_link: string
    download_links: TDownloadLink[] | ((is_mobile: boolean) => TDownloadLink[])
}

export type TPlatformSmartContent = TRegionSmartContent<TPlatformModel>
