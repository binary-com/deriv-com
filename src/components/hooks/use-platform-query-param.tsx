import { useQueryParam, StringParam } from 'use-query-params'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const isDerivGo = platform === 'derivgo'
    const isDerivP2P = platform === 'p2p'
    const hasPlatform = isDerivGo || isDerivP2P

    return { platform, hasPlatform, isDerivP2P, isDerivGo }
}
