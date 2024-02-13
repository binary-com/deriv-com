import { useEffect, useState } from 'react'

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

    useEffect(() => {
        // setConfig(read from Growthbook or Firebase)
    }, [])

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
