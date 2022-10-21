import React from 'react'
import styled, { css } from 'styled-components'
import { navigate } from 'gatsby'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import { queryParams } from 'common/utility'

type PaginationProps = {
    items_per_page: number
    total_items: number
    paginate: (arg1: number) => void
    current_page: number
}

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
    align-items: center;
`

const StyledButton = styled(Button)<{ active?: boolean; grey?: boolean }>`
    border: 1px solid var(--color-grey-2);
    padding: 7px 13px;
    font-size: 14px;
    margin: 0 4px;
    color: ${(props) => (props.grey ? 'var(--color-grey-2)' : 'var(--color-black-3)')};
    font-weight: normal;
    background: ${(props) => props.disabled && 'var(--color-grey-2)'};
    ${(props) => {
        if (props.active)
            return css`
                pointer-events: none;
                border: 1px solid var(--color-black-3);
            `
    }};
`

const Pagination = ({ items_per_page, total_items, paginate, current_page }: PaginationProps) => {
    const page_numbers = []

    const total_pages = Math.ceil(total_items / items_per_page)

    for (let i = 1; i <= total_pages; i++) {
        page_numbers.push(i)
    }

    const last_page = page_numbers.length

    const more_than_five_pages = last_page > 5

    const only_current_page = current_page > 2 && current_page - 1

    const sliced_page_numbers = more_than_five_pages
        ? // Example: If we are in page 8 it will only show page 8 and 9 buttons
          page_numbers.slice(only_current_page, current_page + 1)
        : // Example: If we are in page 3 it will show page 1,2,3,4,5
          page_numbers

    React.useEffect(() => {
        queryParams.set({ page: current_page })
    }, [current_page])

    if (current_page > last_page) navigate('/404/')

    return (
        <StyledFlex>
            <StyledButton
                disabled={current_page === 1}
                tertiary
                m="4px"
                onClick={() => paginate(current_page - 1)}
            >
                {'<'}
            </StyledButton>
            {current_page > 2 && last_page > 5 && (
                <>
                    <StyledButton
                        active={1 === current_page}
                        tertiary
                        m="4px"
                        onClick={() => paginate(1)}
                    >
                        {1}
                    </StyledButton>
                    <StyledButton tertiary grey m="4px">
                        ...
                    </StyledButton>
                </>
            )}
            {sliced_page_numbers.map((number) => (
                <StyledButton
                    active={number === current_page}
                    tertiary
                    m="4px"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </StyledButton>
            ))}
            {current_page + 2 < last_page && last_page > 5 && (
                <>
                    <StyledButton tertiary grey m="4px">
                        ...
                    </StyledButton>
                    <StyledButton
                        active={last_page === current_page}
                        tertiary
                        m="4px"
                        onClick={() => paginate(last_page)}
                    >
                        {last_page}
                    </StyledButton>
                </>
            )}
            <StyledButton
                disabled={current_page === last_page}
                tertiary
                m="4px"
                onClick={() => paginate(current_page + 1)}
            >
                {'>'}
            </StyledButton>
        </StyledFlex>
    )
}

export default Pagination
