import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/containers/seo'
import { IconGrid } from './_icon-grid'
import Button from 'components/form/button'
import device from 'themes/device'
import Layout from 'components/layout/layout'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import { SectionContainer } from 'components/containers/container'
import { localize, WithIntl } from 'components/localization'

const SectionHeader = styled.p`
    font-size: 2rem;
    color: var(--color-black-2);
    text-align: left;
`
const Container = styled.div`
    margin: 0 auto;
    width: 80%;
    text-align: center;

    @media ${device.desktop} {
        max-width: 1024px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`
const CheckEmail = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Layout>
            <SEO
                title={localize('Check Email')}
                description={localize(
                    'If you don\'t see an email from us within a few minutes, a few things could have happened.',
                )}
            />
            <SectionContainer>
                <Container>
                    <SectionHeader>
                        {localize('If you don\'t see an email from us within a few minutes, a few things could have happened:')}
                    </SectionHeader>
                    <IconGrid />
                    <Button secondary onClick={toggleModal}>
                        {localize('Re-enter your email and try again')}
                    </Button>
                </Container>
            </SectionContainer>
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

export default WithIntl()(CheckEmail)
