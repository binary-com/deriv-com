import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import DHero from './components/_dgo-hero'
import BetaVersion from './components/beta-version'
import Copyright from './components/copyright'
import { localize, WithIntl, Localize } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import dgo_logo from 'images/common/derivgo/derivgo_logo.png'
const DContent = Loadable(() => import('./components/_dcontent'))
const NewApp = Loadable(() => import('./components/_new-app'))

const items = [
    {
        title: <Localize translate_text="Trade on the Go anywhere, anytime" />,

        image_name: 'derivgo_trade',
        image_alt: localize('trade'),
    },
    {
        title: <Localize translate_text="Real-time alerts & notifications" />,
        subtitle: <Localize translate_text="(even when you're not trading)" />,

        image_name: 'derivgo_notification',
        image_alt: localize('alerts'),
    },
    {
        title: <Localize translate_text="A faster, seamless mobile experience" />,

        image_name: 'derivgo_mobile',
        image_alt: localize('mobile'),
    },
]

const DerivGo = () => {
    const [is_mobile, setMobile] = useState('')

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    return (
        <>
            <DHero
                content={
                    <Localize
                        translate_text="Trade at the<0/>speed of touch<0/>"
                        components={[<br key={0} />]}
                    />
                }
                description={
                    <Localize
                        translate_text="Get the new Deriv GO mobile app now <0/>from the Google Play Store.<0/>"
                        components={[<br key={0} />]}
                    />
                }
                google_play
                ios_coming_soon
                Logo={dgo_logo}
                image_name="mobile_float"
                is_mobile={is_mobile}
            />

            <BetaVersion />

            <DContent items={items} />

            <NewApp />

            <Copyright />
        </>
    )
}

export default WithIntl()(DerivGo)
