import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'

type TSearchError = {
    search_value: string
}

const data: TString[] = [
    '_t_Check your spelling and try again_t_',
    '_t_Try another keyword_t_',
    '_t_Keep your search term short as our search capabilities works best with short search terms_t_',
]

const ErrorWrapper = styled(Header)`
    @media ${device.tabletL} {
        font-weight: normal;
    }
`
const Tips = styled(Header)`
    font-size: 16px;
    margin-top: 3.6rem;

    @media ${device.tabletL} {
        font-size: 20px;
    }
`
const StyledList = styled.ul`
    list-style: unset;
    font-size: 16px;
    margin-left: 2rem;

    > li {
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            font-weight: 300;
        }

        :first-child {
            margin-top: 1.2rem;
        }
    }
`

const SearchError = ({ search_value }: TSearchError) => (
    <>
        <ErrorWrapper as="h5" type="paragraph-1" color="black" size="var(--text-size-sm)">
            <Localize
                translate_text="_t_Sorry, we couldn’t find any results matching '{{search_value}}'._t_"
                values={{ search_value }}
            />
        </ErrorWrapper>

        <Tips color="green" weight="normal">
            <Localize translate_text="_t_Search tips:_t_" />
        </Tips>
        <StyledList>
            {data.map((error) => (
                <li key={error}>
                    <Localize translate_text={error} />
                </li>
            ))}
        </StyledList>
    </>
)

export default SearchError
