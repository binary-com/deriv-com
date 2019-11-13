import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import queryString from 'query-string'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Divider, InfiniteLoader, Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'

const PaymentMethods = Loadable({
    loader: () => import('./home/_payment-methods'),
    loading: InfiniteLoader,
})
const Ticker = Loadable({
    loader: () => import('./home/_ticker'),
    loading: InfiniteLoader,
})
const WhyDeriv = Loadable({
    loader: () => import('./home/_why-deriv'),
    loading: InfiniteLoader,
})
const WhyDerivMobile = Loadable({
    loader: () => import('./home/_why-deriv-mobile'),
    loading: InfiniteLoader,
})
const HowItWorks = Loadable({
    loader: () => import('./home/_how-it-works'),
    loading: InfiniteLoader,
})
const Markets = Loadable({
    loader: () => import('./home/_markets'),
    loading: InfiniteLoader,
})

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
                <Ticker />
            </Show.Desktop>
            <Trade />
            <Show.Desktop>
                <Divider />
                <HowItWorks />
                <Divider />
                <Markets />
                <WhyDeriv />
                <PaymentMethods />
            </Show.Desktop>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(Home)
