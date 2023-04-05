import { useEffect, useState } from 'react'
import queryString from 'query-string'

type MyQuery = {
    platform: string
}

const qparam =
    typeof window !== 'undefined' &&
    location.search &&
    (queryString.parse(location.search) as MyQuery)

const { platform } = qparam
const platforms = ['derivgo', 'p2p']

export const usePlatformQueryParam = () => {
    const [is_deriv_go, setIsDerivGo] = useState(true)
    const [is_deriv_p2p, setIsDerivP2P] = useState(true)
    const [has_platform, setHasPlatform] = useState(false)

    useEffect(() => {
        setIsDerivGo(qparam.platform === 'derivgo')
        setIsDerivP2P(qparam.platform === 'p2p')
        setHasPlatform(platforms.includes(qparam.platform))
    }, [qparam])

    return { platform, has_platform, is_deriv_p2p, is_deriv_go }
}
