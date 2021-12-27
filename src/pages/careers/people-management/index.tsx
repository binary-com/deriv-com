import React from 'react'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    return (
        <>
            <SEO
                title={'Deriv Careers | People Management & Technical Acquisition jobs'}
                description={
                    'See job vacancies in Deriv’s People Management and Technical Acquisition team. Join and grow with us.'
                }
            />
            <DepartmentPage data={career_data.people_management[0]} />
        </>
    )
}

export default WithIntl()(Career2)
