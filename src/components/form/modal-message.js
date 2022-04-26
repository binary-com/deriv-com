import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import { localize } from 'components/localization'
import { Button } from 'components/form'

const ModalFlex = styled(Flex)`
    width: 486px;
    padding: 46px 47px 40px;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    top: 392px;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0 4px 15px;
    @media ${device.tabletS} {
        width: 328px;
        top: 128px;
        padding: 46px 24px 40px;
    }
`

const ModalMessage = ({ showModal, src, title, message }) => {
    return (
        <ModalFlex ai="center" direction="column" height="unset">
            <img src={src} alt="modal-message-icon" />
            <Header as="h3" type="subtitle-2" align="center" weight="bold" mt="18px">
                {title}
            </Header>
            <Header as="p" type="paragraph-1" align="center" weight="normal" mt="8px" mb="24px">
                {message}
            </Header>
            <Button id="dm-new-signup-confirm" secondary onClick={() => showModal(false)}>
                {localize('Got it')}
            </Button>
        </ModalFlex>
    )
}

ModalMessage.propTypes = {
    message: PropTypes.string,
    showModal: PropTypes.func,
    src: PropTypes.string,
    title: PropTypes.string,
}

export default ModalMessage
