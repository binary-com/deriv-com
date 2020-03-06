import React from 'react'
import styled from 'styled-components'
import matchSorter from 'match-sorter'
import { RoleBanner } from '../_layout-components/_banner'
import { all_positions } from '../_controller/_teams'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import NoResultsFound from './_no-results'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const StyledDivider = styled(Divider)`
    margin: 0 5rem;
`
const Jobs = () => {
    const [filters, setFilters] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [filtered_positions, setFilteredPositions] = React.useState([...all_positions])

    React.useEffect(() => {
        // 1. filter by filters here
        // 2. filter by search term
        const filter_temp = matchSorter(all_positions, search.trim(), {
            keys: ['title', 'team'],
            threshold: matchSorter.rankings.WORD_STARTS_WITH,
        })
        setFilteredPositions(filter_temp)
    }, [search, filters])

    // const open_positions = getOpenPositionsByQuery(query, [filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Jobs')} />
            <SectionContainer>
                <Container align="flex-start">
                    <SearchFilters filters={filters} setFilters={setFilters} />
                    <StyledDivider height="104.6rem" width="2px" />
                    <Flex direction="column">
                        <SearchForm setSearch={setSearch} />
                        {!!filtered_positions.length && (
                            <Pagination page_limit={4}>
                                {filtered_positions.map((position, idx) => (
                                    <CardList key={idx} position={position} />
                                ))}
                            </Pagination>
                        )}
                        {!filtered_positions.length && <NoResultsFound />}
                    </Flex>
                </Container>
            </SectionContainer>
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Jobs)
