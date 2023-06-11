import React from 'react'
import styled from 'styled-components'
import Container from './_career-container'
import { HeaderProps } from './_dept-layout.types'
import { Header, BackgroundImageWrapper, StaticImageWrapper } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);

    @media ${device.tablet} {
        text-align: center;
    }
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;

    @media ${device.tablet} {
        text-align: center;
    }
`

const StyledContainer = styled(Container)`
    max-width: 984px;
    flex-direction: column;
    align-items: flex-start;
    height: 660px;

    @media ${device.tablet} {
        height: 560px;
        padding: 0 2rem;
    }
`
const ButtonContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`

type HeaderDataProps = {
    data: HeaderProps
    link: string
}

const Hero = (header_data: HeaderDataProps) => {
    return (
        <BackgroundImageWrapper dark_background>
            <StaticImageWrapper>{header_data.data.background}</StaticImageWrapper>
            <StyledContainer>
                <StyledHeader align="center" as="h1" type="display-title">
                    {header_data.data.title}
                </StyledHeader>
                <Subheadline align="center" as="h3" type="subtitle-1" weight="400">
                    {header_data.data.subtitle}
                </Subheadline>
                <ButtonContainer>
                    <LinkButton external mt="35px" to={header_data.link} secondary target="_blank">
                        Apply now
                    </LinkButton>
                </ButtonContainer>
            </StyledContainer>
        </BackgroundImageWrapper>
    )
}

export default Hero
