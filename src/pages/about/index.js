import React, { useState, Fragment } from 'react'
import Hero from './_hero'
import OurLocations from './_our-locations'
import OurNumbers from './_our-numbers'
import OurGoals from './_our-goals'
import Leaders from './_leaders'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const About = () => {
    const [navigation, setNavigation] = useState('story')

    return (
        <Layout>
            <SEO title={localize('About us')} />
            <Hero navigation={navigation} setNavigation={setNavigation} />
            {navigation === 'story' && (
                <Fragment>
                    <OurGoals />
                    <OurNumbers />
                    <OurLocations />
                </Fragment>
            )}
            {navigation === 'leadership' && <Leaders />}
        </Layout>
    )
}

export default WithIntl()(About)
