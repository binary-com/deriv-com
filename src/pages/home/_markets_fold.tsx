import React, { ReactElement } from 'react'
import styled from 'styled-components'

const FoldWrapper = styled.div`
    padding: 120px 0;
`

const FoldContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`

const MarketsFold = (): ReactElement => {
    return (
        <FoldWrapper>
            <FoldContainer>Testis</FoldContainer>
        </FoldWrapper>
    )
}

export default MarketsFold
