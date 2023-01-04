import React from 'react'
import { isEuDomain, redirectToTradingPlatform } from 'common/utility'
import Login from 'common/login'
import { PopupContext } from 'store/popup-context'
import { RegionContext } from 'store/region-context'

const useHandleLogin = () => {
    const { is_region_loading, is_eu_location } = React.useContext(RegionContext)
    const { setShowNonEuPopup } = React.useContext(PopupContext)

    return () => {
        if (is_region_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            setShowNonEuPopup(true)
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
