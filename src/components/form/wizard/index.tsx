import React, { useState } from 'react'
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
export const FormContext = React.createContext(null)

const Wizard = () => {
    const [show, setShow] = useState(true)
    const [step, setStep] = useState(1)
    const [form_data, setFormData] = useState({
        account_type: '',
        country_of_residence: '',
        state: '',
        city: '',
        street: '',
        zip_code: null,
    })

    if (show)
        return (
            <>
                <Modal>
                    <Header setShow={setShow} />
                    <StepContext.Provider value={{ step, setStep }}>
                        <Stepper />
                        <FormContext.Provider value={{ form_data, setFormData }}>
                            <Form />
                            <Footer />
                        </FormContext.Provider>
                    </StepContext.Provider>
                </Modal>
                <Background></Background>
            </>
        )

    return <></>
}

export default Wizard
