import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import { Button } from 'components/form'
import Layout from 'components/layout/layout'
import { Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { GridContainer, SectionContainer, SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const SectionHeader = styled.p`
    font-size: 2rem;
    color: var(--color-black-2);
    text-align: left;
`

const CheckEmail = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Layout>
            <SEO
                title={localize('Check Email')}
                description={localize(
                    "If you don't see an email from us within a few minutes, a few things could have happened.",
                )}
            />
            <SectionContainer>
                <GridContainer align="center">
                    <SectionHeader>
                        {localize(
                            "If you don't see an email from us within a few minutes, a few things could have happened:",
                        )}
                    </SectionHeader>
                    <IconGrid />
                    <Button secondary onClick={toggleModal}>
                        {localize('Re-enter your email and try again')}
                    </Button>
                </GridContainer>
            </SectionContainer>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                closeModal={closeModal}
            >
                <SignupModal closeModal={closeModal} />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(CheckEmail)
