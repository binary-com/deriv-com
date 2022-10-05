import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import Enhanced from 'images/svg/interim/enhanced.svg'
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
    justify-content: left;
    max-width: 48.6rem;
    display: flex;
    margin: 2rem 1.2rem;
    min-height: 120px;

    @media ${device.mobileL} {
        flex-direction: column;
    }

    @media (max-width: 1214px) {
        min-height: 0;
    }
`

const ResponsiveBox = styled(Box)`
    @media ${device.mobileL} {
        margin-left: 0;
        margin-top: 1.6rem;
    }
`

const Everything = () => {
    return (
        <Box p="8rem 0" bg="var(--color-grey-8)" id="markets">
            <Container fd="column" ai="center">
                <Header as="h3" type="section-title" align="center" mb="2rem">
                    {localize('Deriv.com is everything you love about Binary.com, and more')}
                </Header>
                <Ul jc="center" ai="center">
                    <Li>
                        <div>
                            <img src={EasySignup} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('No sign up required')}
                            </Header>
                            <Text>
                                <Localize
                                    translate_text="Just log in with your <0>Binary.com</0> credentials and start trading right away."
                                    components={[
                                        <LocalizedLinkText
                                            id="dm-binary-login-link-2"
                                            key={0}
                                            external
                                            weight="bold"
                                            to="home"
                                            type="binary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img src={SyntheticIndices} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('Over 100+ financial instruments')}
                            </Header>
                            <Text>
                                {localize(
                                    'Trade what you like - forex, commodities, stock and synthetic indices.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img src={Enhanced} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('An enhanced experience')}
                            </Header>
                            <Text>
                                {localize(
                                    'Trade confidently on a service created by the trusted online trading brand with over 20 years of experience.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img src={TradingPlatform} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('4 trading platforms in one place')}
                            </Header>
                            <Text>
                                {localize(
                                    'Trade the way you like on the Deriv MT5 (DMT5), DTrader, DBot — and the classic SmartTrader.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img src={UserFriendly} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('User-friendly, modern design')}
                            </Header>
                            <Text>
                                {localize(
                                    'Enjoy an intuitive, easy-to-use interface, even for new traders.',
                                )}
                            </Text>
                        </ResponsiveBox>
                    </Li>
                    <Li>
                        <div>
                            <img src={Support} alt="" width="64" height="64" />
                        </div>
                        <ResponsiveBox ml="1.6rem">
                            <Header as="h4" type="sub-section-title">
                                {localize('Support when you need it')}
                            </Header>
                            <Text>
                                {localize(
                                    'Get access to friendly customer support 7 days a week, an enriched Help centre, plus other helpful content.',
                                )}
                            </Text>
                        </ResponsiveBox>
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
