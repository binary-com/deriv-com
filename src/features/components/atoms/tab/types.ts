import React from 'react'
import { TFlexDirection } from 'features/types'
import { TString } from 'types/generics'

export type TTabItem = {
    title: TString
    component?: React.ReactElement
    image: React.ReactElement
    alt?: string
}

export type TStepperTab = {
    items: TTabItem[]
    tab: string
    onTabClick: (step: 'demo' | 'real' | number) => void
    direction?: TFlexDirection
}
