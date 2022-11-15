import React from 'react'
import styled from 'styled-components'
import { TQuestions } from '../data/_data-types'
import SearchError from './_search-error'
import SearchSuccess from './_search-success'

type TSearchResult = {
    has_result: boolean
    has_no_result: boolean
    suggested_topics: TQuestions[]
    search_value: string
}

const ResultWrapper = styled.div`
    padding-top: 4rem;
    padding-bottom: 0.4rem;
`

const SearchResult = ({
    has_result,
    has_no_result,
    suggested_topics,
    search_value,
}: TSearchResult) => {
    return (
        <ResultWrapper>
            {has_result && <SearchSuccess suggested_topics={suggested_topics} />}
            {has_no_result && <SearchError search_value={search_value} />}
        </ResultWrapper>
    )
}

export default SearchResult
