import { navigate, withPrefix } from 'gatsby'
import { Analytics } from '@deriv-com/analytics'
import useGrowthbookFeatureFlag from './use-growthbook-feature-flag'
import { getLanguage } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const useHandleSignup = (_is_ppc = false, is_tracked = false) => {
    const { is_region_loading } = useRegion()
    let current_language = getLanguage() + '/'
    const signUpPath = withPrefix('/')

    const growthbook_feature_flag_experimental_signup_redirect = useGrowthbookFeatureFlag({
        featureFlag: 'experimental-signup-redirect',
    })

    if (getLanguage() === 'en') current_language = ''

    return () => {
        !is_tracked && Analytics?.trackEvent('deriv_com_homepage_cta', { action: 'click' })
        if (is_region_loading) return
        else if (_is_ppc)
            growthbook_feature_flag_experimental_signup_redirect
                ? navigate(`${signUpPath}${current_language}signup-v2/`)
                : navigate(`${signUpPath}${current_language}landing/signup/`)
        else
            growthbook_feature_flag_experimental_signup_redirect
                ? navigate(`${signUpPath}${current_language}signup-v2/`)
                : navigate(`${signUpPath}${current_language}signup/`)
    }
}

export default useHandleSignup
