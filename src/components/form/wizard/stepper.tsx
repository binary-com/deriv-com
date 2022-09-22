import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'

type StepperProps = { step: number; step_names: string[] }

const StepperWrapper = styled.div`
    padding: 30px 0 24px 0;
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin: 0 auto;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StepperItem = styled.div<{ active: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    &::before {
        position: absolute;
        content: '';
        border-bottom: 2px solid #999999;
        width: 100%;
        top: 13px;
        left: -50%;
        z-index: 2;
    }
    &::after {
        position: absolute;
        content: '';
        border-bottom: ${(props) => (props.active ? '2px solid #FF444F' : '2px solid #999999')};
        width: 100%;
        top: 13px;
        left: 50%;
        z-index: ${(props) => (props.active ? 3 : 2)};
    }
    &:first-child::before {
        content: none;
    }
    &:last-child::after {
        content: none;
    }
`

const StepCounter = styled.div<{ active: boolean }>`
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${(props) => (props.active ? `#FF444F` : `#999999`)};
    margin-bottom: 6px;

    &.active {
        font-weight: bold;
    }
`

const Label = styled.h4<{ active: boolean }>`
    padding-top: 10px;
    font-size: 12px;
    font-weight: ${(props) => (props.active ? 700 : 400)};
    color: ${(props) => (props.active ? `#FF444F` : `#999999`)};
`

const Stepper = ({ step, step_names }: StepperProps) => {
    return (
        <StepperWrapper>
            {step_names.map((step_name, id) => (
                <StepperItem key={step_name} active={id + 1 < step}>
                    <StepCounter active={id + 1 <= step}>{id + 1}</StepCounter>
                    <Label active={id + 1 === step}>{step_name}</Label>
                </StepperItem>
            ))}
        </StepperWrapper>
    )
}

export default Stepper
