import React from 'react'
import styled from 'styled-components'
import { TAvailableMarketSmartContent } from '../types'
import MarketItemCard from './market_item.card'
import device from 'themes/device'
import { Container as BaseContainer } from 'components/containers'

const Wrapper = styled.div`
    position: relative;
    padding-top: 1.6rem;
    padding-bottom: 0.8rem;
`

const Container = styled(BaseContainer)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: var(--color-green-2);
    border-radius: 16px;
    width: 30%;

    @media ${device.mobileL} {
        width: 184px;
    }
`

interface IMobileAvailableMarketsProps<T> {
    items: T[]
}

const MobileAvailableMarkets = <T extends TAvailableMarketSmartContent>({
    items,
}: IMobileAvailableMarketsProps<T>) => {
    return (
        <Wrapper>
            <Container fd="column">
                {items.map((item) => {
                    return <MarketItemCard key={item.id} item={item} />
                })}
            </Container>
            <Background />
        </Wrapper>
    )
}

export default MobileAvailableMarkets
