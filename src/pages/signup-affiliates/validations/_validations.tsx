import React from 'react'
import { localize, Localize } from 'components/localization'
/* eslint-disable */

export const affiliate_validation_regex = {
    alphabet: /^([a-zA-Z -]){2,30}$/,
    latin: /[^a-zA-Za 0-9/!@"?¨'_.,-]/,
    password: /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])[ -~]*$/,
    address: /^[a-zA-Z 0-9/_.,-]*$/,
    postal_code: /^[a-zA-Z 0-9_.-]{5,10}$/,
    url: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
}

const validation_is_exceed_number = (input, max_digit) => {
    const max_digit_value = max_digit || 15
    return input.length <= max_digit_value
}

const validation_is_lack_number = (input, min_digit) => input.length + 1 > min_digit

const nameValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (
        affiliate_validation_regex.latin.test(input) ||
        !affiliate_validation_regex.alphabet.test(input)
    ) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    }
}

const dateValidation = (input, field_name) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    }
}
const textValidation = (input, field_name, min_digit, max_digit) => {
    const length_error = localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (!validation_is_exceed_number(input, max_digit)) {
        return length_error
    } else if (!validation_is_lack_number(input, min_digit)) {
        return length_error
    } else if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    }
}
const phoneValidation = (input, field_name) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (input.length !== 7) {
        return localize(`_t_Please enter a valid phone number_t_`)
    }
}
const passwordValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.password.test(input)) {
        return localize(
            `_t_Password should have lower and uppercase English letters with numbers._t_`,
        )
    }
    return null
}
const postcodeValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid postcode with Latin characters._t_`)
    }
}
const registrationNumberValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.postal_code.test(input)) {
        return localize(`_t_Please enter a valid company registration number._t_`)
    }
}
const addressValidation = (input, field_name, min_digit, max_digit) => {
    if (!input) {
        return (
            <Localize translate_text="_t_{{field_name}} is required_t_" values={{ field_name }} />
        )
    }
    if (affiliate_validation_regex.latin.test(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (
        !validation_is_exceed_number(input, max_digit) ||
        !validation_is_lack_number(input, min_digit)
    ) {
        return localize(`_t_You should enter ${min_digit}-${max_digit} characters._t_`)
    } else if (!affiliate_validation_regex.address.test(input)) {
        console.log('regex!')
        return (
            <Localize
                translate_text="_t_Please enter a valid {{field_name}}_t_"
                values={{ field_name }}
            />
        )
    }
}
const urlValidation = (input) => {
    if (!affiliate_validation_regex.url.test(input)) {
        return localize(`_t_Please enter a valid url_t_`)
    }
}

const validation = {
    first_name: (input) => {
        return nameValidation(input, localize('_t_First Name_t_'), 2, 50)
    },
    last_name: (input) => {
        return nameValidation(input, localize('_t_Last Name_t_'), 2, 50)
    },
    date: (input) => {
        return dateValidation(input, localize('_t_Date_t_'))
    },
    country: (input) => {
        if (!input || input.display_name === '') {
            return localize('_t_Country is required_t_')
        }
        return null
    },
    address_city: (input) => {
        return addressValidation(input, 'City', 2, 256)
    },
    address_state: (input) => {
        return addressValidation(input, 'State', 2, 256)
    },
    address_street: (input) => {
        return addressValidation(input, 'Street', 2, 256)
    },
    address_postal_code: (input) => {
        return postcodeValidation(input, localize('_t_Postcode_t_'), 5, 10)
    },
    phone: (input) => {
        return phoneValidation(input, localize('_t_Mobile number_t_'))
    },
    password: (input) => {
        return passwordValidation(input, localize('_t_Password_t_'), 6, 50)
    },
    currency: (input) => (input ? null : localize('_t_Currency is required_t_')),
    company_name: (input) => {
        return textValidation(input, localize('_t_Company name_t_'), 2, 70)
    },
    company_registration_number: (input) => {
        return registrationNumberValidation(
            input,
            localize('_t_Company registeration number_t_'),
            2,
            20,
        )
    },
    website_url: (input) => {
        return urlValidation(input)
    },
    social_media_url: (input) => {
        return urlValidation(input)
    },
}
export default validation
