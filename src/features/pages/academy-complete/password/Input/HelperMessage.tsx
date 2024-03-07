import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { InputVariants } from '.'
import './HelperMessage.scss'

export interface HelperMessageProps {
    error?: boolean
    message?: ReactNode
    variant?: InputVariants
    disabled?: boolean
}
type TMessageVariant = Exclude<InputVariants, 'disabled'>
const MessageVariant: Record<TMessageVariant, string> = {
    general: 'deriv-helper-message--general',
    success: 'deriv-helper-message--success',
    warning: 'deriv-helper-message--warning',
    error: 'deriv-helper-message--error',
}

const HelperMessage = ({ error, message, variant = 'general', disabled }: HelperMessageProps) => (
    <p
        className={clsx('deriv-helper-message', {
            [MessageVariant['general']]: disabled,
            [MessageVariant[error ? 'error' : (variant as TMessageVariant)]]: !disabled,
        })}
    >
        {message}
    </p>
)

export default HelperMessage
