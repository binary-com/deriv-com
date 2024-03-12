import { useEffect, useState } from 'react'
import useRegion from './use-region'
import usePpc from 'features/hooks/use-ppc'

export const useShowCfdBanner = () => {
    const { is_ppc } = usePpc()
    const { is_eu, is_cpa_plan } = useRegion()
    const [show_banner, setShowBanner] = useState(false)

    useEffect(() => {
        if (is_ppc || is_eu || is_cpa_plan) {
            setShowBanner(true)
        }
    }, [is_ppc, is_eu, is_cpa_plan])

    return show_banner
}
