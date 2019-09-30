import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container'
import DBotMacbook from 'images/svg/dbot-platform.svg'
import Dbot from 'images/svg/d-bot.svg'
import Wrapper from 'components/containers/wrapper'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import Button from 'components/form/button'
import { deriv_bot_app_url } from 'common/utility'
import device from 'themes/device'

const BackgroundContainer = styled(SectionContainer)`
    background: var(--color-black);

    @media ${device.tabletL} {
        padding-bottom: 4rem;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-wrap: wrap-reverse;
    }
`

const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media ${device.tabletL} {
        width: 100%;
        align-items: center;

        h1 {
            font-size: var(--text-size-xl);
            text-align: center;
        }
    }
`

const ImageSection = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tabletL} {
        width: 100%;
        margin: 2rem 0;
    }
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

const handleExternalLink = () => {
    window.open(deriv_bot_app_url, '_blank')
}

const AutomateTradingSection = () => (
    <BackgroundContainer>
        <StyledContainer>
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
                <StyledButton secondary onClick={handleExternalLink}>
                    {localize('Start automating')}
                </StyledButton>
            </TitleSection>
            <ImageSection width="65%">
                <DBotMacbook />
            </ImageSection>
        </StyledContainer>
    </BackgroundContainer>
)

export default AutomateTradingSection
