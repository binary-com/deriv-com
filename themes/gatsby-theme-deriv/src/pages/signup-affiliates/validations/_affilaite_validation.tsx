import { localize } from 'components/localization'
/* eslint-disable */

export const affiliate_validation_regex = {
    email: (value: string) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(value),
    latin: (value: string) => /[^a-zA-Za 0-9-]/.test(value),
    name: (value: string) =>
        /^(?!.*\s{2,})[\p{L}\s'.-]{2,50}$/u.test(value) &&
        value.trim().length >= 2 &&
        value.trim().length <= 50,
    phone: (value: string) => /^\+?\d+$/.test(value),
    username: (value: string) => /^[A-Za-z0-9_]{3,30}$/.test(value),
    password: (value: string) =>
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.*\W)(?!.* ).{8,50}$/.test(value),
    city: (value: string) =>
        /^[\p{L}][\p{L}\s'.-]{0,49}$/u.test(value) &&
        value.trim().length >= 2 &&
        value.trim().length <= 50,
    street: (value: string) =>
        /^[\p{L}\p{Nd}'.,:;()\\x{b0}@#/-][\p{L}\p{Nd}\s'.,:;()\\x{b0}@#/-]{0,68}$/u.test(value) &&
        value.trim().length >= 2 &&
        value.trim().length <= 69,
    postal_code: (value: string) => /^[a-zA-Z 0-9-]{2,10}$/.test(value.trim()),
    company_registration_number: (value: string) => /^[a-zA-Z0-9]{2,20}$/.test(value.trim()),
    url: (value: string) => /^[\w_@.\/:#&+-]*$/.test(value),
    non_empty_string: (value: string) => /^\S.*$/.test(value),
}

const emailValidation = (input: string) => {
    if (!input) return localize('_t_Email is required_t_')
    else if (!affiliate_validation_regex.email(input)) {
        return localize('_t_Wrong email_t_')
    }
}
const userNameValidation = (input: string) => {
    if (!input) return localize('_t_Username is required_t_')
    else if (
        !affiliate_validation_regex.username(input) ||
        !affiliate_validation_regex.non_empty_string(input) ||
        input.length < 2 ||
        input.length > 30
    ) {
        return localize('_t_Please enter 3-30 Latin characters, numbers._t_')
    }
}
const nameValidation = (input: string, text: string) => {
    if (!input) {
        return text + localize('_t_ is required_t_')
    } else if (
        input.length < 2 ||
        input.length > 50 ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_You should enter 2-50 characters._t_')
    } else if (affiliate_validation_regex.latin(input) || !affiliate_validation_regex.name(input)) {
        return localize('_t_Only Latin and Alphabet characters_t_')
    }
}
const companyNameValidation = (input: string) => {
    if (!input) return localize('_t_Company name is required_t_')
    else if (
        !/^[a-zA-Z0-9 ]+$/.test(input) ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_Incorrect company name_t_')
    } else if (input.trim().length < 2 || input.length > 20) {
        return localize('_t_You should enter 2-20 characters._t_')
    } else if (affiliate_validation_regex.latin(input)) {
        return localize('_t_Only Latin characters_t_')
    }
}
const registrationNumberValidation = (input: string) => {
    if (!input) return localize('_t_Company registration number is required_t_')
    else if (input.length < 2 || input.length > 20) {
        return localize('_t_You should enter 2-20 numbers, characters._t_')
    } else if (
        !affiliate_validation_regex.company_registration_number(input) ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_Please enter a valid company registration number._t_')
    }
}
const phoneValidation = (input: string) => {
    if (!affiliate_validation_regex.phone(input)) {
        return localize('_t_You should enter 8-13 numbers_t_')
    }
    if (!input) {
        return localize('_t_Mobile number is required_t_')
    } else if (
        input.length < 9 ||
        input.length > 14 ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_You should enter 8-13 numbers._t_')
    }
}
const passwordValidation = (input: string) => {
    if (!input) return localize('_t_Password is required_t_')
    else if (input.length < 8 || input.length > 50)
        return localize('_t_You should enter 8-50 characters._t_')
    else if (!affiliate_validation_regex.password(input))
        return localize(
            '_t_Password should have lower and uppercase English letters with numbers._t_',
        )
}
const postcodeValidation = (input: string) => {
    if (!affiliate_validation_regex.postal_code(input))
        return localize('_t_You should enter 2-10 numbers, characters._t_')
}
const streetValidation = (input: string) => {
    if (!input) return localize('_t_Street is required_t_')
    if (affiliate_validation_regex.latin(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length < 2 || input.length > 50) {
        return localize('_t_You should enter 2-50 characters._t_')
    } else if (
        !affiliate_validation_regex.street(input) ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_Please enter a valid street_t_')
    }
}
const cityValidation = (input: string) => {
    if (!input) return localize('_t_City is required_t_')
    if (affiliate_validation_regex.latin(input)) {
        return localize('_t_Only Latin characters_t_')
    } else if (input.length < 2 || input.length > 50) {
        return localize('_t_You should enter 2-50 characters._t_')
    } else if (
        !affiliate_validation_regex.city(input) ||
        !affiliate_validation_regex.non_empty_string(input)
    ) {
        return localize('_t_Please enter a valid city_t_')
    }
}
const urlValidation = (input: string, website_number: number ) => {
    if (!input && website_number == 1 ) return localize('_t_Website url is required_t_')
    if (
        (website_number == 1) &&
        (!affiliate_validation_regex.url(input) ||
        !affiliate_validation_regex.non_empty_string(input))
    ) {
        return localize('_t_Please enter a valid url_t_')
    } else if ((website_number == 1) && (input.length < 2 || input.length > 50)) {
        return localize('_t_You should enter 2-50 characters._t_')
    } else  if ((website_number == 2) && 
        (!affiliate_validation_regex.url(input) || (input.trim().length > 50) || (input.trim().length == 1)))
        return localize('_t_Please enter a valid url_t_');
}

const affiliate_validation = {
    email: (input: string) => emailValidation(input),
    city: (input: string) => cityValidation(input),
    street: (input: string) => streetValidation(input),
    postal_code: (input: string) => postcodeValidation(input),
    first_name: (input: string) => nameValidation(input, localize('_t_First Name_t_')),
    last_name: (input: string) => nameValidation(input, localize('_t_Last Name_t_')),
    phone: (input: string) => phoneValidation(input),
    company_name: (input: string) => companyNameValidation(input),
    company_registration_number: (input: string) => registrationNumberValidation(input),
    website_url: (input: string) => urlValidation(input, 1),
    second_website_url: (input: string) => urlValidation(input, 2),
    username: (input: string) => userNameValidation(input),
    password: (input: string) => passwordValidation(input),
    country: (input: any) => {
        if (!input || input.display_name === '') {
            return localize('_t_Country is required_t_')
        }
        return null
    },
}
export default affiliate_validation
