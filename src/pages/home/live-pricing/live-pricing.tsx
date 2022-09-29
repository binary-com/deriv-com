import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import LiveMarketTable from './components/_live_market_table'
import { TAvailableLiveMarkets } from './_types'
import { market_buttons } from './_utils'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import device from 'themes/device'

const LivePricingSection = styled.section`
    background-color: #f9fbff;
    min-height: 780px;
`

const ContainerWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 0 auto;
    padding: 2rem;
    width: 60%;
    @media ${device.tablet} {
        width: 100vw;
    }
`

const MmdDiv = styled.div`
    position: relative;
    width: 100%;
`

const MarketsContainer = styled.div`
    margin: 0 auto;
    gap: 2rem;
    overflow-y: hidden;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2rem;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
    @media ${device.tablet} {
        justify-content: flex-start;
    }
`
const MarketButton = styled.button<{ selected: boolean }>`
    min-height: 48px;
    position: relative;
    background-color: #f2f3f4;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.1s ease-in;
    white-space: nowrap;
    ${({ selected }) =>
        selected
            ? css`
                  color: unset;
                  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.08);
                  background-color: #ffffff;
              `
            : css`
                  & ${Header} {
                      color: #999999;
                  }
              `}
`

const LivePricing = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('synthetic_index')
    const [show_all_markets, setShowAllMarkets] = useState(false)
    const [is_expand_visible, setIsExpandVisible] = useState(false)

    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }

    const toggle_show_all_markets = () => {
        setShowAllMarkets((prevState) => !prevState)
    }

    return (
        <LivePricingSection>
            <MmdDiv>
                <MarketsContainer>
                    {market_buttons.map((marketItem) => (
                        <MarketButton
                            selected={marketItem.market_name === selected_market}
                            key={marketItem.id}
                            onClick={() => {
                                onMarketButtonClick(marketItem.market_name)
                            }}
                        >
                            <Header type="paragraph-2">{marketItem.button_text}</Header>
                        </MarketButton>
                    ))}
                </MarketsContainer>
            </MmdDiv>
            <ContainerWrapper>
                <Header type="paragraph-2" weight="normal" align="center">
                    Benefit from round-the-clock trading hours (Monday to Friday), high liquidity,
                    low barriers to entry, a wide range of offerings, and opportunitiesto trade on
                    world events.
                </Header>
                <LiveMarketTable
                    show_all_markets={show_all_markets}
                    market={selected_market}
                    setIsExpandVisible={setIsExpandVisible}
                />
                {is_expand_visible && (
                    <Button tertiary onClick={toggle_show_all_markets}>
                        {show_all_markets ? 'See trending markets' : 'See all markets'}
                    </Button>
                )}
            </ContainerWrapper>
        </LivePricingSection>
    )
}

export default LivePricing
