import { navigate, withPrefix } from 'gatsby'
import usePopup from './use-popup'
import { isEuDomain, getLanguage } from 'common/utility'
import useRegion from 'components/hooks/use-region'

const useHandleSignup = (_is_ppc = false) => {
    const { is_region_loading, is_eu_location } = useRegion()
    const { setShowNonEuPopup } = usePopup()
    let current_language = getLanguage() + '/'
    const signUpPath = withPrefix('/')

    if (getLanguage() === 'en') {
        current_language = ''
    }

    return () => {
        if (is_region_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            setShowNonEuPopup(true)
        } else if (_is_ppc) {
            navigate(`${signUpPath}${current_language}landing/signup/`)
        } else {
            navigate(`${signUpPath}${current_language}signup/`)
        }
    }
}

export default useHandleSignup
