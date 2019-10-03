import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Card } from 'components/elements/card.js'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'
import device from 'themes/device'
import DTrader from 'images/svg/dtrader-48.svg'
import DBot from 'images/svg/dbot-48.svg'

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4rem;

    article:first-child {
        margin-right: 2rem;
    }

    @media ${device.tablet} {
        margin-top: 0;

        article:first-child {
            margin-right: 0;
        }
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const OtherPlatform = () => {
    return (
        <SectionContainer>
            <Container direction="column">
                <Header as="h2" align="center">
                    {localize('Check out our other platforms')}
                </Header>
                <CardWrapper>
                    <StyledLink to='dtrader'>
                        <Card
                            Icon={DTrader}
                            title={localize('DTrader')}
                            content={localize(
                                'Everything you need to trade the markets you want',
                            )}
                            width="32.8rem"
                            min_height="27.8rem"
                        />
                    </StyledLink>
                    <StyledLink to='dbot'>
                        <Card
                            Icon={DBot}
                            title={localize('DBot')}
                            content={localize(
                                'Powerful robot builder to automate your trading strategies',
                            )}
                            width="32.8rem"
                            min_height="27.8rem"
                        />
                    </StyledLink>
                </CardWrapper>
            </Container>
        </SectionContainer>
    )
}
export default OtherPlatform
