import { useEffect, useState } from 'react'
import useRegion from './use-region'
import useBuildVariant from 'features/hooks/use-build-variant'

function useIsRowCpa() {
    const {region} = useBuildVariant()
    const [is_row_cpa, setIsRowCpa] = useState(true)
    const { is_cpa_plan } = useRegion()

    useEffect(() => {
        if (region === "row" || is_cpa_plan) {
            setIsRowCpa(false)
        } else {
            setIsRowCpa(true)
        }
    }, [region, is_cpa_plan])

    return is_row_cpa
}

export default useIsRowCpa
