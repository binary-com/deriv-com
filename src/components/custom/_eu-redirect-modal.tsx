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
    top: 0%;
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
                            <Localize translate_text="_t_Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, stocks & indices, cryptocurrencies, and derived indices, Deriv X gives you a versatile trading experience that lets you customise your trading environment._t_" />
                            <Localize translate_text="_t_Trade cryptocurrencies and synthetics anytime, even on weekends and holidays. _t_" />
                            <Localize translate_text="_t_Deriv MT5 gives you access to multiple asset classes – forex, stocks & indices, cryptocurrencies, commodities, and derived indices – on a single platform. With exclusive access to innovative assets, Deriv brings the MT5 experience to a superior level for both new and experienced traders._t_" />
                            <Localize translate_text="_t_Enjoy zero commission trading on all assets._t_" />
                            <Localize translate_text="_t_Deriv GO is our mobile app optimised for trading multipliers on the go. Trade on forex, derived indices, and cryptocurrencies, and maximise your potential profit without risking more than your stake._t_" />
                            <Localize translate_text="_t_Trade CFDs on forex, stocks, stock indices, synthetics, cryptocurrencies, and commodities with leverage._t_" />
                            <Localize translate_text="_t_Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours._t_" />
                            <Localize translate_text="_t_Why trade CFDs on Deriv_t_" />
                            <Localize translate_text="_t_Diversify your portfolio with various assets, such as bonds, commodities, and indices, without the high cost of owning the underlying assets._t_" />
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
