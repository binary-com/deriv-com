import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Stepper from './stepper'
import device from 'themes/device'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'

type WizardProps = {
    children: React.ReactElement[]
    show?: boolean
    steps_names: string[]
    title: string
    enable_next_button: boolean
    onExit?: (e) => void
}

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
    z-index: 10;
`

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 668px;
    max-width: 1200px;
    z-index: 100;
    border-radius: 8px;

    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.tabletL} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 80%;
    }
`

const Wrapper = styled.div`
    height: fit-content;
    max-height: 435px;
    padding: 24px 0 10px 0;
    overflow-x: auto;
`

const Wizard = ({
    children,
    show = true,
    steps_names,
    title,
    enable_next_button,
    onExit,
}: WizardProps) => {
    const [show_wizard, setShowWizard] = useState(false)
    const [step, setStep] = useState(1)
    const max_step = children.length
    const [enable_next, setEnableNext] = useState(false)

    useEffect(() => {
        setEnableNext(enable_next_button)
    }, [enable_next_button])

    useEffect(() => {
        setShowWizard(show)
    }, [show])

    useDebouncedEffect(
        () => (document.body.style.overflow = show_wizard ? 'hidden' : 'unset'),
        [show_wizard],
        1,
    )

    if (!show_wizard) return <></>

    return (
        <>
            <Modal>
                <Header title={title} setShowWizard={onExit ? onExit : setShowWizard} />
                <Stepper step={step} step_names={steps_names} />
                <Wrapper>
                    {React.Children.map(children, (child, idx) => (
                        <div key={child.props.name}>{step === idx + 1 && child}</div>
                    ))}
                </Wrapper>
                <Footer
                    step={step}
                    setStep={setStep}
                    max_step={max_step}
                    setEnableNext={setEnableNext}
                    disabled={!enable_next}
                />
            </Modal>
            <Background></Background>
        </>
    )
}

export default Wizard
