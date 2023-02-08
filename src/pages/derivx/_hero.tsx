import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import DHero from 'components/custom/_dhero-2'
import { size } from 'themes/device'
import DerivXBG from 'images/svg/deriv-x/triangle-up.svg'
import DerivXBGRTL from 'images/svg/deriv-x/triangle-up_rtl.svg'
import DerivXBG2 from 'images/svg/deriv-x/triangle-down.svg'
import DerivXBG2RTL from 'images/svg/deriv-x/triangle-down_rtl.svg'
import DerivXlogoL from 'images/svg/deriv-x/derivx-logo-light.svg'
import { isBrowser } from 'common/utility'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Shape from 'components/custom/_hero-shape'

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
        <Shape color="var(--color-red)" angle={-190} width="45%">
            <DHero
                title={<Localize translate_text="deriv X" />}
                content={<Localize translate_text="The trading platform to fit your style" />}
                join_us_for_free
                Logo={DerivXlogoL}
                image_name="deriv_x"
                is_mobile={is_mobile}
                background_svg={is_rtl ? DerivXBGRTL : DerivXBG2}
                background_svg2={is_rtl ? DerivXBG2RTL : DerivXBG}
                background_alt={localize('Deriv X online trading platform')}
                d_height="56.7rem"
                laptopM_height="49.9rem"
                laptop_height="53.8rem"
                tabletL_height="50.5rem"
            />
        </Shape>
    )
}

export default Hero
