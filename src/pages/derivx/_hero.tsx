import React, { useState, useEffect, useCallback } from 'react'
import { Localize, localize } from 'components/localization'
import DHero from 'components/custom/_dhero-2'
import { size } from 'themes/device'
import DerivXBG from 'images/svg/deriv-x/triangle-up.svg'
import DerivXBG2 from 'images/svg/deriv-x/triangle-down.svg'
import DerivXlogoL from 'images/svg/deriv-x/derivx-logo-light.svg'
import { isBrowser } from 'common/utility'

const Hero = () => {
    const [is_mobile, setMobile] = useState(false)

    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }, [setMobile])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    return (
        <DHero
            title={<Localize translate_text="Deriv X" />}
            content={<Localize translate_text="The trading platform to fit your style" />}
            join_us_for_free
            Logo={DerivXlogoL}
            image_name="deriv_x"
            is_mobile={is_mobile}
            background_svg={DerivXBG2}
            background_svg2={DerivXBG}
            background_alt={localize('Deriv X online trading platform')}
            d_height="56.7rem"
            laptopM_height="49.9rem"
            laptop_height="53.8rem"
            tabletL_height="50.5rem"
        />
    )
}

export default Hero
