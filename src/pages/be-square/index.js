import React from 'react'
import Hero from './static/components/_hero'
import Description from './static/components/_description'
import WhatIsBeSquare from './static/components/_what-is_besquare'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const BeSquare = () => (
    <Layout type="be-square" margin_top={10}>
        <Hero />
        <Description />
        <WhatIsBeSquare />
    </Layout>
)

export default WithIntl()(BeSquare)
