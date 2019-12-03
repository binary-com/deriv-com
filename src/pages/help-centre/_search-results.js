import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Ul, Li, ListWithLinks } from './_list'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const ErrorHeader = styled(Header)`
    font-size: var(--text-size-sm);
    padding-bottom: 0.8rem;

    @media ${device.tabletL} {
        font-weight: normal;
    }
`
const SearchText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
export const SearchSuccess = ({ suggested_topics, onClick, max_length }) => (
    <>
        <Header as="h3" color="black">
            {localize('Topic suggestions')}
        </Header>
        <ListWithLinks
            list={suggested_topics.slice(0, max_length)}
            onClick={onClick}
            link_style={{ color: 'black', size: '2rem' }}
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
            {localize('Sorry, we couldn’t find any results matching “{{search}}”.', { search })}
        </ErrorHeader>
        <SearchText color="green">{localize('Search tips:')}</SearchText>
        <Ul>
            <Li color="white">{localize('Check your spelling and try again')}</Li>
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
