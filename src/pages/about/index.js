import React from 'react'
import { localize, WithIntl } from '../../components/localization'
import SEO from '../../components/containers/seo'
import Layout from '../../components/layout/layout'
import Hero from '../../components/elements/hero.js'
import Modal, { useModal } from '../../components/elements/modal'
import SignupModal from '../../components/elements/signup-modal'

import { OurLocations } from './_our-locations'
import { OurNumbers } from './_our-numbers'
import { OurGoals } from './_our-goals'

const About = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

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
            <OurLocations toggleModal={toggleModal} />
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

export default WithIntl()(About)
