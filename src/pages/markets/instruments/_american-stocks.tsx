import React from 'react'
import styled from 'styled-components'
import Symbol from '../components/helper/_symbol'
import { american_stocks } from '../static/content/_market-symbols'
import { Flex } from 'components/containers'
import device from 'themes/device'

const SymbolWrapper = styled(Flex)`
    /* padding: 16px 5px 16px 16px; */
    justify-content: flex-start;

    @media ${device.tabletL} {
        padding: 14px 10px;
    }
`

const AmericanStocks = () => {
    return (
        <>
            {american_stocks.map((symbol, index) => (
                <SymbolWrapper key={index}>
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                </SymbolWrapper>
            ))}
        </>
    )
}

export default AmericanStocks
