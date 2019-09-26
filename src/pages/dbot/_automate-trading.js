import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container'
import Image from 'components/elements/image'
import Dbot from 'images/svg/d-bot.svg'
import Wrapper from 'components/containers/wrapper'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import Button from 'components/form/button'

const BackgroundContainer = styled(SectionContainer)`
    background: var(--color-black);
`

const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`

const ImageSection = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DbotWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: 0.8rem;
`

const StyledDbot = styled(Dbot)`
    margin-right: 1.6rem;
`

const StyledButton = styled(Button)`
    margin-top: 3.2rem;
    width: 16rem;
`

const AutomateTradingSection = () => (
    <BackgroundContainer>
        <Container>
            <TitleSection>
                <DbotWrapper>
                    <StyledDbot />
                    <Header color="white" weight="500" as="h4">
                        {localize('DBot')}
                    </Header>
                </DbotWrapper>
                <Header as="h1" color="white">
                    {localize(
                        'Automate your trading ideas without writing code',
                    )}
                </Header>
                <StyledButton secondary>
                    {localize('Start automating')}
                </StyledButton>
            </TitleSection>
            <ImageSection width="65%">
                <Image
                    img_name="platform-bot.png"
                    alt="Platform bot image"
                    width="100%"
                />
            </ImageSection>
        </Container>
    </BackgroundContainer>
)

export default AutomateTradingSection
