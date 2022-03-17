import validation from './_validation'

export const getSignupAffiliateValue = (input) => {
    return input
}

export const resetSignupAffiliateDetails = (values, is_input_country) => {
    const errors = {}
    const no_validation = ['residenceList', 'currency']
    const inputFields = Object.keys(values).filter((el) => !no_validation.includes(el))
    inputFields.forEach((item) => {
        if (item !== 'country') {
            if (validation[item](values[item])) {
                errors[item] = validation[item](values[item])
            }
        } else {
            if (validation[item](values[item], is_input_country)) {
                errors[item] = validation[item](values[item], is_input_country)
            }
        }
    })
    return errors
}
