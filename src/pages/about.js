import React from 'react'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Hero from '../components/elements/hero.js'
import Container from '../components/containers/container.js'
import Card from '../components/elements/card.js'

import DubaiSVG from 'images/svg/dubai.svg'
import KualaLumpurSVG from 'images/svg/kuala-lumpur.svg'
import LabuanSVG from 'images/svg/labuan.svg'
import MaltaSVG from 'images/svg/malta.svg'
import ParaguaySVG from 'images/svg/paraguay.svg'
import Button from '../components/form/button.js'
import TradingAccountsOpenedSVG from 'images/svg/trading-accounts-opened.svg'
import TradeLastMonthSVG from 'images/svg/trades-last-month.svg'
import TotalTradeTurnoverSVG from 'images/svg/total-trade-turnover.svg'
import VisionSVG from 'images/svg/vision.svg'
import FuseeSVG from 'images/svg/fusee.svg'

const OurLocationsWrapper = styled.div`
    width: 100%;
    background-color: --color-white;
    text-align: center;
    padding: 8rem 0;

    h1 {
        height: 60px;
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        color: #2a2a2a;
    }
    button {
        margin-top: 4rem;
        width: 30rem;
        height: 4.8rem;
        font-size: 16px;
    }
`
const OurLocationsContainer = styled(Container)`
    margin: 0 auto;
    padding: 4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-template-areas:
        'kll kll kll kll dl dl dl dl pl pl pl pl'
        '. . ml ml ml ml ll ll ll ll . .';
`

const Location = styled.div`
    grid-area: ${props => props.location};

    h3 {
        margin-top: 0.5rem;
        font-size: 20px;
        line-height: 1.5;
        color: #2a2a2a;
    }
`

const OurLocations = () => {
    return (
        <OurLocationsWrapper>
            <h1>Our Locations</h1>
            <OurLocationsContainer>
                <Location location="kll">
                    <KualaLumpurSVG />
                    <h3>
                        Kuala Lumpur,
                        <br />
                        Malaysia
                    </h3>
                </Location>
                <Location location="dl">
                    <DubaiSVG />
                    <h3>Dubai</h3>
                </Location>
                <Location location="pl">
                    <ParaguaySVG />
                    <h3>
                        Asunción,
                        <br />
                        Paraguay
                    </h3>
                </Location>
                <Location location="ml">
                    <MaltaSVG />
                    <h3>
                        Birkirkara,
                        <br />
                        Malta
                    </h3>
                </Location>
                <Location location="ll">
                    <LabuanSVG />
                    <h3>
                        Labuan,
                        <br />
                        Malaysia
                    </h3>
                </Location>
            </OurLocationsContainer>
            <Button secondary>Start with free practice account</Button>
        </OurLocationsWrapper>
    )
}

const OurNumbersWrapper = styled.div`
    width: 100%;
    background-color: --color-white;
`
const OurNumbersContainer = styled(Container)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;

    h1 {
        width: 100%;
        height: 151px;
        margin-top: 2.4rem;
        font-size: 12.8rem;
        font-weight: bold;
        line-height: 1.5;
        text-align: right;
        color: #85acb0;
    }
    h2 {
        height: 60px;
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        color: #2a2a2a;
    }
    p {
        height: 74px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.25;
        text-align: center;
        color: #333333;
        margin-top: 0.8rem;
    }
    span {
        margin-top: 2rem;
        height: 30px;
        font-size: 20px;
        line-height: 1.5;
        text-align: right;
        color: #2a2a2a;
    }
`

const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4rem;

    span {
        width: 100%;
        height: 40px;
        font-size: 32px;
        font-weight: bold;
        line-height: 1.25;
        text-align: right;
        color: #2a2a2a;
    }

    @media (max-width: 981px) {
        justify-content: center;
        margin-top: 0;

        div {
            margin-top: 2rem;
        }
    }
`

const Charts = styled.div`
    width: 328px;
    text-align: right;

    h3 {
        margin-top: 2.4rem;
        font-size: 32px;
        font-weight: bold;
        color: #85acb0;
        line-height: 1.5;
    }
    span {
        height: 30px;
        font-size: 20px;
        line-height: 1.5;
        color: #2a2a2a;
    }
    g {
        font-size: 1.4rem;
    }
`

const OurNumbers = () => {
    return (
        <OurNumbersWrapper>
            <OurNumbersContainer>
                <h2>Our Numbers</h2>
                <p>
                    Our powerful platform and intuitive tools make it easy for
                    users to make profitable trading decisions. We’ll let the
                    numbers do the talking.
                </p>
                <ChartContainer>
                    <Charts>
                        <TradingAccountsOpenedSVG />
                        <h3>704,293</h3>
                        <span>Trading accounts opened</span>
                    </Charts>
                    <Charts>
                        <TradeLastMonthSVG />
                        <h3>19,514,921</h3>
                        <span>Trades last month</span>
                    </Charts>
                    <Charts>
                        <TotalTradeTurnoverSVG />
                        <h3>USD 6,049,936,768</h3>
                        <span>Total trade turnover</span>
                    </Charts>
                    <h1>USD 13,499,439</h1>
                    <span>Withdrawn last month</span>
                </ChartContainer>
            </OurNumbersContainer>
        </OurNumbersWrapper>
    )
}

const OurGoalsWrapper = styled.section`
    width: 100%;
    background-image: linear-gradient(to bottom, #e8e8e8, var(--color-white));
`
const OurGoalsContainer = styled(Container)`
    padding: 8rem 0;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const OurGoals = () => (
    <OurGoalsWrapper>
        <OurGoalsContainer>
            <Card
                Icon={VisionSVG}
                title="Our vision"
                content="Our vision is to be the world’s most customer-centric,
                        online trading company; a place where traders come to
                        find and discover any derivative they want to trade."
                firstCard
            />
            <Card
                Icon={FuseeSVG}
                title="Our mission"
                content="Our mission is to offer traders competitive prices along
                with the broadest selection of derivatives to trade with
                the utmost convenience."
                lastCard
            />
        </OurGoalsContainer>
    </OurGoalsWrapper>
)

const About = () => (
    <Layout>
        <SEO title={localize('About us')} />
        <Hero />
        <OurGoals />
        <OurNumbers />
        <OurLocations />
    </Layout>
)

export default WithIntl()(About)
