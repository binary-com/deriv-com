import React from 'react'
import clsx from 'clsx'
import { TScore } from './password-constants'
import './password-meter.scss'

type PasswordMeterProps = {
    score: TScore
}

const PasswordStrengthClass: Record<TScore, string> = {
    0: 'deriv-password__meter__bar--error',
    1: 'deriv-password__meter__bar--weak',
    2: 'deriv-password__meter__bar--moderate',
    3: 'deriv-password__meter__bar--strong',
    4: 'deriv-password__meter__bar--complete',
}

export const PasswordMeter = ({ score }: PasswordMeterProps) => (
    <div className="deriv-password__meter">
        <div
            className={clsx('deriv-password__meter__bar', PasswordStrengthClass[score as TScore])}
        ></div>
    </div>
)
