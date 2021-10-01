import React from 'react'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPos from './_open-positions'
import StaffReview from './_staff-review'

const DepartmentPage = (data) => {
    return (
        <>
            <Hero data={data.data.header} />
            <DeptDescription data={data.data.intro_section} />
            <OpenPos data={data.data.open_position} />
            <StaffReview data={data.data.testimony_section} />
        </>
    )
}

export default DepartmentPage
