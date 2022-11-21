import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import HeroImage from 'images/common/conference/hero.png'
import Calendar from 'images/svg/conference/calendar.svg'
import Pin from 'images/svg/conference/pin.svg'
import device from 'themes/device'

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
                    Conferência de Afiliados Deriv do Brazil
                </StyledHeroHeader>
                <HeaderWrapper>
                    <img src={Calendar} alt="calendar icon" width={28} height={28} />
                    <StyledHeroHeader as="h2" type="heading-3" weight="normal">
                        30 de Novembro a 2 de Dezembro 2022
                    </StyledHeroHeader>
                </HeaderWrapper>
                <HeaderWrapper>
                    <img src={Pin} alt="pin icon" width={24} height={32} />
                    <StyledHeroHeader as="div" type="heading-3" weight="normal">
                        em Assunção, Paraguai.
                    </StyledHeroHeader>
                </HeaderWrapper>
            </Newsbreak>
        </HeroWrapper>
    )
}

export default Hero
