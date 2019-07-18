import React, { Component } from 'react'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import Modal from '../components/elements/modal'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'
import Carousel from '../components/elements/carousel'
import { Header } from '../components/elements/typography.js'
import CarouselBackground from 'images/svg/abstract.svg'
import ChecklistLogo from 'images/svg/checklist.svg'

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
                <div>
                    <Button onClick={this.toggleModal} secondary>
                        {localize('secondary button example')}
                    </Button>
                </div>
                <Modal
                    toggle={this.toggleModal}
                    is_open={this.state.show_modal}
                    is_blurred={true}
                    closeModal={this.closeModal}
                >
                    <SignupModal />
                </Modal>
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
            </Layout>
        )
    }
}

export default WithIntl()(Home)
