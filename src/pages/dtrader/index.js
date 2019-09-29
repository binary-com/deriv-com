import React from 'react'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import DHero from 'components/elements/DHero.js'
import Experience from './_experience'
import OtherPlatform from './_other-platform.js'
import Show from 'components/containers/show'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dtrader_logo from 'images/svg/d-trader.svg'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <DHero
                Logo={dtrader_logo}
                title={localize('Dtrader')}
                message={localize('Everything you need and more')}
                img_name="platform.png"
                img_alt={localize('Platform')}
                button_text={localize('Try for free')}
                clickRedirect="signup modal"
            />
            <Show.Desktop>
                <Numbers />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <Experience />
            <OtherPlatform />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
