import React from 'react'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPos from './_open-positions'
import StaffReview from './_staff-review'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <Layout>
            <Hero />
            <DeptDescription />
            <OpenPos />
            <StaffReview />
        </Layout>
    )
}

export default WithIntl()(Career2)
