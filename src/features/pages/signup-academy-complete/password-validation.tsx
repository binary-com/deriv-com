import { localize } from 'components/localization'

export const password_regex_validate = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?]).{8,}$/,
}

export const validation_is_lack_number = (input, min_digit) => input.length + 1 > min_digit

export const passwordValidation = (input) => {
    if (!input) {
        return localize('_t_You should enter 8-25 characters._t_')
    } else if (!password_regex_validate.password.test(input)) {
        return localize(
            `_t_Password should have lower and uppercase English letters with numbers._t_`,
        )
    }
}

export const academy_validation = {
    password: (input) => {
        return passwordValidation(input)
    },
}
