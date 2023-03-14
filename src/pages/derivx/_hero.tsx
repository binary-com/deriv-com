import React, { useState, useEffect, useCallback } from 'react'
import DHero from 'components/custom/_dhero-2'
import { size } from 'themes/device'
import DerivXBG from 'images/svg/deriv-x/triangle-up.svg'
import DerivXBGRTL from 'images/svg/deriv-x/triangle-up_rtl.svg'
import DerivXBG2 from 'images/svg/deriv-x/triangle-down.svg'
import DerivXBG2RTL from 'images/svg/deriv-x/triangle-down_rtl.svg'
import DerivXlogoL from 'images/svg/deriv-x/derivx-logo-light.svg'
import { isBrowser } from 'common/utility'
import { useIsRtl } from 'components/hooks/use-isrtl'

const Hero = () => {
    const [is_mobile, setMobile] = useState(false)
    const is_rtl = useIsRtl()

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
            title="_t_Deriv X_t_"
            content="_t_The trading platform to fit your style_t_"
            join_us_for_free
            Logo={DerivXlogoL}
            image_name="deriv_x"
            is_mobile={is_mobile}
            background_svg={is_rtl ? DerivXBGRTL : DerivXBG2}
            background_svg2={is_rtl ? DerivXBG2RTL : DerivXBG}
            background_alt="Deriv X online trading platform"
            d_height="56.7rem"
            laptopM_height="49.9rem"
            laptop_height="53.8rem"
            tabletL_height="50.5rem"
        />
    )
}

export default Hero
