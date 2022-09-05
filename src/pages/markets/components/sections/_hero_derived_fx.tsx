import React from 'react'
import styled from 'styled-components'
import NavMarkets from 'components/layout/nav/nav-markets'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import BannerBg from 'images/common/markets/hero-derived-fx.png'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'

const BackgroundWrapper = styled.div`
    background: url(${BannerBg});
    background-repeat: round;
    position: relative;
    min-height: 38.3rem;

    @media ${device.tabletL} {
        height: unset;
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
        padding: 12.5rem 0;

        h1 {
            text-align: left;
        }
        h4 {
            text-align: left;
        }
    }
`
const MarketSubHeader = styled(Header)`
    font-size: 16px;
    @media ${device.tabletL} {
        font-size: 18px;
        margin-top: 16px;
        line-height: 28px;
    }
`
const ImageWrapper = styled(Flex)`
    position: absolute;
    height: 100%;
`
const StyledHeader = styled(Header)`
    font-size: 48px;
    color: white;
`
const StyledButton = styled(Button)`
    border-radius: 4px;
    margin-top: 20px;
    @media ${device.tabletL} {
        font-size: 1.75rem;
        padding: 1.25rem 4.75rem;
    }
`
type MarketProps = {
    title: string
    description: string
}
export const DerivedFXHero = ({ title, description }: MarketProps) => {
    const handleSignup = useHandleSignup()

    return (
        <BackgroundWrapper>
            <NavMarkets />

            <StyledContainer>
                <StyledHeader as="h1" align="center">
                    <Localize translate_text={title} />
                </StyledHeader>
                <MarketSubHeader
                    as="h4"
                    type="sub-section-title"
                    color="white"
                    lh="2.4"
                    font_size="var(--text-size-m)"
                    weight="normal"
                    align="center"
                >
                    <Localize translate_text={description} />
                </MarketSubHeader>
                <StyledButton onClick={handleSignup} id="dm-why-trade-signup" secondary>
                    {localize('Create free demo account')}
                </StyledButton>
            </StyledContainer>
        </BackgroundWrapper>
    )
}
