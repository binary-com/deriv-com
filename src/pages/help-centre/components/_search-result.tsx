import React from 'react'
import styled from 'styled-components'
import { TNewQuestions } from '../data/_data-types'
import SearchError from './_search-error'
import SearchSuccess from './_search-success'

type TSearchResult = {
    has_searched_question: boolean
    suggested_topics: TNewQuestions[]
    search_value: string
}

const ResultWrapper = styled.div`
    padding-top: 4rem;
    padding-bottom: 0.4rem;
`

const SearchResult = ({ has_searched_question, suggested_topics, search_value }: TSearchResult) => {
    return (
        <ResultWrapper>
            {has_searched_question ? (
                <SearchSuccess suggested_topics={suggested_topics} />
            ) : (
                <SearchError search_value={search_value} />
            )}
        </ResultWrapper>
    )
}

export default SearchResult
