import React, { useEffect } from 'react'
import queryString from 'query-string'
// import Ticker from './home/_ticker'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import TradeTheWayYouLike from './home/_trade-the-way-you-like'
import Markets from './home/_markets'
import SimpleSteps from './home/_simple-steps'
import WhatOurClientsSay from './home/_what-our-clients-say'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import Signup, { Appearances } from 'components/custom/signup'

const Home = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    useEffect(() => {
        const parsedUrl = queryString.parse(window.location.search)
        if (parsedUrl.action === 'signup') {
            toggleModal()
        }
    }, [])

    return (
        <Layout>
            <SEO
                title={localize('Your ultimate online trading experience')}
                description={localize(
                    'Deriv is an online trading company that offers the broadest selection of derivatives with competitive prices.',
                )}
            />
            <Hero />
            <Show.Mobile>
                <TradeTheWayYouLike />
            </Show.Mobile>
            <Show.Desktop>
                <Trade />
            </Show.Desktop>
            <Markets />
            <SimpleSteps />
            <WhatOurClientsSay />
            {/* TODO: investigate performance and enable later */}
            {/* <Show.Desktop>
                <Ticker />
            </Show.Desktop> */}
            <Signup appearance={Appearances.public} />
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(Home)
