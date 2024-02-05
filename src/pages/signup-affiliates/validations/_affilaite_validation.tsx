import { localize } from 'components/localization'
/* eslint-disable */

export const affiliate_validation_regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
    latin: /[^a-zA-Za 0-9-]/,
    name: (value) => {
        const regex = /^(?!.*\s{2,})[\p{L}\s'.-]{2,50}$/u
        return regex.test(value) && value.length >= 2 && value.length <= 50
    },
    phone: /^\+\d+$/,
    user_name: /^[A-Za-z0-9_]{3,20}$/,
    password: (value) => {
        const regex = /^[A-Za-z\d]{6,30}$/
        return regex.test(value)
    },
    city: (value) => {
        const regex = /^[\p{L}][\p{L}\s'.-]{0,49}$/u
        return regex.test(value) && value.length <= 50
    },
    street: (value) => {
        const regex = /^[\p{L}\p{Nd}'.,:;()\\x{b0}@#/-][\p{L}\p{Nd}\s'.,:;()\\x{b0}@#/-]{0,68}$/u
        return regex.test(value) && value.length <= 69
    },
    postal_code: /^[a-zA-Z 0-9_.-]{2,10}$/,
    company_registration_number: /^[a-zA-Z0-9]{2,20}$/,
    url: (value) => {
        const regex = /^https?:\/\/[\w_@./:#&+-]+$/
        return regex.test(value)
    },
    non_empty_string: /^\S.*$/,
}

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
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    } else if (!affiliate_validation_regex.user_name.test(input)) {
        return localize('_t_Please enter 3-20 Latin characters, numbers._t_')
    }
}
const nameValidation = (input, text) => {
    if (!input) {
        return text + localize('_t_ is required_t_')
    } else if (input.length < 2 || input.length > 256) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (
        affiliate_validation_regex.latin.test(input) ||
        !affiliate_validation_regex.name(input)
    ) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const companyNameValidation = (input) => {
    if (!input) {
        return localize('_t_Company name is required_t_')
    } else if (!/^[a-zA-Z0-9 ]+$/.test(input)) {
        return localize('_t_Incorrect company name_t_')
    } else if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const phoneValidation = (input) => {
    if (!affiliate_validation_regex.phone.test(input)) {
        return localize(`_t_You should enter 8-13 numbers_t_`)
    }
    if (!input) {
        return localize('_t_Mobile number is required_t_')
    } else if (input.length < 8 || input.length > 13) {
        return localize(`_t_You should enter 8-13 numbers._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Space not available_t_')
    }
}
const passwordValidation = (input) => {
    if (!input) {
        return localize('_t_Password is required_t_')
    } else if (input.length < 8 || input.length > 50) {
        return localize(`_t_You should enter 8-50 characters._t_`)
    } else if (!affiliate_validation_regex.password(input)) {
        return localize(
            `_t_Password should have lower and uppercase English letters with numbers._t_`,
        )
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const postcodeValidation = (input) => {
    if (!input) {
        return localize('_t_Postcode is required_t_')
    } else if (input.length < 2 || input.length > 10) {
        return localize(`_t_You should enter 2-10 numbers, characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid postcode with Latin characters._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const registrationNumberValidation = (input) => {
    if (!input) {
        return localize('_t_Company registration number is required_t_')
    } else if (!affiliate_validation_regex.company_registration_number.test(input)) {
        return localize(`_t_Please enter a valid company registration number._t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const streetValidation = (input, text) => {
    if (!input) {
        return text
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length < 2 || input.length > 256) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (!affiliate_validation_regex.street(input)) {
        return localize('_t_Please enter a valid street_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const cityValidation = (input, text) => {
    if (!input) {
        return text
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length < 2 || input.length > 256) {
        return localize(`_t_You should enter 2-256 characters._t_`)
    } else if (!affiliate_validation_regex.city(input)) {
        return localize('_t_Please enter a valid city_t_')
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
    }
}
const urlValidation = (input) => {
    if (!affiliate_validation_regex.url(input)) {
        return localize(`_t_Please enter a valid url_t_`)
    } else if (!affiliate_validation_regex.non_empty_string.test(input)) {
        return localize('_t_Empty input not available_t_')
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
