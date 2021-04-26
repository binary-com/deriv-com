import React, { useState, useEffect } from "react"
import { Localize } from 'components/localization'
import DHero from 'components/custom/_dhero-2'
import { size } from 'themes/device'
import DerivXBG from 'images/svg/derivx/triangle-up.svg'
import DerivXBG2 from 'images/svg/derivx/triangle-down.svg'
import derivx_logo from 'images/svg/derivx/derivx-logo.svg'
import { isBrowser } from 'common/utility'

const Hero = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    return (
        <DHero
            title={<Localize translate_text='Deriv X' />}
            content={<Localize translate_text="The trading platform to fit your style" />}
            join_us_for_free
            Logo={derivx_logo}
            image_name="derivx"
            is_mobile={is_mobile}
            background_svg={DerivXBG2}
            background_svg2={DerivXBG}
            background_alt={<Localize translate_text='DerivX' />}
        />
    )
}

export default Hero