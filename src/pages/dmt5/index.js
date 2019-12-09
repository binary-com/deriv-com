import React from 'react'
import DMT5Animation from './dmt5-animation.json'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Experience from './_experience.js'
import Trading from './_trading.js'
import DHero from 'components/custom/_dhero.js'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO, Show } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'

const DMT5 = () => {
    return (
        <Layout>
            <SEO title={localize('DMT5')} />
            <DHero
                title={localize('DMT5')}
                content={<Localize translate_text="The all-in-one FX<0/>and CFD trading<0/>platform" components={[<br key={0} />]} />}
                join_us_for_free
                Logo={dmt5_logo}
                animation={DMT5Animation}
            />
            <Show.Desktop>
                <Numbers />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <Experience />
            <OtherPlatform exclude="dmt5" />
        </Layout>
    )
}

export default WithIntl()(DMT5)
