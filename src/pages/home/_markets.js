import React from 'react'
// import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
// Icons
import ForexIcon from 'images/svg/markets-forex.svg'

const Markets = () => (
    <SectionContainer>
        <Container direction="column">
            <Header align="center" font_size="3.6rem" as="h2">
                {localize('Markets')}
            </Header>
            <article>
                <Header as="h3">{localize('Forex')}</Header>
                <ForexIcon />
                <Text>
                    {localize(
                        'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
                    )}
                </Text>
            </article>
            <article>
                <Header as="h3">{localize('Indices')}</Header>
                <ForexIcon />
                <Text>
                    Predict broader market trends and diversify your risk with indices that measure
                    the overall performance of a market.
                </Text>
            </article>
            <article>
                <Header as="h3">{localize('Commodities')}</Header>
                <ForexIcon />
                <Text>
                    Trade natural resources that are central to the world’s economy and profit from
                    the opportunities created by volatile markets.
                </Text>
            </article>
            <article>
                <Header as="h3">{localize('Synthetic Indices')}</Header>
                <ForexIcon />
                <Text>
                    Enjoy synthetic markets that emulate the excitement of real-world markets
                    without unpredictable real-world disruptions.
                </Text>
            </article>
        </Container>
    </SectionContainer>
)

export default Markets
