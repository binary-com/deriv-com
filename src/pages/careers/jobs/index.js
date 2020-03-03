import React from 'react'
import styled from 'styled-components'
import { RoleBanner } from '../_layout-components/_banner'
import { all_positions } from '../_model-controller/_teams'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const StyledDivider = styled(Divider)`
    margin: 0 5rem;
`
const Jobs = () => {
    // TODO: initialize filters from query params
    // const [jobTypeFilter, setJobTypeFilter] = React.useState({})
    // const [teamsFilter, setTeamsFilter] = React.useState({})
    // const [locationFilter, setLocationFilter] = React.useState({})
    // const [query, setQuery] = React.useState('')
    const positions = all_positions

    // const open_positions = getOpenPositionsByQuery(query, [filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Jobs')} />
            <SectionContainer>
                <Container align="flex-start">
                    <SearchFilters />
                    <StyledDivider height="104.6rem" width="2px" />
                    <Flex direction="column">
                        <SearchForm />
                        {positions &&
                            positions.map((position, idx) => (
                                <CardList key={idx} position={position} />
                            ))}
                    </Flex>
                </Container>
            </SectionContainer>
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Jobs)
