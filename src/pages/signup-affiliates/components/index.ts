import Loadable from '@loadable/component'

export const AffiliateSignupForm = Loadable(() => import('./_signup-form'))
export const AffiliateSignupStatus = Loadable(() => import('./_signup-status'))

export const Wizard = Loadable(() => import('./_wizard'))
export const AccountType = Loadable(() => import('./_account-type'))
export const AccountPlan = Loadable(() => import('./_account-plan'))
export const AccountAddress = Loadable(() => import('./_account-address'))
export const AccountDetails = Loadable(() => import('./_account-details'))
export const AccountTerms = Loadable(() => import('./_account-terms'))
