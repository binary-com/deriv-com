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
import HomeHero from '../components/elements/home-hero.js'
import StyledCard from '../components/elements/styled-card.js'
import GridCard from '../components/elements/grid-card.js'
import { Header } from '../components/elements/typography.js'
import Logo from 'images/svg/deriv.svg'
import SuperiorPlatform from 'images/svg/superior-trading-platform.svg'
import PatentedTech from 'images/svg/patented-technology.svg'
import Intuitive from 'images/svg/intuitive.svg'
import Practice from 'images/svg/practice.svg'
import Trade from 'images/svg/trade.svg'
import Withdraw from 'images/svg/withdraw.svg'
import PaymentMethods from '../components/elements/payment-methods.js'

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
                <HomeHero
                    header_part_1={localize('This is your ultimate trading experience')}
                    header_part_2={localize('The world’s markets at your fingertips anytime, anywhere.')}
                />
                <DtraderSection>
                    <SectionHeader>
                        <h2><Logo /> {localize('DTrader')}</h2>
                        <h3>{localize('All you need to get started')}</h3>
                    </SectionHeader>
                    <Container>
                        <Dtrader>
                            <StyledCard
                                Icon={SuperiorPlatform}
                                title={localize('Superior trading platform')}
                                content_1={localize(
                                    'A revolutionary platform for all traders.',
                                )}
                                content_2={localize(
                                    'Access the world’s most traded markets and assets.',
                                )}
                                content_3={localize(
                                    '100+ instruments.',
                                )}
                            />
                            <StyledCard
                                Icon={PatentedTech}
                                title={localize('Patented pricing technology')}
                                content_1={localize(
                                    'Real-time, two-way pricing.',
                                )}
                                content_2={localize(
                                    'Powered by our patented algorithms.',
                                )}
                                content_3={localize(
                                    'Transparency guaranteed.',
                                )}
                            />
                            <StyledCard
                                Icon={Intuitive}
                                title={localize('Intuitive and customisable')}
                                content_1={localize(
                                    'Easy-to-use and powerful trading environment.',
                                )}
                                content_2={localize(
                                    'Trade the way you want with customisable charts, analytic tools, and themes.',
                                )}
                            />
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
                        <GridCard
                            Icon={Practice}
                            title={localize('Practice')}
                            content={localize(
                                'Open a demo account with unlimited funds. Start trading for free and practice to hone your skills.',
                            )}
                        />
                        <GridCard
                            Icon={Trade}
                            title={localize('Trade')}
                            content={localize(
                                'Open a real account and add funds. Trade forex, indices, commodities, and other derivatives.',
                            )}
                        />
                        <GridCard
                            Icon={Withdraw}
                            title={localize('Withdraw')}
                            content={localize(
                                'Get funds quickly and easily. We support many deposit and withdrawal options.',
                            )}
                        />
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
