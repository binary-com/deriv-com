import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Ul, Li, ListWithLinks } from './_list'

import { Text, Header } from 'components/elements/typography'
import { localize } from 'components/localization'

const ErrorHeader = styled(Header)`
    font-size: var(--text-size-sm);
    padding-bottom: 0.8rem;
`

export const SearchSuccess = ({ suggested_topics, onClick, max_length }) => (
    <>
        <Header as="h3" color="white">
            {localize('Topic suggestions')}
        </Header>
        <ListWithLinks
            list={suggested_topics.slice(0, max_length)}
            onClick={onClick}
            link_style={{ color: 'white', size: '2rem' }}
        />
    </>
)
SearchSuccess.propTypes = {
    max_length: PropTypes.number,
    onClick: PropTypes.func,
    suggested_topics: PropTypes.array,
}

export const SearchError = ({ search }) => (
    <>
        <ErrorHeader as="h5" color="white">
            {localize(
                'Sorry, we couldn’t find any results matching “{{search}}”.',
                { search },
            )}
        </ErrorHeader>
        <Text color="green">{localize('Search tips:')}</Text>
        <Ul>
            <Li color="white">
                {localize('Check your spelling and try again')}
            </Li>
            <Li color="white">{localize('Try another keyword')}</Li>
            <Li color="white">
                {localize(
                    'Keep your search term short as our search capabilities works best with short search terms',
                )}
            </Li>
        </Ul>
    </>
)
SearchError.propTypes = {
    search: PropTypes.string,
}
