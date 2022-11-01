import React from 'react'
import styled from 'styled-components'
import { TOtherMarketsContent } from '../types'
import OtherMarketsCard from './other-markets-card'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    & > div {
        width: 100%;
    }
`

export type TOtherMarketsMobileProps = {
    items: TOtherMarketsContent[]
}

const OtherMarketsMobile = ({ items }: TOtherMarketsMobileProps) => {
    return (
        <Container>
            {items?.map((item) => (
                <OtherMarketsCard key={item.id} item={item.data} />
            ))}
        </Container>
    )
}

export default OtherMarketsMobile
