import React from 'react'
import styled from 'styled-components'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Container from 'components/containers/container'
import SignupModal from 'components/elements/signup-modal'
import PaymentMethods from 'components/elements/payment-methods.js'
import Modal, { useModal } from 'components/elements/modal'
import { localize, WithIntl } from 'components/localization'
import { Divider } from 'components/elements/divider'

import { Hero } from './home/_hero'
import { Dtrader } from './home/_dtrader'
import { HowItWorks } from './home/_how-it-works'
import { Markets } from './home/_markets'
import { WhyDeriv } from './home/_why-deriv'

const PaymentSection = styled.section`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-1);
    padding: 2rem 0;
`
const Home = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Layout>
            <SEO title={localize('Home')} />
            <Hero />
            <Dtrader toggleModal={toggleModal} />
            <HowItWorks />
            <Divider />
            <Markets />
            <WhyDeriv />
            <PaymentSection>
                <Container>
                    <PaymentMethods />
                </Container>
            </PaymentSection>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                is_blurred={true}
                closeModal={closeModal}
            >
                <SignupModal />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(Home)
