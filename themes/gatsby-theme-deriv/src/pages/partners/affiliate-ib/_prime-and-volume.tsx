import React from 'react'
import Loadable from '@loadable/component'
import useBuildVariant from 'features/hooks/use-build-variant'

const DerivIBProgramme = Loadable(() => import('./_deriv-ib-programme'))
const MinimumVolume = Loadable(() => import('./_minimum-volume'))

const PrimeAndVolume = () => {
    const { region } = useBuildVariant()

    if(region === "eu") return null;

    return (
        <>
            <DerivIBProgramme />
            <MinimumVolume />
        </>
    )
}

export default PrimeAndVolume