import React from 'react'
import styled from 'styled-components'
import { OurLocations } from './_our-locations'
import { OurNumbers } from './_our-numbers'
import { OurGoals } from './_our-goals'
import { localize, WithIntl } from 'components/localization'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Hero from 'components/elements/hero.js'
import { Header } from 'components/elements/typography.js'
import Button from 'components/form/button'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import Show from 'components/containers/show'

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
                    header={localize('Do not merge this')}
                    paragraph={localize(
                        'Testing the cache bust method.',
                    )}
                />
            </Show.Mobile>
            <Show.Desktop>
                <Hero
                    header={localize('Do not merge this')}
                    paragraph={localize(
                        'Testing the cache bust method.',
                    )}
                />
            </Show.Desktop>
            <OurGoals />
            <OurNumbers />
            <OurLocations />
            <Show.Mobile>
                <Goahead>
                    <Header as="h1" align="center" lh="1.1">
                        Go ahead, experience it for yourself.
                    </Header>
                    <AccountButton onClick={toggleModal} secondary>
                        {localize('Create a free account')}
                    </AccountButton>
                    <Modal
                        toggle={toggleModal}
                        is_open={show_modal}
                        is_blurred={true}
                        closeModal={closeModal}
                    >
                        <SignupModal autofocus />
                    </Modal>
                </Goahead>
            </Show.Mobile>
        </Layout>
    )
}

export default WithIntl()(About)
