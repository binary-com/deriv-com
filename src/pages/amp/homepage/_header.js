import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Text, Header, NavCard, CardLink, Divider } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { binary_url, smarttrader_url } from 'common/utility'
import device from 'themes/device'
import Deriv from 'images/svg/logo-deriv.svg'
import BinaryLogo from 'images/svg/binary.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-black);
    z-index: 100;
    padding: 2.4rem 0;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.8);
`

const Nav = styled.nav`
    background: var(--color-black);
    width: 100%;
`

const LinkText = styled(Text).attrs({ as: 'span' })`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    margin: 0 2.4rem;
    transition: color 0.25s;

    &:hover {
        color: var(--color-red);
    }
`

const HamburgerMenu = styled.button`
    cursor: pointer;
    display: none;
    border: none;
    background: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const Dialog = styled.div`
    margin-top: 2.4rem;
    padding: 4rem 0;
`

const Binary = styled(Text)`
    width: 80px;
    margin-left: 0.5rem;
    line-height: 1;
    color: var(--color-white);
    font-size: var(--text-size-xxs);
`

const BlackLink = styled(LinkText)`
    color: var(--color-black);
    margin: 1.6rem 2rem;
    font-size: var(--text-size-m);
`

const BinaryLink = styled.a`
    display: inline-block;
    color: var(--color-white);
    font-size: var(--text-size-xxs);
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const LinkWrapper = styled(Flex).attrs({ as: 'ul' })`
    @media (max-width: 680px) {
        display: none;
    }
`
const DMT5NavCard = styled(NavCard)`
    @media (max-width: 1250px) {
        margin-top: 3.2rem;
    }
`

const PlatformInfo = styled.div`
    width: 100%;
    max-width: 37.7rem;
`

const MarginDivider = styled(Divider)`
    margin: 0 6.9rem;
    width: 2px;
    height: 14.1rem;
    background: var(--color-grey-8);
`

const Normal = styled(Container)`
    & * {
        white-space: normal;
    }
`

const HeaderNav = () => (
    <>
        <HeaderWrapper>
            <amp-mega-menu id="mega-menu" layout="fixed-height" height="30">
                <Normal jc="space-between">
                    <Flex ai="center" jc="flex-start">
                        <LocalizedLink to="/amp">
                            <Deriv />
                        </LocalizedLink>
                        <LocalizedLink
                            external
                            to={binary_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BinaryLogo width="24" height="24" />
                        </LocalizedLink>
                        <Binary>
                            <Localize
                                translate_text="A <0>Binary.com</0> brand"
                                components={[
                                    <BinaryLink
                                        key={0}
                                        href="https://binary.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </Binary>
                    </Flex>

                    <Nav>
                        <LinkWrapper>
                            <li>
                                <LinkText role="button">{localize('Trade')}</LinkText>
                                <Dialog role="dialog">
                                    <Container jc="flex-start">
                                        <PlatformInfo>
                                            <Header as="h4" m="0 0 0.8rem">
                                                {localize('Trading platforms')}
                                            </Header>
                                            <Text size="var(--text-size-xs)">
                                                {localize(
                                                    'Be in full control of your trading with our new and improved platforms. ',
                                                )}
                                            </Text>
                                        </PlatformInfo>
                                        <MarginDivider />
                                        <Flex wrap="wrap" jc="flex-start">
                                            <NavCard
                                                icon={DTrader}
                                                content={
                                                    <Localize translate_text="A whole new trading experience on a powerful yet easy to use platform." />
                                                }
                                                title={<Localize translate_text="DTrader" />}
                                                style={{ marginRight: '5.6rem' }}
                                                to="/dtrader"
                                            />

                                            <DMT5NavCard
                                                icon={DMT5}
                                                content={
                                                    <Localize translate_text="Trade on the Deriv MetaTrader 5 (DMT5) platform, the choice of professionals worldwide." />
                                                }
                                                title={<Localize translate_text="DMT5" />}
                                                to="/dmt5"
                                            />
                                            <NavCard
                                                icon={DBot}
                                                content={
                                                    <Localize translate_text="Automated trading at your fingertips. No coding needed." />
                                                }
                                                title={<Localize translate_text="DBot" />}
                                                to="/dbot"
                                                style={{
                                                    marginTop: '3.2rem',
                                                    marginRight: '5.6rem',
                                                }}
                                            />
                                            <NavCard
                                                icon={Smarttrader}
                                                content={
                                                    <Localize translate_text="Trade the world’s markets on Binary.com’s classic platform." />
                                                }
                                                title={<Localize translate_text="SmartTrader" />}
                                                to={smarttrader_url}
                                                style={{ marginTop: '3.2rem' }}
                                                external="true"
                                                target="_blank"
                                            />
                                        </Flex>
                                    </Container>
                                </Dialog>
                            </li>
                            <li>
                                <LinkText role="button">{localize('Markets')}</LinkText>
                                <Dialog role="dialog">
                                    <Container jc="flex-start">
                                        <PlatformInfo>
                                            <Header as="h4" m="0 0 0.8rem">
                                                {localize('Trading platforms')}
                                            </Header>
                                            <Text size="var(--text-size-xs)">
                                                {localize(
                                                    'Be in full control of your trading with our new and improved platforms. ',
                                                )}
                                            </Text>
                                        </PlatformInfo>
                                        <MarginDivider />
                                        <Flex wrap="wrap" jc="flex-start">
                                            <NavCard
                                                icon={Forex}
                                                content={
                                                    <Localize translate_text="Trade the world’s largest financial market with popular forex pairs." />
                                                }
                                                title={<Localize translate_text="Forex" />}
                                                style={{ marginRight: '5.6rem' }}
                                                to="/markets#forex"
                                            />
                                            <NavCard
                                                icon={StockIndices}
                                                content={
                                                    <Localize translate_text="Predict broader market trends and diversify your risk with stock indices." />
                                                }
                                                title={<Localize translate_text="Stock indices" />}
                                                to="/markets#stock"
                                            />
                                            <NavCard
                                                icon={Commodities}
                                                content={
                                                    <Localize translate_text="Trade natural resources that are central to the world's economy." />
                                                }
                                                title={<Localize translate_text="Commodities" />}
                                                to="/markets#commodities"
                                                style={{
                                                    marginTop: '3.2rem',
                                                    marginRight: '5.6rem',
                                                }}
                                            />
                                            <NavCard
                                                icon={SyntheticIndices}
                                                content={
                                                    <Localize translate_text="Enjoy synthetic markets that emulate real-world market movements." />
                                                }
                                                title={
                                                    <Localize translate_text="Synthetic Indices" />
                                                }
                                                to="/markets#synthetic"
                                                style={{ marginTop: '3.2rem' }}
                                            />
                                        </Flex>
                                    </Container>
                                </Dialog>
                            </li>
                            <li>
                                <LinkText role="button">{localize('About us')}</LinkText>
                                <Dialog role="dialog">
                                    <Container jc="flex-start">
                                        <PlatformInfo>
                                            <Header as="h4" m="0 0 0.8rem">
                                                {localize('Trading platforms')}
                                            </Header>
                                            <Text size="var(--text-size-xs)">
                                                {localize(
                                                    'Be in full control of your trading with our new and improved platforms. ',
                                                )}
                                            </Text>
                                        </PlatformInfo>
                                        <MarginDivider />
                                        <Flex wrap="wrap" jc="flex-start" max_width="42rem">
                                            <CardLink
                                                title={localize('Our story')}
                                                to="/about/#story"
                                            />
                                            <CardLink
                                                title={localize('Contact us')}
                                                to="/contact-us/"
                                            />
                                            <CardLink
                                                title={localize('Our leadership')}
                                                to="/about/#leadership"
                                            />
                                            <CardLink title={localize('Careers')} to="/careers/" />
                                            <CardLink
                                                title={localize('Why choose us?')}
                                                to="/why-choose-us/"
                                            />
                                        </Flex>
                                    </Container>
                                </Dialog>
                            </li>
                            <li>
                                <LinkText role="button">{localize('Resources')}</LinkText>
                                <Dialog role="dialog">
                                    <Container jc="flex-start">
                                        <PlatformInfo>
                                            <Header as="h4" m="0 0 0.8rem">
                                                {localize('Trading platforms')}
                                            </Header>
                                            <Text size="var(--text-size-xs)">
                                                {localize(
                                                    'Be in full control of your trading with our new and improved platforms. ',
                                                )}
                                            </Text>
                                        </PlatformInfo>
                                        <MarginDivider />
                                        <Flex wrap="wrap" jc="flex-start" max_width="42rem">
                                            <CardLink
                                                title={localize('Help Centre')}
                                                to="/help-centre/"
                                            />
                                            <CardLink
                                                title={localize('Payment methods')}
                                                to="/payment-methods/"
                                            />
                                        </Flex>
                                    </Container>
                                </Dialog>
                            </li>
                        </LinkWrapper>
                    </Nav>

                    <HamburgerMenu on="tap:sidebar1.toggle">
                        <Hamburger width="18" height="16" />
                    </HamburgerMenu>
                </Normal>
            </amp-mega-menu>
        </HeaderWrapper>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
            <Flex ai="flex-start" jc="center" p="2rem 2rem" fd="column">
                <BlackLink role="button" tabIndex="-1" on="tap:trade.scrollTo()">
                    {localize('Trade')}
                </BlackLink>
                <BlackLink role="button" tabIndex="-1" on="tap:markets.scrollTo()">
                    {localize('Markets')}
                </BlackLink>
                <BlackLink role="button" tabIndex="-1" on="tap:our-clients.scrollTo()">
                    {localize('Testimonials')}
                </BlackLink>
            </Flex>
        </amp-sidebar>
    </>
)

export default HeaderNav
