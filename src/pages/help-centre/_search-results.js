import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { convertToHash } from './_utility'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

export const Ul = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: var(--text-size-s);
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
    li {
        @media ${device.tabletL} {
            font-size: var(--text-size-sm);
            font-weight: 300;
        }
    }
`
export const Ol = styled(Ul).attrs({
    as: 'ol',
})`
    list-style-type: decimal;
`

export const Li = styled(Text).attrs({
    as: 'li',
})``

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
const ListWrapper = styled.div`
    margin-right: 2.4rem;
    max-width: 100rem;
    width: 100rem;

    ${Header} {
        margin-bottom: 1.6rem;
    }

    @media ${device.tabletL} {
        padding-top: 3.55rem;
    }
`
const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    li {
        max-width: 38.4rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: var(--text-size-s);

    :hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`
export const SearchSuccess = ({ suggested_topics, max_length }) => (
    <>
        <Header as="h3" color="black">
            {localize('Topic suggestions')}
        </Header>

        {suggested_topics.slice(0, max_length).map((article, idx) => (
            <ListWrapper key={idx}>
                <ListNoBullets>
                    <StyledLink to={convertToHash(article.category, article.label)}>
                        {article.title}
                    </StyledLink>
                </ListNoBullets>
            </ListWrapper>
        ))}
    </>
)
SearchSuccess.propTypes = {
    max_length: PropTypes.number,
    onClick: PropTypes.func,
    suggested_topics: PropTypes.array,
}

export const SearchError = ({ search }) => (
    <>
        <ErrorHeader as="h5" color="black">
            {localize("Sorry, we couldn’t find any results matching '{{search}}'.", { search })}
        </ErrorHeader>
        <SearchText color="green">{localize('Search tips:')}</SearchText>
        <Ul>
            <Li color="black">{localize('Check your spelling and try again')}</Li>
            <Li color="black">{localize('Try another keyword')}</Li>
            <Li color="black">
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
