import React from 'react'
import styled from 'styled-components'
import Carousel from 'components/elements/carousel'
import Button from 'components/form/button'
import { localize } from 'components/localization'
import { SectionContainer } from 'components/containers/container'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'

const carousel_data = [
    {
        header: 'More reasons you’ll love DTrader',
        text: [
            localize('Choose from the widest range of options.'),
            localize('Licensed and regulated.'),
            localize('Exclusive synthetic indices, 24/7.'),
        ],
        img_name: 'dtrader-screen.png',
        img_alt: localize('DTrader screens'),
    },
    {
        header: 'More reasons you’ll love DBot',
        text: [
            localize('Drag & drop trading robot builder.'),
            localize('Test trading strategies with unlimited demo accounts.'),
            localize(
                'Access tools & indicators to make smart trading decisions.',
            ),
        ],
        img_name: 'dbot-screen.png',
        img_alt: localize('DBot screens'),
    },
    {
        header: 'More reasons you’ll love DMT5',
        text: [
            localize('Trade 24/7 on DMT5.'),
            localize('High leverage, 100% ‘A’ book account.'),
            localize('Trade on mobile, desktop and browser.'),
        ],
        img_name: 'dmt5-screen.png',
        img_alt: localize('DMT5 screens'),
    },
]

const HomeCarouselWrapper = styled(SectionContainer)`
    background-color: var(--color-black);
`

const ButtonWrapper = styled.div`
    margin-top: 4rem;
`

export const WhyDeriv = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <HomeCarouselWrapper>
            <Carousel slides={carousel_data}>
                <ButtonWrapper>
                    <Button onClick={toggleModal} secondary>
                        {localize('Create a free account')}
                    </Button>
                </ButtonWrapper>
            </Carousel>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                closeModal={closeModal}
            >
                <SignupModal autofocus />
            </Modal>
        </HomeCarouselWrapper>
    )
}
