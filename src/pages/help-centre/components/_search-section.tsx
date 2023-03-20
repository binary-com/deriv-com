import React, { useMemo, useState } from 'react'
import { matchSorter } from 'match-sorter'
import styled from 'styled-components'
import { useFilteredCategory, useFilteredQuestions, useFilteredP2PCategory } from '../data/_hooks'
import { TTranslatedQuestionsData } from '../data/_data-types'
import SearchResult from './_search-result'
import { all_questions } from './_constants'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { sanitize } from 'common/utility'
import device from 'themes/device'
// Icons
import SearchIcon from 'images/svg/help/search.svg'
import CrossIcon from 'images/svg/help/cross.svg'

const Section = styled.section`
    padding: 8rem 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-8);
    max-height: 100rem;

    @media ${device.tabletL} {
        padding: 8rem 0 4rem;
    }
`
const Wrapper = styled.div`
    @media ${device.tabletL} {
        padding: 2rem 0;
    }
`
const ResponsiveHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: 4rem;
    }
`
const SearchForm = styled.form`
    position: relative;
    padding-left: 6.4rem;
    border: 1px solid var(--color-grey-17);
    border-radius: 4px;
    width: 99.6rem;
    height: 6.4rem;

    @media ${device.laptop} {
        width: 100%;

        svg {
            width: 2.5rem;
            height: 3.55rem;
        }
    }
`
const StyledSearchIcon = styled.img`
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    left: 2.4rem;
    top: 2rem;
`
const SearchInput = styled.input`
    width: 95%;
    font-size: var(--text-size-m);
    font-weight: 500;
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    height: 6rem;

    ::placeholder {
        color: var(--color-grey-17);
    }
`
const SearchCrossIcon = styled.img`
    width: 2.3rem;
    height: 2.3rem;
    position: absolute;
    top: 1.4rem;
    right: 2rem;

    :hover {
        cursor: pointer;
    }
`

const SearchSection = () => {
    const [search_value, setSearchValue] = useState('')

    const handleSubmit = (e) => e.preventDefault()
    const clearSearch = () => setSearchValue('')
    const handleSearchOnChange = (e) => {
        e.preventDefault()
        setSearchValue(sanitize(e.target.value))
    }

    const translated_all_questions: TTranslatedQuestionsData[] = useMemo(
        () =>
            all_questions.map((section) => {
                return {
                    ...section,
                    category: localize(section.category),
                    questions: section.questions.map((question) => {
                        return {
                            ...question,
                            sub_category: localize(question.sub_category),
                            question: localize(question.question),
                        }
                    }),
                }
            }),
        [all_questions],
    )

    // we need to hide some of the platforms for eu countries!
    const filtered_categories = useFilteredCategory(translated_all_questions)
    //Removing p2p from the search result
    const filtered_p2p_categories = useFilteredP2PCategory(filtered_categories)
    // putting all of the questions in a variable
    const questions = filtered_p2p_categories
        .map(({ questions }) => questions)
        .reduce((array, questions_array) => array.concat(questions_array), [])
    // filtering eu and none-eu questions
    const filtered_questions = useFilteredQuestions(questions)
    // searching
    const searched_question = matchSorter(filtered_questions, search_value.trim(), {
        keys: ['sub_category', 'question'],
    })

    const has_search_value = search_value.length > 0
    const has_searched_question = searched_question.length > 0

    return (
        <Section>
            <Container align="start" justify="flex-start" direction="column">
                <Wrapper>
                    <ResponsiveHeader as="h1" type="heading-1" mb="4rem">
                        <Localize translate_text="How can we help?" />
                    </ResponsiveHeader>

                    <SearchForm onSubmit={handleSubmit}>
                        <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                        <SearchInput
                            autoFocus
                            value={search_value}
                            onChange={handleSearchOnChange}
                            placeholder={localize('_t_Try “Trade”_t_')}
                            data-lpignore="true"
                            autoComplete="off"
                        />
                        {has_search_value && (
                            <SearchCrossIcon
                                src={CrossIcon}
                                alt="cross-icon"
                                onClick={clearSearch}
                            />
                        )}
                    </SearchForm>

                    {has_search_value && (
                        <SearchResult
                            has_searched_question={has_search_value && has_searched_question}
                            search_value={search_value}
                            suggested_topics={searched_question}
                        />
                    )}
                </Wrapper>
            </Container>
        </Section>
    )
}

export default SearchSection
