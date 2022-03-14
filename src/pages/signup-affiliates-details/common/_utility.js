import validation from './_validation'

export const getSignupAffiliateValue = (input) => {
    // TODO Implement future form data transfering
    return input
}

export const resetSignupAffiliateDetails = (values, is_input_country) => {
    const errors = {}
    const no_validation = ['residenceList', 'plan', 'currency']
    const inputFields = Object.keys(values).filter((el) => !no_validation.includes(el))
    inputFields.forEach((item) => {
        if (item !== 'country') {
            if (validation[item](values[item])) {
                return (errors[item] = validation[item](values[item]))
            }
        } else {
            if (validation[item](values[item], is_input_country)) {
                return (errors[item] = validation[item](values[item], is_input_country))
            }
        }
    })
    return errors
}
