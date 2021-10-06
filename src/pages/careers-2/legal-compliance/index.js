import React from 'react'
import DepartmentPage from '../_layout-components/_department-page'
import career_data from '../data/_career-data'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return <DepartmentPage data={career_data.compliance[0]} />
}

export default WithIntl()(Career2)
