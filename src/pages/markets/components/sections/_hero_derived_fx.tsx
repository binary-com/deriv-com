import React from 'react'
import styled from 'styled-components'
import NavMarkets from 'components/layout/nav/nav-markets'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import BannerBg from 'images/common/markets/hero-derived-fx.png'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const BackgroundWrapper = styled.div`
    background: url(${BannerBg});
    background-repeat: round;
    position: relative;
    min-height: 38.3rem;

    @media ${device.tabletL} {
        min-height: 500px;
    }
`
const StyledContainer = styled(Container)`
    margin-top: 175px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    position: relative;
    top: 7.2rem;

    h4,
    h1 {
        z-index: 10;
    }
    h1 {
        line-height: 1.25;
    }
    h4 {
        line-height: 1.5;
    }
    @media ${device.tabletL} {
        padding: 4rem 2.3rem;
        top: 0;
        gap: 20px;

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
const MarketSubHeader = styled(Header)`
    font-size: 16px;
    width: 58vw;

    @media ${device.tabletL} {
        width: 86vw;
    }
    @media ${device.mobileM} {
        font-size: 14px;
        width: 83vw;
    }
`
const StyledHeader = styled(Header)`
    font-size: 48px;
    color: white;

    @media ${device.tabletL} {
        font-size: 32px;
        text-align: center;
    }
`
const StyledButton = styled(Button)`
    border-radius: 4px;
    margin-top: 20px;

    @media ${device.tabletL} {
        width: 90vw;
        font-size: 1.75rem;
        padding: 1.25rem 4.75rem;
        margin-top: 16px;
    }
`
type MarketProps = {
    title: string
    description: string
}

const GetTrading = () => (
    <StyledButton width="128px" onClick={handleGetTrading} secondary>
        {localize('Get Trading')}
    </StyledButton>
)

const CreateFreeDemoAccount = () => {
    const handleSignup = useHandleSignup()

    return (
        <StyledButton onClick={handleSignup} id="dm-why-trade-signup" secondary>
            {localize('Create free demo account')}
        </StyledButton>
    )
}

export const DerivedFXHero = ({ title, description }: MarketProps) => {
    const [is_logged_in] = useAuthCheck()
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <BackgroundWrapper>
            <NavMarkets />
            <StyledContainer>
                <StyledHeader as="h1" align="center">
                    <Localize translate_text={title} />
                </StyledHeader>
                <MarketSubHeader color="white" weight="normal" align="center">
                    <Localize translate_text={description} />
                </MarketSubHeader>
                {is_logged_in && !is_deriv_go && <GetTrading />}
                {!is_logged_in && !is_deriv_go && <CreateFreeDemoAccount />}
            </StyledContainer>
        </BackgroundWrapper>
    )
}
