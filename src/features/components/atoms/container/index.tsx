import React, { ReactNode } from 'react'
import FixedContainer from './fixed'
import FluidContainer from './fluid'

type ContainerTypes = {
    Fixed: typeof FixedContainer
    Fluid: typeof FluidContainer
}

const Container: ContainerTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Container.Fixed = FixedContainer
Container.Fluid = FluidContainer

export default Container
