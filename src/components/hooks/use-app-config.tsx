import { useState } from 'react'
import { Analytics } from '@deriv-com/analytics'

export const useAppConfig = () => {
    const [config, setConfig] = useState(DefaultConfig)
    const growthBookConfig: any = Analytics?.getFeatureValue('deriv-com-icons-config', {})
    setConfig(growthBookConfig)

    return config
}

const DefaultConfig = {
    facebook: true,
    twitter: true,
    instagram: true,
    telegram: true,
    youtube: true,
    linkedin: true,
}
