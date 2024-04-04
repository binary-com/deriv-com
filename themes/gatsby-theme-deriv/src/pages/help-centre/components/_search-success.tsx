import React from 'react'
import styled from 'styled-components'
import { TQuestions } from '../data/_data-types'
import { convertToHash } from './_utility'
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'

type TSearchSuccess = {
    suggested_topics: TQuestions[]
}

const StyledList = styled.ul`
    list-style: none;
    max-width: 100rem;
    padding-right: 2.4rem;
    padding-bottom: 4.2rem;
`
const ListItem = styled.li`
    margin-top: 5rem;

    :first-child {
        margin-top: 4rem;
    }
`
const Link = styled(LocalizedLink)`
    color: var(--color-black-3);
    text-decoration: none;
    font-size: 16px;

    :hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`

const SearchSuccess = ({ suggested_topics }: TSearchSuccess) => {
    const filtered_topics = [...new Set(suggested_topics)]

    return (
        <>
            <Header as="h3" type="heading-3" color="black">
                <Localize translate_text="_t_Topic suggestions_t_" />
            </Header>

            <StyledList>
                {filtered_topics.slice(0, 3).map(({ category, question, label }) => (
                    <ListItem key={label}>
                        <Link to={convertToHash(category, label)}>
                            <Localize translate_text={question} />
                        </Link>
                    </ListItem>
                ))}
            </StyledList>
        </>
    )
}

export default SearchSuccess
