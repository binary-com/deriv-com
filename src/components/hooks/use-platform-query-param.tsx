import { useEffect, useState } from 'react'
import { useQueryParamString } from 'react-use-query-param-string'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParamString('platform', '')
    const platforms = ['derivgo', 'p2p']
    const [is_deriv_go, setIsDerivGo] = useState(true)
    const [is_deriv_p2p, setIsDerivP2P] = useState(true)
    const [has_platform, setHasPlatform] = useState(false)

    useEffect(() => {
        setIsDerivGo(platform === 'derivgo')
        setIsDerivP2P(platform === 'p2p')
        setHasPlatform(platforms.includes(platform))
    }, [platform])

    return { platform, has_platform, is_deriv_p2p, is_deriv_go }
}
