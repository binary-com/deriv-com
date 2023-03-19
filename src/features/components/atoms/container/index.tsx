import React, { ReactNode } from 'react'
import FixedContainer from './fixed'
import FluidContainer from './fluid'
import FooContainer from './foo'

type ContainerTypes = {
    Fixed: typeof FixedContainer
    Fluid: typeof FluidContainer
    Foo: typeof FooContainer
}

const Container: ContainerTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Container.Fixed = FixedContainer
Container.Fluid = FluidContainer
Container.Foo = FooContainer

export default Container
