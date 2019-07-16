import React, { Component } from 'react'

import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import Layout from '../components/layout/layout'
import Modal from '../components/elements/modal'
import SignupModal from '../components/elements/signup-modal'
import { localize, WithIntl } from '../components/localization'
import Carousel from '../components/elements/carousel'
import styled from 'styled-components'
import { Header } from '../components/elements/typography.js'
import CarouselBackground from 'images/svg/abstract.svg'
import ChecklistLogo from 'images/svg/checklist.svg'

const HomeCarouselWrapper = styled.div`
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

    .context-container {
        margin-top: 3.8rem;
        color: var(--color-black-2);
        width: 32.8rem;
        margin-right: 10.7rem;
    }
    .carousel-container {
        box-sizing: border-box;
        width: 100%;
        max-width: 79.7rem;
    }
    button {
        width: 13.5rem;
        margin-top: 4rem;
    }
`
const Slide1 = styled.section`
    div {
        display: inline-flex;
        margin-top: 4rem;
        width: 100%;

        p {
            height: 30px;
            font-size: 20px;
            color: var(--color-black-2);
            line-height: 1.5;
            margin-left: 1.6rem;
        }
    }

    div:first-child {
        margin-top: 0;
    }
`
const Carousel1 = () => (
    <Slide1>
        <div>
            <ChecklistLogo />
            <p>Patented, licensed, and regulated</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>Short- to long-term trades</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>Reliable customer support</p>
        </div>
        <div>
            <ChecklistLogo />
            <p>Privacy guaranteed</p>
        </div>
    </Slide1>
)
const Carousel2 = () => <div>slide 2</div>

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
                        secondary button example
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
                        <div className="context-container">
                            <Header as="h2">Why choose Deriv?</Header>
                            <Header as="h4" weight="500">
                                Your one-stop shop for online trading.
                            </Header>
                            <Button secondary>See a demo</Button>
                        </div>
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
