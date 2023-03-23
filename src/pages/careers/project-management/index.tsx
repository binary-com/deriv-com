import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <>
            <SEO
                title="_t_Deriv Careers | Project management jobs_t_"
                description="_t_See job vacancies in Deriv’s Project management team. Join and grow with us._t_"
            />
            <DepartmentPage data={career_data.pm[0]} />
        </>
    )
}

export default WithIntl()(Career2)
