import React from 'react'
import ROWImage from './row-image'
import EUImage from './eu-image'
import { isEuDomain } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const HeroImage = () => {
    const { is_eu } = useRegion()
    return isEuDomain() || is_eu ? <EUImage /> : <ROWImage />
}

export default HeroImage
