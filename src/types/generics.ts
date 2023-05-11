/* disable-translation */

export type TRegion = {
    is_region_loading: boolean
    is_eu_location: boolean
    is_eu: boolean
    is_non_eu: boolean
    is_cpa_plan: boolean
    is_latam: boolean
    is_row: boolean
    is_dev: boolean
    is_africa: boolean
}

export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type TString = `_t_${string}_t_`
export type ObjectPropType<TObj, TProp extends keyof TObj> = TObj[TProp]
export interface TSmartContent<BaseModel, Config extends object> {
    id: number
    data: BaseModel
    visiblity?: Config // if the visiblity object is not provided or it's empty, the data will be visible by default with all config
}

export type TRegionSmartContent<BaseModel> = TSmartContent<BaseModel, Partial<TRegion>>
export type TObjectKeys<T extends object> = keyof T

export type TBrowserVersion = Partial<
    Record<
        | 'Internet Explorer'
        | 'Chrome'
        | 'Chromium'
        | 'Mail.RU_Bot'
        | 'Maxthon'
        | 'MIUI Browser'
        | 'Mobile Safari'
        | 'Opera'
        | 'Samsung Browser'
        | 'UCBrowser'
        | 'Internet Explorer'
        | 'Safari'
        | 'Firefox'
        | 'Edge'
        | 'Vivaldi'
        | 'Bot'
        | 'IE'
        | 'Konqueror'
        | 'IEMobile'
        | 'Android Browser'
        | 'Opera Mobi'
        | 'Opera Mini'
        | 'Puffin'
        | 'Yandex'
        | 'WebKit'
        | 'Blazer'
        | 'BOLT'
        | 'Fennec'
        | 'GoBrowser'
        | 'Maemo Browser'
        | 'Minimo'
        | 'Kindle'
        | 'Skyfire'
        | 'Avant'
        | 'Arora'
        | 'Mozilla'
        | 'Epiphany'
        | 'Camino'
        | 'Chimera'
        | 'Comodo Dragon'
        | 'Conkeror'
        | 'Links'
        | 'Firebird'
        | 'Swiftfox'
        | 'Netscape'
        | 'Flock'
        | 'iCab'
        | 'Iceape'
        | 'IceCat'
        | 'IceWeasel'
        | 'Iron'
        | 'K-Meleon'
        | 'Lunascape'
        | 'Lynx'
        | 'Midori'
        | 'KHTML'
        | 'Mosaic'
        | 'NetSurf'
        | 'OmniWeb'
        | 'Opera Tablet'
        | 'PaleMoon'
        | 'Phoenix'
        | 'RockMelt'
        | 'SeaMonkey'
        | 'Slim'
        | 'w3m'
        | 'IceDragon'
        | 'Waterfox'
        | 'GSA'
        | 'Whale'
        | 'Coc Coc'
        | 'Vivaldi'
        | 'Facebook'
        | 'QQBrowser'
        | 'Iridium'
        | 'Basilisk'
        | 'baiduboxapp'
        | 'Silk'
        | 'TizenBrowser'
        | 'Tesla'
        | 'Brave',
        number
    >
>
