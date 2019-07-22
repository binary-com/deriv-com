import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import device from 'themes/device'
import Container from '../components/containers/container'
import Modal from '../components/elements/modal'
import Signup from '../components/form/signup'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'
import Carousel from '../components/elements/carousel'
import SideTab from 'components/elements/side-tab'
import { Header, Text } from '../components/elements/typography.js'
import PaymentMethods from '../components/elements/payment-methods.js'
import img from 'images/common/header-trade.png'
import CarouselBackground from 'images/svg/abstract.svg'
import ChecklistLogo from 'images/svg/checklist.svg'
import SuperiorPlatform from 'images/svg/superior-trading-platform.svg'
import PatentedTech from 'images/svg/patented-technology.svg'
import Intuitive from 'images/svg/intuitive.svg'
import Practice from 'images/svg/practice.svg'
import Trade from 'images/svg/trade.svg'
import Withdraw from 'images/svg/withdraw.svg'
import liquidMarket from 'images/svg/liquid-market.svg'
import tfs from 'images/svg/tfs.svg'
import Ncm from 'images/svg/no-centralised-market.svg'
import RiskDiversification from 'images/svg/risk-diversification.svg'
import MarketCondition from 'images/svg/market-condition.svg'
import PredictMarketTrends from 'images/svg/predict-market-trends.svg'
import Portfolio from 'images/svg/portfolio-diversification.svg'
import StockMarket from 'images/svg/stock-market.svg'
import InflationProtection from 'images/svg/inflation-protection.svg'
import RealWorld from 'images/svg/real-world.svg'
import MarketRisk from 'images/svg/market-risk.svg'
import SmallStakes from 'images/svg/small-stakes.svg'
import HighReturns from 'images/svg/volatility-indices.svg'
import ContractDurations from 'images/svg/contract-durations.svg'

const Section = styled.section`
    margin: 0 auto;
    width: 80%;
    padding: ${props => props.padding || ''}rem 0;

    @media ${device.desktop} {
        max-width: 1024px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
`
const Divider = styled.div`
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-${props => props.color || ''});
`
const StyledCard = styled.article`
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    padding: 4.8rem 5.6rem 2.2rem;

    * {
        max-width: 100%;
    }
    h4 {
        margin-top: 2.4rem;
        margin-bottom: 1rem;
    }
    @media ${device.tablet} {
        text-align: center;
    }
`
const Card = styled.article`
    padding: 1rem;

    * {
        max-width: 100%;
    }
    div {
        margin-top: 2.4rem;
    }
    @media ${device.tablet} {
        text-align: center;
    }
`
const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 2rem ;
    min-height: 65rem;
    background: var(--color-black) url(${img});
    background-repeat: no-repeat;
    background-position: 23% 100%;
    background-size: auto;

    @media ${device.laptop} {
        background-position: -10rem 100%;
    }
    @media ${device.tabletL} {
        background-position: -20rem 100%;
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`
const HeroGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;
    padding-top: 4rem;

    article {
        padding: 0;

        * {
            max-width: 100%;
        }
    }
    .hero-left {
        text-align: left;

        h4 {
            margin-top: 2rem;
        }
    }
    .signup {
        justify-self: end;
        min-width: 33rem;

        .signup-box {
            max-width: 33rem;
            background-color: var(--color-grey-1);
            border-radius: 6px;
            box-sizing: border-box;
            text-align: center;
            padding: 0.5rem 0;

            form {
                margin-top: -7rem;
                margin-bottom: -1rem;
            }
            h3 {
                font-size: var(--text-size-m);
                font-weight: 500;
            }
            .already {
                display: none;
            }
            .social-signup {
                margin-top: -2rem;
            }
        }
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;

        .hero-left * {
            text-align: center;
        }
        .signup {
            justify-self: center;
        }
    }
    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`
const SectionHeader = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    text-align: center;

    h2 {
        font-size: var(--text-size-xl);
        line-height: 6rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
    }
    h3 {
        font-size: var(--text-size-m);
        font-weight: 500;
        margin-bottom: 4rem;
    }
`
const DtraderSection = styled.section`
    width: 100%;
    padding: 2rem 0;
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
    border-bottom: 1px solid var(--color-grey-2);
    h2 {
        text-align: center;
        &::before {
            content: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='34' viewBox='0 0 38 36' aria-labelledby='deriv-icon-title'%3E%3Ctitle id='deriv-icon-title'%3EDeriv icon%3C/title%3E%3Cdefs%3E%3ClinearGradient id='deriv_a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6544'/%3E%3Cstop offset='100%25' stop-color='%23FF4449'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='nonzero'%3E%3Cpath fill='url(%23deriv_a)' d='M8.244 0v.039L21.94 18 0 35.961V36h22.154c6.466 0 12.076-4.498 13.53-10.848l1.833-8.01a14.081 14.081 0 0 0-2.663-11.859A13.843 13.843 0 0 0 23.99 0H8.244z'/%3E%3Cpath fill='%23B51A31' d='M21.93 18.036L12.298 36H0z'/%3E%3C/g%3E%3C/svg%3E");
            width: 14rem;
        }
    }
`
const Dtrader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(3rem, auto);
    grid-gap: 2rem;
    padding: 0;

    h5 {
        margin-bottom: 1.2rem
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }
`
const Cta = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0;

    button {
        padding: 1.6rem 2rem;
        font-weight: bold;
        margin: 2rem 0;
    }
`
const Works = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0;

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`
const Markets = styled.section`
    width: 100%;
    padding: 2rem 0;
`
const StyledSection = styled.section`
    padding-left: 8rem;

    p {
        font-size: 2rem;
    }
`
const Markettabs = styled.div`
    margin-top: 4rem;
`
const TabGrid = styled.div`
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12rem;
    grid-row-gap: 4rem;
`
const TabGridCol = styled.article`
    padding: 0;

    p {
        margin-top: 0.8rem;
        font-size: var(--text-size-s);
    }
`
const PaymentSection = styled.section`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-1);
    padding: 2rem 0;
`
const HomeCarouselWrapper = styled.section`
    background-color: var(--color-grey-1);
    display: flex;
`
const HomeCarouselContainer = styled.div`
    width: 90%;
    margin-left: 23%;
    margin-right: 0;
    display: flex;
    max-width: 123.2rem;
    padding: 5.8rem 0 5.4rem 0;
    padding-top: 5.8rem;
    padding-bottom: 5.4rem;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.laptop} {
        margin-left: 10%;
    }
`
const ContextContainer = styled.div`
    margin-top: 3.8rem;
    color: var(--color-black-2);
    width: 32.8rem;
    margin-right: 10.7rem;
`
const DemoButton = styled(Button)`
    width: 13.5rem;
    margin-top: 4rem;
`
const Slide = styled.section`
    div {
        display: inline-flex;
        margin-top: 4rem;
        width: 100%;
        position: relative;
        animation-name: slide;
        animation-duration: 0.3s;
        animation-timing-function: linear;
        p {
            margin-left: 1.6rem;
            height: 30px;
            font-size: 20px;
            color: var(--color-black-2);
            line-height: 1.5;
        }
    }
    @keyframes slide {
        0% {
            margin-left: 12.6rem;
            opacity: 0;
        }
        70% {
            opacity: 0.2;
        }
        100% {
            margin-left: 0;
            opacity: 1;
        }
    }
    div:first-child {
        margin-top: 0;
    }
`
const Hero = () => (
    <HeroWrapper>
        <Container>
            <HeroGrid>
                <article className='hero-left'>
                    <Header as="h1" color="white" lh="1.2">
                        {localize('This is your ultimate trading experience')}
                    </Header>
                    <Header as="h4" color="white" weight="500">
                        {localize('The world’s markets at your fingertips anytime, anywhere.')}
                    </Header>
                </article>
                <article className='signup'>
                    <div className='signup-box'>
                        <Signup />
                    </div>
                </article>
            </HeroGrid>
        </Container>
    </HeroWrapper>
)
export const TabCol = ({ Icon, content }) => {
    return (
        <TabGridCol>
            <Icon />
            <Text color="black-3" lh="1.55">{content}</Text>
        </TabGridCol>
    )
}
const Forex = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize('A global market for buying, selling, and exchanging currencies.')}
        </Text>
        <TabGrid>
            <TabCol
                Icon={liquidMarket}
                content={localize(
                    'Worlds largest and most liquid market',
                )}
            />
            <TabCol
                Icon={tfs}
                content={localize(
                    'Available for trading 24/5',
                )}
            />
            <TabCol
                Icon={Ncm}
                content={localize(
                    'Over-the-counter market with no centralised exchange',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Indices = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize('Selected group of assets used to measure the overall performance of a specific market.')}
        </Text>
        <TabGrid>
            <TabCol
                Icon={RiskDiversification}
                content={localize(
                    'Risk deviersification',
                )}
            />
            <TabCol
                Icon={MarketCondition}
                content={localize(
                    'Movement correlates with market conditions',
                )}
            />
            <TabCol
                Icon={PredictMarketTrends}
                content={localize(
                    'Predict overall market trends, rather than individual performances',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Commodities = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize('Raw natural resources that can be bought or sold commercially.')}
        </Text>
        <TabGrid>
            <TabCol
                Icon={Portfolio}
                content={localize(
                    'Portfolio diversification',
                )}
            />
            <TabCol
                Icon={StockMarket}
                content={localize(
                    'Hedge against the stock market',
                )}
            />
            <TabCol
                Icon={InflationProtection}
                content={localize(
                    'Inflation protection',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Synthetic = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize('A unique, synthetic market that simulates real-world volatility. Trade with small, fixed stakes for high returns with durations as short as one tick.')}
        </Text>
        <TabGrid>
            <TabCol
                Icon={tfs}
                content={localize(
                    'Available for trading 24/7',
                )}
            />
            <TabCol
                Icon={RealWorld}
                content={localize(
                    'Unaffected by real-world news events',
                )}
            />
            <TabCol
                Icon={MarketRisk}
                content={localize(
                    'Familiarise yourself with market risk',
                )}
            />
            <TabCol
                Icon={SmallStakes}
                content={localize(
                    'Small, fixed stakes',
                )}
            />
            <TabCol
                Icon={HighReturns}
                content={localize(
                    'High returns',
                )}
            />
            <TabCol
                Icon={ContractDurations}
                content={localize(
                    'Contract durations from one tick',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Carousel1 = () => (
    <Slide>
        <div>
            <ChecklistLogo />
            <p>{localize('Exclusive synthetic market available 24/7')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('USD 5 minimum deposit')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('Stakes as low as USD 0.35')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('Payouts up to USD 50,000')}</p>
        </div>
    </Slide>
)
const Carousel2 = () => (
    <Slide>
        <div>
            <ChecklistLogo />
            <p>{localize('Patented, licensed, and regulated')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('Short- to long-term trades')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('Reliable customer support')}</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>{localize('Privacy guaranteed')}</p>
        </div>
    </Slide>
)

class Home extends Component {
    state = {
        show_modal: false,
        active_tab: '',
    }

    toggleModal = e => {
        e.stopPropagation()
        this.setState({
            show_modal: !this.state.show_modal,
        })
    }

    closeModal = () => {
        this.setState({
            show_modal: false,
        })
    }

    render() {
        return (
            <Layout>
                <SEO title={localize('Home')} />
                <Hero />
                <DtraderSection>
                    <SectionHeader>
                        <Header as="h2" alaign="center">
                            {localize('DTrader')}
                        </Header>
                        <Header as="h3" align="center">
                            {localize('All you need to get started')}
                        </Header>
                    </SectionHeader>
                    <Container>
                        <Dtrader>
                            <StyledCard>
                                <SuperiorPlatform />
                                <Header as="h4" weight="500">
                                    {localize('Superior trading platform')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('A revolutionary platform for all traders.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('Access the world’s most traded markets and assets.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('100+ instruments.')}
                                </Header>
                            </StyledCard>
                            <StyledCard>
                                <PatentedTech />
                                <Header as="h4" weight="500">
                                    {localize('Superior trading platform')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('A revolutionary platform for all traders.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('Access the world’s most traded markets and assets.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('100+ instruments.')}
                                </Header>
                            </StyledCard>
                            <StyledCard>
                                <Intuitive />
                                <Header as="h4" weight="500">
                                    {localize('Superior trading platform')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('A revolutionary platform for all traders.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('Access the world’s most traded markets and assets.')}
                                </Header>
                                <Header as="h5" color="black-3" lh="1.55" weight="normal">
                                    {localize('100+ instruments.')}
                                </Header>
                            </StyledCard>
                        </Dtrader>
                    </Container>
                    <Cta>
                        <Button onClick={this.toggleModal} secondary>
                            {localize('Create a free account')}
                        </Button>
                    </Cta>
                </DtraderSection>
                <SectionHeader>
                    <Header as="h2" align="center" color="black-2">
                        {localize('How it works')}
                    </Header>
                </SectionHeader>
                <Section padding="8">
                    <Works>
                        <Card>
                            <Practice />
                            <div>
                                <Header as="h4" weight="500" lh="2.2">
                                    {localize('Practice')}
                                </Header>
                                <Text color="black-3" lh="1.55">
                                    {localize('Open a demo account with unlimited funds. Start trading for free and practice to hone your skills.')}
                                </Text>
                            </div>
                        </Card>
                        <Card>
                            <Trade />
                            <div>
                                <Header as="h4" weight="500" lh="2.2">
                                    {localize('Trade')}
                                </Header>
                                <Text color="black-3" lh="1.55">
                                    {localize('Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.')}
                                </Text>
                            </div>
                        </Card>
                        <Card>
                            <Withdraw />
                            <div>
                                <Header as="h4" weight="500" lh="2.2">
                                    {localize('Withdraw')}
                                </Header>
                                <Text color="black-3" lh="1.55">
                                {localize('Get funds quickly and easily. We support many deposit and withdrawal options.')}
                                </Text>
                            </div>
                        </Card>
                    </Works>
                </Section>
                <Divider color="grey-2" />
                <Section padding="8">
                    <Markets>
                        <Header as="h2" align="center">
                            {localize('Markets')}
                        </Header>
                        <Header as="h4" align="center" weight="500">
                            {localize('Over 100 assets available across five leading markets.')}
                        </Header>
                        <Markettabs>
                            <SideTab>
                                <Forex
                                    label="forex"
                                    text="Forex"
                                    />
                                <Indices
                                    label="indices"
                                    text="Indices"
                                    />
                                <Commodities
                                    label="commodities"
                                    text="Commodities"
                                />
                                <Synthetic
                                    label="synthetic"
                                    text="Synthetic Indices"
                                />
                            </SideTab>
                        </Markettabs>
                    </Markets>
                </Section>
                <HomeCarouselWrapper>
                    <HomeCarouselContainer>
                        <ContextContainer>
                            <Header as="h2">
                                {localize('Why choose Deriv?')}
                            </Header>
                            <Header as="h4" weight="500">
                                {localize(
                                    'Your one-stop shop for online trading.',
                                )}
                            </Header>
                            <DemoButton secondary>
                                {localize('See a demo')}
                            </DemoButton>
                        </ContextContainer>
                        <Carousel
                            slides={[Carousel1, Carousel2]}
                            background={CarouselBackground}
                        />
                    </HomeCarouselContainer>
                </HomeCarouselWrapper>
                <PaymentSection>
                    <Container>
                        <PaymentMethods />
                    </Container>
                </PaymentSection>
                <Modal
                    toggle={this.toggleModal}
                    is_open={this.state.show_modal}
                    is_blurred={true}
                    closeModal={this.closeModal}
                >
                    <SignupModal />
                </Modal>
            </Layout>
        )
    }
}

TabCol.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export default WithIntl()(Home)
