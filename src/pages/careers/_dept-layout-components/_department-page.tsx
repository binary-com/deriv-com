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
    const careerData = data.data
    return (
        <Layout type="careers">
            <Hero data={careerData.header} />
            <DeptDescription data={careerData.intro_section} />
            <OpenPositions data={careerData.open_position} />
            <OpenPositionButton
                link={careerData.link_url}
                has_position={careerData.open_position != undefined}
            />
            {careerData?.testimony_section ? (
                <StaffReview data={careerData.testimony_section} />
            ) : (
                <PaddingTop8rem />
            )}
        </Layout>
    )
}

export default DepartmentPage
