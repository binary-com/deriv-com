import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Portal from '../containers/portal'
// Icons
import Close from 'images/svg/close.svg'

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalCard = styled.div`
    position: relative;
    z-index: 10;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`
const CloseButton = styled(Close)`
    position: absolute;
    top: 0;
    right: 0;
    width: 2.6rem;
    height: 2.6rem;
    border: none;
    background: transparent;
    padding: 0.5rem;
    color: var(--color-black);

    &:hover {
        cursor: pointer;
    }
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
`

const Modal = ({ children, toggle, is_open, is_blurred, closeModal }) => {
    const handleEscape = e => {
        if (e.keyCode === 27) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, false)

        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [])

    return (
        <Portal is_open={is_open} is_blurred={is_blurred}>
            {is_open && (
                <ModalWrapper>
                    <ModalCard>
                        <CloseButton onClick={toggle} />
                        {children}
                    </ModalCard>
                    <Background onClick={toggle} />
                </ModalWrapper>
            )}
        </Portal>
    )
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    closeModal: PropTypes.func,
    is_blurred: PropTypes.bool,
    is_open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
}

export default Modal

export function useModal(is_open = false) {
    const [show_modal, setShowModal] = useState(is_open)
    const toggleModal = () => setShowModal(!show_modal)
    const closeModal = () => setShowModal(false)

    return [show_modal, toggleModal, closeModal]
}
