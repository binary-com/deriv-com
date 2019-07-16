import React, { Component } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import Container from '../components/containers/container'
import Modal from '../components/elements/modal'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'
import Signup from '../components/form/signup'
import img from 'images/common/header-trade.png'
import { Header, Text } from '../components/elements/typography.js'
import Logo from 'images/svg/deriv.svg'
import SuperiorPlatform from 'images/svg/superior-trading-platform.svg'
import PatentedTech from 'images/svg/patented-technology.svg'
import Intuitive from 'images/svg/intuitive.svg'
import Practice from 'images/svg/practice.svg'
import Trade from 'images/svg/trade.svg'
import Withdraw from 'images/svg/withdraw.svg'
import PaymentMethods from '../components/elements/payment-methods.js'

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
    @media ${device.sm} {
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
    @media ${device.tabletS} {
        text-align: center;
    }
`
const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 2rem ;
    min-height: 55rem;
    background: var(--color-black) url(${img});
    background-repeat: no-repeat;
    background-position: 23% 100%;
    background-size: auto;

    @media ${device.lg} {
        background-position: -10rem 100%;
    }
    @media ${device.md} {
        background-position: -20rem 100%;
    }
    @media ${device.sm} {
        background-position: -40rem 100%;
    }
`
const HeroGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;

    article {
        padding: 0;

        * {
            max-width: 100%;
        }
    }
    .hero-left {
        text-align: left;

        .subheader {
            margin-top: 1rem;
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
    @media ${device.lg} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;

        .hero-left * {
            text-align: center;
        }
        .signup {
            justify-self: center;
        }
    }
    @media ${device.sm} {
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
    @media ${device.lg} {
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
    }
`
const Works = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0;

    @media ${device.sm} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`
const GreySection = styled.section`
    width: 100%;
    background-color: var(--color-grey-1);
    padding: 2rem 0;

`
const PaymentSection = styled.section`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-1);
    padding: 2rem 0;

`
const WhyDeriv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    max-width: 100%;

    div {
        padding: 1rem;
        align-self: center;

        * {
            max-width: 100%;
        }
    }
    h3 {
        font-size: 4.8rem;
        font-weight: bold;
        line-height: 6rem;
    }
    h5 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3rem;
        margin-top: 0.8rem;
        margin-bottom: 4rem;
    }
    button {
        padding: 1.6rem 2rem;
        font-weight: bold;
    }
    @media ${device.md} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
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
                    <Header as="h4" color="white" weight="500" className='subheader'>
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

class Home extends Component {
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
                <SEO title={localize('Home')} />
                <Hero />
                <DtraderSection>
                    <SectionHeader>
                        <h2><Logo /> {localize('DTrader')}</h2>
                        <h3>{localize('All you need to get started')}</h3>
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
                <Container>
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
                </Container>
                <GreySection>
                    <Container>
                        <WhyDeriv>
                            <div>
                                <h3>{localize('Why choose Deriv?')}</h3>
                                <h5>{localize('Your one-stop shop for online trading.')}</h5>
                                <Button onClick={this.toggleModal} secondary>
                                {localize('Create a free demo account')}
                                </Button>
                            </div>
                            <div></div>
                        </WhyDeriv>
                    </Container>
                </GreySection>
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

export default WithIntl()(Home)
