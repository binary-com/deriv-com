import React from 'react'
import styled from 'styled-components'
import matchSorter from 'match-sorter'
import { getPositionsByQuery, team_names } from '../_controller/_teams'
import { locations } from '../_model/_locations/_locations'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import NoResultsFound from './_no-results'
import Badges from './_badges'
import device from 'themes/device'
import { isBrowser, debounce } from 'common/utility'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const StyledDivider = styled(Divider)`
    margin: 0 5rem;

    @media ${device.tabletL} {
        display: none;
    }
`

const pushToQueryParams = (filters, search) => {
    let current_query = ['?filter=']
    if (Array.isArray(filters)) {
        if (filters.length) {
            filters.forEach((query, idx) => {
                if (idx === 0) {
                    current_query.push(query)
                } else {
                    current_query.push(`,${query}`)
                }
            })
        } else {
            current_query.splice(1, current_query.length)
        }
    }
    current_query.push(`&search=${search}`)

    window.history.pushState(null, null, current_query.join(''))
}

const initializeFilters = () => {
    var url_params = new URLSearchParams(window.location.search)
    const url_filters = url_params.get('filter')

    if (url_filters) {
        let filter_arr = url_filters.split(',').filter((f) => !!team_names[f] || !!locations[f])
        return filter_arr
    }

    return []
}

const initializeSearch = () => {
    var url_params = new URLSearchParams(window.location.search)
    const url_search = url_params.get('search')

    if (url_search) {
        return url_search
    }
    return ''
}

const debouncedUpdateQueryParams = debounce((f, s) => pushToQueryParams(f, s), 400)

const SearchContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const filterPositions = (filters, search) => {
    const filter_positions = getPositionsByQuery(filters)
    const search_positions = matchSorter(filter_positions, search.trim(), {
        keys: ['title', 'team', 'location'],
        threshold: matchSorter.rankings.WORD_STARTS_WITH,
    })
    return search_positions
}

const Jobs = () => {
    if (!isBrowser()) return null

    const [filters, setFilters] = React.useState(initializeFilters)
    const [search, setSearch] = React.useState(initializeSearch)
    const [filtered_positions, setFilteredPositions] = React.useState(() =>
        filterPositions(filters, search),
    )

    React.useEffect(() => {
        debouncedUpdateQueryParams(filters, search)

        const filtered = filterPositions(filters, search)
        setFilteredPositions(filtered)
    }, [search, filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO
                title={localize('Job roles listing | Deriv')}
                description={localize(
                    'Find your role at Deriv by browsing our job listing. Filter by team and location to find the perfect job for you.',
                )}
                no_index
            />
            <SectionContainer>
                <SearchContainer align="flex-start">
                    <SearchFilters filters={filters} setFilters={setFilters} />
                    <StyledDivider height="104.6rem" width="2px" />
                    <Flex direction="column">
                        <SearchForm search={search} setSearch={setSearch} />
                        <Badges filters={filters} setFilters={setFilters} />
                        {!!filtered_positions.length && (
                            <Pagination page_limit={4}>
                                {filtered_positions.map((position, idx) => (
                                    <CardList key={idx} position={position} />
                                ))}
                            </Pagination>
                        )}
                        {!filtered_positions.length && <NoResultsFound />}
                    </Flex>
                </SearchContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Jobs)
