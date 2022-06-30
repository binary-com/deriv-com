import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Form from './form'
import Header from './header'
import Stepper from './stepper'

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
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
`

export const StepContext = React.createContext(null)

const Wizard = ({ children }: { children: React.ReactElement[] }) => {
    const [show, setShow] = useState(true)
    const [step, setStep] = useState(1)
    const max_step = children.length
    const step_names = children.map((child) => child.props.name)
    const [enable_next, setEnableNext] = useState(false)

    useEffect(() => {
        setEnableNext(false)
    }, [step])

    if (show)
        return (
            <>
                <Modal>
                    <Header setShow={setShow} />
                    <StepContext.Provider value={{ step, setStep, max_step, setEnableNext }}>
                        <Stepper step_names={step_names} />
                        <Form>{children}</Form>
                        <Footer disabled={!enable_next} />
                    </StepContext.Provider>
                </Modal>
                <Background></Background>
            </>
        )

    return <></>
}

export default Wizard
