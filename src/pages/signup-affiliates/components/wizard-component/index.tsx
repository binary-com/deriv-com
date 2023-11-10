import React, { useEffect } from 'react'
import styled from 'styled-components'
import WizardFooter from './wizard-footer'
import WizardHeader from './wizard-header'
import Stepper from './stepper'
import { WizardComponentsProps } from 'pages/signup-affiliates/_types'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import device from 'themes/device'

export const Background = styled.div`
    position: absolute;
    width: 100%;
    block-size: 100vh;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
    z-index: 10;

    @media ${device.tabletL} {
        background-color: unset;
        block-size: unset;
        z-index: 3;
    }
`
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    block-size: 80%;
    min-inline-size: 70%;
    border-radius: 8px;
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: 100;

    @media ${device.tabletL} {
        min-inline-size: unset;
        inline-size: 100%;
        block-size: 95%;
        top: 53%;
    }
`
const Wrapper = styled.div`
    block-size: fit-content;
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
                <WizardHeader setShowWizard={setShowWizard} />
                <Stepper step={step} />
                <Wrapper>
                    {React.Children.map(children, (child, idx) => (
                        <div key={child.props.name}>{step === idx + 1 && child}</div>
                    ))}
                </Wrapper>
                <WizardFooter
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
