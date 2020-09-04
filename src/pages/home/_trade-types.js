import React from 'react'
import styled from 'styled-components'
import { Header, Text, Card } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import { Container, Flex, Show } from 'components/containers'
import MarginLogo from 'components/svgs/margin'
import OptionsLogo from 'components/svgs/options'
import MultipliersLogo from 'components/svgs/multipliers'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import Arrow from 'images/svg/arrow-right.svg'

const CustomLinkWrap = styled.div`
    display: block;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    margin-top: 5px;
`

const CustomWrap = styled.div`
    display: block;
    transition: all 0.2s ease-in;
`

const LogoDiv = styled.div`
    text-align: center;
`

const StyledCard = styled(Card)`
    max-width: 28.2rem;
    margin: 0 2.4rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    &:hover {
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1), 0 0 20px 0 rgba(0, 0, 0, 0.2);
    }
    &:hover ${CustomWrap} {
        margin-bottom: 20px;
        transition-duration: 0.2s;
    }
    &:hover ${CustomLinkWrap} {
        visibility: visible;
        opacity: 1;
    }
    &:nth-child(4) {
        margin-right: unset;
    }
    ${Text} {
        font-size: 1.4rem;
    }
    ${Header} {
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        margin-top: 2.4rem;
    }
`
const TradingButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
    max-width: 18rem;
    justify-content: center;
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 126px;
    height: 24px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ff444f;

    @media ${device.tabletL} {
        margin: 1rem 0;
    }
`

const TradeTypes = () => {
    return (
        <div>
            <Show.Desktop max_width="851">
                <Container m="0 auto 8rem !important" height="35rem" width="90% !important">
                    <Flex direction="column" max_width="28.2rem">
                        <Header size="3.2rem">{localize('Trade types')}</Header>
                        <Text size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                        <TradingButton type="submit" secondary="true" to="/signup/">
                            {localize('Start trading')}
                        </TradingButton>
                    </Flex>

                    <StyledCard>
                        <CustomWrap>
                            <LogoDiv>
                                <MarginLogo dynamic_id="desktop-margin" />
                            </LogoDiv>
                            <Header>{localize('Margin trading')}</Header>
                            <Text>
                                {localize(
                                    'Trade with leverage and low spreads for better returns on successful trades.',
                                )}
                            </Text>
                        </CustomWrap>
                        <CustomLinkWrap>
                            <StyledLink ariaLabel={localize('Margin')} to="/trade-types/margin">
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </CustomLinkWrap>
                    </StyledCard>

                    <StyledCard>
                        <CustomWrap>
                            <LogoDiv>
                                <OptionsLogo dynamic_id="desktop-options" />
                            </LogoDiv>
                            <Header>{localize('Options')}</Header>
                            <Text>
                                {localize(
                                    'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                                )}
                            </Text>
                        </CustomWrap>

                        <CustomLinkWrap>
                            <StyledLink ariaLabel={localize('Options')} to="/trade-types/options">
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </CustomLinkWrap>
                    </StyledCard>

                    <StyledCard>
                        <CustomWrap>
                            <LogoDiv>
                                <MultipliersLogo dynamic_id="desktop-multipliers" />
                            </LogoDiv>
                            <Header>{localize('Multipliers')}</Header>
                            <Text>
                                {localize(
                                    'Get the best of both - the upside of margin trading with the simplicity of options.',
                                )}
                            </Text>
                        </CustomWrap>

                        <CustomLinkWrap>
                            <StyledLink
                                ariaLabel={localize('Multipliers')}
                                to="/trade-types/multipliers"
                            >
                                {' '}
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </CustomLinkWrap>
                    </StyledCard>
                </Container>
            </Show.Desktop>

            <Show.Mobile min_width="852">
                <Container
                    ai="center"
                    direction="column"
                    m="9rem auto 15rem !important"
                    height="35rem"
                    width="90% !important"
                >
                    <Flex direction="column">
                        <Header align="center" size="3.2rem">
                            {localize('Trade Types')}
                        </Header>
                        <Text align="center" size="2.4rem" mt="1.6rem" mb="5rem">
                            {localize(
                                'Trade what you like, the way you like it, and on your preferred market.',
                            )}
                        </Text>
                    </Flex>
                    <Flex>
                        <StyledCard>
                            <div>
                                <MarginLogo dynamic_id="mobile-margin" />
                            </div>
                            <Header>{localize('Margin trading')}</Header>
                            <Text>
                                {localize(
                                    'Trade with leverage and low spreads for better returns on successful trades.',
                                )}
                            </Text>
                            <StyledLink ariaLabel={localize('Margin')} to="/trade-types/margin">
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <OptionsLogo dynamic_id="mobile-options" />
                            </div>
                            <Header>{localize('Options')}</Header>
                            <Text>
                                {localize(
                                    'Earn fixed payouts by predicting an assets price movement within a fixed time.',
                                )}
                            </Text>
                            <StyledLink ariaLabel={localize('Options')} to="/trade-types/options">
                                {' '}
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </StyledCard>
                        <StyledCard>
                            <div>
                                <MultipliersLogo dynamic_id="mobile-multipliers" />
                            </div>
                            <Header>{localize('Multipliers')}</Header>
                            <Text>
                                {localize(
                                    'Get the best of both - the upside of margin trading with the simplicity of options.',
                                )}
                            </Text>
                            <StyledLink
                                ariaLabel={localize('Multipliers')}
                                to="/trade-types/multipliers"
                            >
                                {' '}
                                {localize('Learn more')} <Arrow />
                            </StyledLink>
                        </StyledCard>
                    </Flex>
                    <TradingButton mt="3rem" type="submit" secondary="true" to="/signup/">
                        {localize('Start trading')}
                    </TradingButton>
                </Container>
            </Show.Mobile>
        </div>
    )
}

export default TradeTypes
