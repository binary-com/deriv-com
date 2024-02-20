import React from 'react'
import styled from 'styled-components'
import WizardFooter from './wizard-footer'
import WizardHeader from './wizard-header'
import Stepper from './stepper'
import { WizardComponentsProps } from 'pages/signup-affiliates/_types'
import { useIsRtl } from 'components/hooks/use-isrtl'
import device from 'themes/device'

export const Background = styled.div`
    position: absolute;
    width: 100%;
    block-size: 100vh;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
    z-index: 5;

    @media ${device.tabletL} {
        block-size: 100%;
        opacity: 0;
        z-index: unset;
    }
`
export const Modal = styled.div<{ is_rtl?: boolean }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    top: 50%;
    left: ${({ is_rtl }) => (is_rtl ? '-20%' : '50%')};
    block-size: 80%;
    min-inline-size: 70%;
    border-radius: 8px;
    background-color: white;
    transform: translate(-50%, -50%);
    z-index: 6;
    overflow: hidden;

    @media ${device.tabletL} {
        position: unset;
        transform: unset;
        border-radius: unset;
        min-inline-size: unset;
        inline-size: 100vw;
        block-size: 100svh;
        overflow: scroll;
        padding-block-end: 70px;
    }
`
const Container = styled.div`
    overflow: scroll;
`
const Content = styled.div`
    block-size: fit-content;
    overflow-x: auto;
`
const WizardComponent = ({
    children,
    show_wizard,
    setSignupStatus,
    onSubmit,
    step,
    setStep,
    next_btn_enabled,
}: WizardComponentsProps) => {
    const is_rtl = useIsRtl()

    if (!show_wizard) return <></>
    return (
        <>
            <Modal is_rtl={is_rtl}>
                <Content>
                    <WizardHeader setSignupStatus={setSignupStatus} />
                    <Stepper step={step} />
                    <Content>
                        {React.Children.map(children, (child, idx) => (
                            <div key={child.props.name}>{step === idx + 1 && child}</div>
                        ))}
                    </Content>
                </Content>
                <WizardFooter
                    max_step={children.length}
                    step={step}
                    setStep={setStep}
                    next_btn_enabled={next_btn_enabled}
                    onSubmit={onSubmit}
                />
            </Modal>
            <Background />
        </>
    )
}

export default WizardComponent
