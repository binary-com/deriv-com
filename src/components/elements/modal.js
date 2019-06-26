import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Portal = ({ children }) => {
    const modalRoot = document.getElementById('portal')
    const el = document.createElement('div')

    useEffect(() => {
        modalRoot.appendChild(el)
    }, [])

    useEffect(() => {
        return () => modalRoot.removeChild(el)
    })

    return createPortal(children, el)
}

const Modal = ({ children, toggle, is_open }) => (
    <Portal>
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
    filter: blur(8px);
`

Modal.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    is_open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
}
