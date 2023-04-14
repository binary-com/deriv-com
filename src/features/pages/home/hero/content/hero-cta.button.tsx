import React from 'react'
import { hero_cta } from './hero-content.module.scss'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import Button from 'features/components/atoms/button'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import useHandleSignup from 'components/hooks/use-handle-signup'

const HeroCtaButton = () => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    if (is_logged_in) {
        return (
            <Button.Primary
                className={hero_cta}
                type={'button'}
                onClick={handleGetTrading}
                id="dm-hero-signup"
                hero
            >
                <Localize translate_text={'_t_Get Trading_t_'} />
            </Button.Primary>
        )
    }
    return (
        <Button.Primary
            className={hero_cta}
            type={'button'}
            onClick={handleSignup}
            id="dm-hero-signup"
            hero
        >
            <Localize translate_text={'_t_Create free demo account_t_'} />
        </Button.Primary>
    )
}

export default HeroCtaButton
