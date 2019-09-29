import React from 'react'
import styled from 'styled-components'
import { Card } from 'components/elements/card.js'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header } from 'components/elements/typography.js'
import device from 'themes/device'
import DBot from 'images/svg/d-bot.svg'
import Dtrader from 'images/svg/d-trader.svg'

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

const OtherPlatform = () => {
    return (
        <SectionContainer>
            <Container direction="column">
                <Header as="h2" align="center">
                    {localize('Check out our other platforms')}
                </Header>
                <CardWrapper>
                    <Card
                        Icon={Dtrader}
                        title={localize('DTrader')}
                        content={localize(
                            'Everything you need to trade the markets you want',
                        )}
                        width="32.8rem"
                        min_height="27.8rem"
                    />
                    <Card
                        Icon={DBot}
                        title={localize('DBot')}
                        content={localize(
                            'Powerful robot builder to automate your trading strategies',
                        )}
                        width="32.8rem"
                        min_height="27.8rem"
                    />
                </CardWrapper>
            </Container>
        </SectionContainer>
    )
}
export default OtherPlatform
