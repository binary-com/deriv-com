import Loadable from '@loadable/component'

export const Markets = Loadable(() => import('./_markets'))
export const TradeTypes = Loadable(() => import('./_trade-types'))
export const OurPlatforms = Loadable(() => import('./_our_platforms'))
export const WhatOurClientsSay = Loadable(() => import('./_what-our-clients-say'))
export const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
export const Signup = Loadable(() => import('components/custom/signup'))
