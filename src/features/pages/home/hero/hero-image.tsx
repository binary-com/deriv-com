import React from 'react'
import ROWImage from './row-image'
import EUImage from './eu-image'
import { isEuDomain } from 'common/utility'

const HeroImage = () => {
    return isEuDomain() ? <EUImage /> : <ROWImage />
}

export default HeroImage
