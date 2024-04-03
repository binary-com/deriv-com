import { navigate, withPrefix } from 'gatsby'
import { Analytics } from '@deriv-com/analytics'
import { getLanguage } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const useHandleSignup = (_is_ppc = false, is_tracked = false) => {
    const { is_region_loading } = useRegion()
    let current_language = getLanguage() + '/'
    const signUpPath = withPrefix('/')

    if (getLanguage() === 'en') current_language = ''

    return () => {
        !is_tracked && Analytics?.trackEvent('deriv_com_homepage_cta', { action: 'click' })
        if (is_region_loading) return
        else if (_is_ppc) navigate(`${signUpPath}${current_language}landing/signup/`)
        else navigate(`${signUpPath}${current_language}signup/`)
    }
}

export default useHandleSignup
