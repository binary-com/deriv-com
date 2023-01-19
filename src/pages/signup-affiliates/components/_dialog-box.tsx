import React, { Ref, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

type DialogModelBoxProps = {
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
    max-width: 44rem;
    background: var(--color-white);
    padding: 2.4rem;
    width: 440px;
    height: 180px;
    @media ${device.mobileL} {
        width: 80%;
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
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    background: transparent;
    margin-right: 0.8rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const Cancel = styled.span`
    ${shared_css}
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
`

const DialogBox = ({ toggle, is_open, closeModal, to = '' }: DialogModelBoxProps) => {
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
                        <Header type="paragraph-1" weight="700">
                            <Localize translate_text="Are you sure you want to cancel your registration?" />
                        </Header>
                    </Action>

                    <div>
                        <Header type="paragraph-2" weight="400">
                            <Localize translate_text="Your progress will not be saved." />
                        </Header>
                    </div>
                    <Flex jc="flex-end">
                        <Proceed href={to} onClick={toggle}>
                            <Header type="paragraph-2" weight="700">
                                <Localize translate_text="Yes" />
                            </Header>
                        </Proceed>
                        <Cancel onClick={closeModal}>
                            <Header type="paragraph-2" weight="700" color="white">
                                <Localize translate_text="No" />
                            </Header>
                        </Cancel>
                    </Flex>
                </ModalCard>
                <Background onClick={toggle} />
            </ModalWrapper>
        )
    )
}

export default DialogBox
