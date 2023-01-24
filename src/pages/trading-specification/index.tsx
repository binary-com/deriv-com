import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { market_buttons } from './_utils'
import { TAvailableLiveMarkets } from './_types'
import { localize, Localize, LocalizedLink, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import DerivMT5 from 'images/svg/trading-specification/deriv-mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
import useRegion from 'components/hooks/use-region'
import SearchIcon from 'images/svg/help/search.svg'

const MarketsContainer = styled.div`
    margin: 20px auto;
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
const PlatformsContainer = styled(Flex)`
    justify-content: space-around;
    width: unset;
    gap: 12px;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    img {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;
    }
    a:last-child {
        margin-right: 0;
        min-width: 95px;
    }
    @media ${device.tablet} {
        width: ${(props) => props.width};
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    width: 108px;
`
const StyledFlex = styled(Flex)`
    padding: 20px;
`
const SearchForm = styled.form`
    position: relative;
    align-items: center;
    padding: 6px 8px;
    gap: 8px;
    width: 464px;
    height: 32px;
    border: 1px solid #d6dadb;
    border-radius: 12px;
`
const StyledSearchIcon = styled.img`
    width: 16px;
    height: 16px;
`
const SearchInput = styled.input`
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    padding: 0 14px;

    ::placeholder {
        color: var(--color-grey-17);
    }
`

const TradingSpecification = () => {
    const [selected_market, setSelectedMarket] = useState<TAvailableLiveMarkets>('forex')
    const onMarketButtonClick = (selected) => {
        setSelectedMarket(selected)
    }
    const { is_row } = useRegion()
    return (
        <Layout>
            <SectionContainer>
                <Header type="page-title" align="center">
                    <Localize translate_text="Trading specifications for CFDs on Deriv" />
                </Header>
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
                                <Header type="paragraph-2">
                                    <Localize translate_text={marketItem.button_text} />
                                </Header>
                            </MarketButton>
                        </>
                    ))}
                </MarketsContainer>
                <ContainerWrapper>
                    {market_buttons.map(
                        (marketItem) =>
                            marketItem.market_name === selected_market && (
                                <Header type="paragraph-1" weight="normal" align="center">
                                    <Localize translate_text={marketItem.market_description} />
                                </Header>
                            ),
                    )}
                </ContainerWrapper>

                <StyledFlex wrap="nowrap" ai="center">
                    <PlatformsContainer ai="center">
                        <Header type="paragraph-1" weight="normal" width="auto">
                            <Localize translate_text="Available on" />
                        </Header>
                        {is_row && (
                            <StyledLocalizedLink to="/dmt5/">
                                <Flex direction="row">
                                    <img src={DerivMT5} alt="Deriv X" width="24" height="24" />
                                    <Header type="paragraph-1" weight="normal">
                                        <Localize translate_text="Deriv MT5" />
                                    </Header>
                                </Flex>
                            </StyledLocalizedLink>
                        )}
                        <StyledLocalizedLink to="/derivx/">
                            <Flex direction="row">
                                <img src={DerivX} alt="Deriv X" width="24" height="24" />
                                <Header type="paragraph-1" weight="normal">
                                    <Localize translate_text="Deriv X" />
                                </Header>
                            </Flex>
                        </StyledLocalizedLink>
                    </PlatformsContainer>
                </StyledFlex>
                <StyledFlex>
                    <SearchForm>
                        <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                        <SearchInput
                            autoFocus
                            placeholder={localize('Find Instrument')}
                            data-lpignore="true"
                            autoComplete="off"
                        />
                    </SearchForm>
                </StyledFlex>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(TradingSpecification)
