import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import HeroImage from 'images/common/conference/hero.png'

const HeroWrapper = styled.div`
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 72rem;
    padding: 0 120px;
`
const Newsbreak = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 190px 0 0 120px;
`
const StyledHeroHeader = styled(Header)`
    padding: 20px 0;
    ${({ height }) => height || '40px'};
`

const Hero = () => {
    return (
        <HeroWrapper>
            <Newsbreak>
                <StyledHeroHeader as="h2" type="heading-3" weight="normal">
                    30 de Novembro a de Dezembro 2022
                </StyledHeroHeader>
                <StyledHeroHeader as="h1" type="heading-2" height="60px">
                    Conferencia de Afiliados Derov do Brazil
                </StyledHeroHeader>
                <StyledHeroHeader as="div" type="heading-3" weight="normal">
                    em Assuncao, Paraguai
                </StyledHeroHeader>
            </Newsbreak>
        </HeroWrapper>
    )
}

export default Hero
