import React from 'react'
import { deriv_com_url } from 'common/constants'
import Alert from 'features/components/atoms/alert'
import usePopup from 'components/hooks/use-popup'

const RedirectNonEuLogin = () => {
    window.location.href = `https://${deriv_com_url}`
}
const NonEuRedirectAlert = () => {
    const { show_non_eu_popup, setShowNonEuPopup } = usePopup()

    return show_non_eu_popup ? (
        <Alert
            title="_t_Redirection Alert_t_"
            description="_t_It seems you’re not in the EU, so we’re taking you to our website for non-EU visitors, where you can log in or sign up (if you don’t have a Deriv account)._t_"
            cancel_button={{
                text: '_t_Cancel_t_',
                onClick: () => {
                    setShowNonEuPopup(false)
                },
            }}
            action_button={{
                text: '_t_Take me there_t_',
                onClick: RedirectNonEuLogin,
            }}
        />
    ) : null
}

export default NonEuRedirectAlert
