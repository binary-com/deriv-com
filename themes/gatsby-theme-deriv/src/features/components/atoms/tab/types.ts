import React from 'react'
import { TFlexDirection } from 'features/types'
import { TString } from 'types/generics'

export type TabItemTypes = {
    title: TString
    component?: React.ReactElement[]
    image: React.ReactElement
    alt?: string
}

export type StepperTabTypes = {
    items: TabItemTypes[]
    tab?: string
    onTabClick: (step: 'demo' | 'real' | number) => void
    direction?: TFlexDirection
    is_ctrader?: boolean
}
