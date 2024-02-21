import { localize } from 'components/localization'

export const password_regex_validate = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?]).{8,}$/,
    common_password: /^(?!.*(.)\1.*\1)(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
}

export const validation_is_lack_number = (input, min_digit) => input.length + 1 > min_digit

export const passwordValidation = (input) => {
    if (!input) {
        return { text: localize('_t_You should enter 8-25 characters._t_'), is_warning: false }
    } else if (password_regex_validate.common_password.test(input)) {
        return {
            text: localize(
                `_t_Repeats like “abcabcabc” are only slightly harder to guess than “abc”._t_`,
            ),
            is_warning: true,
        }
    } else if (!password_regex_validate.password.test(input)) {
        return {
            text: localize(
                `_t_Password should have lower and uppercase English letters with numbers._t_`,
            ),
            is_warning: false,
        }
    }
}

export const academy_validation = {
    password: (input) => {
        return passwordValidation(input)
    },
}
