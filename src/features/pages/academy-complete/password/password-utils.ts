import { passwordRegex, passwordValues } from './password-constants'

export const validPassword = (value: string) => passwordRegex.isPasswordValid.test(value)

export const isPasswordValid = (password: string) => {
    return (
        passwordRegex.isPasswordValid.test(password) && passwordRegex.isLengthValid.test(password)
    )
}

export const isPasswordModerate = (password: string) => {
    const hasMoreThanOneSymbol = (password.match(/\W/g) ?? []).length > 1
    return (
        isPasswordValid(password) &&
        hasMoreThanOneSymbol &&
        password.length >= passwordValues.minLength &&
        password.length < passwordValues.longPassword &&
        passwordRegex.isLengthValid
    )
}

export const isPasswordStrong = (password: string) => {
    const hasMoreThanOneSymbol = (password.match(/\W/g) ?? []).length > 1
    return (
        isPasswordValid(password) &&
        hasMoreThanOneSymbol &&
        password.length >= passwordValues.longPassword &&
        passwordRegex.isLengthValid
    )
}

export const calculateScore = (password: string) => {
    if (password.length === 0) return 0
    if (!isPasswordValid(password)) return 1
    if (!isPasswordStrong(password) && isPasswordValid(password) && !isPasswordModerate(password))
        return 2
    if (!isPasswordStrong(password) && isPasswordValid(password) && isPasswordModerate(password))
        return 3
    if (isPasswordStrong(password)) return 4
}
