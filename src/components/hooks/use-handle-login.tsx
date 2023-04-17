// import usePopup from './use-popup'
import { redirectToTradingPlatform } from 'common/utility'
import Login from 'common/login'
import useRegion from 'components/hooks/use-region'

const useHandleLogin = () => {
    const { is_region_loading } = useRegion()
    // const { setShowNonEuPopup } = usePopup()

    return () => {
        if (is_region_loading) {
            return
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
