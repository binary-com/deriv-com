import React from 'react'
import styled from 'styled-components'
import { convertToHash } from './_utility'
import { Text, Header, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

type TopicsType = {
    category: string
    label: string
    title: string | React.ReactElement
}

type SearchSuccessProps = {
    suggested_topics: TopicsType[] | string[]
    max_length: number
}

type SearchErrorProps = {
    search: string
}

export const Li = styled(Text).attrs({
    as: 'li',
})``

export const Ul = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: 16px;
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
    ${Li} {
        @media ${device.tabletL} {
            font-size: 16px;
            font-weight: 300;
        }
    }
`
export const Ol = styled(Ul).attrs({
    as: 'ol',
})`
    list-style-type: decimal;
`

const ErrorHeader = styled(Header)`
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
    width: 100%;

    ${Header} {
        margin-bottom: 1.6rem;
    }
`
const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    ${Li} {
        max-width: 38.4rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`
const StyledLink = styled(LocalizedLinkText)`
    text-decoration: none;
    color: black;
    font-size: 16px;

    :hover {
        color: var(--color-red);
        text-decoration: underline;
    }
`
export const SearchSuccess = ({ suggested_topics, max_length }: SearchSuccessProps) => (
    <>
        <Header as="h3" type="section-title" color="black">
            {localize('Topic suggestions')}
        </Header>

        {suggested_topics.slice(0, max_length).map((article, idx) => (
            <ListWrapper key={idx}>
                <ListNoBullets>
                    <StyledLink to={convertToHash(article.category, article.label)}>
                        {localize(article.title)}
                    </StyledLink>
                </ListNoBullets>
            </ListWrapper>
        ))}
    </>
)

export const SearchError = ({ search }: SearchErrorProps) => (
    <>
        <ErrorHeader
            as="h5"
            type="main-paragraph"
            color="black"
            size="var(--text-size-sm)"
            mb="0.8rem"
        >
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
