import Loadable from '@loadable/component'

export const Preview = Loadable(() => import('./_preview'))
export const Speakers = Loadable(() => import('./_speakers'))
export const Venue = Loadable(() => import('./_venue'))
export const Subscribe = Loadable(() => import('./_subscribe'))
