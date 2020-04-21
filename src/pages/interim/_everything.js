import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
// import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import BinaryLogo from 'images/svg/interim/binary-logo.svg'
import EasySignup from 'images/svg/interim/easy-sign-up.svg'
import Support from 'images/svg/interim/support.svg'
import SyntheticIndices from 'images/svg/interim/synthetic-indices.svg'
// import TradingPlatform from 'images/svg/interim/trading-platforms.svg'
// import UserFriendly from 'images/svg/interim/user-friendly.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    max-width: 996px;
    flex-wrap: wrap;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 462px;
    display: flex;
    margin: 2rem 1.2rem;
`

const Everything = () => {
    return (
        <Box p="8rem 0 1.6rem" bg="var(--color-white)" id="markets">
            <Container fd="column" ai="center">
                <Header as="h2" align="center" mb="4rem">
                    {localize('Markets')}
                </Header>
                <Ul jc="center" ai="center">
                    <Li>
                        <div>
                            <BinaryLogo width="64" height="64" />
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
                            <Support width="64" height="64" />
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
                            <EasySignup width="64" height="64" />
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
                            <SyntheticIndices width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Synthetic Indices')}</Header>
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

export default Everything
