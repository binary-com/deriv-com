import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import device from 'themes/device'

type PaginationProps = {
    posts_per_page: number
    total_posts: number
    paginate: (arg1: number) => void
    current_page: number
}

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
`

const StyledButton = styled(Button)`
    margin: 0.3rem;

    @media ${device.mobileL} {
        padding: 10px;
    }
`

const Dots = styled.p`
    font-size: 20px;
    align-self: center;
`

const Pagination = ({ posts_per_page, total_posts, paginate, current_page }: PaginationProps) => {
    const page_numbers = []

    for (let i = 1; i <= Math.ceil(total_posts / posts_per_page); i++) {
        page_numbers.push(i)
    }

    const sliced_page_numbers =
        page_numbers.length > 5
            ? page_numbers.slice(current_page > 2 && current_page - 3, current_page + 2)
            : page_numbers

    const last_page_number = page_numbers.length

    return (
        <StyledFlex>
            {current_page > 3 && (
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
            {current_page + 2 < last_page_number && (
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
