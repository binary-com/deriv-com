import { useState } from 'react'
import { Analytics } from '@deriv-com/analytics'

export enum SocialProviders {
    Facebook = 'facebook',
    Twitter = 'twitter',
    Instagram = 'instagram',
    Telegram = 'telegram',
    Youtube = 'youtube',
    Linkedin = 'linkedin',
}

export type TAppConfig = {
    [key in SocialProviders]
}

export const useAppConfig = (): TAppConfig => {
    const [config, setConfig] = useState<TAppConfig>(DefaultConfig)

    const growthBookConfig: any = Analytics?.getFeatureValue('deriv-com-icons-config', {})
    setConfig(growthBookConfig)

    return config
}

const DefaultConfig: TAppConfig = {
    facebook: true,
    twitter: true,
    instagram: true,
    telegram: true,
    youtube: true,
    linkedin: true,
}
