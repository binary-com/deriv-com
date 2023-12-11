import React from 'react'
import clsx from 'clsx'
import { Button } from '@deriv/quill-design'
import { hero_content_btn } from './styles.module.scss'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import { Localize } from 'components/localization'

const HeroCtaButton = () => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    if (is_logged_in) {
        return (
            <Button
                size="lg"
                variant="primary"
                colorStyle="coral"
                className={clsx('mt-general-2xl', hero_content_btn)}
                onClick={handleRedirectToTradersHub}
            >
                <Localize translate_text="_t_Traders Hub_t_" />
            </Button>
        )
    }
    return (
        <Button
            size="lg"
            variant="primary"
            colorStyle="coral"
            className={clsx('mt-general-2xl', hero_content_btn)}
            onClick={handleSignup}
        >
            <Localize translate_text="_t_Open demo account_t_" />
        </Button>
    )
}

export default HeroCtaButton
