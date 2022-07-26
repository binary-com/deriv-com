import { useQueryParam, StringParam } from 'use-query-params'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const is_deriv_go = platform === 'derivgo'
    const is_deriv_p2p = platform === 'p2p'
    const has_platform = platform.includes(platform)

    return { platform, has_platform, is_deriv_p2p, is_deriv_go }
}
