import React from 'react'
import { hero_main_btn } from './deriv-products-hero.module.scss'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import Button from 'features/components/atoms/button'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { handleRedirectToTradersHub } from 'components/custom/utils'

const HeroMainButton = () => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    if (is_logged_in) {
        return (
            <Button.Primary
                className={hero_main_btn}
                type={'button'}
                onClick={handleRedirectToTradersHub}
            >
                <Localize translate_text={'_t_Get trading_t_'} />
            </Button.Primary>
        )
    }
    return (
        <Button.Primary className={hero_main_btn} type={'button'} onClick={handleSignup}>
            <Localize translate_text={'_t_Create free demo account_t_'} />
        </Button.Primary>
    )
}

export default HeroMainButton
