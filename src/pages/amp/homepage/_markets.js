import React from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { Box, Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import Stock from 'images/svg/market-stock-indices.svg'
import Synthetic from 'images/svg/market-synthetic-indices.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    max-width: 996px;
    flex-wrap: wrap;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 462px;
    display: flex;
    margin: 2rem 1.2rem;
`

const Markets = () => {
    return (
        <Box p="8rem 0 1.6rem" bg="var(--color-white)" id="markets">
            <Container fd="column" ai="center">
                <Header as="h2" align="center" mb="4rem">
                    {localize('Markets')}
                </Header>
                <Ul jc="center" ai="center">
                    <Li>
                        <div>
                            <Forex width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Forex')}</Header>
                            <Text>
                                {localize(
                                    'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <Stock width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Stock indices')}</Header>
                            <Text>
                                {localize(
                                    'Predict broader market trends and diversify your risk with indices that measure the overall performance of a market.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <Commodities width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Commodities')}</Header>
                            <Text>
                                {localize(
                                    'Trade natural resources that are central to the world’s economy and profit from the opportunities created by volatile markets.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <Synthetic width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Synthetic indices')}</Header>
                            <Text>
                                {localize(
                                    'Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                </Ul>
            </Container>
        </Box>
    )
}

export default Markets
