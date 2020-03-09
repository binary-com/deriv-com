import React from 'react'
import styled from 'styled-components'
import matchSorter from 'match-sorter'
import { RoleBanner } from '../_layout-components/_banner'
import { getPositionsByQuery, team_names } from '../_controller/_teams'
import { locations } from '../_model/_locations/_locations'
import SearchForm from './_search-form'
import SearchFilters from './_search-filters'
import CardList from './_card-list'
import Pagination from './_pagination'
import NoResultsFound from './_no-results'
import Badges from './_badges'
import { isBrowser } from 'common/utility'
import { SEO, Container, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements'

const StyledDivider = styled(Divider)`
    margin: 0 5rem;
`

const pushToQueryParams = (filters, search) => {
    let current_query = ['?filter=']

    if (Array.isArray(filters)) {
        filters.forEach((query, idx) => {
            if (idx === 0) {
                current_query.push(query)
            } else {
                current_query.push(`,${query}`)
            }
        })
    }
    current_query.push(`&search=${search}`)

    window.history.pushState(null, null, current_query.join(''))
}

function debounce(func, wait, immediate) {
    let timeout
    return function() {
        const context = this
        const args = arguments

        const later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const initializeFilters = () => {
    if (!isBrowser()) return []

    var url_params = new URLSearchParams(window.location.search)
    const url_filters = url_params.get('filter')

    if (url_filters) {
        let filter_arr = url_filters.split(',').filter(f => !!team_names[f] || !!locations[f])
        return filter_arr
    }

    return []
}

const initializeSearch = () => {
    if (!isBrowser()) return ''

    var url_params = new URLSearchParams(window.location.search)
    const url_search = url_params.get('search')

    if (url_search) {
        return url_search
    }
    return ''
}

const debouncedUpdateQueryParams = debounce((f, s) => {
    pushToQueryParams(f, s)
}, 400)

const Jobs = () => {
    const [filters, setFilters] = React.useState(initializeFilters)
    const [search, setSearch] = React.useState(initializeSearch)
    const [filtered_positions, setFilteredPositions] = React.useState([])

    React.useEffect(() => {
        debouncedUpdateQueryParams(filters, search)
        // 1. filter by filters
        const filter_positions = getPositionsByQuery(filters)
        // 2. filter by search
        const search_positions = matchSorter(filter_positions, search.trim(), {
            keys: ['title', 'team', 'location'],
            threshold: matchSorter.rankings.WORD_STARTS_WITH,
        })

        setFilteredPositions(search_positions)
    }, [search, filters])

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Jobs')} />
            <SectionContainer>
                <Container align="flex-start">
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
                </Container>
            </SectionContainer>
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Jobs)
