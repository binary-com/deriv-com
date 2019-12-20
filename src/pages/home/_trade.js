import React from 'react'
// import { OtherPlatform } from 'components/custom/other-platforms.js'
import styled from 'styled-components'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import { Text } from 'components/elements/typography.js'
import device from 'themes/device'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'

const DMT5Logo = styled(DMT5)`
    width: 48px;
    height: 48px;
`
const DTraderLogo = styled(DTrader)`
    width: 48px;
    height: 48px;
`
const DBotLogo = styled(DBot)`
    width: 48px;
    height: 48px;
`
const StyledContainer = styled(Container)`
    @media ${device.laptop} {
        width: 100%;
    }
`
const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        div {
            margin: 1rem 0;
        }
    }
`
const StyledSection = styled(SectionContainer)`
    text-align: center;

    div {
        ${Header} {
            margin: 0 auto;
            max-width: 67.6rem;
        }
    }
`
const Card = styled.div`
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 16px 20px 0;
    background-color: #ffffff;
    min-height: 22.4rem;
    width: 32.8rem;
    border-radius: 4px;
    padding: 4rem;
    display: flex;
    flex-direction: column;
`
const IconContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h4 {
        padding-left: 1.6rem;
    }
`
const Content = styled(Text)`
    width: 100%;
`
const StyledLink = styled(LocalizedLink)`
    margin: 0 1rem;
    text-decoration: none;

    @media ${device.laptopS} {
        margin: 1rem 1rem;
    }
`
export const Trade = () => (
    // TODO: after home page rebuild, uncomment these codes
    // <OtherPlatform
    //     header={localize('Trade the way you like')}
    //     subHeader={localize(
    //         'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
    //     )}
    //     exclude=""
    // />
    <StyledContainer>
        <StyledSection>
            <div>
                <Header as="h2" align="center">
                    {localize('Trade the way you like')}
                </Header>
            </div>
            <div>
                <Header as="h4" align="center" weight="500">
                    {localize(
                        'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                    )}
                </Header>
            </div>
            <CardContainer>
                <StyledLink to="/dtrader">
                    <Card>
                        <IconContainer>
                            <DTraderLogo />
                            <Header as="h4" weight="500">
                                {localize('DTrader')}
                            </Header>
                        </IconContainer>
                        <Content>
                            {localize(
                                'Start trading now with a powerful, yet easy-to-use platform.',
                            )}
                        </Content>
                    </Card>
                </StyledLink>
                <StyledLink to="/dbot">
                    <Card>
                        <IconContainer>
                            <DBotLogo />
                            <Header as="h4" weight="500">
                                {localize('DBot')}
                            </Header>
                        </IconContainer>
                        <Content>{localize('Automate your trading ideas without coding.')}</Content>
                    </Card>
                </StyledLink>
                <StyledLink to="/dmt5">
                    <Card>
                        <IconContainer>
                            <DMT5Logo />
                            <Header as="h4" weight="500">
                                {localize('DMT5')}
                            </Header>
                        </IconContainer>
                        <Content>
                            {localize('Trade with the platform of choice for professionals.')}
                        </Content>
                    </Card>
                </StyledLink>
            </CardContainer>
        </StyledSection>
    </StyledContainer>
)
