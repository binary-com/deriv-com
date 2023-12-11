import React from 'react'
import { Button } from '@deriv/quill-design'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import { Localize } from 'components/localization'

const TradersHubCtaButton = () => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    if (is_logged_in) {
        return (
            <Button size="lg" onClick={handleRedirectToTradersHub} className="hidden lg:block">
                <Localize translate_text="_t_Traders Hub_t_" />
            </Button>
        )
    }
    return (
        <Button size="lg" onClick={handleSignup} className="hidden lg:block">
            <Localize translate_text="_t_Open demo account_t_" />
        </Button>
    )
}

export default TradersHubCtaButton
