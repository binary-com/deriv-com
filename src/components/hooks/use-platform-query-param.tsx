import { useQueryParam, StringParam } from 'use-query-params'

export const usePlatformQueryParam = () => {
    const [platform] = useQueryParam('platform', StringParam)
    const platforms = ['derivgo', 'p2p']
    const is_deriv_go = platform === 'derivgo'
    const is_deriv_p2p = platform === 'p2p'
    const has_platform = platforms.includes(platform)

    return { platform, has_platform, is_deriv_p2p, is_deriv_go }
}
