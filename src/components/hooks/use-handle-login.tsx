// import usePopup from './use-popup'
import { isEuDomain, redirectToTradingPlatform } from 'common/utility'
import Login from 'common/login'
import useRegion from 'components/hooks/use-region'

const useHandleLogin = () => {
    const { is_region_loading, is_eu_location } = useRegion()
    // const { setShowNonEuPopup } = usePopup()

    return () => {
        if (is_region_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            // setShowNonEuPopup(true)
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
