import React, { useEffect } from 'react'
import queryString from 'query-string'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import HowItWorks from './home/_how-it-works'
import Markets from './home/_markets'
import WhyDeriv from './home/_why-deriv'
import WhyDerivMobile from './home/_why-deriv-mobile'
import PaymentMethods from './home/_payment-methods'
import Ticker from './home/_ticker'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider, Modal, useModal } from 'components/elements'
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
                <WhyDerivMobile />
                <Trade />
            </Show.Mobile>
            <Show.Desktop>
                <Ticker />
                <Trade />
                <Divider />
                <HowItWorks />
                <Divider />
                <Markets />
                <WhyDeriv />
                <PaymentMethods />
            </Show.Desktop>
            <Signup appearance={Appearances.public}></Signup>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(Home)
