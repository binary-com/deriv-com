import React from 'react'
import styled from 'styled-components'
import ForexBg from 'images/common/markets/hero-forex.jpg'
import DerivedEuBg from 'images/common/markets/derived-eu.jpg'
import DerivedRowBg from 'images/common/markets/derived-row.jpg'
import StocksAndIndicesBg from 'images/common/markets/stocks-and-indices.jpg'
import CryptocurrenciesBg from 'images/common/markets/cryptocurrencies.jpg'
import CommoditiesBg from 'images/common/markets/commodities.jpg'
import { Container, Desktop, Mobile } from 'components/containers'
import { Header } from 'components/elements'
import Button from 'components/custom/_button'
import { Localize } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import MarketNav from 'features/components/templates/navigation/market-nav'
import { handleGetTrading } from 'components/custom/utils'

type ContainerProps = {
    isDerivGo?: boolean
    is_rtl?: boolean
}

type MarketProps = {
    title: string
    description: string
    is_forex?: boolean
    is_derived_row?: boolean
    is_derived_eu?: boolean
    is_stocks_and_indices?: boolean
    is_cryptocurrencies?: boolean
    is_commodities?: boolean
}

type BackgroundWrapperProps = {
    is_forex?: boolean
    is_derived_row?: boolean
    is_derived_eu?: boolean
    is_stocks_and_indices?: boolean
    is_cryptocurrencies?: boolean
    is_commodities?: boolean
    is_rtl?: boolean
}

const handleBg = ({
    is_forex,
    is_derived_row,
    is_derived_eu,
    is_stocks_and_indices,
    is_cryptocurrencies,
    is_commodities,
}: BackgroundWrapperProps) => {
    {
        if (is_forex) {
            return ForexBg
        }
        if (is_derived_row) {
            return DerivedRowBg
        }
        if (is_derived_eu) {
            return DerivedEuBg
        }
        if (is_stocks_and_indices) {
            return StocksAndIndicesBg
        }
        if (is_cryptocurrencies) {
            return CryptocurrenciesBg
        }
        if (is_commodities) {
            return CommoditiesBg
        }
    }
}

const StyledButton = styled.div<BackgroundWrapperProps>`
    margin-top: 1rem;
`
const StyledContainer = styled(Container)<ContainerProps>`
    margin-top: ${(props) => (props.isDerivGo ? '175px' : '130px')};
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.is_rtl ? 'flex-end' : 'flex-start')};
    gap: 12px;
    margin-inline: auto;
    max-width: 123.2rem;

    h4,
    h1 {
        z-index: 3;
    }

    @media ${device.laptop} {
        margin-top: 1rem;
        padding: 0 2.3rem 5.5rem 2.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
        margin-inline: auto;

        h1 {
            text-align: center;
        }
        h4 {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        margin-top: -11rem;
    }

    @media (min-width: 576px) and (max-width: 682px) {
        margin-top: -9rem;
    }
`

const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
    position: relative;
    background: url(${handleBg});
    background-size: 200vw;
    background-repeat: no-repeat;
    background-position: right;
    height: 50.6rem;
    margin-bottom: 8rem;

    @media (max-width: 610px) {
        background-size: 1200px;
        background-position-x: -588px;
        margin-bottom: 5rem;
    }

    @media (min-width: 1024px) {
        background-size: 112vw;
    }

    @media (min-width: 1980px) {
        background-size: 90vw;
    }
    @media (min-width: 1024px) and (max-width: 1340px) {
        background-size: ${(props) => (props.is_rtl ? '115vw' : '130vw')};
    }
`
const MarketSubHeader = styled.div`
    font-size: 16px;
    width: 25vw;
    color: var(--color-black-9);
    text-align: left;
    line-height: 24px;

    @media ${device.laptop} {
        min-width: 35rem;
        text-align: center;
    }
    @media ${device.mobileM} {
        font-size: 14px;
        width: 83vw;
        min-width: 0;
        text-align: center;
    }
`
const StyledHeader = styled.h1<ContainerProps>`
    font-size: 48px;
    color: var(--color-black-9);
    width: 39vw;
    text-align: ${(props) => (props.is_rtl ? 'end' : 'start')};
    margin-top: 12rem;
    margin-bottom: 1rem;

    @media ${device.laptop} {
        font-size: 28px;
        width: 100%;
        align-items: center;
        margin-top: 0;
    }
`

export const DerivedFXHero = ({
    title,
    description,
    is_forex,
    is_derived_row,
    is_derived_eu,
    is_stocks_and_indices,
    is_cryptocurrencies,
    is_commodities,
}: MarketProps) => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()
    const { is_deriv_go } = usePlatformQueryParam()

    const is_rtl = useIsRtl()

    return (
        <>
            <MarketNav />
            <Desktop breakpoint={'laptop'}>
                <BackgroundWrapper
                    is_forex={is_forex}
                    is_derived_row={is_derived_row}
                    is_derived_eu={is_derived_eu}
                    is_stocks_and_indices={is_stocks_and_indices}
                    is_cryptocurrencies={is_cryptocurrencies}
                    is_commodities={is_commodities}
                    is_rtl={is_rtl}
                >
                    <StyledContainer is_rtl={is_rtl} isDerivGo={is_deriv_go}>
                        <StyledHeader is_rtl={is_rtl}>
                            <Localize translate_text={title} />
                        </StyledHeader>
                        <MarketSubHeader color="white">
                            <Localize translate_text={description} />
                        </MarketSubHeader>
                        <StyledButton is_rtl={is_rtl}>
                            {is_logged_in ? (
                                <Button
                                    onClick={handleGetTrading}
                                    label="_t_Get trading_t_"
                                    primary
                                />
                            ) : (
                                <Button
                                    onClick={handleSignup}
                                    label="_t_Create free demo account_t_"
                                    primary
                                />
                            )}
                        </StyledButton>
                    </StyledContainer>
                </BackgroundWrapper>
            </Desktop>
            <Mobile breakpoint={'laptop'}>
                <BackgroundWrapper
                    is_forex={is_forex}
                    is_derived_row={is_derived_row}
                    is_derived_eu={is_derived_eu}
                    is_stocks_and_indices={is_stocks_and_indices}
                    is_cryptocurrencies={is_cryptocurrencies}
                    is_commodities={is_commodities}
                    is_rtl={is_rtl}
                />
                <StyledContainer>
                    <StyledHeader is_rtl={is_rtl} as="h1" align="center">
                        <Localize translate_text={title} />
                    </StyledHeader>
                    <MarketSubHeader color="white">
                        <Localize translate_text={description} />
                    </MarketSubHeader>
                    <StyledButton>
                        {is_logged_in ? (
                            <Button onClick={handleGetTrading} label="_t_Get trading_t_" primary />
                        ) : (
                            <Button
                                onClick={handleSignup}
                                label="_t_Create free demo account_t_"
                                primary
                            />
                        )}
                    </StyledButton>
                </StyledContainer>
            </Mobile>
        </>
    )
}
