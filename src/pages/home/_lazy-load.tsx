import Loadable from '@loadable/component'

export const Markets = Loadable(() => import(/* webpackChunkName: "markets" */ './_markets'))
export const WhatOurClientsSay = Loadable(
    () => import(/* webpackChunkName: "what-our-clients-say" */ './_what-our-clients-say'),
)
export const SimpleSteps = Loadable(
    () => import(/* webpackChunkName: "simple-steps" */ 'components/custom/_simple-steps'),
)
export const Signup = Loadable(
    () => import(/* webpackChunkName: "signup" */ 'components/custom/signup'),
)
