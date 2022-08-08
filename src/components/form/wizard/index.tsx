import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Stepper from './stepper'
import device from 'themes/device'

type WizardProps = {
    children: React.ReactElement[]
    steps_names: string[]
    title: string
    enable_next_button: boolean
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
    height: 70%;
    max-width: 1200px;
    z-index: 100;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
    }
    @media ${device.tabletL} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 80%;
    }
`

export const StepContext = React.createContext(null)

const Wizard = ({ children, steps_names, title, enable_next_button }: WizardProps) => {
    const [show, setShow] = useState(true)
    const [step, setStep] = useState(1)
    const max_step = children.length
    const [enable_next, setEnableNext] = useState(false)

    useEffect(() => {
        if (enable_next_button) {
            setEnableNext(true)
        }
    }, [enable_next_button])

    if (show)
        return (
            <>
                <Modal>
                    <Header title={title} setShow={setShow} />
                    <StepContext.Provider value={{ step, setStep, max_step, setEnableNext }}>
                        <Stepper step_names={steps_names} />
                        {React.Children.map(children, (child, idx) => (
                            <div key={child.props.name}>{step === idx + 1 && child}</div>
                        ))}
                        <Footer disabled={!enable_next} />
                    </StepContext.Provider>
                </Modal>
                <Background></Background>
            </>
        )

    return <></>
}

export default Wizard
