import { useContext } from 'react'
import { RegionContext } from 'store/region-context'

const useRegion = () => {
    const region = useContext(RegionContext)

    if (!region) {
        throw new Error('useRegion must be used within RegionContext')
    }

    return region
}

export default useRegion
