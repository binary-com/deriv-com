import Loadable from '@loadable/component'

export const AffiliateSignupForm = Loadable(() => import('./components/_signup-form'))
export const AffiliateSignupStatus = Loadable(() => import('./components/_signup-status'))

export const Wizard = Loadable(() => import('./components/_wizard'))
export const AccountType = Loadable(() => import('./components/_account-type'))
export const AccountPlan = Loadable(() => import('./components/_account-plan'))
export const AccountAddress = Loadable(() => import('./components/_account-address'))
export const AccountDetails = Loadable(() => import('./components/_account-details'))
export const AccountTerms = Loadable(() => import('./components/_account-terms'))
