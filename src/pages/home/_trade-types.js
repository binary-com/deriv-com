import React from 'react'
import styled from 'styled-components'
import { Header, Text, Card, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import MarginLogo from 'components/svgs/margin'
import OptionsLogo from 'components/svgs/options'
import MultipliersLogo from 'components/svgs/multipliers'
import { LinkButton } from 'components/form'
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
    box-shadow: none;
    border: 1px solid var(--color-grey-2);

    &:hover {
        border: none;
        border-radius: 8px;
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

        ${CustomWrap} {
            margin-bottom: 20px;
            transition-duration: 0.2s;
        }
        ${CustomLinkWrap} {
            visibility: visible;
            opacity: 1;
        }
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

const StyledLinkText = styled(LocalizedLinkText)`
    display: flex;
    align-items: center;

    &:hover {
        color: var(--color-red);
        text-decoration: none;
    }
    span {
        margin-right: 8px;
    }
`

const TradeTypes = () => {
    return (
        <div>
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
                        <StyledLinkText
                            ariaLabel={localize('Margin')}
                            weight="bold"
                            color="red"
                            mt="16px"
                            size="16px"
                            to="/trade-types/margin"
                        >
                            <span>{localize('Learn more')}</span> <Arrow />
                        </StyledLinkText>
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
                        <StyledLinkText
                            ariaLabel={localize('Options')}
                            weight="bold"
                            color="red"
                            mt="16px"
                            size="16px"
                            to="/trade-types/options"
                        >
                            <span>{localize('Learn more')}</span>
                            <Arrow />
                        </StyledLinkText>
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
                        <StyledLinkText
                            ariaLabel={localize('Multipliers')}
                            weight="bold"
                            color="red"
                            mt="16px"
                            size="16px"
                            to="/trade-types/multiplier"
                        >
                            <span>{localize('Learn more')}</span> <Arrow />
                        </StyledLinkText>
                    </CustomLinkWrap>
                </StyledCard>
            </Container>
        </div>
    )
}

export default TradeTypes
