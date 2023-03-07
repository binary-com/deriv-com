import clsx from 'clsx'
import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import './button.scss'

type TButtonType =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'loading'
    | 'tertiary_light'
    | 'flat'
    | 'white'
    | 'hero'

interface ISButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    button_type: TButtonType
    is_loading?: boolean
    fluid?: boolean
}

const SButton = forwardRef<HTMLButtonElement, ISButtonProps>(
    (
        { button_type = 'primary', className, children, disabled, is_loading, fluid, ...rest },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                className={clsx(className, button_type, {
                    disabled: disabled,
                    loading: is_loading,
                    fluid: fluid,
                })}
                {...rest}
            >
                {children}
            </button>
        )
    },
)

SButton.displayName = 'SButton'

export default SButton
