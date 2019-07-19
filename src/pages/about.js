import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Hero from '../components/elements/hero.js'
import Container from '../components/containers/container.js'
import { CardTypeOne } from '../components/elements/card.js'
import { Header } from '../components/elements/typography.js'
import Modal from '../components/elements/modal'
import SignupModal from '../components/elements/signup-modal'

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
    background-color: var(--color-white);
    text-align: center;
    padding: 8rem 0;

    button {
        margin-top: 4rem;
        padding: 1.2rem 2.5rem;
    }
`
const OurLocationsContainer = styled(Container)`
    padding: 4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-template-areas:
        'kll kll kll kll dl dl dl dl pl pl pl pl'
        '. . ml ml ml ml ll ll ll ll . .';
`

const Location = styled.div`
    grid-area: ${props => props.location};

    p {
        margin-top: 0.5rem;
        font-size: 2rem;
        line-height: 1.5;
        color: var(--color-black-2);
    }
`

const OurLocations = ({ toggleModal }) => {
    return (
        <OurLocationsWrapper>
            <Header as="h2" align="center" color="black-2">
                {localize('Our Locations')}
            </Header>
            <OurLocationsContainer>
                <Location location="kll">
                    <KualaLumpurSVG />
                    <p>
                        {localize('Kuala Lumpur')},
                        <br />
                        {localize('Malaysia')}
                    </p>
                </Location>
                <Location location="dl">
                    <DubaiSVG />
                    <p>{localize('Dubai')}</p>
                </Location>
                <Location location="pl">
                    <ParaguaySVG />
                    <p>
                        {localize('Asunción')},
                        <br />
                        {localize('Paraguay')}
                    </p>
                </Location>
                <Location location="ml">
                    <MaltaSVG />
                    <p>
                        {localize('Birkirkara')},
                        <br />
                        {localize('Malta')}
                    </p>
                </Location>
                <Location location="ll">
                    <LabuanSVG />
                    <p>
                        {localize('Labuan')},
                        <br />
                        {localize('Malaysia')}
                    </p>
                </Location>
            </OurLocationsContainer>
            <Button secondary onClick={toggleModal}>
                {localize('Start with free practice account')}
            </Button>
        </OurLocationsWrapper>
    )
}

const OurNumbersWrapper = styled.section`
    width: 100%;
    background-color: var(--color-white);
`
const OurNumbersContainer = styled(Container)`
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
        color: var(--color-green);
    }
    h4 {
        margin-top: 0.8rem;
    }
    span {
        margin-top: 2rem;
        height: 30px;
        font-size: 2rem;
        line-height: 1.5;
        text-align: right;
        color: var(--color-black-2);
    }
`

const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4rem;

    p {
        width: 100%;
        height: 40px;
        font-size: 32px;
        font-weight: bold;
        line-height: 1.25;
        text-align: right;
        color: var(--color-black-2);
        margin-top: 2rem;
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
    }
    p {
        height: 30px;
        font-size: 2rem;
        line-height: 1.5;
        color: var(--color-black-2);
        margin-top: 0;
        font-weight: normal;
    }
`

const OurNumbers = () => {
    return (
        <OurNumbersWrapper>
            <OurNumbersContainer>
                <Header as="h2" color="black-2" align="center">
                    {localize('Our Numbers')}
                </Header>
                <Header as="h4" color="black-3" align="center" weight="500">
                    {localize(
                        'Our powerful platform and intuitive tools make it easy for users to make profitable trading decisions. We’ll let the numbers do the talking.',
                    )}
                </Header>
                <ChartContainer>
                    <Charts>
                        <TradingAccountsOpenedSVG />
                        <Header as="h3" color="green" align="right" lh="1.5">
                            704,293
                        </Header>
                        <p>{localize('Trading accounts opened')}</p>
                    </Charts>
                    <Charts>
                        <TradeLastMonthSVG />
                        <Header as="h3" color="green" align="right" lh="1.5">
                            19,514,921
                        </Header>
                        <p>{localize('Trades last month')}</p>
                    </Charts>
                    <Charts>
                        <TotalTradeTurnoverSVG />
                        <Header as="h3" color="green" align="right" lh="1.5">
                            USD 6,049,936,768
                        </Header>
                        <p>{localize('Total trade turnover')}</p>
                    </Charts>
                    <h1>USD 13,499,439</h1>
                    <p>{localize('Withdrawn last month')}</p>
                </ChartContainer>
            </OurNumbersContainer>
        </OurNumbersWrapper>
    )
}

const OurGoalsWrapper = styled.section`
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
`
const OurGoalsContainer = styled(Container)`
    padding: 8rem 0;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    article:first-child {
        margin-left: 0;
    }
    article:last-child {
        margin-right: 0;
    }
`

const OurGoals = () => (
    <OurGoalsWrapper>
        <OurGoalsContainer>
            <CardTypeOne
                Icon={VisionSVG}
                title={localize('Our vision')}
                content={localize(
                    'Our vision is to be the world’s most customer-centric, online trading company; a place where traders come to find and discover any derivative they want to trade.',
                )}
            />
            <CardTypeOne
                Icon={FuseeSVG}
                title={localize('Our mission')}
                content={localize(
                    'Our mission is to offer traders competitive prices along with the broadest selection of derivatives to trade with the utmost convenience.',
                )}
            />
        </OurGoalsContainer>
    </OurGoalsWrapper>
)

class About extends Component {
    state = {
        show_modal: false,
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
                <SEO title={localize('About us')} />
                <Hero
                    header={localize('About us')}
                    paragraph={localize(
                        'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading. It’s built upon 20 years of experience, customer focus, and technical innovation. With our powerful yet simple trading experience and tools, new and professional traders alike can understand risk and make better trading decisions.',
                    )}
                />
                <OurGoals />
                <OurNumbers />
                <OurLocations toggleModal={this.toggleModal} />
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

OurLocations.propTypes = {
    toggleModal: PropTypes.func,
}

export default WithIntl()(About)
