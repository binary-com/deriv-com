import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import { binary_url } from 'common/utility'
import BinaryLogo from 'images/svg/interim/binary-logo.svg'
import EasySignup from 'images/svg/interim/easy-sign-up.svg'
import Support from 'images/svg/interim/support.svg'
import SyntheticIndices from 'images/svg/interim/synthetic-indices.svg'
import TradingPlatform from 'images/svg/interim/trading-platforms.svg'
import UserFriendly from 'images/svg/interim/user-friendly.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    width: 100%;
    flex-wrap: wrap;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 48.6rem;
    display: flex;
    margin: 2rem 1.2rem;
`

const Everything = () => {
    return (
        <Box p="8rem 0" bg="var(--color-grey-8)" id="markets">
            <Container fd="column" ai="center">
                <Header as="h3" align="center" mb="2rem">
                    {localize('Everything you love about Binary.com, and more')}
                </Header>
                <Ul jc="center" ai="center">
                    <Li>
                        <div>
                            <EasySignup width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('No sign up required')}</Header>
                            <Text>
                                <Localize
                                    translate_text="Explore the new website, then just log in with your <0>Binary.com</0> credentials to start trading right away."
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            external
                                            weight="bold"
                                            to={binary_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <Support width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Support when you need it')}</Header>
                            <Text>
                                {localize(
                                    'Get access to friendly customer support 7 days a week, an enriched Help Centre, plus other helpful content.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <BinaryLogo width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('From the creators of Binary.com')}</Header>
                            <Text>
                                {localize(
                                    'Trade confidently on a service created by the trusted online trading brand with over 20 years of experience.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <UserFriendly width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('User-friendly, modern design')}</Header>
                            <Text>
                                {localize(
                                    'Enjoy an intuitive, easy-to-use interface, even for new traders.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <SyntheticIndices width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('Over 100+ financial instruments')}</Header>
                            <Text>
                                {localize(
                                    'Trade what you like - forex, commodities, stock indices and synthetic indices.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <TradingPlatform width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">{localize('4 trading platforms in one place')}</Header>
                            <Text>
                                {localize(
                                    'Trade the way you like on the Deriv MetaTrader 5 (DMT5), DTrader, DBot — and the classic SmartTrader.',
                                )}
                            </Text>
                        </Box>
                    </Li>
                </Ul>
                <LinkButton secondary to="/" mt="2rem">
                    {localize('Explore Deriv.com now')}
                </LinkButton>
            </Container>
        </Box>
    )
}

export default Everything
