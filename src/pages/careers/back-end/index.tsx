import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import DepartmentPage from '../_dept-layout-components/_department-page'
import career_data from '../data/_career-data'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const Career2 = () => {
    const open_position = useStaticQuery(queryJob)
    const new_position = open_position.backEnd.data

    return (
        <>
            <SEO
                title={'Deriv Careers | Back-end Development jobs'}
                description={
                    'See job vacancies in Deriv’s Back-end Development team. Join and grow with us.'
                }
            />
            <DepartmentPage new_position={new_position} data={career_data.back_end[0]} />
        </>
    )
}

export const queryJob = graphql`
    query MyQuery {
        backEnd {
            data {
                City
                Country
                Job_Opening_Name
                Remote_Job
                id
            }
        }
    }
`

export default WithIntl()(Career2)
