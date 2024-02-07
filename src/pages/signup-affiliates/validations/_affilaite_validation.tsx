import { localize } from 'components/localization'
/* eslint-disable */

export const affiliate_validation_regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
    latin: /[^a-zA-Za 0-9-]/,
    name: /^[a-zA-Z -]{2,256}$/,
    phone: /^\+\d{8,13}$/,
    user_name: /^[A-Za-z0-9_]{3,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,50}$/,
    address: /^[a-zA-Z 0-9/_.,-]*$/,
    city: /^[a-zA-Z /_.,-]*$/,
    postal_code: /^[a-zA-Z 0-9_.-]{2,10}$/,
    company_registration_number: /^[a-zA-Z0-9]{2,20}$/,
    url: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
    non_empty_string: /^\S.*$/,
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
        return localize('_t_Username is required_t_')
    } else if (!affiliate_validation_regex.user_name.test(input)) {
        return localize('_t_Please enter 3-20 Latin characters, numbers._t_')
    }
}
const nameValidation = (input, text) => {
    if (!input) {
        return text + localize('_t_ is required_t_')
    } else if ((input.length<2 || input.length>256 )) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (
        !affiliate_validation_regex.name.test(input)
    ) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    }
}
const companyNameValidation = (input) => {
    if (!input) {
        return localize('_t_Company name is required_t_')
    } else if ((input.length<2 || input.length>256 )) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (
        !affiliate_validation_regex.name.test(input)
    ) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    }
}
const phoneValidation = (input) => {
    if (!affiliate_validation_regex.phone.test(input)) {
        return localize(`_t_You should enter 8-13 numbers_t_`)
    }
    if (!input) {
        return localize('_t_Mobile number is required_t_')
    } else if ((input.length<8 || input.length>13 )) {
        return localize(`_t_You should enter 8-13 numbers._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Space not available_t_')
    }
}
const passwordValidation = (input) => {
    if (!input) {
        return localize('_t_Password is required_t_')
    } else if ((input.length<8 || input.length>50 )) {
        return localize(`_t_You should enter 8-50 characters._t_`)
    } else if (!affiliate_validation_regex.password.test(input)) {
        return localize(
            `_t_Password should have lower and uppercase English letters with numbers._t_`,
        )
    }
}
const postcodeValidation = (input) => {
    if (!input) {
        return localize('_t_Postcode is required_t_')
    } else if (input.length<2 || input.length>10 ) {
        return localize(`_t_You should enter 2-10 numbers, characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid postcode with Latin characters._t_`)
    }
}
const registrationNumberValidation = (input) => {
    if (!input) {
        return localize('_t_Company registration number is required_t_')
    } else if (!affiliate_validation_regex.company_registration_number.test(input)) {
        return localize(`_t_Please enter a valid company registration number._t_`)
    }
}
const streetValidation = (input, text) => {
    if (!input) {
        return text
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length<2 || input.length>256 ) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (!affiliate_validation_regex.address.test(input)) {
        return localize('_t_Please enter a valid street_t_')
    }
}
const cityValidation = (input, text) => {
    if (!input) {
        return text
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length<2 || input.length>256 ) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (!affiliate_validation_regex.city.test(input)) {
        return localize('_t_Please enter a valid city_t_')
    }
}
const urlValidation = (input) => {
    if (!affiliate_validation_regex.url.test(input)) {
        return localize(`_t_Please enter a valid url_t_`)
    }
}

const affiliate_validation = {
    email: (input) => {
        return emailValidation(input)
    },
    country: (input) => {
        if (!input || input.display_name === '') {
            return localize('_t_Country is required_t_')
        }
        return null
    },
    city: (input) => {
        return cityValidation(input, localize('_t_City is required_t_'))
    },
    street: (input) => {
        return streetValidation(input, localize('_t_Street is required_t_'))
    },
    postal_code: (input) => {
        return postcodeValidation(input)
    },
    first_name: (input) => {
        return nameValidation(input, localize('_t_First Name_t_'))
    },
    last_name: (input) => {
        return nameValidation(input, localize('_t_Last Name_t_'))
    },
    phone: (input) => {
        return phoneValidation(input)
    },
    company_name: (input) => {
        return companyNameValidation(input)
    },
    company_registration_number: (input) => {
        return registrationNumberValidation(input)
    },
    website_url: (input) => {
        return urlValidation(input)
    },
    second_website_url: (input) => {
        return urlValidation(input)
    },
    username: (input) => {
        return userNameValidation(input)
    },
    password: (input) => {
        return passwordValidation(input)
    },
}
export default affiliate_validation
