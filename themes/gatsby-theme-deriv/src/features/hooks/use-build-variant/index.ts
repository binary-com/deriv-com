import { useContext } from 'react'
import BuildVariantContext from 'features/contexts/build-variant/build-variant.context'

function useBuildVariant() {
    const buildVariant = useContext(BuildVariantContext)

    if (!buildVariant) {
        throw new Error('useBuildVariant must be use within BuildVariantProvider')
    }

    return buildVariant
}

export default useBuildVariant
