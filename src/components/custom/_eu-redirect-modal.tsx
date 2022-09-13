import React, { Ref, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
// Icons
import Close from 'images/svg/custom/close-2.svg'

type EURedirectProps = {
    aria_label?: string
    closeModal?: () => void
    is_open: boolean
    ref?: Ref<HTMLAnchorElement>
    rel?: string
    target?: string
    to?: string
    toggle: (event: React.MouseEvent<HTMLElement>) => void
}

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
    z-index: 200;
`
const ModalCard = styled.div`
    position: relative;
    z-index: 210;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 44rem;
    background: var(--color-white);
    padding: 2.4rem;

    @media ${device.mobileL} {
        width: 80%;
    }
`
const CloseButton = styled.img`
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
const Action = styled(Flex)`
    justify-content: space-between;
    align-items: center;
`
const shared_css = css`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    transition: all 0.25s;
    height: fit-content;
    cursor: pointer;
    text-decoration: none;
`
const Proceed = styled.a`
    ${shared_css}
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
`
const Cancel = styled.span`
    ${shared_css}
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    background: transparent;
    margin-right: 0.8rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const EURedirect = ({
    toggle,
    is_open,
    closeModal,
    to = '',
    target = '',
    rel = '',
    ref,
    aria_label = '',
}: EURedirectProps) => {
    const handleEscape = (e) => {
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
        is_open && (
            <ModalWrapper>
                <ModalCard>
                    <Action>
                        <Text weight="bold">
                            <Localize translate_text="Redirect notice" />
                        </Text>
                        <CloseButton src={Close} alt="close-2" onClick={toggle} />
                    </Action>

                    <div>
                        <Text size="var(--text-size-xs)" m="2.4rem 0">
                            <Localize translate_text="You are being redirected to an external website." />
                        </Text>
                    </div>
                    <Flex jc="flex-end">
                        <Cancel onClick={() => closeModal()}>
                            <Text size="var(--text-size-xs)" weight="bold">
                                <Localize translate_text="Cancel" />
                            </Text>
                        </Cancel>
                        <Proceed
                            target={target}
                            rel={rel}
                            ref={ref}
                            href={to}
                            aria-label={aria_label}
                            onClick={toggle}
                        >
                            <Text size="var(--text-size-xs)" weight="bold" color="white">
                                <Localize translate_text="Proceed" />
                            </Text>
                        </Proceed>
                    </Flex>
                </ModalCard>
                <Background onClick={toggle} />
            </ModalWrapper>
        )
    )
}

export default EURedirect
export const useModal = (is_open = false) => {
    const [show_modal, setShowModal] = useState(is_open)
    const toggleModal = () => setShowModal(!show_modal)
    const closeModal = () => setShowModal(false)

    return [show_modal, toggleModal, closeModal] as const
}
