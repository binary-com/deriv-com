import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Stepper from './stepper'
import { WizardComponentsProps } from 'pages/signup-affiliates/_types'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import device from 'themes/device'

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
    z-index: 10;
`
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    height: 80%;
    min-width: 70%;
    z-index: 100;
    border-radius: 8px;

    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.tabletL} {
        width: 100%;
    }
`
const Wrapper = styled.div`
    block-size: fit-content;
    padding: 24px 0 75px 0;
    overflow-x: auto;
`
const WizardComponent = ({
    children,
    show_wizard,
    setShowWizard,
    onSubmit,
    step,
    setStep,
    next_btn_enabled,
    setNextBtnEnabled,
}: WizardComponentsProps) => {
    useEffect(() => {
        setNextBtnEnabled(next_btn_enabled)
    }, [next_btn_enabled])

    useDebouncedEffect(
        () => (document.body.style.overflow = show_wizard ? 'hidden' : 'unset'),
        [show_wizard],
        1,
    )

    if (!show_wizard) return <></>
    return (
        <>
            <Modal>
                <Header setShowWizard={setShowWizard} />
                <Stepper step={step} />
                <Wrapper>
                    {React.Children.map(children, (child, idx) => (
                        <div key={child.props.name}>{step === idx + 1 && child}</div>
                    ))}
                </Wrapper>
                <Footer
                    max_step={children.length}
                    step={step}
                    setStep={setStep}
                    next_btn_enabled={next_btn_enabled}
                    setNextBtnEnabled={setNextBtnEnabled}
                    onSubmit={onSubmit}
                />
            </Modal>
            <Background />
        </>
    )
}

export default WizardComponent
