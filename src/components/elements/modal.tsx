import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import CloseSVG from 'images/svg/custom/close-2.svg'

const Container = styled.div`
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

const Card = styled.div`
    position: relative;
    z-index: 210;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 60rem;
    max-height: 80rem;
    background: var(--color-white);
    padding: 2.4rem;

    @media ${device.mobileL} {
        width: 80%;
        max-height: 80%;
    }
`

const HeaderContainer = styled(Flex)`
    justify-content: space-between;
    align-items: center;
`

const ContentContainer = styled.div`
    overflow: scroll;
    @media ${device.mobileL} {
        padding-right: 1.9rem;
    }
`

const FooterContainer = styled(Flex)``

const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
`

const CloseButton = styled.img`
    &:hover {
        cursor: pointer;
    }
`

const button_style = css`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    transition: all 0.25s;
    height: fit-content;
    cursor: pointer;
    text-decoration: none;
`

const PositiveButton = styled.a`
    ${button_style}
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
`

const NegativeButton = styled.span`
    ${button_style}
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
        positive,
        onPositive,
        negative,
        onNegative,
        is_dismissible = true,
        children,
    }: React.PropsWithChildren<ModalPropType>,
    ref: React.Ref<ModalRefType>,
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
        document.body.style.overflow = is_open ? 'hidden' : 'unset'
    }, [is_open])

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, false)

        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [])

    const Title = () => (
        <Header type="paragraph-1" mb="2.4rem">
            {title}
        </Header>
    )

    const Message = () => (
        <Header type="paragraph-2" weight="regular">
            {message}
        </Header>
    )

    const Close = () => (
        <CloseButton src={CloseSVG} alt="close-2" onClick={() => setIsOpen(false)} />
    )

    const Negative = () => (
        <NegativeButton onClick={() => (onNegative ? onNegative?.() : setIsOpen(false))}>
            <Header type="paragraph-2" weight="bold">
                {negative}
            </Header>
        </NegativeButton>
    )

    const Positive = () => (
        <PositiveButton onClick={() => onPositive?.()}>
            <Header type="paragraph-2" weight="bold" color="white">
                {positive}
            </Header>
        </PositiveButton>
    )

    return (
        is_open && (
            <Container>
                <Card>
                    <HeaderContainer>
                        {title && <Title />}
                        {is_dismissible && <Close />}
                    </HeaderContainer>
                    <ContentContainer>
                        {message && <Message />}
                        {children}
                    </ContentContainer>
                    {(positive || negative) && (
                        <FooterContainer jc="flex-end" mt="2.4rem">
                            {negative && <Negative />}
                            {positive && <Positive />}
                        </FooterContainer>
                    )}
                </Card>
                <Backdrop onClick={is_dismissible ? () => setIsOpen(false) : null} />
            </Container>
        )
    )
}

export default forwardRef<ModalRefType, React.PropsWithChildren<ModalPropType>>(Modal)
