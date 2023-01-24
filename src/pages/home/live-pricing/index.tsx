import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import LiveMarketTable from './components/_live_market_table'
import { TAvailableLiveMarkets } from './_types'
import { market_buttons } from './_utils'
import { Flex } from 'components/containers'
import { Header, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import { handleRedirectToTradersHub } from 'components/layout/nav/util/nav-methods'

const LivePricingSection = styled.section`
    background-color: var(--color-white);
    min-height: 780px;
    display: flex;
    flex-direction: column;
    padding: 40px 0 80px;
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

const Markets = styled.div`
    position: relative;
    width: 100%;
`

const MarketsContainer = styled.div`
    margin: 0 auto;
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
    margin: 0;
    min-height: 48px;
    position: relative;
    border-bottom: 2px solid red;
    background: none;
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    white-space: nowrap;

    ${Header} {
        font-weight: normal;
        font-size: 2rem;
        color: var(--color-grey-5);
    }

    ${({ selected }) =>
        selected
            ? css`
                  border-bottom: 2px solid red;
                  & ${Header} {
                      color: var(--color-red);
                  }
              `
            : css`
                  border-bottom: 2px solid var(--color-grey-8);
                  & ${Header} {
                  }
              `}
`
const StyledIcon = styled.img`
    margin-bottom: 10px;
`
const StyledFlex = styled(Flex)`
    gap: 20px;
`
const StyledButton = styled(Button)`
    border-radius: 16px;
`
const DisclaimerText = styled(Header)`
    color: var(--color-grey-5);
    font-weight: normal;
    text-align: center;
    font-size: 1.6rem;
`

const LivePricing = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }
    const [is_logged_in] = useAuthCheck()
    const handleLogin = useHandleLogin()

    return (
        <LivePricingSection id="live-pricing">
            <Markets>
                <MarketsContainer>
                    {market_buttons.map((marketItem) => (
                        <>
                            <MarketButton
                                selected={marketItem.market_name === selected_market}
                                key={marketItem.id}
                                onClick={() => {
                                    onMarketButtonClick(marketItem.market_name)
                                }}
                            >
                                <StyledIcon src={marketItem.src} alt={marketItem.button_text} />
                                <Header type="paragraph-2">
                                    <Localize translate_text={marketItem.button_text} />
                                </Header>
                            </MarketButton>
                        </>
                    ))}
                </MarketsContainer>
            </Markets>
            <ContainerWrapper>
                {market_buttons.map(
                    (marketItem) =>
                        marketItem.market_name === selected_market && (
                            <Header type="paragraph-1" weight="normal" align="center">
                                <Localize translate_text={marketItem.market_description} />
                            </Header>
                        ),
                )}
                <LiveMarketTable market={selected_market} />
                {market_buttons.map(
                    (marketItem) =>
                        marketItem.market_name === selected_market && (
                            <LocalizedLinkText>
                                See all {marketItem.market_name} market
                            </LocalizedLinkText>
                        ),
                )}

                <DisclaimerText>
                    <Localize translate_text="All spreads are indicative. To view real-time spreads, please refer to your terminal." />
                </DisclaimerText>

                <StyledFlex>
                    <StyledButton primary>
                        <Localize translate_text="See trading specifications" />
                    </StyledButton>
                    {is_logged_in ? (
                        <StyledButton onClick={handleRedirectToTradersHub} secondary>
                            <Localize translate_text="Trade now" />
                        </StyledButton>
                    ) : (
                        <StyledButton onClick={handleLogin} secondary>
                            <Localize translate_text="Trade now" />
                        </StyledButton>
                    )}
                </StyledFlex>
            </ContainerWrapper>
        </LivePricingSection>
    )
}

export default LivePricing
