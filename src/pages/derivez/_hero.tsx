import React, { useState, useEffect, useCallback } from 'react'
import DerivEZlogo from 'images/svg/deriv-ez/derivez-logo.svg'
import { Localize } from 'components/localization'
import DHero from 'components/custom/_dhero-2'
import { size } from 'themes/device'
import DerivEZBG from 'images/svg/deriv-ez/triangle-up.svg'
import DerivEZBG2 from 'images/svg/deriv-ez/triangle-down.svg'
import { isBrowser } from 'common/utility'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { TString } from 'types/generics'

const hero_logo_title: TString = '_t_Deriv EZ_t_'
const hero_header: TString = '_t_An intuitive, easy-to-get-started CFDs trading platform_t_'
const hero_background_alt: TString = '_t_Deriv EZ online trading platform_t_'

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
            title={<Localize translate_text={hero_logo_title} />}
            content={<Localize translate_text={hero_header} />}
            Logo={DerivEZlogo}
            image_name="deriv_ez"
            is_mobile={is_mobile}
            background_svg={DerivEZBG2}
            background_svg2={DerivEZBG}
            background_alt={<Localize translate_text={hero_background_alt} />}
            d_height="56.7rem"
            laptop_height="53.8rem"
            tabletL_height="50.5rem"
            hide_download_section
        />
    )
}

export default Hero
