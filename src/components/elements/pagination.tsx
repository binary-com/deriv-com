import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'components/form'
import { Flex } from 'components/containers'

type PaginationProps = {
    items_per_page: number
    total_items: number
    paginate: (arg1: number) => void
    current_page: number
}

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
`

const StyledButton = styled(Button)<{ active: boolean }>`
    border: 2px solid rgba(0, 0, 0, 0);
    padding: 8px 13px;
    margin: 0;
    color: var(--color-black-5);
    ${(props) => {
        if (props.active)
            return css`
                pointer-events: none;
                background: var(--color-red);
                color: var(--color-white);
            `
    }}
`

const Dots = styled.p`
    color: var(--color-black-5);
    font-size: 16px;
    align-self: center;
`

const Pagination = ({ items_per_page, total_items, paginate, current_page }: PaginationProps) => {
    const page_numbers = []

    for (let i = 1; i <= Math.ceil(total_items / items_per_page); i++) {
        page_numbers.push(i)
    }

    const sliced_page_numbers =
        page_numbers.length > 5
            ? page_numbers.slice(
                  (current_page > 2 && current_page !== 4 && current_page - 3) ||
                      (current_page === 4 && current_page - 4),
                  current_page + 2,
              )
            : page_numbers

    const last_page_number = page_numbers.length

    return (
        <StyledFlex>
            {current_page > 4 && page_numbers.length > 5 && (
                <>
                    <StyledButton
                        active={1 === current_page}
                        tertiary
                        m="5px"
                        onClick={() => paginate(1)}
                    >
                        {1}
                    </StyledButton>
                    <Dots>...</Dots>
                </>
            )}
            {sliced_page_numbers.map((number) => (
                <StyledButton
                    active={number === current_page}
                    tertiary
                    m="5px"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </StyledButton>
            ))}
            {current_page + 2 < last_page_number && page_numbers.length > 5 && (
                <>
                    <Dots>...</Dots>
                    <StyledButton
                        active={last_page_number === current_page}
                        tertiary
                        m="5px"
                        onClick={() => paginate(last_page_number)}
                    >
                        {last_page_number}
                    </StyledButton>
                </>
            )}
        </StyledFlex>
    )
}

export default Pagination
