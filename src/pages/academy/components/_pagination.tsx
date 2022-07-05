import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/form'
import { Flex } from 'components/containers'

type PaginationProps = {
    posts_per_page: number
    total_posts: number
    paginate: (arg1: number) => void
    current_page: number
}

const StyledFlex = styled(Flex)`
    margin-bottom: 40px;
`

const Pagination = ({ posts_per_page, total_posts, paginate, current_page }: PaginationProps) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(total_posts / posts_per_page); i++) {
        pageNumbers.push(i)
    }
    return (
        <StyledFlex>
            {pageNumbers.map((number) => (
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
        </StyledFlex>
    )
}

export default Pagination
