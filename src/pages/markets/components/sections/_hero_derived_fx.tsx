import React from 'react'
import styled from 'styled-components'
import BannerBg from 'images/common/markets/hero-forex.png'
import NavMarkets from 'components/layout/nav/nav-markets'
import { Header } from 'components/elements'
import Button from 'components/custom/_button'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { Desktop, Mobile } from 'components/containers'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'

const BackgroundWrapper = styled.div`
    position: relative;
    background: url(${BannerBg});
    background-size: 89rem;
    background-repeat: no-repeat;
    background-position: right;
    height: 63rem;
`
const StyledButton = styled.div`
    margin-top: 5rem;
    margin-left: 10vw;

    @media (min-width: 2110px) {
        margin-left: 20vw;
    }

    @media (min-width: 1201px) and (max-width: 1340px) {
        margin-left: 5vw;
    }
    @media (min-width: 1520px) and (max-width: 2080px) {
        margin-left: 16vw;
    }
    @media ${device.laptopM} {
        margin-left: 0;
        margin-top: 0;
    }
`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-left: 10vw;

    @media (min-width: 2110px) {
        margin-left: 20vw;
    }

    @media (min-width: 1201px) and (max-width: 1340px) {
        margin-left: 5vw;
    }
    @media (min-width: 1520px) and (max-width: 2080px) {
        margin-left: 16vw;
    }

    @media ${device.laptopM} {
        padding: 4rem 2.3rem;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
        margin-left: 0;

        h1 {
            text-align: center;
        }
        h4 {
            text-align: center;
        }
    }
    @media ${device.mobileM} {
        padding: 4rem 1.3rem;
    }
`
const MarketSubHeader = styled.div`
    font-size: 16px;
    width: 25vw;
    color: var(--color-black-9);
    text-align: start;
    line-height: 24px;

    @media ${device.laptopM} {
        min-width: 40rem;
    }
    @media ${device.mobileM} {
        font-size: 14px;
        width: 83vw;
    }
`
const StyledHeader = styled(Header)`
    font-size: 48px;
    color: var(--color-black-9);
    width: 28vw;
    text-align: start;
    margin-top: 16rem;

    @media ${device.laptopM} {
        font-size: 32px;
        align-items: center;
        margin-top: 0;
    }
`

type MarketProps = {
    title: string
    description: string
}
export const DerivedFXHero = ({ title, description }: MarketProps) => {
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()

    return (
        <>
            <NavMarkets />
            <Desktop breakpoint={'laptopM'}>
                <BackgroundWrapper>
                    <StyledContainer>
                        <StyledHeader as="h1" align="center">
                            <Localize translate_text={title} />
                        </StyledHeader>
                        <MarketSubHeader color="white">
                            <Localize translate_text={description} />
                        </MarketSubHeader>
                    </StyledContainer>
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
                </BackgroundWrapper>
            </Desktop>
            <Mobile breakpoint={'laptopM'}>
                <BackgroundWrapper />
                <StyledContainer>
                    <StyledHeader as="h1" align="center">
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
