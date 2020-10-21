import React from 'react'
import { useWebsiteStatus } from './website-status-hooks'

export const useCryptoConfig = () => {
    const [crypto_config, setCryptoConfig] = React.useState(null)
    const [website_status] = useWebsiteStatus()

    React.useEffect(() => {
        if (!crypto_config && website_status) {
            setCryptoConfig(website_status.crypto_config)
        }
    }, [website_status])

    return [crypto_config]
}
