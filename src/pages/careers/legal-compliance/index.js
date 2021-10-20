import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <>
            <SEO
                title={'Deriv Careers | Legal and Compliance jobs'}
                description={
                    'See job vacancies in Deriv’s Legal and Compliance team. Join and grow with us.'
                }
            />
            <DepartmentPage data={career_data.compliance[0]} />
        </>
    )
}

export default WithIntl()(Career2)
