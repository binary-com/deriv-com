import React from 'react'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPositions from './_open-positions'
import OpenPositionButton from './_open-position-see-all-button'
import StaffReview from './_staff-review'
import { FirstDataProps } from './_dept-layout.types'
import Layout from 'components/layout/layout'

const DepartmentPage = (data: FirstDataProps) => {
    return (
        <Layout type="careers">
            <Hero data={data.data.header} />
            <DeptDescription data={data.data.intro_section} />
            <OpenPositions data={data.data.open_position} />
            <OpenPositionButton
                link={data.data.link_url}
                has_position={data.data.open_position != undefined}
            />
            <StaffReview data={data.data.testimony_section} />
        </Layout>
    )
}

export default DepartmentPage
