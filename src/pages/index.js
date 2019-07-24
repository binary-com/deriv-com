import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import device from 'themes/device'
import Container from '../components/containers/container'
import { SectionContainer } from 'components/containers/container'
import Modal, { useModal } from '../components/elements/modal'
import Signup from '../components/form/signup'
import { LoginText } from 'components/form/signup'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'
import Carousel from '../components/elements/carousel'
import { Divider } from '../components/elements/divider'
import SideTab from 'components/elements/side-tab'
import { Header, Text } from '../components/elements/typography.js'
import PaymentMethods from '../components/elements/payment-methods.js'
import { Card } from 'components/elements/card'

import { DERIV_APP_URL } from 'common/utility'

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

const carousel_1_text = [
    localize('Exclusive synthetic market available 24/7'),
    localize('USD 5 minimum deposit'),
    localize('Stakes as low as USD 0.35'),
    localize('Payouts up to USD 50,000'),
]

const carousel_2_text = [
    localize('Patented, licensed, and regulated'),
    localize('Short- to long-term trades'),
    localize('Reliable customer support'),
    localize('Privacy guaranteed'),
]

const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 2rem;
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
const SecondaryHeader = styled(Header)`
    margin-top: 2rem;
    margin-bottom: 0.8rem;
`

const SignupWrapper = styled.article`
    justify-self: end;
    min-width: 33rem;
`

const SignupBox = styled.div`
    max-width: 33rem;
    background-color: var(--color-grey-1);
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    padding: 3.2rem 0;

    h3 {
        font-size: var(--text-size-m);
        font-weight: 500;
    }
    ${LoginText} {
        display: none;
    }
`

const StyledHeader = styled(Header)`
    margin-top: 2rem;
`

const StyledSubHeader = styled(Header)`
    margin-top: 0.8rem;
`
const HeroGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;
    padding-top: 4rem;

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

            h3 {
                font-size: var(--text-size-m);
                font-weight: 500;
            }
            ${LoginText} {
                display: none;
            }
        }
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;
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
        margin-bottom: 1.2rem;
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

const SecondaryArticle = styled.article`
    padding: 0 0.5rem;
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
    margin-left: 20.8rem;
    margin-right: 0;
    display: flex;
    max-width: 123.2rem;
    padding: 5.8rem 0 5.4rem 0;
    padding-top: 5.8rem;
    padding-bottom: 5.4rem;
    justify-content: space-between;
    align-items: flex-start;

    @media ${device.desktopS} {
        margin-left: 44rem;
    }
`
const ContextContainer = styled.div`
    margin-top: 3.8rem;
    color: var(--color-black-2);
    width: 32.8rem;
    margin-right: 10.7rem;
`

const StyledContainer = styled(Container)`
    padding: 2rem 0;
`
const DemoButton = styled(Button)`
    width: 13.5rem;
    margin-top: 4rem;
`
const Slide = styled.section`
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

    div {
        display: inline-flex;
        margin-top: 4rem;
        width: 100%;
        position: relative;
        animation-name: slide;
        animation-duration: 0.4s;
        animation-timing-function: linear;

        p {
            margin-left: 1.6rem;
            height: 30px;
            font-size: 20px;
            color: var(--color-black-2);
            line-height: 1.5;
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
                <article>
                    <Header as="h1" color="white" lh="1.2">
                        {localize('This is your ultimate trading experience')}
                    </Header>
                    <StyledHeader as="h4" color="white" weight="500">
                        {localize(
                            'The world’s markets at your fingertips anytime, anywhere.',
                        )}
                    </StyledHeader>
                </article>
                <SignupWrapper>
                    <SignupBox>
                        <Signup />
                    </SignupBox>
                </SignupWrapper>
            </HeroGrid>
        </Container>
    </HeroWrapper>
)
export const TabCol = ({ Icon, content }) => {
    return (
        <TabGridCol>
            <Icon />
            <Text color="black-3" lh="1.55">
                {content}
            </Text>
        </TabGridCol>
    )
}
const Forex = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'A global market for buying, selling, and exchanging currencies.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={liquidMarket}
                content={localize('Worlds largest and most liquid market')}
            />
            <TabCol
                Icon={tfs}
                content={localize('Available for trading 24/5')}
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
            {localize(
                'Selected group of assets used to measure the overall performance of a specific market.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={RiskDiversification}
                content={localize('Risk deviersification')}
            />
            <TabCol
                Icon={MarketCondition}
                content={localize('Movement correlates with market conditions')}
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
            {localize(
                'Raw natural resources that can be bought or sold commercially.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={Portfolio}
                content={localize('Portfolio diversification')}
            />
            <TabCol
                Icon={StockMarket}
                content={localize('Hedge against the stock market')}
            />
            <TabCol
                Icon={InflationProtection}
                content={localize('Inflation protection')}
            />
        </TabGrid>
    </StyledSection>
)
const Synthetic = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'A unique, synthetic market that simulates real-world volatility. Trade with small, fixed stakes for high returns with durations as short as one tick.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={tfs}
                content={localize('Available for trading 24/7')}
            />
            <TabCol
                Icon={RealWorld}
                content={localize('Unaffected by real-world news events')}
            />
            <TabCol
                Icon={MarketRisk}
                content={localize('Familiarise yourself with market risk')}
            />
            <TabCol
                Icon={SmallStakes}
                content={localize('Small, fixed stakes')}
            />
            <TabCol Icon={HighReturns} content={localize('High returns')} />
            <TabCol
                Icon={ContractDurations}
                content={localize('Contract durations from one tick')}
            />
        </TabGrid>
    </StyledSection>
)
const CarouselItems = carousel_text => (
    <Slide>
        {carousel_text.map((content, index) => (
            <div key={index}>
                <ChecklistLogo />
                <p>{content}</p>
            </div>
        ))}
    </Slide>
)

const Home = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    const handleExternalLink = e => {
        e.preventDefault()

        window.open(DERIV_APP_URL, '_blank', 'noopener', 'noreferrer')
    }

    return (
        <Layout>
            <SEO title={localize('Home')} />
            <Hero />
            <DtraderSection>
                <SectionHeader>
                    <Header as="h2" align="center" lh="6rem">
                        {localize('DTrader')}
                    </Header>
                    <StyledSubHeader as="h4" align="center" weight="500">
                        {localize('All you need to get started')}
                    </StyledSubHeader>
                </SectionHeader>
                <StyledContainer>
                    <Dtrader>
                        <Card
                            title={localize('Superior trading platform')}
                            Icon={SuperiorPlatform}
                            content={[
                                localize(
                                    'A revolutionary platform for all traders.',
                                ),
                                localize(
                                    'Access the world’s most traded markets and assets.',
                                ),
                                localize('100+ instruments.'),
                            ]}
                        />

                        <Card
                            title={localize('Patented pricing technology')}
                            Icon={PatentedTech}
                            content={[
                                localize('Real-time, two-way pricing.'),
                                localize('Powered by our patented algorithms.'),
                                localize('Transparency guaranteed.'),
                            ]}
                        />
                        <Card
                            title={localize('Intuitive and customisable')}
                            Icon={Intuitive}
                            content={[
                                localize(
                                    'Easy-to-use and powerful trading environment.',
                                ),
                                localize(
                                    'Trade the way you want with customisable charts, analytic tools, and themes.',
                                ),
                            ]}
                        />
                    </Dtrader>
                </StyledContainer>
                <Cta>
                    <Button onClick={toggleModal} secondary>
                        {localize('Create a free account')}
                    </Button>
                </Cta>
            </DtraderSection>
            <SectionHeader>
                <Header as="h2" align="center" color="black-2">
                    {localize('How it works')}
                </Header>
            </SectionHeader>
            <Container>
                <Works>
                    <SecondaryArticle>
                        <Practice />
                        <SecondaryHeader as="h4" weight="500">
                            {localize('Practice')}
                        </SecondaryHeader>
                        <Text>
                            {localize(
                                'Open a demo account with unlimited funds. Start trading for free and practise to hone your skills.',
                            )}
                        </Text>
                    </SecondaryArticle>
                    <SecondaryArticle>
                        <Trade />
                        <SecondaryHeader as="h4" weight="500">
                            {localize('Trade')}
                        </SecondaryHeader>
                        <Text>
                            {localize(
                                'Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.',
                            )}
                        </Text>
                    </SecondaryArticle>
                    <SecondaryArticle>
                        <Withdraw />
                        <SecondaryHeader as="h4" weight="500">
                            {localize('Withdraw')}
                        </SecondaryHeader>
                        <Text>
                            {localize(
                                'Get funds quickly and easily. We support many deposit and withdrawal options.',
                            )}
                        </Text>
                    </SecondaryArticle>
                </Works>
            </Container>
            <Divider />
            <SectionContainer>
                <Markets>
                    <Header as="h2" align="center">
                        {localize('Markets')}
                    </Header>
                    <StyledSubHeader as="h4" align="center" weight="500">
                        {localize(
                            'Over 100 assets available across five leading markets.',
                        )}
                    </StyledSubHeader>
                    <Markettabs>
                        <SideTab>
                            <Forex label="forex" text="Forex" />
                            <Indices label="indices" text="Indices" />
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
            </SectionContainer>
            <HomeCarouselWrapper>
                <HomeCarouselContainer>
                    <ContextContainer>
                        <Header as="h2">{localize('Why choose Deriv?')}</Header>
                        <StyledSubHeader as="h4" weight="500">
                            {localize('Your one-stop shop for online trading.')}
                        </StyledSubHeader>
                        <DemoButton onClick={handleExternalLink} secondary>
                            {localize('See a demo')}
                        </DemoButton>
                    </ContextContainer>
                    <Carousel
                        slides={[
                            () => CarouselItems(carousel_1_text),
                            () => CarouselItems(carousel_2_text),
                        ]}
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
                toggle={toggleModal}
                is_open={show_modal}
                is_blurred={true}
                closeModal={closeModal}
            >
                <SignupModal />
            </Modal>
        </Layout>
    )
}

TabCol.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export default WithIntl()(Home)
