import React from 'react'
import DepartmentPage from '../_layout-components/_department-page'
import career_data from '../data/_career-data'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <Layout>
            <DepartmentPage data={career_data.cs[0]} />
        </Layout>
    )
}

export default WithIntl()(Career2)
