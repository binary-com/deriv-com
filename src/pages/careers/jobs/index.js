import React from 'react'
import { RoleBanner } from '../_layout-components/_banner'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Jobs = () => {
    // TODO: initialize filters from query params
    // const [jobTypeFilter, setJobTypeFilter] = React.useState({})
    // const [teamsFilter, setTeamsFilter] = React.useState({})
    // const [locationFilter, setLocationFilter] = React.useState({})
    // const [query, setQuery] = React.useState('')

    // const open_positions = getOpenPositionsByQuery(query, [filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Jobs')} />
            <Container direction="column">
                <SectionContainer>
                    <Flex jc="unset">
                        <SearchFilters />
                        <div style={{ width: '100%' }}>
                            <SearchForm />
                            <CardList />
                            <Pagination />
                        </div>
                    </Flex>
                </SectionContainer>
            </Container>
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Jobs)
