import { localize } from 'components/localization'
/* eslint-disable */

export const affiliate_validation_regex = {
    email: /^[a-z0-9]+@[a-z0-9]+[.][a-z]{2,}/,
    latin: /[^a-zA-Za 0-9-]/,
    name: /^[^a-zA-Z-]/,
    user_name: /[^a-zA-Za 0-9!@"?¨'_.,-]/,
    password: /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])[ -~]*$/,
    address: /^[a-zA-Z 0-9/_.,-]*$/,
    postal_code: /^[a-zA-Z 0-9_.-]{5,10}$/,
    url: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
    non_empty_string: /^[^ ]+ *.*$/,
}

const validation_is_exceed_number = (input, max_digit) => {
    const max_digit_value = max_digit || 15
    return input.length <= max_digit_value
}

const validation_is_lack_number = (input, min_digit) => input.length + 1 > min_digit

const emailValidation = (input) => {
    if (!input) {
        return localize('_t_Email is required_t_')
    } else if (!affiliate_validation_regex.email.test(input)) {
        return localize('_t_Wrong email_t_')
    }
}
const userNameValidation = (input) => {
    if (!input) {
        G
        return localize('_t_Username is required_t_')
    } else if (affiliate_validation_regex.user_name.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const nameValidation = (input, text, min_digit, max_digit) => {
    if (!input) {
        return text + localize('_t_ is required_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (
        affiliate_validation_regex.latin.test(input) ||
        affiliate_validation_regex.name.test(input)
    ) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const companyNameValidation = (input, min_digit, max_digit) => {
    const length_error = localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    if (!input) {
        return localize('_t_Company name is required_t_')
    } else if (!/^[a-zA-Z0-9]+$/.test(input)) {
        return localize('_t_Incorrect company name_t_')
    } else if (!validation_is_exceed_number(input, max_digit)) {
        return length_error
    } else if (!validation_is_lack_number(input, min_digit)) {
        return length_error
    } else if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const phoneValidation = (input) => {
    if (!input) {
        return localize('_t_Mobile number is required_t_')
    } else if (!validation_is_exceed_number(input, 11) || !validation_is_lack_number(input, 7)) {
        return localize(`_t_You should enter 7-11 numbers._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Space not available_t_')
    }
}
const passwordValidation = (input, min_digit, max_digit) => {
    if (!input) {
        return localize('_t_Password is required_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.password.test(input)) {
        return localize(
            `_t_Password should have lower and uppercase English letters with numbers._t_`,
        )
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const postcodeValidation = (input, min_digit, max_digit) => {
    if (!input) {
        return localize('_t_Postcode is required_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid postcode with Latin characters._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const registrationNumberValidation = (input, min_digit, max_digit) => {
    if (!input) {
        return localize('_t_Company registration number is required_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid company registration number._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const addressValidation = (input, text, min_digit, max_digit) => {
    if (!input) {
        return text
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.address.test(input)) {
        return localize('_t_Please enter a valid state_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const urlValidation = (input) => {
    if (!affiliate_validation_regex.url.test(input)) {
        return localize(`_t_Please enter a valid url_t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}

const affiliate_validation = {
    email: (input) => {
        return emailValidation(input)
    },
    username: (input) => {
        return userNameValidation(input)
    },
    first_name: (input) => {
        return nameValidation(input, localize('_t_First Name_t_'), 2, 50)
    },
    last_name: (input) => {
        return nameValidation(input, localize('_t_Last Name_t_'), 2, 50)
    },
    country: (input) => {
        if (!input || input.display_name === '') {
            return localize('_t_Country is required_t_')
        }
        return null
    },
    address_city: (input) => {
        return addressValidation(input, localize('_t_City is required_t_'), 2, 256)
    },
    address_state: (input) => {
        return addressValidation(input, localize('_t_State is required_t_'), 2, 256)
    },
    address_street: (input) => {
        return addressValidation(input, localize('_t_Street is required_t_'), 2, 256)
    },
    address_postal_code: (input) => {
        return postcodeValidation(input, 5, 10)
    },
    phone: (input) => {
        return phoneValidation(input)
    },
    password: (input) => {
        return passwordValidation(input, 6, 50)
    },
    currency: (input) => (input ? null : localize('_t_Currency is required_t_')),
    company_name: (input) => {
        return companyNameValidation(input, 2, 70)
    },
    company_registration_number: (input) => {
        return registrationNumberValidation(input, 2, 20)
    },
    website_url: (input) => {
        return urlValidation(input)
    },
    social_media_url: (input) => {
        return urlValidation(input)
    },
}
export default affiliate_validation
