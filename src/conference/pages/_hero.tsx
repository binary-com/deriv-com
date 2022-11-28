import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import HeroImage from 'images/common/conference/hero.png'
import Calendar from 'images/svg/conference/calendar.svg'
import Pin from 'images/svg/conference/pin.svg'
import device from 'themes/device'
import { localize } from 'components/localization'

const HeroWrapper = styled.div`
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 72rem;
    padding: 190px 0 0 120px;

    @media ${device.laptop} {
        padding: 120px 0 0 80px;
    }
    @media ${device.tabletS} {
        padding: 60px 0 0 30px;
        min-height: 60rem;
    }
`
const Newsbreak = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const StyledHeroHeader = styled(Header)`
    padding: 20px 0 20px 12px;
`
const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Hero = () => {
    return (
        <HeroWrapper>
            <Newsbreak>
                <StyledHeroHeader as="h1" type="heading-2" height="60px">
                    {localize('Deriv do Brasil Affiliate Conference')}
                </StyledHeroHeader>
                <HeaderWrapper>
                    <img src={Calendar} alt="calendar icon" width={28} height={28} />
                    <StyledHeroHeader as="h2" type="heading-3" weight="normal">
                        {localize('November 30th to December 2nd 2022')}
                    </StyledHeroHeader>
                </HeaderWrapper>
                <HeaderWrapper>
                    <img src={Pin} alt="pin icon" width={24} height={32} />
                    <StyledHeroHeader as="div" type="heading-3" weight="normal">
                        {localize('in Asunción, Paraguay.')}
                    </StyledHeroHeader>
                </HeaderWrapper>
            </Newsbreak>
        </HeroWrapper>
    )
}

export default Hero
