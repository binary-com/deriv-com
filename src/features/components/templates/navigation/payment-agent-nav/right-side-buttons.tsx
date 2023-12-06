import React, { useState, useEffect } from 'react'
import { partners_buttons } from './payment-agent-nav.module.scss'
import { getLocationPathname } from 'common/utility'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization/localize'

type contentType = {
    [T: string]: TString
}

const RightSideButtons = () => {
    const [path, set_path] = useState('')
    const { is_eu } = useRegion()
    const clickToScrollHandler = useScrollToElement('getintouch')

    useEffect(() => {
        set_path(getLocationPathname())
    }, [])

    if (!path) return null

    const texts: contentType = is_eu
        ? {
              login: '_t_Affiliate log in_t_',
              sign_up: '_t_Affiliate sign up_t_',
          }
        : {
              login: '_t_Affiliate & IB Log in_t_',
              sign_up: '_t_Affiliate & IB sign up_t_',
          }

    if (path.includes('deriv-prime')) {
        return (
            <Button.Primary
                id="dm-nav-deriv-prime-contact"
                onClick={clickToScrollHandler}
                className={partners_buttons}
            >
                <Localize translate_text="_t_Contact us_t_" />
            </Button.Primary>
        )
    }

    return (
        <>
            <Button.Primary
                onClick={() => window.open('https://login.deriv.com/signin.php?lang=0', '_blank')}
                outlined
                visible={'larger-than-tablet'}
                className={partners_buttons}
            >
                <Localize translate_text={texts.login} />
            </Button.Primary>
            <Button.Primary
                onClick={() => window.open('https://login.deriv.com/signin.php?lang=0', '_blank')}
                outlined
                visible={'phone-and-tablet'}
            >
                <Localize translate_text="_t_Log in_t_" />
            </Button.Primary>
            <Button.Primary
                id="dm-nav-affiliate-signup-button"
                onClick={() => window.open('https://login.deriv.com/signup.php', '_blank')}
                visible={'larger-than-tablet'}
                className={partners_buttons}
            >
                <Localize translate_text={texts.sign_up} />
            </Button.Primary>
        </>
    )
}

export default RightSideButtons
