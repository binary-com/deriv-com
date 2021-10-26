import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <>
            <SEO
                title={'Deriv Careers | Back-end Development jobs'}
                description={
                    'See job vacancies in Deriv’s Back-end Development team. Join and grow with us.'
                }
            />
            <DepartmentPage data={career_data.back_end[0]} />
        </>
    )
}

export default WithIntl()(Career2)
