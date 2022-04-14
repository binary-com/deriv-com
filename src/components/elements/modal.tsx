import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'
import Close from 'images/svg/custom/close-2.svg'

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
    max-width: 60rem;
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
const Positive = styled.a`
    ${shared_css}
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
`
const Negative = styled.span`
    ${shared_css}
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    background: transparent;
    margin-right: 0.8rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

export type ModalRefType = {
    show: () => void
    hide: () => void
}

type ModalPropType = {
    title?: React.ReactNode
    message?: React.ReactNode
    content?: React.ReactNode
    positive?: React.ReactNode
    onPositive?: () => void
    negative?: React.ReactNode
    onNegative?: () => void
    is_dismissible?: boolean
}

const Modal = (
    {
        title,
        message,
        content,
        positive,
        onPositive,
        negative,
        onNegative,
        is_dismissible = true,
    }: ModalPropType,
    ref,
) => {
    const [is_open, setIsOpen] = useState(false)

    useImperativeHandle(ref, () => ({
        is_open: is_open,
        show: () => setIsOpen(true),
        hide: () => setIsOpen(false),
    }))

    const handleEscape = (e) => {
        if (e.keyCode === 27 && is_dismissible) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, false)

        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [])

    const renderCloseButton = () => (
        <CloseButton src={Close} alt="close-2" onClick={() => setIsOpen(false)} />
    )

    const renderTitle = () => (
        <Header type="paragraph-1" mb="2.4rem">
            {title}
        </Header>
    )

    const renderMessage = () => (
        <Header type="paragraph-2" weight="regular">
            {message}
        </Header>
    )

    const renderNegative = () => (
        <Negative onClick={() => (onNegative ? onNegative?.() : setIsOpen(false))}>
            <Header type="paragraph-2" weight="bold">
                {negative}
            </Header>
        </Negative>
    )

    const renderPositive = () => (
        <Positive onClick={() => onPositive?.()}>
            <Header type="paragraph-2" weight="bold" color="white">
                {positive}
            </Header>
        </Positive>
    )

    return (
        is_open && (
            <ModalWrapper>
                <ModalCard>
                    <Action>
                        {title && renderTitle()}
                        {is_dismissible && renderCloseButton()}
                    </Action>
                    <div>{message && renderMessage()}</div>
                    {content}
                    {(positive || negative) && (
                        <Flex jc="flex-end" mt="2.4rem">
                            {negative && renderNegative()}
                            {positive && renderPositive()}
                        </Flex>
                    )}
                </ModalCard>
                <Background onClick={is_dismissible ? () => setIsOpen(false) : null} />
            </ModalWrapper>
        )
    )
}

export default forwardRef(Modal)
