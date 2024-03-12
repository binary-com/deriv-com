import React, { ComponentProps, ReactNode, Ref, forwardRef } from 'react'
import clsx from 'clsx'
import HelperMessage from './HelperMessage'
import './Input.scss'

export type InputVariants = 'general' | 'success' | 'error' | 'warning' | 'disabled'
interface InputProps extends Omit<ComponentProps<'input'>, 'placeholder'> {
    label?: string
    leftPlaceholder?: ReactNode
    rightPlaceholder?: ReactNode
    error?: boolean
    variant?: InputVariants
    message?: ReactNode
    wrapperClassName?: string
    hideMessage?: boolean
    isFullWidth?: boolean
}

const InputVariant: Record<InputVariants, string> = {
    general: 'deriv-input--general',
    success: 'deriv-input--success',
    warning: 'deriv-input--general',
    error: 'deriv-input--error',
    disabled: 'deriv-input--disabled',
}

const LabelVariant: Record<InputVariants, string> = {
    general: 'deriv-input__label--general',
    success: 'deriv-input__label--success',
    warning: 'deriv-input__label--general',
    error: 'deriv-input__label--error',
    disabled: 'deriv-input__label--disabled',
}

export const Input = forwardRef(
    (
        {
            className,
            disabled,
            error,
            hideMessage,
            id,
            isFullWidth = false,
            label,
            leftPlaceholder,
            message,
            rightPlaceholder,
            variant = 'general',
            wrapperClassName,
            ...rest
        }: InputProps,
        ref: Ref<HTMLInputElement>,
    ) => {
        return (
            <div
                className={clsx(
                    'deriv-input__container',
                    {
                        'deriv-input__container--full': isFullWidth,
                    },
                    wrapperClassName,
                )}
            >
                <div
                    className={clsx(
                        'deriv-input',
                        className,
                        InputVariant[error ? 'error' : variant],
                        {
                            'deriv-input--disabled': disabled,
                        },
                    )}
                >
                    {leftPlaceholder && (
                        <div className="deriv-input__left-content">{leftPlaceholder}</div>
                    )}
                    <input
                        placeholder={label}
                        className="deriv-input__field"
                        id={id}
                        disabled={disabled}
                        ref={ref}
                        {...rest}
                    />
                    <label
                        className={clsx(
                            'deriv-input__label',
                            LabelVariant[error ? 'error' : variant],
                            {
                                'deriv-input--label--disabled': disabled,
                            },
                        )}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    {rightPlaceholder && (
                        <div className="deriv-input__right-content">{rightPlaceholder}</div>
                    )}
                </div>
                <div className="deriv-input__helper-message">
                    {!hideMessage && message && (
                        <HelperMessage
                            message={message}
                            variant={variant}
                            error={error}
                            disabled={disabled}
                        />
                    )}
                </div>
            </div>
        )
    },
)
Input.displayName = 'input'
