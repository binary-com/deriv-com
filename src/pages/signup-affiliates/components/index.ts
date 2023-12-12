import Loadable from '@loadable/component'

const AffiliateSignupForm = Loadable(() => import('./_signup-form'))
const AffiliateSignupStatus = Loadable(() => import('./_signup-status'))

const Wizard = Loadable(() => import('./_wizard'))
const AccountType = Loadable(() => import('./_account-type'))
const AccountPlan = Loadable(() => import('./_account-plan'))
const AccountAddress = Loadable(() => import('./_account-address'))
const AccountDetails = Loadable(() => import('./_account-details'))
const AccountTerms = Loadable(() => import('./_account-terms'))

export {
    AffiliateSignupForm,
    AffiliateSignupStatus,
    Wizard,
    AccountType,
    AccountPlan,
    AccountAddress,
    AccountDetails,
    AccountTerms,
}
