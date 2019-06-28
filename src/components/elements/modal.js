import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    min-width: 32rem;
    z-index: 10;
    margin-bottom: 10rem;
    background: white;
    border-radius: 5px;
    padding: 1.5rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    padding: 10px;
    content: 'X';
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

const Modal = ({ children, toggle, is_open }) => (
    <Portal is_open={is_open}>
        {is_open && (
            <ModalWrapper>
                <ModalCard>
                    <CloseButton onClick={toggle}>X</CloseButton>
                    {children}
                </ModalCard>
                <Background onClick={toggle} />
            </ModalWrapper>
        )}
    </Portal>
)

const Portal = ({ children, is_open }) => {
    const appRoot = document.getElementById('___gatsby')
    const modalRoot = document.getElementById('modal')
    const el = document.createElement('div')

    appRoot.style.filter = is_open ? 'blur(2px)' : 'none'

    useEffect(() => {
        modalRoot.appendChild(el)

        return function cleanup() {
            modalRoot.removeChild(el)
        }
    })
    return createPortal(children, el)
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    is_open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
}

export default Modal
