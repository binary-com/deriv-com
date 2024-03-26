import React, {
    ChangeEvent,
    ComponentProps,
    FocusEvent,
    useCallback,
    useMemo,
    useState,
} from 'react'
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import { dictionary } from '@zxcvbn-ts/language-common'
import clsx from 'clsx'
import { Input } from './Input'
import { calculateScore, isPasswordValid } from './password-utils'
import {
    TScore,
    passwordErrorMessage,
    passwordKeys,
    passwordRegex,
    warningMessages,
} from './password-constants'
import { EyeIcon, EyeIconSlash } from './password-icon'
import { PasswordMeter } from './password-meter'
import './password-input.scss'

export const validatePassword = (password: string) => {
    const score = calculateScore(password)
    let errorMessage = ''

    const options = { dictionary: { ...dictionary } }
    zxcvbnOptions.setOptions(options)

    const { feedback } = zxcvbn(password)
    if (!passwordRegex.isLengthValid.test(password)) {
        errorMessage = passwordErrorMessage.invalidLength
    } else if (!isPasswordValid(password)) {
        errorMessage = passwordErrorMessage.missingCharacter
    } else {
        errorMessage = warningMessages[feedback.warning as passwordKeys] ?? ''
    }
    return { errorMessage, score }
}

type InputProps = ComponentProps<typeof Input>

interface PasswordInputProps extends Omit<InputProps, 'rightPlaceholder'> {
    hidePasswordMeter?: boolean
    hint?: string
}

const PasswordVariant: Record<TScore, InputProps['variant']> = {
    0: 'error',
    1: 'error',
    2: 'warning',
    3: 'success',
    4: 'success',
}

export const PasswordInput = ({
    hidePasswordMeter,
    hint,
    onBlur,
    onChange,
    value,
    ...rest
}: PasswordInputProps) => {
    const [isTouched, setIsTouched] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const { errorMessage, score } = useMemo(() => validatePassword(value as string), [value])

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e)
            if (!isTouched) {
                setIsTouched(true)
            }
        },
        [isTouched, onChange],
    )

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            onBlur?.(e)
            if (!isTouched) {
                setIsTouched(true)
            }
        },
        [isTouched, onBlur],
    )

    return (
        <div
            className={clsx('deriv-password', {
                'deriv-password--full': rest.isFullWidth,
            })}
        >
            <Input
                wrapperClassName="deriv-password__wrapper"
                value={value}
                type={showPassword ? 'text' : 'password'}
                message={isTouched ? errorMessage : '' || hint}
                onChange={handleChange}
                onBlur={handleBlur}
                variant={isTouched ? PasswordVariant[score as TScore] : 'general'}
                rightPlaceholder={
                    <button
                        className="deriv-password__icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeIcon /> : <EyeIconSlash />}
                    </button>
                }
                {...rest}
            />
            {!hidePasswordMeter && <PasswordMeter score={score as TScore} />}
        </div>
    )
}
