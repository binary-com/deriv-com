import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'components/containers'
import Button from 'components/custom/_button'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { handleGetTrading } from 'components/custom/utils'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TString } from 'types/generics'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MarketBottomNav from 'features/components/templates/navigation/template/market-bottom-nav'

type ContainerProps = {
    isDerivGo?: boolean
    is_rtl?: boolean
}

type MarketProps = {
    title: TString
    description: TString
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

const StyledButton = styled.div<BackgroundWrapperProps>`
    margin-top: 1rem;
`
const MarketSubHeader = styled.div`
    font-size: 16px;
    width: 70%;
    color: var(--color-black-9);
    text-align: left;
    line-height: 24px;

    @media ${device.tabletL} {
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
    width: 70%;
    text-wrap: nowrap;
    text-align: ${(props) => (props.is_rtl ? 'end' : 'start')};
    margin-bottom: 1rem;
    @media ${device.laptopM} {
        font-size: 28px;
    }

    @media ${device.tabletL} {
        font-size: 28px;
        width: 100%;
        text-align: center;
        align-items: center;
        margin-top: 0;
    }
`
const BackgroundStyle = styled.div`
    padding-top: 14rem;
    background-color: var(--color-white);
    flex: 1;
    height: 65rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    direction: ltr;

    @media ${device.laptopM} {
        height: 55rem;
    }

    @media (min-width: 1920px) {
        height: 73rem;
    }

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const StyledContainer = styled(Container)`
    max-width: 123.2rem;
    flex-wrap: wrap;

    @media (min-width: 1536px) {
        width: 80%;
    }

    @media (min-width: 1280px) and (max-width: 1536px) {
        width: 84%;
        max-width: 100%;
    }
    @media (min-width: 920px) and (max-width: 1280px) {
        width: 90%;
    }
    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0;
        width: 100%;
    }
`

const ContentWrapperStyle = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    max-width: 40%;
    @media ${device.tabletL} {
        max-width: 100%;
    }
`
const Content = styled.div`
    max-width: 632px;
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    overflow-wrap: break-word;

    @media ${device.tabletL} {
        padding: 0 16px 40px;
        align-items: center;
    }
`
const HeroImageWrapper = styled.div`
    width: 60%;
    position: absolute;
    right: 0;
    height: 100%;

    @media (min-width: 1920px) {
        width: 50%;
    }
    @media (min-width: 992px) and (max-width: 1440px) {
        width: 65%;
    }
    @media ${device.tabletL} {
        width: 100%;
        position: relative;
    }
`
const ImageWrapper = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: end;
    width: 100%;
    align-self: center;
    flex: 1 1 0%;
`
const ImageStyle = styled.div`
    z-index: 1;
    max-width: fit-content;
    width: inherit;

    @media ${device.tabletL} {
        width: 100%;
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
    const is_rtl = useIsRtl()
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <>
            {!is_deriv_go && (
                <div className="fixed z-[4] w-full">
                    <MainRowNavigation />
                    <div className="pt-[8rem]">
                        <MarketBottomNav />
                    </div>
                </div>
            )}
            <BackgroundStyle>
                <StyledContainer jc="flex-start">
                    <ContentWrapperStyle>
                        <Content>
                            <StyledHeader is_rtl={is_rtl}>
                                <Localize translate_text={title} />
                            </StyledHeader>
                            <MarketSubHeader color="white">
                                <Localize translate_text={description} />
                            </MarketSubHeader>
                            <StyledButton is_rtl={is_rtl}>
                                {!is_deriv_go ? (
                                    is_logged_in ? (
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
                                    )
                                ) : null}
                            </StyledButton>
                        </Content>
                    </ContentWrapperStyle>
                    <HeroImageWrapper>
                        <ImageWrapper>
                            <ImageStyle>
                                {is_forex ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/hero-forex.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                                {is_derived_row ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/derived-row.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                                {is_derived_eu ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/derived-eu.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                                {is_stocks_and_indices ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/stocks-and-indices.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                                {is_cryptocurrencies ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/cryptocurrencies.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                                {is_commodities ? (
                                    <StaticImage
                                        src="../../../../images/common/markets/commodities.png"
                                        loading="eager"
                                        formats={['avif', 'webp', 'auto']}
                                        alt={localize('_t_banner_t_')}
                                        placeholder="blurred"
                                    />
                                ) : null}
                            </ImageStyle>
                        </ImageWrapper>
                    </HeroImageWrapper>
                </StyledContainer>
            </BackgroundStyle>
        </>
    )
}
