import React from 'react'
import styled from 'styled-components'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import OpenPositions from './_open-positions'
import OpenPositionButton from './_open-position-see-all-button'
import StaffReview from './_staff-review'
import { FirstDataProps } from './_dept-layout.types'
import Layout from 'components/layout/layout'

const PaddingTop8rem = styled.div`
    padding-top: 8rem;
`

const DepartmentPage = (data: FirstDataProps) => {
    const career_data = data.data
    return (
        <Layout type="careers">
            <Hero data={career_data.header} />
            <DeptDescription data={career_data.intro_section} />
            <OpenPositions data={career_data.open_position} />
            <OpenPositionButton
                link={career_data.link_url}
                has_position={career_data.open_position != undefined}
            />
            {career_data?.testimony_section ? (
                <StaffReview data={career_data.testimony_section} />
            ) : (
                <PaddingTop8rem />
            )}
        </Layout>
    )
}

export default DepartmentPage
