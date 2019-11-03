import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/form'
import { localize, Localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { Modal, useModal, Carousel } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'

const carousel_data = [
    {
        header: <Localize translate_text="More reasons you’ll love DTrader" />,
        text: [
            <Localize key={0} translate_text="Choose from the widest range of options." />,
            <Localize key={1} translate_text="Licensed and regulated." />,
            <Localize key={2} translate_text="Exclusive synthetic indices, 24/7." />,
        ],
        img_name: 'dtrader-screen.png',
        img_alt: <Localize translate_text="DTrader screens" />,
    },
    {
        header: <Localize translate_text="More reasons you’ll love DBot" />,
        text: [
            <Localize key={0} translate_text="Drag & drop trading robot builder." />,
            <Localize
                key={1}
                translate_text="Test trading strategies with unlimited demo accounts."
            />,
            <Localize
                key={2}
                translate_text="Access tools & indicators to make smart trading decisions."
            />,
        ],
        img_name: 'dbot-screen.png',
        img_alt: <Localize translate_text="DBot screens" />,
    },
    {
        header: <Localize translate_text="More reasons you’ll love DMT5" />,
        text: [
            <Localize key={0} translate_text="Trade 24/7 on DMT5." />,
            <Localize key={1} translate_text="High leverage, 100% ‘A’ book account." />,
            <Localize key={1} translate_text="Trade on mobile, desktop and browser." />,
        ],
        img_name: 'dmt5-screen.png',
        img_alt: <Localize translate_text="DMT5 screens" />,
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
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </HomeCarouselWrapper>
    )
}
