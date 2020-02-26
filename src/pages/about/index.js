import React, { Fragment, useState } from 'react'
import Hero from './_hero'
import Leaders from './_leaders'
import OurNumbers from './_our-numbers'
import { OurOffices } from './_our-offices'
import { OurHistory } from './_our-history'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const About = () => {
    const [navigation, setNavigation] = useState('story')

    return (
        <Layout>
            <SEO
                description={localize(
                    'Deriv is the new platform developed by Binary Group - a pioneer and award-winning online trading platform in the trading market.',
                )}
                title={localize('About Us | An Online Trading Platform')}
            />
            <Hero navigation={navigation} setNavigation={setNavigation} />
            {navigation === 'story' && (
                <Fragment>
                    <OurHistory />
                    <OurNumbers />
                    <OurOffices />
                </Fragment>
            )}
            {navigation === 'leadership' && <Leaders />}
        </Layout>
    )
}

export default WithIntl()(About)
