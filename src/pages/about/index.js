import React from 'react'
import styled from 'styled-components'
import { OurLocations } from './_our-locations'
import { OurNumbers } from './_our-numbers'
import { OurGoals } from './_our-goals'
import { OurOffices } from './_our-offices'
import { OurAwards } from './_our-awards'
import { JoinUs } from './_join-us'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { Hero, Header, Modal, useModal } from 'components/elements'
import { Button } from 'components/form'
import SignupModal from 'components/custom/signup-modal'
import { Show, SEO } from 'components/containers'

const Goahead = styled.div`
    text-align: center;

    ${Header} {
        padding: 4rem 2rem;
        font-size: 6rem;
    }
`
const AccountButton = styled(Button)`
    width: 90%;
    max-width: 32rem;
    margin-bottom: 3.6rem;
`
const About = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <Layout>
            <SEO title={localize('About us')} />
            <Show.Mobile>
                <Hero
                    header={localize('About us')}
                    paragraph={localize(
                        'Deriv is the latest innovation by the Binary Group, powered by 20 years of experience, customer focus, and technical innovation.',
                    )}
                />
            </Show.Mobile>
            <Show.Desktop>
                <Hero
                    header={localize('About us')}
                    paragraph={localize(
                        'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading. It’s built upon 20 years of experience, customer focus, and technical innovation. With our powerful yet simple trading experience and tools, new and professional traders alike can understand risk and make better trading decisions.',
                    )}
                />
            </Show.Desktop>
            <OurGoals />
            <OurNumbers />
            <OurLocations />
            <OurOffices />
            <JoinUs />
            <OurAwards />
            <Show.Mobile>
                <Goahead>
                    <Header as="h1" align="center" lh="1.1">
                        Go ahead, experience it for yourself.
                    </Header>
                    <AccountButton onClick={toggleModal} secondary>
                        {localize('Create a free account')}
                    </AccountButton>
                    <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                        <SignupModal autofocus />
                    </Modal>
                </Goahead>
            </Show.Mobile>
        </Layout>
    )
}

export default WithIntl()(About)
