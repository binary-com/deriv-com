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
    align-items: center;
`

const StyledButton = styled(Button)<{ active: boolean; red: boolean; big: boolean }>`
    border: 2px solid rgba(0, 0, 0, 0);
    padding: 8px 13px;
    margin: 0;
    color: ${(props) => (props.red ? 'var(--color-red)' : 'var(--color-black-5)')};
    font-size: ${(props) => props.big && '20px'};
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

    const total_pages = Math.ceil(total_items / items_per_page)

    for (let i = 1; i <= total_pages; i++) {
        page_numbers.push(i)
    }

    const last_page = page_numbers.length

    const sliced_page_numbers =
        last_page > 5
            ? page_numbers.slice(
                  (current_page === 3 && current_page - 3) ||
                      (current_page > 3 && current_page - 2),
                  (current_page < 3 && current_page + 2) || current_page + 1,
              )
            : page_numbers

    return (
        <StyledFlex>
            <StyledButton
                red
                big
                disabled={current_page === 1}
                tertiary
                m="5px"
                onClick={() => paginate(current_page - 1)}
            >
                {'<'}
            </StyledButton>
            {current_page > 3 && last_page > 5 && (
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
            {current_page + 2 < last_page && last_page > 5 && (
                <>
                    <Dots>...</Dots>
                    <StyledButton
                        active={last_page === current_page}
                        tertiary
                        m="5px"
                        onClick={() => paginate(last_page)}
                    >
                        {last_page}
                    </StyledButton>
                </>
            )}
            <StyledButton
                red
                big
                disabled={current_page === last_page}
                tertiary
                m="5px"
                onClick={() => paginate(current_page + 1)}
            >
                {'>'}
            </StyledButton>
        </StyledFlex>
    )
}

export default Pagination
