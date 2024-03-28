import { useEffect, useState } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const platforms = ['derivgo', 'p2p']
    const [is_deriv_go, setIsDerivGo] = useState(false)
    const [is_accumulators_released, setAccumulatorsRelease] = useState(false)
    const [is_deriv_p2p, setIsDerivP2P] = useState(true)
    const [has_platform, setHasPlatform] = useState(false)

    useEffect(() => {
        setIsDerivGo(platform === 'derivgo')
        setIsDerivP2P(platform === 'p2p')
        setAccumulatorsRelease(false)
        setHasPlatform(platforms.includes(platform))
    }, [platform])

    return { platform, has_platform, is_deriv_p2p, is_deriv_go, is_accumulators_released }
}
