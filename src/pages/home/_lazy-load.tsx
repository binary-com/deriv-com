import Loadable from '@loadable/component'

export const Markets = Loadable(() => import(/* webpackChunkName: "markets" */ './_markets'))
export const TradeTypes = Loadable(
    () => import(/* webpackChunkName: "trade-types" */ './_trade-types'),
)
export const OurPlatforms = Loadable(
    () => import(/* webpackChunkName: "our-platforms" */ './_our_platforms'),
)
export const WhatOurClientsSay = Loadable(
    () => import(/* webpackChunkName: "what-our-clients-say" */ './_what-our-clients-say'),
)
export const SimpleSteps = Loadable(
    () => import(/* webpackChunkName: "simple-steps" */ 'components/custom/_simple-steps'),
)
export const Signup = Loadable(
    () => import(/* webpackChunkName: "signup" */ 'components/custom/signup'),
)
export const P2PHomeBanner = Loadable(
    () => import(/* webpackChunkName: "p2p-home-banner" */ './_p2p_home_banner'),
)
