import { TString } from 'types/generics'

export type TActiveNav = 'trade' | 'markets' | 'about' | 'resources' | 'none'

export type TNavLink = {
    active: TActiveNav
    title: TString
}
