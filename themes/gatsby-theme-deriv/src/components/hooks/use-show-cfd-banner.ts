import { useEffect, useState } from 'react'
import useRegion from './use-region'
import usePpc from 'features/hooks/use-ppc'
import useBuildVariant from 'features/hooks/use-build-variant'

export const useShowCfdBanner = () => {
    const { is_ppc } = usePpc()
    const { region } = useBuildVariant()
    const { is_cpa_plan } = useRegion()
    const [show_banner, setShowBanner] = useState(region === "eu" ? true : false)

    useEffect(() => {
        if (is_ppc || is_cpa_plan) {
            setShowBanner(true)
        }
    }, [is_ppc, is_cpa_plan])

    return show_banner
}
