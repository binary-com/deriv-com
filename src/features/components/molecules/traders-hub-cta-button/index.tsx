import React, { ComponentPropsWithoutRef } from 'react'
import { Button } from '@deriv/quill-design'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import { Localize } from 'components/localization'

type TradersHubCtaButtonProps = ComponentPropsWithoutRef<typeof Button>

const TradersHubCtaButton = ({ className, ...rest }: TradersHubCtaButtonProps) => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    if (is_logged_in) {
        return (
            <Button size="lg" onClick={handleRedirectToTradersHub} className={className} {...rest}>
                <Localize translate_text="_t_Traders Hub_t_" />
            </Button>
        )
    }
    return (
        <Button size="lg" onClick={handleSignup} className={className} {...rest}>
            <Localize translate_text="_t_Open demo account_t_" />
        </Button>
    )
}

export default TradersHubCtaButton
