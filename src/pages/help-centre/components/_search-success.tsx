import React, { Fragment } from 'react'
import styled from 'styled-components'
import { TQuestions } from '../data/_data-types'
import { convertToHash } from "./_utility"
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'

type TSearchSuccess = {
    suggested_topics: TQuestions[]
}

const Ul = styled.ul`
    list-style: none;
    max-width: 100rem;
    padding-right: 2.4rem;
    padding-bottom: 4.2rem;
`
const Li = styled.li`
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

const SearchSuccess = ({ suggested_topics }: TSearchSuccess) => (
    <Fragment>
        <Header as="h3" type="heading-3" color="black">
            <Localize translate_text="_t_Topic suggestions_t_" />
        </Header>

        <Ul>
            {suggested_topics.slice(0, 3).map(({ category, question, label }) => (
                <Li key={label}>
                    <Link to={convertToHash(category, label)}>
                        <Localize translate_text={question} />
                    </Link>
                </Li>
            ))}
        </Ul>
    </Fragment>
)

export default SearchSuccess
