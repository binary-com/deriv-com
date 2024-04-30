import React from 'react'
import styled from 'styled-components'
import Hero from './_hero'
import DeptDescription from './_dept-description'
import StaffReview from './_staff-review'
import { DataProps } from './_dept-layout.types'
import Layout from 'components/layout/layout'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'

const PaddingTop8rem = styled.div`
    padding-top: 8rem;
`

type DepartmentProps = {
    region: BuildVariantContextType["region"]
    data: DataProps
}

const DepartmentPage = ({region, data}: DepartmentProps) => {
    const career_data = data
    return (
        <Layout region={region} type="careers">
            <Hero data={career_data.header} link={career_data.link_url} />
            <DeptDescription data={career_data.intro_section} />
            {career_data?.testimony_section ? (
                <StaffReview data={career_data.testimony_section} />
            ) : (
                <PaddingTop8rem />
            )}
        </Layout>
    )
}

export default DepartmentPage
