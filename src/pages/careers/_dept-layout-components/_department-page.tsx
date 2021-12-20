import React, { ReactElement } from 'react'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPositions from './_open-positions'
import StaffReview from './_staff-review'
import { firstData } from './_dept-layout.types'
import Layout from 'components/layout/layout'

const DepartmentPage = (data: firstData): ReactElement => {
    return (
        <Layout type="careers">
            <Hero data={data.data.header} />
            <DeptDescription data={data.data.intro_section} />
            <OpenPositions data={data.data.open_position} />
            <StaffReview data={data.data.testimony_section} />
        </Layout>
    )
}

export default DepartmentPage
