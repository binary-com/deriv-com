import { useEffect, useState } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const platforms = ['derivgo', 'p2p']
    const [is_deriv_go, setIsDerivGo] = useState(true)
    const [is_deriv_p2p, setIsDerivP2P] = useState(true)
    const [has_platform, setHasPlatform] = useState(false)

    // change value whenever platform query changes
    useEffect(() => {
        setIsDerivGo(platform === 'derivgo')
        setIsDerivP2P(platform === 'p2p')
        setHasPlatform(platforms.includes(platform))
    }, [platform])

    return { platform, has_platform, is_deriv_p2p, is_deriv_go }
}
