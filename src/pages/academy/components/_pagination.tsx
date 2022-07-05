import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/form'
import { Flex } from 'components/containers'

type PaginationProps = {
    posts_per_page: number
    total_posts: number
    paginate: (arg1: number) => void
    current_page: number
    is_mobile: boolean
}

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
`

const Dots = styled.p`
    font-size: 20px;
    margin: 5px;
    align-self: center;
`

const Pagination = ({
    posts_per_page,
    total_posts,
    paginate,
    current_page,
    is_mobile,
}: PaginationProps) => {
    const page_numbers = []

    for (let i = 1; i <= Math.ceil(total_posts / posts_per_page); i++) {
        page_numbers.push(i)
    }

    const sliced_page_numbers =
        is_mobile && page_numbers.length > 5
            ? page_numbers.slice(current_page > 1 && current_page - 2, current_page + 1)
            : page_numbers

    const last_page_number = page_numbers.length

    return (
        <StyledFlex>
            {is_mobile && current_page > 3 && (
                <>
                    <Button
                        active={1 === current_page}
                        tertiary
                        m="5px"
                        onClick={() => paginate(1)}
                    >
                        {1}
                    </Button>
                    <Dots>...</Dots>
                </>
            )}
            {sliced_page_numbers.map((number) => (
                <Button
                    active={number === current_page}
                    tertiary
                    m="5px"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </Button>
            ))}
            {is_mobile && current_page + 1 < last_page_number && (
                <>
                    <Dots>...</Dots>
                    <Button
                        active={last_page_number === current_page}
                        tertiary
                        m="5px"
                        onClick={() => paginate(last_page_number)}
                    >
                        {last_page_number}
                    </Button>
                </>
            )}
        </StyledFlex>
    )
}

export default Pagination
