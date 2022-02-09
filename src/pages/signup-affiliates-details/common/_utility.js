import validation from './_validation'

export const getSignupAffiliateValue = (input) => {
    // TODO Implement future form data transfering
    return input
}

export const resetSignupAffiliateDetails = (values, is_input_country) => {
    const errors = {}
    const firstName_error = validation.firstName(values.firstName)
    const lastName_error = validation.lastName(values.lastName)
    const date_error = validation.date(values.date)
    const country_error = validation.country(values.country, is_input_country)
    const address_error = validation.address(values.address)
    const mobileNumber_error = validation.mobileNumber(values.mobileNumber)
    const password_error = validation.password(values.password)
    const currency_error = validation.currency(values.currency)

    if (firstName_error) {
        errors.firstName = firstName_error
    }
    if (lastName_error) {
        errors.lastName = lastName_error
    }
    if (date_error) {
        errors.date = date_error
    }
    if (country_error) {
        errors.country = country_error
    }
    if (address_error) {
        errors.address = address_error
    }
    if (mobileNumber_error) {
        errors.mobileNumber = mobileNumber_error
    }
    if (password_error) {
        errors.password = password_error
    }
    if (currency_error) {
        errors.currency_error = currency_error
    }

    return errors
}
