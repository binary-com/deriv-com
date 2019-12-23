import React, { useEffect } from 'react'
import queryString from 'query-string'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import WhyDerivMobile from './home/_why-deriv-mobile'
import HowItWorks from './home/_how-it-works'
import Markets from './home/_markets'
import WhatOurClientsSay from './home/_what-our-clients-say'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'

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
                <WhyDerivMobile />
            </Show.Mobile>
            <Show.Desktop>
                <Trade />
                <HowItWorks />
            </Show.Desktop>
            <Markets />
            <WhatOurClientsSay />
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(Home)
