import React from 'react'
import DMT5Animation from './dmt5-animation.json'
import HowItWorks from './_how-it-works.js'
import Experience from './_experience.js'
import Trading from './_trading.js'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO, Show } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'

const items = [
    { title: '70+', subtitle: 'tradable assets and growing' },
    { title: '1:1,000', subtitle: 'maximum leverage' },
    { title: '30', subtitle: 'maximum lot size' },
]
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
                <DNumber items={items} justify='space-around' />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <Experience />
            <OtherPlatform exclude="dmt5" />
        </Layout>
    )
}

export default WithIntl()(DMT5)
