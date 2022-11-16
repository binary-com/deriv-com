import React from 'react'
import Hero from './_hero'
import Login from './_login'
import Events from './_events'
import Speakers from './_speakers'
import { Subscribe, Preview, Venue } from './_lazy-load'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Conferencies = () => {
    return (
        <Layout type="conference" margin_top={7.2}>
            <SEO
                title="Conferencies | Deriv.com"
                description="Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade."
            />
            <Hero />
            <Login />
            <Events />
            <Preview />
            <Speakers />
            <Venue />
            <Subscribe />
        </Layout>
    )
}

export default WithIntl()(Conferencies)
