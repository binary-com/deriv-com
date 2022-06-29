import React from 'react'
import { StepContext } from '.'

const Form = ({ children }: { children: React.ReactElement[] }) => {
    const { step } = React.useContext(StepContext)

    return (
        <>
            {children.map((child, idx) => (
                <div key={child.props.name}>{step === idx + 1 && child}</div>
            ))}
        </>
    )
}

export default Form
